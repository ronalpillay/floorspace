import https from "https";
import http from "http";
import { URL } from "url";
import fs from "fs";

const EMAIL_REGEX = /[a-zA-Z0-9._%+\-]+@[a-zA-Z0-9.\-]+\.[a-zA-Z]{2,}/g;

const urls = [
  "https://www.agio-pharma.com/",
  "https://www.nulifepharma.com/",
  "https://spectratixpharma.in/",
  "http://www.syngenesischemscience.com/",
  "https://www.avirav.in/",
  "https://globalpharmaceuticals.in/",
  "http://www.emcure.com/",
  "https://mprex.in/",
  "http://www.benzonremedies.com/",
  "http://www.maplebiotech.co.in/",
  "http://genpharma.net/",
  "http://www.omniprotech.in/",
  "https://curemedicines.in/",
  "http://www.centaurpharma.com/",
  "http://medinillahealthcare.com/",
  "https://www.jainpharma.com/",
  "http://www.medivergehealthcare.com/",
  "http://pixelpharmas.com/",
  "http://www.cyclonepharma.com/",
  "http://hindantibiotics.in/",
  "https://www.emcure.com/",
  "http://maxreliefpharma.com/",
  "http://www.alnairpharma.in/",
  "https://www.imaecpharma.com/",
  "https://aaryanbiocare.com/",
  "https://www.pharmasolvers.com/",
  "https://www.boltcarepharma.com/",
  "http://brionovapharma.com/",
  "http://aadyinpharma.in/",
  "http://www.calliduslabs.com/",
  "http://www.gennova.bio/",
  "http://ubiquitousindia.org/",
  "http://www.mednexpharma.com/",
  "http://www.perfectdossier.com/",
  "http://avdpharma.com/",
  "https://wisteriahealthcare.com/",
  "http://www.rosslife.net/",
  "http://glycomindsynth.com/",
  "http://drspl.in/",
  "https://www.spargechem.com/",
  "http://www.fortessapharma.in/",
  "http://cmdistributors.in/",
  "http://www.infiniasciences.com/",
  "https://www.siddhilifesciences.com/",
  "http://www.novaleadpharma.com/",
  "http://www.aztonhealthcare.com/",
  "http://satyamlifesciences.com/",
  "https://prochemdev.com/",
  "http://ipa-india.org/",
  "https://www.bioreachpharma.com/",
  "https://synthinkchemicals.com/",
  "https://www.enprosyst.net/",
  "http://www.sayokagroup.com/",
  "https://www.ddentp.com/",
  "http://www.arimedpharmallp.com/",
  "http://www.jvagpharma.com/",
  "https://nithyaayurveda.com/",
  "http://www.indiconinnovatives.com/",
  "http://leemedpharmaceuticals.com/",
  "http://humanoforte.com/",
  "http://mindswift.co.in/",
  "https://www.apricotmedica.com/",
  "http://fortunehealthcare.in/",
  "https://primesurgi.in/",
  "https://www.adaptisls.com/",
  "http://www.vaccinehaffkine.com/",
  "http://www.jayahind.com/",
  "http://hytengineering.com/",
  "http://www.sbkmanufacturing.com/",
  "http://www.smartlinesystems.com/",
  "http://www.exergonchem.com/",
  "https://www.nichrome.com/index.php",
  "http://www.wadhokar.com/",
  "https://acrotechindia.com/contact.php",
  "https://asiadsteelind.com/",
  "http://www.preciseal.com/",
  "https://admengg.co.in/",
  "https://www.hirotecindia.com/",
];

// Deduplicate
const uniqueUrls = [...new Set(urls)];

const BLACKLIST = ["example.com", "sentry.io", "w3.org", "schema.org", "wixpress.com", "wpmucdn.com", "jquery", "@2x"];

function isValidEmail(email) {
  if (email.length > 100) return false;
  if (BLACKLIST.some(b => email.includes(b))) return false;
  if (email.endsWith(".png") || email.endsWith(".jpg") || email.endsWith(".gif") || email.endsWith(".svg")) return false;
  return true;
}

function fetchUrl(rawUrl, timeout = 10000) {
  return new Promise((resolve) => {
    try {
      const parsed = new URL(rawUrl);
      const lib = parsed.protocol === "https:" ? https : http;
      const req = lib.get(rawUrl, { timeout, headers: { "User-Agent": "Mozilla/5.0 (compatible; EmailScraper/1.0)" } }, (res) => {
        // Follow redirects
        if ([301, 302, 303, 307, 308].includes(res.statusCode) && res.headers.location) {
          fetchUrl(res.headers.location, timeout).then(resolve);
          return;
        }
        let data = "";
        res.on("data", chunk => { data += chunk; if (data.length > 500000) req.destroy(); });
        res.on("end", () => resolve(data));
        res.on("error", () => resolve(""));
      });
      req.setTimeout(timeout, () => { req.destroy(); resolve(""); });
      req.on("error", () => resolve(""));
    } catch {
      resolve("");
    }
  });
}

async function scrape(url) {
  const html = await fetchUrl(url);
  const emails = (html.match(EMAIL_REGEX) || []).filter(isValidEmail);
  // Also try to fetch /contact page
  let contactEmails = [];
  try {
    const parsed = new URL(url);
    const contactUrl = parsed.origin + "/contact";
    const contactHtml = await fetchUrl(contactUrl);
    contactEmails = (contactHtml.match(EMAIL_REGEX) || []).filter(isValidEmail);
  } catch {}
  return [...new Set([...emails, ...contactEmails])];
}

const results = [];
let done = 0;
console.log(`\nScraping ${uniqueUrls.length} sites...\n`);

for (const url of uniqueUrls) {
  const emails = await scrape(url);
  done++;
  if (emails.length > 0) {
    results.push({ url, emails });
    console.log(`[${done}/${uniqueUrls.length}] ✅ ${url}\n   → ${emails.join(", ")}`);
  } else {
    console.log(`[${done}/${uniqueUrls.length}] ❌ ${url} — no emails found`);
  }
}

// Output
console.log("\n\n══════════════════════════════════════");
console.log("SCRAPED EMAILS");
console.log("══════════════════════════════════════\n");

const allEmails = [];
for (const r of results) {
  for (const e of r.emails) {
    if (!allEmails.includes(e)) allEmails.push(e);
    console.log(`${e}  ← ${r.url}`);
  }
}

const csvLines = ["Email,Website"];
for (const r of results) {
  for (const e of r.emails) {
    csvLines.push(`${e},${r.url}`);
  }
}
fs.writeFileSync("scraped-emails.csv", csvLines.join("\n"));
console.log(`\n\nSaved ${allEmails.length} unique emails to scraped-emails.csv`);
