"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Countdown } from "./countdown";

export function Hero() {
  const t = useTranslations("home");

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center bg-warm-white overflow-hidden pt-16">
      <div className="absolute inset-0 bg-[url('/images/hero-placeholder.jpg')] bg-cover bg-center opacity-20" />

      <div className="relative z-10 text-center px-6 flex flex-col items-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-sans text-xs tracking-[0.3em] uppercase text-muted mb-6"
        >
          {t("subtitle")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="font-serif text-5xl md:text-7xl lg:text-8xl font-light text-dark leading-tight"
        >
          {t("names")}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="font-serif text-2xl md:text-3xl font-light text-muted mt-6 tracking-[0.15em]"
        >
          {t("date")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.3 }}
          className="mt-12"
        >
          <Countdown />
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.8 }}
        className="absolute bottom-8"
      >
        <div className="w-px h-12 bg-taupe/50 mx-auto animate-pulse" />
      </motion.div>
    </section>
  );
}
