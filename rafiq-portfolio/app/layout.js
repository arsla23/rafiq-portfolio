import "./globals.css";
import { profile } from "../data/profile";

export const metadata = {
  title: `${profile.name} | ${profile.role}`,
  description: profile.intro,
  openGraph: {
    title: `${profile.name} | ${profile.role}`,
    description: profile.intro,
    images: [profile.photo],
  },
};

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#120F26" },
    { media: "(prefers-color-scheme: light)", color: "#EEEDF5" },
  ],
};

// Sets the saved or system theme before the page paints, so there is no flash.
const themeScript = `
try {
  var t = localStorage.getItem('theme');
  if (!t) t = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  document.documentElement.dataset.theme = t;
} catch (e) { document.documentElement.dataset.theme = 'dark'; }
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Geist:wght@400;500;600&family=Geist+Mono:wght@400;500&family=Unbounded:wght@500;700;800&display=swap"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
