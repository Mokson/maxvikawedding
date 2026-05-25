"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { submitRsvp } from "@/actions/rsvp";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

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
        <h3 className="text-foreground mb-4 font-serif text-3xl font-light">
          {t("successTitle")}
        </h3>
        <p className="text-muted-foreground mb-8 font-sans text-sm">{t("successMessage")}</p>
        <button
          onClick={() => setState("idle")}
          className="text-muted-foreground hover:text-foreground font-sans text-xs tracking-[0.15em] uppercase underline underline-offset-4 transition-colors"
        >
          {t("sendAnother")}
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="space-y-2">
        <Label
          htmlFor="name"
          className="text-muted-foreground font-sans text-xs tracking-[0.15em] uppercase"
        >
          {t("name")}
        </Label>
        <Input id="name" name="name" type="text" required />
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="email"
          className="text-muted-foreground font-sans text-xs tracking-[0.15em] uppercase"
        >
          {t("email")}
        </Label>
        <Input id="email" name="email" type="email" required />
      </div>

      <div className="space-y-4">
        <p className="text-muted-foreground font-sans text-xs tracking-[0.15em] uppercase">
          {t("attending")}
        </p>
        <RadioGroup name="attending" required className="grid grid-cols-2 gap-4">
          {[
            { value: "yes", label: t("yes") },
            { value: "no", label: t("no") },
          ].map((opt) => (
            <label key={opt.value} className="cursor-pointer">
              <RadioGroupItem value={opt.value} className="peer sr-only" />
              <span
                data-slot="radio-card"
                className="text-muted-foreground peer-data-[state=checked]:border-foreground peer-data-[state=checked]:text-foreground block border py-3 text-center font-sans text-xs tracking-[0.15em] uppercase transition-colors"
              >
                {opt.label}
              </span>
            </label>
          ))}
        </RadioGroup>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label className="text-muted-foreground font-sans text-xs tracking-[0.15em] uppercase">
            {t("adults")}
          </Label>
          <Select name="adults" defaultValue="1">
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[1, 2, 3, 4, 5].map((n) => (
                <SelectItem key={n} value={String(n)}>
                  {n}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label className="text-muted-foreground font-sans text-xs tracking-[0.15em] uppercase">
            {t("children")}
          </Label>
          <Select name="children" defaultValue="0">
            <SelectTrigger className="w-full">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              {[0, 1, 2, 3, 4].map((n) => (
                <SelectItem key={n} value={String(n)}>
                  {n}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="dietary"
          className="text-muted-foreground font-sans text-xs tracking-[0.15em] uppercase"
        >
          {t("dietary")}
        </Label>
        <Input id="dietary" name="dietary" type="text" placeholder={t("dietaryPlaceholder")} />
      </div>

      <div className="space-y-2">
        <Label
          htmlFor="message"
          className="text-muted-foreground font-sans text-xs tracking-[0.15em] uppercase"
        >
          {t("message")}
        </Label>
        <Textarea
          id="message"
          name="message"
          rows={4}
          placeholder={t("messagePlaceholder")}
          className="resize-none"
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

      <Button
        type="submit"
        disabled={state === "sending"}
        className="h-auto w-full py-4 font-sans text-xs tracking-[0.2em] uppercase"
      >
        {state === "sending" ? t("sending") : t("submit")}
      </Button>
    </form>
  );
}
