"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const guarantees = [
  {
    emoji: "💻",
    title: "Код навсегда ваш",
    category: "Права на исходники",
    text: "Передаём все исходники и документацию после завершения проекта. Никакой зависимости от нас — развивайте продукт сами или с другой командой.",
    bg: "bg-brand-50",
    color: "text-brand-500",
  },
  {
    emoji: "🎯",
    title: "Фиксированная стоимость",
    category: "Финансовые гарантии",
    text: "Обсуждаем бюджет до старта и строго придерживаемся договорённостей. Никаких скрытых платежей и неожиданных счетов.",
    bg: "bg-sky-50",
    color: "text-sky-500",
  },
  {
    emoji: "🔄",
    title: "Agile-разработка",
    category: "Процесс",
    text: "Работаем спринтами по 2 недели. Вы всегда видите текущий прогресс, демо после каждого спринта и можете менять приоритеты.",
    bg: "bg-indigo-50",
    color: "text-indigo-500",
  },
  {
    emoji: "🛡️",
    title: "Гарантийная поддержка",
    category: "После запуска",
    text: "3 месяца бесплатной поддержки после релиза. Исправляем баги и помогаем с мелкими доработками без дополнительных счетов.",
    bg: "bg-amber-50",
    color: "text-amber-500",
  },
];

export default function Reviews() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + guarantees.length) % guarantees.length);
  const next = () => setCurrent((c) => (c + 1) % guarantees.length);

  return (
    <section id="reviews" className="py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1.5 bg-brand-100 text-brand-600 text-sm font-body font-medium rounded-full">
            Наши гарантии
          </span>
          <h2 className="font-heading font-semibold text-4xl md:text-5xl text-text-primary leading-tight">
            Почему{" "}
            <span className="text-brand-500">нам можно доверять</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white rounded-3xl border border-border p-10 shadow-sm"
              >
                <div className={`w-16 h-16 ${guarantees[current].bg} rounded-2xl flex items-center justify-center text-3xl mb-6`}>
                  {guarantees[current].emoji}
                </div>

                <p className="font-body text-text-primary text-xl leading-relaxed mb-8">
                  {guarantees[current].text}
                </p>

                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 ${guarantees[current].bg} ${guarantees[current].color} rounded-full flex items-center justify-center flex-shrink-0`}>
                    <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-heading font-semibold text-text-primary">
                      {guarantees[current].title}
                    </div>
                    <div className="font-body text-sm text-text-secondary">
                      {guarantees[current].category}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="flex items-center justify-center gap-6 mt-8">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-brand-500 hover:text-brand-500 transition-colors"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <div className="flex gap-2">
              {guarantees.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`w-2.5 h-2.5 rounded-full transition-colors ${
                    i === current ? "bg-brand-500" : "bg-brand-200"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-brand-500 hover:text-brand-500 transition-colors"
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
