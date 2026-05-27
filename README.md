# BogdAI — Marketing site

Self-contained static site. No build step required.

## Local preview

Open `index.html` in a browser, or serve the folder:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## Deploy to Netlify (fastest path — ~60 sec)

1. Open <https://app.netlify.com/drop>.
2. Drag this `site/` folder onto the page.
3. You'll get a live URL like `bogdai-xyz.netlify.app`.

Done. To attach a custom domain (e.g. `bogdai.com`):
**Netlify dashboard → Site settings → Domain management → Add custom domain** → follow the DNS records they show you.

## Deploy via Netlify + GitHub (auto-redeploy on every push)

1. Push this folder to a GitHub repo (instructions below).
2. Netlify dashboard → **Add new site → Import an existing project → GitHub**.
3. Pick the repo. Settings:
   - **Base directory:** `site` (or leave blank if `site/` is the repo root)
   - **Build command:** *(leave empty — no build step)*
   - **Publish directory:** `.` (or `site` if not the repo root)
4. Click **Deploy**. Every `git push` to `main` redeploys automatically.

## Push to GitHub

You already have an empty repo at <https://github.com/anunjinb/BogdAI>. Two options:

### Option A — Web upload (no terminal)

1. Go to <https://github.com/anunjinb/BogdAI>.
2. Click **Add file → Upload files**.
3. Drag the contents of `site/` (not the folder itself — the files inside) onto the upload zone.
4. Commit message: *"Add marketing site"*.
5. Click **Commit changes**.

### Option B — Command line

```bash
# from the project folder, in the site/ directory
cd site
git init
git add .
git commit -m "Add marketing site"
git branch -M main
git remote add origin https://github.com/anunjinb/BogdAI.git
git push -u origin main --force   # only because the repo only has a stub README
```

(Drop `--force` if you want to keep the existing README — you'll need to `git pull --rebase` first.)

## Notes before launch

- **Waitlist form is mocked.** Wire `Waitlist.jsx`'s `submit` handler to a real backend before going live. Options that take ~10 minutes:
  - [Formspree](https://formspree.io) — set the form `action` to your endpoint URL.
  - [Netlify Forms](https://docs.netlify.com/forms/setup/) — add `data-netlify="true"` to the `<form>` tag and Netlify captures submissions automatically.
  - Mailchimp / ConvertKit embed.
- **Production hardening:** the site currently uses `@babel/standalone` to transpile JSX in the browser — fine for a launch site, but adds ~150 KB and a small first-paint cost. For a leaner build, port the components into Vite (`npm create vite@latest -- --template react`) and pre-compile.
- **Analytics:** drop a Plausible or Google Analytics snippet into `<head>` in `index.html` before launch.
- **SEO:** the `<title>` and `<meta name="description">` are set. Add an `og:image` for LinkedIn / Twitter previews.
