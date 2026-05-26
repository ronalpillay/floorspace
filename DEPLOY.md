# Deploying to cPanel Shared Hosting

## How it works

Every time you push to the `main` branch, GitHub Actions will:
1. Build the Next.js site as a static export (`out/` folder)
2. Upload everything via FTP to your cPanel `public_html`

Your cPanel server only needs to serve static HTML/CSS/JS — **no Node.js required**.

---

## One-time setup (do this once)

### Step 1 — Get a Web3Forms key (contact form)

1. Go to [https://web3forms.com](https://web3forms.com)
2. Enter your email `neilpillaybusiness@gmail.com` (or the client's email)
3. Copy the **Access Key** they send you

### Step 2 — Find your cPanel FTP details

Log in to cPanel → **FTP Accounts** and note:
- **FTP server** (usually `ftp.yourdomain.com` or your server IP)
- **Username** (usually `cpanelusername@yourdomain.com`)
- **Password**
- **Server directory** (usually `/public_html/` — or a subfolder if the site isn't at root)

### Step 3 — Add GitHub Secrets

Go to your GitHub repo → **Settings → Secrets and variables → Actions → New repository secret**

Add these 5 secrets:

| Secret name       | Value                              |
|-------------------|------------------------------------|
| `WEB3FORMS_KEY`   | Your Web3Forms access key          |
| `FTP_SERVER`      | e.g. `ftp.floor-space.co.in`       |
| `FTP_USERNAME`    | e.g. `neil@floor-space.co.in`      |
| `FTP_PASSWORD`    | Your FTP password                  |
| `FTP_SERVER_DIR`  | e.g. `/public_html/`               |

### Step 4 — Push to main

```bash
git add -A
git commit -m "feat: static export + cPanel deploy"
git push origin main
```

GitHub Actions will kick in automatically. Watch the **Actions** tab in GitHub.

---

## Local development

```bash
cp .env.local.example .env.local
# Fill in NEXT_PUBLIC_WEB3FORMS_KEY in .env.local

npm run dev      # dev server at localhost:3000
npm run build    # test the static export locally
```

---

## Troubleshooting

| Problem | Fix |
|---------|-----|
| FTP times out | Try changing `protocol: ftps` → `protocol: ftp` in `.github/workflows/deploy.yml` |
| 404 on sub-pages | Make sure cPanel serves `index.html` from subdirectories (default on most hosts) |
| Contact form not sending | Check `WEB3FORMS_KEY` secret is set correctly in GitHub |
| Images not loading | Double-check images are in `public/images/` with correct filenames |
