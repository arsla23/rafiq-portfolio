# Mohd Rafiq Mir – Portfolio

A Next.js portfolio, ready to deploy on Vercel.

## Edit your content

Everything on the site lives in **`data/profile.js`**: your intro, work, projects, skills, education, certificates, languages and links.

- Add your LinkedIn and GitHub by replacing `null` with the full link, e.g. `github: "https://github.com/yourname"`. The buttons appear once they're set.
- To offer your CV, put `cv.pdf` in the `public` folder and set `cv: "/cv.pdf"`.
- To change your photo, replace `public/photo.jpg` (square works best).

## Deploy to Vercel

### Option A: through GitHub (no installs needed)

1. Create a new repository on GitHub, e.g. `portfolio`.
2. Click **uploading an existing file**, and drag in everything in this folder **except** `node_modules` and `.next` (if they exist).
3. Commit the upload.
4. Go to vercel.com, sign in with GitHub, click **Add New → Project**, and import the repository.
5. Leave all settings as they are (Vercel detects Next.js) and click **Deploy**.

You get a link like `portfolio-yourname.vercel.app`. Every time you change a file on GitHub, Vercel redeploys automatically.

### Option B: from your terminal (needs Node.js 20 or newer)

```bash
npm install
npx vercel        # log in, accept the defaults → preview link
npx vercel --prod # publish to your main link
```

## Run it on your computer

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## What's inside

- `app/page.js` – the page layout
- `app/globals.css` – all styling, including light and dark themes
- `components/Workflow.js` – the animated automation demo in the hero
- `components/CommandPalette.js` – the Ctrl/⌘ + K menu
- `components/Projects.js` – project grid with the tool filter
