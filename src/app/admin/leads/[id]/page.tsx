"use client";
import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import type { Lead, LeadStatus } from "@/types";

const STATUS_COLORS: Record<LeadStatus, string> = {
  new: "#E63329",
  contacted: "#F59E0B",
  trial_booked: "#3B82F6",
  converted: "#10B981",
  lost: "#555",
};

const STATUS_LABELS: Record<LeadStatus, string> = {
  new: "New",
  contacted: "Contacted",
  trial_booked: "Trial Booked",
  converted: "Converted",
  lost: "Lost",
};

const GOAL_LABELS: Record<string, string> = {
  fat_loss: "Fat Loss",
  muscle_gain: "Muscle Gain",
  body_transformation: "Body Transformation",
  strength: "Strength",
  other: "Other",
};

export default function LeadDetail() {
  const { id } = useParams<{ id: string }>();
  const router = useRouter();
  const [lead, setLead] = useState<Lead | null>(null);
  const [loading, setLoading] = useState(true);
  const [notes, setNotes] = useState("");
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    fetch(`/api/admin/leads/${id}`)
      .then((r) => r.json())
      .then((json) => {
        setLead(json.data);
        setNotes(json.data?.notes || "");
        setLoading(false);
      })
      .catch(() => { setLoading(false); router.push("/admin/leads"); });
  }, [id, router]);

  const updateStatus = async (status: LeadStatus) => {
    if (!lead) return;
    const res = await fetch(`/api/admin/leads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ status }),
    });
    const json = await res.json();
    setLead(json.data);
  };

  const saveNotes = async () => {
    setSaving(true);
    await fetch(`/api/admin/leads/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ notes }),
    });
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center" style={{ background: "var(--dark)" }}>
      <div className="w-6 h-6 rounded-full border-2 border-red-600 border-t-transparent animate-spin" />
    </div>
  );

  if (!lead) return null;

  return (
    <div className="min-h-screen" style={{ background: "var(--dark)" }}>
      <header
        className="sticky top-0 z-40 px-6 py-4 flex items-center justify-between"
        style={{ background: "rgba(10,10,10,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="flex items-center gap-3">
          <Link href="/admin/leads" className="text-gray-500 hover:text-white transition-colors text-sm">
            ← Back to Leads
          </Link>
        </div>
        <span style={{ fontFamily: "var(--font-display)", color: "white", fontSize: "1rem" }}>
          Priyank<span style={{ color: "var(--red)" }}>Fit</span>
          <span className="text-gray-600 ml-2 text-sm" style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>Admin</span>
        </span>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-8">
        {/* Lead header */}
        <div className="card p-6 mb-6">
          <div className="flex items-start justify-between mb-4">
            <div>
              <h1 className="text-white text-2xl font-semibold mb-1">{lead.name}</h1>
              <a
                href={`tel:${lead.phone}`}
                className="text-gray-400 hover:text-white transition-colors"
                style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.05em" }}
              >
                📞 {lead.phone}
              </a>
            </div>
            <a
              href={`https://wa.me/91${lead.phone.replace(/\D/g, "").slice(-10)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: "0.6rem 1.25rem", fontSize: "0.8rem" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              WhatsApp
            </a>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4" style={{ borderTop: "1px solid var(--border)" }}>
            <div>
              <p className="text-gray-500 text-xs mb-1" style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Goal</p>
              <p className="text-white text-sm">{GOAL_LABELS[lead.goal] || lead.goal}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-1" style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Area</p>
              <p className="text-white text-sm">{lead.area}</p>
            </div>
            <div>
              <p className="text-gray-500 text-xs mb-1" style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.08em", textTransform: "uppercase" }}>Enquiry Date</p>
              <p className="text-white text-sm">{new Date(lead.created_at).toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}</p>
            </div>
          </div>
        </div>

        {/* Status */}
        <div className="card p-6 mb-6">
          <h2 className="text-white mb-4" style={{ fontFamily: "var(--font-condensed)", fontSize: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Status
          </h2>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(STATUS_LABELS) as LeadStatus[]).map((s) => (
              <button
                key={s}
                onClick={() => updateStatus(s)}
                className="px-4 py-2 rounded-lg text-xs font-medium transition-all"
                style={{
                  fontFamily: "var(--font-condensed)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  background: lead.status === s ? STATUS_COLORS[s] : "var(--card)",
                  color: lead.status === s ? "white" : "var(--muted)",
                  border: `1px solid ${lead.status === s ? STATUS_COLORS[s] : "var(--border)"}`,
                }}
              >
                {STATUS_LABELS[s]}
              </button>
            ))}
          </div>
        </div>

        {/* Notes */}
        <div className="card p-6">
          <h2 className="text-white mb-4" style={{ fontFamily: "var(--font-condensed)", fontSize: "1rem", letterSpacing: "0.05em", textTransform: "uppercase" }}>
            Notes
          </h2>
          <textarea
            className="form-input mb-3"
            rows={5}
            placeholder="Add notes about this lead — follow-up status, trial date, client preferences..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
          <div className="flex items-center gap-3">
            <button
              onClick={saveNotes}
              disabled={saving}
              className="btn-primary"
              style={{ padding: "0.6rem 1.25rem", fontSize: "0.8rem" }}
            >
              {saving ? "Saving..." : "Save Notes"}
            </button>
            {saved && <span className="text-green-400 text-sm">✓ Saved</span>}
          </div>
        </div>
      </div>
    </div>
  );
}
