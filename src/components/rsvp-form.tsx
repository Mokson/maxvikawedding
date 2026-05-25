"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { submitRsvp } from "@/actions/rsvp";

type FormState = "idle" | "sending" | "success" | "error";

export function RsvpForm() {
  const t = useTranslations("rsvp");
  const [state, setState] = useState<FormState>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setState("sending");

    const formData = new FormData(e.currentTarget);
    const result = await submitRsvp(formData);

    setState(result.success ? "success" : "error");
  }

  if (state === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center py-12"
      >
        <h3 className="font-serif text-3xl font-light text-dark mb-4">
          {t("successTitle")}
        </h3>
        <p className="font-sans text-sm text-muted mb-8">
          {t("successMessage")}
        </p>
        <button
          onClick={() => setState("idle")}
          className="font-sans text-xs tracking-[0.15em] uppercase text-muted hover:text-dark transition-colors underline underline-offset-4"
        >
          {t("sendAnother")}
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block font-sans text-xs tracking-[0.15em] uppercase text-muted mb-2">
          {t("name")}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="w-full border-b border-taupe bg-transparent py-3 font-sans text-sm text-dark outline-none focus:border-dark transition-colors placeholder:text-muted"
        />
      </div>

      <div>
        <label htmlFor="email" className="block font-sans text-xs tracking-[0.15em] uppercase text-muted mb-2">
          {t("email")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="w-full border-b border-taupe bg-transparent py-3 font-sans text-sm text-dark outline-none focus:border-dark transition-colors placeholder:text-muted"
        />
      </div>

      <div>
        <p className="font-sans text-xs tracking-[0.15em] uppercase text-muted mb-4">
          {t("attending")}
        </p>
        <div className="flex gap-4">
          <label className="flex-1 cursor-pointer">
            <input type="radio" name="attending" value="yes" required className="peer sr-only" />
            <span className="block text-center py-3 border border-taupe font-sans text-xs tracking-[0.15em] uppercase text-muted peer-checked:border-dark peer-checked:text-dark peer-checked:bg-dark/5 transition-colors">
              {t("yes")}
            </span>
          </label>
          <label className="flex-1 cursor-pointer">
            <input type="radio" name="attending" value="no" className="peer sr-only" />
            <span className="block text-center py-3 border border-taupe font-sans text-xs tracking-[0.15em] uppercase text-muted peer-checked:border-dark peer-checked:text-dark peer-checked:bg-dark/5 transition-colors">
              {t("no")}
            </span>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div>
          <label htmlFor="adults" className="block font-sans text-xs tracking-[0.15em] uppercase text-muted mb-2">
            {t("adults")}
          </label>
          <select
            id="adults"
            name="adults"
            className="w-full border-b border-taupe bg-transparent py-3 font-sans text-sm text-dark outline-none focus:border-dark transition-colors"
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="children" className="block font-sans text-xs tracking-[0.15em] uppercase text-muted mb-2">
            {t("children")}
          </label>
          <select
            id="children"
            name="children"
            className="w-full border-b border-taupe bg-transparent py-3 font-sans text-sm text-dark outline-none focus:border-dark transition-colors"
          >
            {[0, 1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>{n}</option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block font-sans text-xs tracking-[0.15em] uppercase text-muted mb-2">
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder={t("messagePlaceholder")}
          className="w-full border-b border-taupe bg-transparent py-3 font-sans text-sm text-dark outline-none focus:border-dark transition-colors placeholder:text-muted resize-none"
        />
      </div>

      <AnimatePresence>
        {state === "error" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="bg-red-50 border border-red-200 rounded p-4"
          >
            <p className="font-sans text-sm text-red-800">{t("errorTitle")}</p>
            <p className="font-sans text-xs text-red-600 mt-1">{t("errorMessage")}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={state === "sending"}
        className="w-full font-sans text-xs font-medium tracking-[0.2em] uppercase border border-dark px-10 py-4 text-dark hover:bg-dark hover:text-cream transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {state === "sending" ? t("sending") : t("submit")}
      </button>
    </form>
  );
}
