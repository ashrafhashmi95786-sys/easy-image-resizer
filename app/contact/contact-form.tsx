"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;
    setStatus("sending");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || ""),
      email: String(data.get("email") || ""),
      message: String(data.get("message") || ""),
      website: String(data.get("website") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) throw new Error(result.error || "Your message could not be sent. Please try again.");
      form.reset();
      setStatus("success");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setStatus("error");
    }
  }

  const fieldStyle = {
    width: "100%",
    padding: "13px 14px",
    border: "1px solid #d5ded9",
    borderRadius: 10,
    background: "#fff",
    color: "#17231e",
    font: "inherit",
    boxSizing: "border-box" as const,
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginTop: 24, padding: 24, border: "1px solid #e1e9e4", borderRadius: 18, background: "#fff", boxShadow: "0 12px 35px rgba(23, 70, 52, 0.07)" }}>
      <div style={{ display: "grid", gap: 18 }}>
        <label style={{ display: "grid", gap: 7, fontWeight: 650 }}>
          Your name
          <input name="name" type="text" autoComplete="name" required maxLength={80} placeholder="Enter your name" style={fieldStyle} />
        </label>
        <label style={{ display: "grid", gap: 7, fontWeight: 650 }}>
          Email address
          <input name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" style={fieldStyle} />
        </label>
        <label style={{ display: "grid", gap: 7, fontWeight: 650 }}>
          Your message
          <textarea name="message" required minLength={10} maxLength={2000} rows={6} placeholder="Tell us how we can help or share your feedback..." style={{ ...fieldStyle, resize: "vertical", minHeight: 150 }} />
        </label>
        <div aria-hidden="true" style={{ position: "absolute", width: 1, height: 1, padding: 0, margin: -1, overflow: "hidden", clip: "rect(0, 0, 0, 0)", whiteSpace: "nowrap", border: 0 }}>
          <label>Leave this field empty<input name="website" type="text" tabIndex={-1} autoComplete="off" /></label>
        </div>
        <button type="submit" disabled={status === "sending"} style={{ width: "100%", border: 0, borderRadius: 10, padding: "14px 20px", background: status === "sending" ? "#6b8f80" : "#176b50", color: "#fff", font: "inherit", fontWeight: 750, cursor: status === "sending" ? "wait" : "pointer" }}>
          {status === "sending" ? "Sending..." : "Send Message"}
        </button>
        <p aria-live="polite" role={status === "error" ? "alert" : "status"} style={{ margin: 0, color: status === "success" ? "#176b50" : status === "error" ? "#b42318" : "#607168", fontSize: 14 }}>
          {status === "success" ? "Thank you! Your message has been sent successfully." : status === "error" ? error : "We’ll use your email address only to reply to your message."}
        </p>
      </div>
    </form>
  );
}
