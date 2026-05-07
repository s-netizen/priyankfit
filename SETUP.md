# PriyankFit — Setup Guide

Complete step-by-step guide to get this live. Should take 30–45 minutes.

---

## Step 1: Clone the Repo & Install Dependencies

```bash
# Clone your repo
git clone https://github.com/s-netizen/priyankfit.git
cd priyankfit

# Install dependencies
npm install
```

---

## Step 2: Set Up Supabase

1. Go to **https://supabase.com** and sign up (free)
2. Click **"New Project"**
   - Name: `priyankfit`
   - Database Password: save this somewhere safe
   - Region: **South Asia (ap-south-1)** — closest to Delhi
3. Wait ~2 minutes for project to spin up
4. Go to **SQL Editor** (left sidebar)
5. Paste the entire contents of `supabase-schema.sql` and click **Run**
6. Go to **Settings → API** and copy:
   - `Project URL` → your `NEXT_PUBLIC_SUPABASE_URL`
   - `anon public` key → your `NEXT_PUBLIC_SUPABASE_ANON_KEY`
   - `service_role` key → your `SUPABASE_SERVICE_ROLE_KEY` (keep this secret!)

---

## Step 3: Set Up Resend (Email Notifications)

1. Go to **https://resend.com** and sign up (free)
2. Go to **API Keys** → **Create API Key**
   - Name: `priyankfit`
   - Permission: Sending access
3. Copy the key → your `RESEND_API_KEY`

> **Note:** On Resend free tier, you can only send to your own email until you verify a domain. This is fine for now — notifications will go to Fitwithpriyank@gmail.com.

---

## Step 4: Create Environment Variables

```bash
# Copy the example file
cp .env.example .env.local
```

Open `.env.local` in VS Code and fill in all values:

```env
NEXT_PUBLIC_SUPABASE_URL=https://xxxxxxxxxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJ...
SUPABASE_SERVICE_ROLE_KEY=eyJ...

NEXTAUTH_SECRET=<run: openssl rand -base64 32>
NEXTAUTH_URL=http://localhost:3000

RESEND_API_KEY=re_...
NOTIFICATION_EMAIL=Fitwithpriyank@gmail.com

ADMIN_USERNAME=priyank
ADMIN_PASSWORD=<your strong password here>
```

**Generate NEXTAUTH_SECRET:**
```bash
openssl rand -base64 32
```

---

## Step 5: Create Admin User

```bash
npx tsx scripts/seed-admin.ts
```

You should see: `✅ Admin user 'priyank' created/updated successfully.`

---

## Step 6: Run Locally

```bash
npm run dev
```

Open **http://localhost:3000** — you should see the full website.

Test the admin panel at **http://localhost:3000/admin/leads** (login with your username/password).

---

## Step 7: Update Real Details

Before going live, update these placeholders in the code:

| File | What to change |
|------|---------------|
| `src/components/ui/Navbar.tsx` | Phone number (search `9999999999`) |
| `src/components/ui/Footer.tsx` | Phone number |
| `src/components/sections/Contact.tsx` | Phone number, WhatsApp link |
| `src/components/sections/Hero.tsx` | Phone number, WhatsApp link |
| `src/components/sections/About.tsx` | Replace placeholder image with real photo |
| `src/components/sections/Transformations.tsx` | Replace with real client before/after photos |
| `src/components/sections/Testimonials.tsx` | Update testimonial text/names if needed |
| `src/app/layout.tsx` | Update domain in openGraph if you have one |

---

## Step 8: Deploy to Vercel

1. Go to **https://vercel.com** and sign up with GitHub
2. Click **"Add New Project"** → Import `s-netizen/priyankfit`
3. Framework: **Next.js** (auto-detected)
4. Click **"Environment Variables"** and add ALL variables from your `.env.local`
   - For `NEXTAUTH_URL`, use your Vercel URL: `https://priyankfit.vercel.app`
5. Click **"Deploy"**
6. Wait ~2 minutes → your site is live!

### After Deploying

Update `NEXTAUTH_URL` in Vercel env vars to your actual Vercel URL, then redeploy.

---

## Step 9: Custom Domain (Optional)

1. Buy domain from GoDaddy/Namecheap (~₹800/year) — e.g., `priyankfit.in`
2. In Vercel: **Project Settings → Domains → Add Domain**
3. Follow DNS instructions (update nameservers at your registrar)
4. Update `NEXTAUTH_URL` to `https://priyankfit.in`

---

## Updating Photos Later

When Priyank sends real photos:

1. Upload to **Supabase Storage** (or just replace Unsplash URLs with direct links)
2. Or use any image hosting: Cloudinary, ImgBB, etc.
3. Replace URLs in the component files and push to GitHub
4. Vercel auto-deploys on every push

---

## Admin Panel Usage

- URL: `yourdomain.com/admin/leads`
- Login with username + password you set
- View all leads, filter by status, search by name/phone
- Click any lead to view details, update status, add notes
- Export button downloads CSV of all current leads

---

## Troubleshooting

**`npm install` fails** → Run `node --version`. Need v18+. Install from nodejs.org.

**Supabase connection error** → Double-check your env vars. No trailing spaces.

**Admin login not working** → Run the seed script again. Check ADMIN_PASSWORD in .env.local.

**Email not arriving** → Check Resend dashboard for delivery logs. Verify domain for production.

**Images not loading** → Unsplash images require internet. They'll work fine on localhost and Vercel.

---

## Need Help?

The codebase is clean and well-commented. Every section is a separate component in `src/components/sections/`. 

To add a new section, create a new file and import it in `src/app/page.tsx`.
