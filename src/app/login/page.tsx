"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, CheckCircle2, AlertCircle, ShieldCheck } from "lucide-react";
import { VALID_EMAIL, VALID_PASSWORD } from "@/lib/auth";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !password) return;

    setIsLoading(true);
    setError(null);

    // Simulate a small network delay for UX
    await new Promise((r) => setTimeout(r, 600));

    if (email === VALID_EMAIL && password === VALID_PASSWORD) {
      // Set a simple session cookie
      document.cookie = `ops-auth=authenticated; path=/; max-age=${60 * 60 * 8}`;
      setIsSuccess(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 1000);
    } else {
      setError("Invalid email or password. Please try again.");
    }

    setIsLoading(false);
  };

  const isFormValid = email.length > 0 && password.length > 0;

  return (
    <div className="h-screen w-full bg-[#0a0a0c] p-2 sm:p-4 md:p-6 flex items-center justify-center antialiased overflow-hidden">
      <div className="w-full max-w-[1540px] h-full rounded-3xl overflow-hidden flex flex-col lg:flex-row bg-black shadow-2xl relative">

        {/* Background aura streams */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_40%,rgba(249,115,22,0.15),transparent_70%)]" />
          <div className="absolute -left-[5%] top-[-20%] w-48 sm:w-64 h-[150%] bg-gradient-to-b from-orange-600/35 via-amber-500/20 to-transparent blur-[80px] transform -rotate-12" />
          <div className="absolute left-[20%] top-[-10%] w-56 sm:w-72 h-[160%] bg-gradient-to-b from-orange-500/45 via-orange-600/25 to-black/90 blur-[95px] transform -rotate-6" />
          <div className="absolute left-[45%] top-[-25%] w-60 sm:w-80 h-[170%] bg-gradient-to-b from-orange-400/25 via-white/10 to-transparent blur-[110px]" />
          <div className="absolute left-[70%] top-[-15%] w-48 sm:w-64 h-[150%] bg-gradient-to-b from-orange-600/30 via-orange-800/20 to-black blur-[90px] transform rotate-6" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.4)_100%)]" />
        </div>

        {/* LEFT PANE - Brand */}
        <div className="relative z-10 lg:w-1/2 w-full h-72 lg:h-full p-6 sm:p-10 md:p-14 flex flex-col justify-between bg-transparent">

          {/* Logo */}
          <div className="relative z-10 flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center shadow-lg shadow-orange-500/30 bg-black p-1">
              <img src="/vertex-icon.png" alt="Vertex Logo" className="w-full h-full object-contain" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-bold tracking-tight text-white">Vertex</span>
              <span className="text-[10px] font-medium tracking-[0.2em] text-orange-400 uppercase">Operations</span>
            </div>
          </div>

          {/* Tagline */}
          <div className="relative z-10 max-w-lg mb-2 sm:mb-6">
            <h1 className="text-2xl sm:text-4xl lg:text-[42px] font-normal leading-[1.18] text-white/95 tracking-tight">
              Operations command<br className="hidden sm:inline" />
              <span className="text-orange-400"> center.</span>
            </h1>
            <p className="mt-4 text-sm text-neutral-500 leading-relaxed hidden sm:block">
              Internal panel for Vertex Logistics operations team. Manage shipments, orders, and workflows from one place.
            </p>

            {/* Feature pills */}
            <div className="mt-6 flex flex-wrap gap-2 hidden sm:flex">
              {["Order Management", "Shipment Tracking", "Team Workflows", "Reports"].map((f) => (
                <span key={f} className="px-3 py-1 text-xs rounded-full bg-white/5 border border-white/10 text-neutral-400">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT PANE - Login form */}
        <div className="relative z-10 lg:w-1/2 w-full flex-1 h-full p-2 sm:p-4 lg:p-6 flex">
          <div className="w-full h-full bg-[#f6f7f9] p-6 sm:p-12 lg:p-16 flex flex-col items-center justify-center rounded-2xl lg:rounded-3xl shadow-xl overflow-y-auto overflow-x-hidden">
            <div className="w-full max-w-[400px] space-y-8 my-auto py-4">

              {/* Internal access badge */}
              <div className="flex justify-center">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-orange-50 border border-orange-100 text-orange-600 text-xs font-medium">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  Internal Access Only
                </div>
              </div>

              {/* Form Title */}
              <div className="text-center space-y-2">
                <h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900">
                  Ops Panel Sign In
                </h2>
                <p className="text-sm text-neutral-500">
                  Access restricted to authorised operations staff
                </p>
              </div>

              {isSuccess ? (
                <div className="bg-white p-8 rounded-3xl border border-neutral-200/80 shadow-sm text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-orange-100 text-orange-600 mx-auto flex items-center justify-center">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-neutral-900">Access Granted</h3>
                    <p className="text-sm text-neutral-500">Redirecting to operations dashboard...</p>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">

                  {error && (
                    <div className="flex items-center gap-3 p-3.5 text-sm text-red-600 bg-red-50 border border-red-100 rounded-2xl">
                      <AlertCircle className="w-5 h-5 shrink-0 text-red-500" />
                      <p className="font-medium tracking-tight">{error}</p>
                    </div>
                  )}

                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-normal text-neutral-500 pl-1 block">
                      Email address
                    </label>
                    <input
                      id="email"
                      type="email"
                      placeholder="admin@vertex.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      autoComplete="email"
                      className="w-full h-12 rounded-full bg-[#efefef] border-transparent px-5 text-sm text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-2 focus:ring-orange-500/70 focus:bg-white transition-all"
                    />
                  </div>

                  {/* Password */}
                  <div className="space-y-2">
                    <label htmlFor="password" className="text-xs font-normal text-neutral-500 pl-1 block">
                      Password
                    </label>
                    <div className="relative flex items-center">
                      <input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete="current-password"
                        className="w-full h-12 rounded-full bg-[#efefef] border-transparent pl-5 pr-12 text-sm text-neutral-900 focus:outline-none focus:ring-2 focus:ring-orange-500/70 focus:bg-white transition-all"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-4 text-neutral-400 hover:text-neutral-700 transition-colors focus:outline-none p-1"
                        aria-label={showPassword ? "Hide password" : "Show password"}
                      >
                        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                      </button>
                    </div>
                  </div>

                  {/* Submit */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      id="login-submit"
                      disabled={isLoading || !isFormValid}
                      className={`w-full h-12 rounded-full font-medium text-sm transition-all duration-200 cursor-pointer ${
                        isFormValid
                          ? "bg-neutral-900 hover:bg-orange-600 text-white shadow-md shadow-orange-500/10"
                          : "bg-[#dcdcdc] text-neutral-400 cursor-not-allowed"
                      }`}
                    >
                      {isLoading ? (
                        <span className="flex items-center justify-center gap-2">
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Authenticating...
                        </span>
                      ) : (
                        "Sign in to Ops Panel"
                      )}
                    </button>
                  </div>

                </form>
              )}

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
