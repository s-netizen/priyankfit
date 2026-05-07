// Run this ONCE to create your admin user:
// npx tsx scripts/seed-admin.ts
import { createClient } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";
import * as dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

async function main() {
  const username = process.env.ADMIN_USERNAME || "priyank";
  const password = process.env.ADMIN_PASSWORD;

  if (!password) {
    console.error("❌ Set ADMIN_PASSWORD in .env.local");
    process.exit(1);
  }

  const hash = await bcrypt.hash(password, 12);

  const { error } = await supabase.from("admin_users").upsert(
    [{ username, password_hash: hash }],
    { onConflict: "username" }
  );

  if (error) {
    console.error("❌ Error:", error.message);
  } else {
    console.log(`✅ Admin user '${username}' created/updated successfully.`);
  }
}

main();
