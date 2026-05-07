"use client";
import { useState, useEffect, useCallback } from "react";
import { signOut } from "next-auth/react";
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

export default function AdminLeads() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    const params = new URLSearchParams({ page: String(page) });
    if (filter !== "all") params.set("status", filter);
    if (search) params.set("search", search);

    const res = await fetch(`/api/leads?${params}`);
    const json = await res.json();
    setLeads(json.data || []);
    setTotal(json.count || 0);
    setLoading(false);
  }, [filter, search, page]);

  useEffect(() => { fetchLeads(); }, [fetchLeads]);

  const exportCSV = () => {
    const headers = ["Name", "Phone", "Goal", "Area", "Status", "Notes", "Date"];
    const rows = leads.map((l) => [
      l.name, l.phone, GOAL_LABELS[l.goal] || l.goal, l.area,
      STATUS_LABELS[l.status], l.notes || "", new Date(l.created_at).toLocaleDateString("en-IN"),
    ]);
    const csv = [headers, ...rows].map((r) => r.map((c) => `"${c}"`).join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `priyankfit-leads-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
  };

  const statusCounts = leads.reduce((acc, l) => {
    acc[l.status] = (acc[l.status] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  return (
    <div className="min-h-screen" style={{ background: "var(--dark)" }}>
      {/* Admin header */}
      <header
        className="sticky top-0 z-40 px-6 py-4 flex items-center justify-between"
        style={{ background: "rgba(10,10,10,0.95)", backdropFilter: "blur(12px)", borderBottom: "1px solid var(--border)" }}
      >
        <div className="flex items-center gap-3">
          <div style={{ width: 20, height: 20, background: "var(--red)", clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)" }} />
          <span style={{ fontFamily: "var(--font-display)", color: "white", fontSize: "1rem" }}>
            Priyank<span style={{ color: "var(--red)" }}>Fit</span>
            <span className="text-gray-600 ml-2 text-sm" style={{ fontFamily: "var(--font-body)", fontWeight: 400 }}>Admin</span>
          </span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={exportCSV}
            className="btn-secondary text-xs"
            style={{ padding: "0.5rem 1rem" }}
          >
            ↓ Export CSV
          </button>
          <button
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
            className="text-gray-500 hover:text-white text-sm transition-colors"
            style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.05em" }}
          >
            Sign Out
          </button>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-6 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-3 mb-8">
          {[
            { label: "Total", value: total, color: "white" },
            { label: "New", value: statusCounts.new || 0, color: STATUS_COLORS.new },
            { label: "Contacted", value: statusCounts.contacted || 0, color: STATUS_COLORS.contacted },
            { label: "Trial Booked", value: statusCounts.trial_booked || 0, color: STATUS_COLORS.trial_booked },
            { label: "Converted", value: statusCounts.converted || 0, color: STATUS_COLORS.converted },
          ].map((s, i) => (
            <div key={i} className="card p-4 text-center">
              <p style={{ fontFamily: "var(--font-display)", fontSize: "2rem", color: s.color, lineHeight: 1 }}>{s.value}</p>
              <p className="text-gray-500 text-xs mt-1" style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.08em", textTransform: "uppercase" }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-3 mb-6">
          <input
            type="text"
            placeholder="Search by name or phone..."
            className="form-input md:w-64"
            value={search}
            onChange={(e) => { setSearch(e.target.value); setPage(1); }}
          />
          <div className="flex gap-2 flex-wrap">
            {["all", "new", "contacted", "trial_booked", "converted", "lost"].map((s) => (
              <button
                key={s}
                onClick={() => { setFilter(s); setPage(1); }}
                className="px-4 py-2 rounded-lg text-xs font-medium transition-all"
                style={{
                  fontFamily: "var(--font-condensed)",
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  background: filter === s ? (s === "all" ? "var(--red)" : STATUS_COLORS[s as LeadStatus] || "var(--red)") : "var(--card)",
                  color: filter === s ? "white" : "var(--muted)",
                  border: "1px solid var(--border)",
                }}
              >
                {s === "all" ? "All" : STATUS_LABELS[s as LeadStatus]}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}
        <div className="card overflow-hidden">
          {loading ? (
            <div className="flex items-center justify-center py-16">
              <div className="w-6 h-6 rounded-full border-2 border-red-600 border-t-transparent animate-spin" />
            </div>
          ) : leads.length === 0 ? (
            <div className="text-center py-16 text-gray-500">No leads found.</div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr style={{ borderBottom: "1px solid var(--border)" }}>
                    {["Name", "Phone", "Goal", "Area", "Status", "Date", ""].map((h) => (
                      <th
                        key={h}
                        className="px-4 py-3 text-left text-gray-500 text-xs"
                        style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.08em", textTransform: "uppercase", fontWeight: 500 }}
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead, i) => (
                    <tr
                      key={lead.id}
                      className="hover:bg-white/[0.02] transition-colors"
                      style={{ borderBottom: i < leads.length - 1 ? "1px solid var(--border)" : "none" }}
                    >
                      <td className="px-4 py-3">
                        <p className="text-white text-sm font-medium">{lead.name}</p>
                      </td>
                      <td className="px-4 py-3 text-gray-400 text-sm">{lead.phone}</td>
                      <td className="px-4 py-3 text-gray-400 text-sm">{GOAL_LABELS[lead.goal] || lead.goal}</td>
                      <td className="px-4 py-3 text-gray-400 text-sm">{lead.area}</td>
                      <td className="px-4 py-3">
                        <span
                          className="text-xs px-2 py-1 rounded-full"
                          style={{
                            background: `${STATUS_COLORS[lead.status]}18`,
                            color: STATUS_COLORS[lead.status],
                            fontFamily: "var(--font-condensed)",
                            letterSpacing: "0.06em",
                          }}
                        >
                          {STATUS_LABELS[lead.status]}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-500 text-sm">
                        {new Date(lead.created_at).toLocaleDateString("en-IN")}
                      </td>
                      <td className="px-4 py-3">
                        <Link
                          href={`/admin/leads/${lead.id}`}
                          className="text-xs transition-colors"
                          style={{ color: "var(--red)", fontFamily: "var(--font-condensed)", letterSpacing: "0.05em" }}
                        >
                          View →
                        </Link>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {/* Pagination */}
        {total > 20 && (
          <div className="flex items-center justify-between mt-4">
            <p className="text-gray-500 text-sm">Showing {(page - 1) * 20 + 1}–{Math.min(page * 20, total)} of {total}</p>
            <div className="flex gap-2">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="btn-secondary text-xs disabled:opacity-30"
                style={{ padding: "0.4rem 0.8rem" }}
              >
                ← Prev
              </button>
              <button
                onClick={() => setPage((p) => p + 1)}
                disabled={page * 20 >= total}
                className="btn-secondary text-xs disabled:opacity-30"
                style={{ padding: "0.4rem 0.8rem" }}
              >
                Next →
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
