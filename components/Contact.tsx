"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative py-24 bg-white overflow-hidden">
      {/* Aurora background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="aurora-blob-2 absolute -top-48 -right-48 w-[600px] h-[400px] rounded-full opacity-20"
          style={{ background: "linear-gradient(135deg,#BAE6FD,#7DD3FC,#A5B4FC)", filter: "blur(100px)" }}
        />
        <div
          className="aurora-blob-3 absolute -bottom-32 -left-32 w-[500px] h-[350px] rounded-full opacity-15"
          style={{ background: "linear-gradient(225deg,#E0F2FE,#BAE6FD)", filter: "blur(90px)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block mb-4 px-4 py-1.5 bg-brand-50 text-brand-600 text-sm font-body font-medium rounded-full border border-brand-100">
            Контакты
          </span>
          <h2 className="font-heading font-semibold text-4xl md:text-5xl text-text-primary leading-tight mb-4">
            Готовы обсудить{" "}
            <span className="text-brand-500">ваш проект?</span>
          </h2>
          <p className="font-body text-text-secondary text-lg max-w-xl mx-auto">
            Оставьте заявку и мы свяжемся с вами в течение 1 рабочего дня
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start max-w-5xl mx-auto">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
          >
            {sent ? (
              <div className="bg-brand-50 border border-brand-200 rounded-3xl p-10 text-center">
                <div className="w-16 h-16 bg-brand-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="white" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="font-heading font-semibold text-2xl text-text-primary mb-2">Заявка отправлена!</h3>
                <p className="font-body text-text-secondary">Мы свяжемся с вами в течение 1 рабочего дня</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body text-sm text-text-secondary mb-1.5">Имя *</label>
                    <input
                      type="text"
                      required
                      placeholder="Иван Иванов"
                      className="w-full px-4 py-3 rounded-xl border border-border font-body text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm text-text-secondary mb-1.5">Email *</label>
                    <input
                      type="email"
                      required
                      placeholder="ivan@company.ru"
                      className="w-full px-4 py-3 rounded-xl border border-border font-body text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition"
                    />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-body text-sm text-text-secondary mb-1.5">Телефон *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+7 (999) 000-00-00"
                      className="w-full px-4 py-3 rounded-xl border border-border font-body text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition"
                    />
                  </div>
                  <div>
                    <label className="block font-body text-sm text-text-secondary mb-1.5">Компания</label>
                    <input
                      type="text"
                      placeholder="Digital SU"
                      className="w-full px-4 py-3 rounded-xl border border-border font-body text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-body text-sm text-text-secondary mb-1.5">Сообщение</label>
                  <textarea
                    rows={4}
                    placeholder="Расскажите о вашем проекте..."
                    className="w-full px-4 py-3 rounded-xl border border-border font-body text-text-primary placeholder:text-text-secondary/50 focus:outline-none focus:border-brand-400 focus:ring-2 focus:ring-brand-100 transition resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 bg-brand-500 text-white font-body font-medium rounded-xl hover:bg-brand-600 transition-colors mt-2"
                >
                  Отправить заявку
                </motion.button>
              </form>
            )}
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-6"
          >
            {[
              {
                icon: (
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                  </svg>
                ),
                label: "Email",
                value: "sss.kolesnikova@yandex.ru",
              },
              {
                icon: (
                  <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                label: "Время ответа",
                value: "В течение 1 рабочего дня",
              },
            ].map((item) => (
              <div key={item.label} className="flex items-start gap-4 p-6 rounded-2xl border border-border">
                <div className="w-11 h-11 bg-brand-50 text-brand-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  {item.icon}
                </div>
                <div>
                  <div className="font-body text-sm text-text-secondary mb-0.5">{item.label}</div>
                  <div className="font-heading font-semibold text-text-primary">{item.value}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
