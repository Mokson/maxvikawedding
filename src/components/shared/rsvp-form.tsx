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
        className="py-12 text-center"
      >
        <h3 className="text-dark mb-4 font-serif text-3xl font-light">{t("successTitle")}</h3>
        <p className="text-muted mb-8 font-sans text-sm">{t("successMessage")}</p>
        <button
          onClick={() => setState("idle")}
          className="text-muted hover:text-dark font-sans text-xs tracking-[0.15em] uppercase underline underline-offset-4 transition-colors"
        >
          {t("sendAnother")}
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label
          htmlFor="name"
          className="text-muted mb-2 block font-sans text-xs tracking-[0.15em] uppercase"
        >
          {t("name")}
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="border-taupe text-dark focus:border-dark placeholder:text-muted w-full border-b bg-transparent py-3 font-sans text-sm transition-colors outline-none"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="text-muted mb-2 block font-sans text-xs tracking-[0.15em] uppercase"
        >
          {t("email")}
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="border-taupe text-dark focus:border-dark placeholder:text-muted w-full border-b bg-transparent py-3 font-sans text-sm transition-colors outline-none"
        />
      </div>

      <div>
        <p className="text-muted mb-4 font-sans text-xs tracking-[0.15em] uppercase">
          {t("attending")}
        </p>
        <div className="flex gap-4">
          <label className="flex-1 cursor-pointer">
            <input type="radio" name="attending" value="yes" required className="peer sr-only" />
            <span className="border-taupe text-muted peer-checked:border-dark peer-checked:text-dark peer-checked:bg-dark/5 block border py-3 text-center font-sans text-xs tracking-[0.15em] uppercase transition-colors">
              {t("yes")}
            </span>
          </label>
          <label className="flex-1 cursor-pointer">
            <input type="radio" name="attending" value="no" className="peer sr-only" />
            <span className="border-taupe text-muted peer-checked:border-dark peer-checked:text-dark peer-checked:bg-dark/5 block border py-3 text-center font-sans text-xs tracking-[0.15em] uppercase transition-colors">
              {t("no")}
            </span>
          </label>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="flex flex-col">
          <label
            htmlFor="adults"
            className="text-muted mb-2 font-sans text-xs tracking-[0.15em] uppercase"
          >
            {t("adults")}
          </label>
          <select
            id="adults"
            name="adults"
            className="border-taupe text-dark focus:border-dark mt-auto w-full border-b bg-transparent py-3 font-sans text-sm transition-colors outline-none"
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col">
          <label
            htmlFor="children"
            className="text-muted mb-2 font-sans text-xs tracking-[0.15em] uppercase"
          >
            {t("children")}
          </label>
          <select
            id="children"
            name="children"
            className="border-taupe text-dark focus:border-dark mt-auto w-full border-b bg-transparent py-3 font-sans text-sm transition-colors outline-none"
          >
            {[0, 1, 2, 3, 4].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label
          htmlFor="message"
          className="text-muted mb-2 block font-sans text-xs tracking-[0.15em] uppercase"
        >
          {t("message")}
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder={t("messagePlaceholder")}
          className="border-taupe text-dark focus:border-dark placeholder:text-muted w-full resize-none border-b bg-transparent py-3 font-sans text-sm transition-colors outline-none"
        />
      </div>

      <AnimatePresence>
        {state === "error" && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="rounded border border-red-200 bg-red-50 p-4"
          >
            <p className="font-sans text-sm text-red-800">{t("errorTitle")}</p>
            <p className="mt-1 font-sans text-xs text-red-600">{t("errorMessage")}</p>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="submit"
        disabled={state === "sending"}
        className="border-dark text-dark hover:bg-dark hover:text-cream w-full border px-10 py-4 font-sans text-xs font-medium tracking-[0.2em] uppercase transition-colors disabled:cursor-not-allowed disabled:opacity-50"
      >
        {state === "sending" ? t("sending") : t("submit")}
      </button>
    </form>
  );
}
