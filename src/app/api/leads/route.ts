import { NextRequest, NextResponse } from "next/server";

const WHATSAPP_NUMBER = "918171064366";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, goal, area } = body;

    if (!name || !phone || !goal || !area) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const goalLabel: Record<string, string> = {
      fat_loss: "Fat Loss",
      muscle_gain: "Muscle Gain",
      body_transformation: "Body Transformation",
      strength: "Strength Training",
      other: "Other",
    };

    const message = encodeURIComponent(
      `Hi Priyank! 👋\n\nI'd like to book a free trial session.\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Goal:* ${goalLabel[goal] || goal}\n*Area:* ${area}\n\nPlease let me know when we can connect!`
    );

    const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${message}`;

    return NextResponse.json({ success: true, whatsappUrl }, { status: 200 });
  } catch {
    return NextResponse.json({ error: "Something went wrong" }, { status: 500 });
  }
}
