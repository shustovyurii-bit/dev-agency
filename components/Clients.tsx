"use client";

import { motion } from "framer-motion";

const clients = [
  "Ритейл и e-commerce",
  "Строительство",
  "HoReCa",
  "IT и стартапы",
  "Медицина",
  "Образование",
  "Фитнес и велнес",
  "Недвижимость",
  "Авто и мото",
  "B2B услуги",
];

export default function Clients() {
  const doubled = [...clients, ...clients];

  return (
    <section id="clients" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1.5 bg-brand-50 text-brand-600 text-sm font-body font-medium rounded-full border border-brand-100">
            Ниши, с которыми мы работаем
          </span>
          <h2 className="font-heading font-semibold text-4xl md:text-5xl text-text-primary leading-tight">
            Мы знаем <span className="bg-gradient-to-r from-brand-400 via-sky-400 to-brand-600 bg-[length:200%_auto] animate-gradient-shift bg-clip-text text-transparent">эти рынки</span>
          </h2>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative">
        {/* fade edges */}
        <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="flex animate-marquee gap-6 w-max">
          {doubled.map((name, i) => (
            <div
              key={i}
              className="group flex items-center justify-center rounded-2xl border border-border px-10 py-6 hover:border-brand-300 hover:shadow-sm transition-all cursor-default flex-shrink-0"
            >
              <span className="font-heading font-semibold text-base text-text-secondary group-hover:text-brand-500 transition-colors whitespace-nowrap">
                {name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
