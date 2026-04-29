"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";

const stats = [
  { to: 10, suffix: "+", label: "Технологий в стеке" },
  { to: 30, suffix: " дн", label: "До запуска MVP" },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.15, ease: "easeOut" as const },
  }),
};

function Counter({ to, suffix, duration = 1600 }: { to: number; suffix: string; duration?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * to));
      if (progress < 1) requestAnimationFrame(step);
      else setCount(to);
    };
    requestAnimationFrame(step);
  }, [isInView, to, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

export default function About() {
  const photoRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: photoRef, offset: ["start end", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <section id="about" className="py-24 bg-brand-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } }, hidden: {} }}
          >
            <motion.span
              custom={0}
              variants={fadeUp}
              className="inline-block mb-4 px-4 py-1.5 bg-brand-100 text-brand-600 text-sm font-body font-medium rounded-full"
            >
              Кто мы
            </motion.span>

            <motion.h2
              custom={1}
              variants={fadeUp}
              className="font-heading font-semibold text-4xl md:text-5xl text-text-primary leading-tight mb-6"
            >
              Пишем код,{" "}
              <span className="bg-gradient-to-r from-brand-400 via-sky-400 to-brand-600 bg-[length:200%_auto] animate-gradient-shift bg-clip-text text-transparent">
                который работает на вас
              </span>
            </motion.h2>

            <motion.p custom={2} variants={fadeUp} className="font-body text-text-secondary text-lg leading-relaxed mb-4">
              Dev Agency — команда разработчиков, дизайнеров и архитекторов,
              объединённых одной целью: создавать ПО, которое решает реальные
              задачи бизнеса.
            </motion.p>
            <motion.p custom={3} variants={fadeUp} className="font-body text-text-secondary text-lg leading-relaxed mb-4">
              Мы не просто пишем код — мы разбираемся в вашем продукте,
              предлагаем оптимальную архитектуру и выстраиваем процесс
              разработки, который даёт результат в срок.
            </motion.p>
            <motion.p custom={4} variants={fadeUp} className="font-body text-text-secondary text-lg leading-relaxed">
              За плечами команды — проекты в стартапах, e-commerce и
              корпоративном секторе. Первым клиентам предлагаем бесплатную
              техническую консультацию.
            </motion.p>
          </motion.div>

          {/* Photo + Stats */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={{ visible: { transition: { staggerChildren: 0.15 } }, hidden: {} }}
            className="flex flex-col gap-6"
          >
            <motion.div
              custom={0}
              variants={fadeUp}
              ref={photoRef}
              className="relative rounded-3xl overflow-hidden h-64 shadow-md"
            >
              <motion.img
                style={{ y: photoY }}
                src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=500&fit=crop&auto=format"
                alt="Разработчик за работой"
                className="w-full h-[130%] object-cover"
              />
              <div className="absolute inset-0 bg-brand-500/10" />
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, i) => (
                <motion.div
                  key={stat.label}
                  custom={i + 1}
                  variants={fadeUp}
                  className="bg-white rounded-2xl p-5 border border-border shadow-sm text-center"
                >
                  <div className="font-heading font-bold text-3xl text-brand-500 mb-1">
                    <Counter to={stat.to} suffix={stat.suffix} />
                  </div>
                  <div className="font-body text-text-secondary text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
