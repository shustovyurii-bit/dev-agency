"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

const typedWords = ["стратегии", "рекламу", "цифровой рост", "результат"];

function useTypewriter(words: string[], speed = 75, pause = 2000) {
  const [displayed, setDisplayed] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const word = words[wordIndex];
    if (typing) {
      if (displayed.length < word.length) {
        const t = setTimeout(() => setDisplayed(word.slice(0, displayed.length + 1)), speed);
        return () => clearTimeout(t);
      } else {
        const t = setTimeout(() => setTyping(false), pause);
        return () => clearTimeout(t);
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), speed / 2);
        return () => clearTimeout(t);
      } else {
        setWordIndex((i) => (i + 1) % words.length);
        setTyping(true);
      }
    }
  }, [displayed, typing, wordIndex, words, speed, pause]);

  return displayed;
}

export default function Hero() {
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();
  const blob1Y = useTransform(scrollY, [0, 600], [0, -140]);
  const blob2Y = useTransform(scrollY, [0, 600], [0, -70]);
  const photoY = useTransform(scrollY, [0, 600], [0, 80]);

  const typed = useTypewriter(typedWords);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-white pt-20"
    >
      {/* Aurora background */}
      <motion.div style={{ y: blob1Y }} className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="aurora-blob-1 absolute -top-40 -right-40 w-[750px] h-[550px] rounded-full opacity-50"
          style={{ background: "linear-gradient(135deg,#BAE6FD,#7DD3FC,#38BDF8)", filter: "blur(90px)" }}
        />
        <div
          className="aurora-blob-2 absolute top-1/2 -left-56 w-[600px] h-[420px] rounded-full opacity-30"
          style={{ background: "linear-gradient(135deg,#E0F2FE,#BAE6FD,#A5B4FC)", filter: "blur(80px)" }}
        />
      </motion.div>
      <motion.div style={{ y: blob2Y }} className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="aurora-blob-3 absolute -bottom-32 right-1/4 w-[520px] h-[380px] rounded-full opacity-35"
          style={{ background: "linear-gradient(225deg,#7DD3FC,#93C5FD,#C4B5FD)", filter: "blur(85px)" }}
        />
      </motion.div>

      <div className="relative max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <motion.span
            custom={0}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="inline-block mb-4 px-4 py-1.5 bg-brand-50 text-brand-600 text-sm font-body font-medium rounded-full border border-brand-200"
          >
            Маркетинговое агентство
          </motion.span>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-heading font-bold text-5xl md:text-6xl lg:text-7xl text-text-primary leading-tight mb-6"
          >
            Маркетинг,{" "}
            <span className="bg-gradient-to-r from-brand-400 via-sky-400 to-brand-600 bg-[length:200%_auto] animate-gradient-shift bg-clip-text text-transparent">
              который работает
            </span>{" "}
            на результат
          </motion.h1>

          {/* Typed text */}
          <motion.p
            custom={2}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="font-body text-lg text-text-secondary leading-relaxed mb-10 max-w-lg"
          >
            Digital SU — создаём{" "}
            <span className="text-brand-500 font-medium">
              {typed}
              <span className="animate-pulse">|</span>
            </span>
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="flex flex-col sm:flex-row gap-4"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center px-8 py-4 bg-brand-500 text-white font-body font-medium rounded-full hover:bg-brand-600 transition-colors shadow-lg shadow-brand-200"
            >
              Начать сотрудничество
            </motion.a>
            <motion.a
              href="#portfolio"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-brand-500 text-brand-500 font-body font-medium rounded-full hover:bg-brand-50 transition-colors"
            >
              Наши кейсы
            </motion.a>
          </motion.div>
        </div>

        {/* Visual card */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="hidden md:block"
        >
          <div className="relative rounded-3xl overflow-hidden shadow-xl">
            {/* Photo with parallax */}
            <div className="relative h-64 w-full overflow-hidden">
              <motion.img
                style={{ y: photoY }}
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop&auto=format"
                alt="Команда Digital SU"
                className="w-full h-[130%] object-cover"
              />
              <div className="absolute inset-0 bg-brand-600/20" />
            </div>

            {/* Stats overlay */}
            <div className="bg-brand-50 border border-brand-100 p-6">
              <div className="grid grid-cols-3 gap-3 mb-3">
                {[
                  { label: "Направлений работы", value: "6" },
                  { label: "Часов до запуска", value: "48" },
                  { label: "Поддержка клиентов", value: "24/7" },
                ].map((stat) => (
                  <div key={stat.label} className="bg-white rounded-2xl p-4 border border-border">
                    <div className="font-heading font-bold text-2xl text-brand-500 mb-0.5">{stat.value}</div>
                    <div className="font-body text-xs text-text-secondary">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="bg-brand-500 rounded-2xl p-4 text-white">
                <div className="font-body text-sm opacity-80 mb-0.5">Скидка первым 10 клиентам</div>
                <div className="font-heading font-bold text-3xl">−20%</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
