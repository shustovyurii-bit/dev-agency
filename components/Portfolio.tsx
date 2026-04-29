"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Брифинг",
    desc: "Знакомимся, обсуждаем цели бизнеса, изучаем вашу аудиторию и конкурентов. Бесплатная консультация — без обязательств.",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Стратегия",
    desc: "Разрабатываем индивидуальный план продвижения с чёткими KPI, бюджетом и сроками — без шаблонных решений.",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Запуск",
    desc: "Настраиваем рекламные кампании и запускаем контент в течение 48 часов после подписания договора.",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Аналитика",
    desc: "Еженедельные отчёты, оптимизация кампаний и постоянная связь с персональным менеджером.",
    icon: (
      <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <span className="inline-block mb-4 px-4 py-1.5 bg-brand-100 text-brand-600 text-sm font-body font-medium rounded-full">
            Процесс работы
          </span>
          <h2 className="font-heading font-semibold text-4xl md:text-5xl text-text-primary leading-tight">
            Как мы{" "}
            <span className="bg-gradient-to-r from-brand-400 via-sky-400 to-brand-600 bg-[length:200%_auto] animate-gradient-shift bg-clip-text text-transparent">
              работаем
            </span>
          </h2>
        </motion.div>

        {/* Desktop: horizontal steps */}
        <div className="hidden md:grid md:grid-cols-4 gap-6 relative">
          {/* Connecting line */}
          <div className="absolute top-10 left-[12.5%] right-[12.5%] h-px bg-brand-200 z-0" />

          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.12, ease: "easeOut" }}
              className="relative z-10 flex flex-col items-center text-center"
            >
              {/* Circle */}
              <div className="w-20 h-20 rounded-full bg-white border-2 border-brand-200 flex items-center justify-center mb-6 shadow-sm group-hover:border-brand-400 transition-colors">
                <div className="w-12 h-12 bg-brand-50 text-brand-500 rounded-full flex items-center justify-center">
                  {step.icon}
                </div>
              </div>

              <span className="font-heading font-bold text-xs text-brand-400 tracking-widest mb-2">
                {step.number}
              </span>
              <h3 className="font-heading font-semibold text-xl text-text-primary mb-3">
                {step.title}
              </h3>
              <p className="font-body text-text-secondary text-sm leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Mobile: vertical steps */}
        <div className="md:hidden flex flex-col gap-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              className="flex gap-5"
            >
              {/* Left: circle + line */}
              <div className="flex flex-col items-center">
                <div className="w-14 h-14 rounded-full bg-white border-2 border-brand-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                  <div className="w-9 h-9 bg-brand-50 text-brand-500 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                {i < steps.length - 1 && (
                  <div className="w-px flex-1 bg-brand-200 my-2" />
                )}
              </div>

              {/* Right: text */}
              <div className={`pb-8 ${i === steps.length - 1 ? "" : ""}`}>
                <span className="font-heading font-bold text-xs text-brand-400 tracking-widest">
                  {step.number}
                </span>
                <h3 className="font-heading font-semibold text-xl text-text-primary mt-1 mb-2">
                  {step.title}
                </h3>
                <p className="font-body text-text-secondary text-sm leading-relaxed">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-center mt-16"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 text-white font-body font-medium rounded-full hover:bg-brand-600 transition-colors shadow-lg shadow-brand-200"
          >
            Начать бесплатно
            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
