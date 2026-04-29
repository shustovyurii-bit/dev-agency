export default function Footer() {
  return (
    <footer className="bg-text-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="font-heading font-bold text-2xl mb-3">
              Digital <span className="text-brand-400">SU</span>
            </div>
            <p className="font-body text-sm text-white/60 leading-relaxed mb-6">
              Молодое агентство с большим опытом команды
            </p>
          </div>

          {/* Nav columns */}
          {[
            {
              title: "Компания",
              links: ["О нас", "Команда", "Специальные условия", "Контакты"],
            },
            {
              title: "Услуги",
              links: ["SMM", "Таргет", "SEO", "Контекст", "Разработка"],
            },
            {
              title: "Контакты",
              links: ["sss.kolesnikova@yandex.ru", "Оставить заявку"],
            },
          ].map((col) => (
            <div key={col.title}>
              <h4 className="font-heading font-semibold text-sm uppercase tracking-widest text-white/40 mb-5">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a href="#" className="font-body text-sm text-white/70 hover:text-white transition-colors">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="font-body text-sm text-white/40">
              © 2026 Digital SU. Все права защищены.
            </p>
            <a href="#" className="font-body text-sm text-white/40 hover:text-white/70 transition-colors">
              Политика конфиденциальности
            </a>
          </div>
          <p className="font-body text-xs text-white/25 text-center sm:text-left">
            ИП Колесникова Светлана Леонидовна · ИНН: 614904854895 · ОГРНИП: 326730000016649
          </p>
        </div>
      </div>
    </footer>
  );
}
