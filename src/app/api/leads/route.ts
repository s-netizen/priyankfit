import { NextRequest, NextResponse } from "next/server";
import { supabaseAdmin } from "@/lib/supabase";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, goal, area } = body;

    if (!name || !phone || !goal || !area) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const { data, error } = await supabaseAdmin
      .from("leads")
      .insert([{ name, phone, goal, area, status: "new" }])
      .select()
      .single();

    if (error) throw error;

    // Send email notification (non-blocking)
    const notificationEmail = process.env.NOTIFICATION_EMAIL;
    if (notificationEmail && process.env.RESEND_API_KEY) {
      resend.emails.send({
        from: "PriyankFit <onboarding@resend.dev>",
        to: notificationEmail,
        subject: `🔥 New Lead: ${name} — ${goal.replace("_", " ")}`,
        html: `
          <div style="font-family: sans-serif; max-width: 500px; margin: 0 auto; padding: 24px; background: #0a0a0a; color: #f0f0f0; border-radius: 12px;">
            <div style="background: #E63329; padding: 16px 24px; border-radius: 8px 8px 0 0; margin: -24px -24px 24px;">
              <h1 style="margin: 0; font-size: 1.2rem; color: white;">🏋️ New Lead — PriyankFit</h1>
            </div>
            <table style="width: 100%; border-collapse: collapse;">
              <tr><td style="padding: 8px 0; color: #888; width: 100px;">Name</td><td style="padding: 8px 0; color: white; font-weight: 600;">${name}</td></tr>
              <tr><td style="padding: 8px 0; color: #888;">Phone</td><td style="padding: 8px 0; color: white;">${phone}</td></tr>
              <tr><td style="padding: 8px 0; color: #888;">Goal</td><td style="padding: 8px 0; color: white;">${goal.replace(/_/g, " ").replace(/\b\w/g, (l: string) => l.toUpperCase())}</td></tr>
              <tr><td style="padding: 8px 0; color: #888;">Area</td><td style="padding: 8px 0; color: white;">${area}</td></tr>
              <tr><td style="padding: 8px 0; color: #888;">Time</td><td style="padding: 8px 0; color: white;">${new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}</td></tr>
            </table>
            <div style="margin-top: 24px; padding: 16px; background: #161616; border-radius: 8px; border-left: 3px solid #E63329;">
              <p style="margin: 0; color: #888; font-size: 0.85rem;">Call within 2 hours to maximise conversion rate.</p>
            </div>
          </div>
        `,
      }).catch(console.error);
    }

    return NextResponse.json({ success: true, data }, { status: 201 });
  } catch (err) {
    console.error("Lead creation error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status");
    const search = searchParams.get("search");
    const page = parseInt(searchParams.get("page") || "1");
    const limit = 20;

    let query = supabaseAdmin.from("leads").select("*", { count: "exact" });

    if (status && status !== "all") query = query.eq("status", status);
    if (search) query = query.or(`name.ilike.%${search}%,phone.ilike.%${search}%`);

    query = query.order("created_at", { ascending: false }).range((page - 1) * limit, page * limit - 1);

    const { data, error, count } = await query;
    if (error) throw error;

    return NextResponse.json({ data, count, page, limit });
  } catch (err) {
    console.error("Leads fetch error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
