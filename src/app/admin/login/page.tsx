"use client";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const [creds, setCreds] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      username: creds.username,
      password: creds.password,
      redirect: false,
    });

    if (result?.ok) {
      router.push("/admin/leads");
    } else {
      setError("Invalid username or password.");
      setLoading(false);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center px-4"
      style={{ background: "var(--dark)" }}
    >
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div
              style={{
                width: 28,
                height: 28,
                background: "var(--red)",
                clipPath: "polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)",
              }}
            />
            <span style={{ fontFamily: "var(--font-display)", fontSize: "1.5rem", letterSpacing: "0.05em", color: "white" }}>
              Priyank<span style={{ color: "var(--red)" }}>Fit</span>
            </span>
          </div>
          <p className="text-gray-500 text-sm">Admin Panel</p>
        </div>

        <div
          className="card p-8"
          style={{ borderColor: "var(--border)" }}
        >
          <h1
            className="text-white mb-6 text-center"
            style={{ fontFamily: "var(--font-condensed)", fontSize: "1.3rem", letterSpacing: "0.05em" }}
          >
            SIGN IN
          </h1>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-gray-400 text-xs mb-2" style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Username
              </label>
              <input
                type="text"
                required
                className="form-input"
                value={creds.username}
                onChange={(e) => setCreds({ ...creds, username: e.target.value })}
                autoComplete="username"
              />
            </div>

            <div>
              <label className="block text-gray-400 text-xs mb-2" style={{ fontFamily: "var(--font-condensed)", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                Password
              </label>
              <input
                type="password"
                required
                className="form-input"
                value={creds.password}
                onChange={(e) => setCreds({ ...creds, password: e.target.value })}
                autoComplete="current-password"
              />
            </div>

            {error && (
              <p className="text-red-400 text-sm text-center">{error}</p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="btn-primary w-full justify-center mt-2"
              style={{ opacity: loading ? 0.7 : 1 }}
            >
              {loading ? "Signing in..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
