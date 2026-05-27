import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us — Floor-Space India",
  description:
    "Get in touch with Floor-Space India. Share your site, scope, city, and timeline — our team will come back with a clear path forward within one business day.",
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
