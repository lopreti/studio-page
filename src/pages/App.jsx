import React, { useState } from "react";
import styles from "./App.module.css";
import {
  Menu,
  X,
  MessageCircle,
  Star,
  MapPin,
  Phone,
  Clock,
} from "lucide-react";
import { Link } from "react-router-dom";
import { services } from "../servicos/servicos";

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Imagens Moodboard organizadas de forma neutra/vazia/estética clean
  const galleryImages = [
    "https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&w=600",
    "https://images.unsplash.com/photo-1621184455862-c163dfb30e0f?q=80&w=600",
    "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=600",
    "https://images.unsplash.com/photo-1583001931096-959e9a1a6223?q=80&w=600",
    "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?q=80&w=600",
    "https://images.unsplash.com/photo-1508746829417-e6f548d8d6ed?q=80&w=600",
  ];

  const whatsappUrl =
    "https://wa.me/5511999999999?text=Olá, Isabella. Gostaria de verificar a disponibilidade de horários para atendimento.";

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        {/* Identidade Visual fiel ao Canva do Studio */}
        <a href="#inicio" className={styles.logoContainer}>
          <div className={styles.logoCircle}>
            <span>IL</span>
          </div>
          <div className={styles.logoText}>
            <h2>Isabella Lopreti</h2>
            <span>S T U D I O</span>
          </div>
        </a>

        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <a href="#inicio" onClick={() => setMenuOpen(false)}>
            Início
          </a>
          <a href="#sobre" onClick={() => setMenuOpen(false)}>
            O Studio
          </a>
          <a href="#servicos" onClick={() => setMenuOpen(false)}>
            Serviços
          </a>
          <a href="#contato" onClick={() => setMenuOpen(false)}>
            Contato
          </a>
        </nav>

        <button
          className={styles.menuBtn}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      <section id="inicio" className={styles.hero}>
        <div>
          <h1>
            A elegância discreta de uma beleza <span>atemporal</span>
          </h1>
          <p>
            Especialistas no design de cílios, alongamento de unhas estruturadas
            e terapias de saúde capilar. Unimos precisão técnica e minimalismo
            focado em você.
          </p>
          <a href={whatsappUrl} className={styles.cta}>
            Agendar Atendimento
          </a>
        </div>
        <div
          className={styles.heroImage}
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1000')`,
          }}
        />
      </section>

      <section id="sobre" className={styles.about}>
        <div
          className={styles.photoPlaceholder}
          style={{ backgroundImage: `url('/studio-foto.jpg')` }} // Caminho direto para a pasta public
        />
        <div>
          <h2>O Studio</h2>
          <p>
            Desenvolvemos o Studio Isabella Lopreti focado na descompressão
            urbana e no autocuidado premium. Nossa curadoria exclui excessos
            artificiais para focar no design limpo e duradouro.
          </p>
          <p>
            Com foco total em cílios, unhas e cabelos, oferecemos uma
            experiência restrita a poucas clientes por dia, garantindo a
            aplicação meticulosa de cada técnica e materiais rigorosamente
            selecionados.
          </p>
        </div>
      </section>

      <section id="servicos" className={styles.services}>
        <h2>Procedimentos Disponíveis</h2>

        <div className={styles.grid}>
          {services.map((s) => (
            <Link
              key={s.title}
              to={`/servicos/${s.slug}`}
              className={styles.card}
            >
              <div
                className={styles.serviceImage}
                style={{ backgroundImage: `url(${s.img})` }}
              />
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.testimonials}>
        <h2>Feedbacks</h2>
        <div className={styles.grid}>
          {[
            {
              name: "Helena V.",
              text: "O design de cílios do estúdio mudou completamente minha rotina de trabalho. Extremamente confortável.",
            },
            {
              name: "Larissa F.",
              text: "O melhor alongamento em gel que já fiz. Unhas finas, elegantes e impecáveis por semanas.",
            },
            {
              name: "Sofia T.",
              text: "Ambiente muito discreto, calmo e atendimento cirúrgico. Meu cabelo nunca esteve tão saudável.",
            },
          ].map((item, i) => (
            <div key={i} className={styles.card}>
              <div>
                {[...Array(5)].map((_, x) => (
                  <Star key={x} size={12} style={{ marginRight: "3px" }} />
                ))}
              </div>
              <p
                style={{
                  marginTop: "1.2rem",
                  fontStyle: "italic",
                  fontSize: "0.9rem",
                }}
              >
                "{item.text}"
              </p>
              <span
                style={{
                  display: "block",
                  marginTop: "1.2rem",
                  color: "var(--rose-gold)",
                  fontSize: "0.75rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                }}
              >
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section id="contato" className={styles.location}>
        <h2>Atendimento no Espaço</h2>
        <div className={styles.mapPlaceholder}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58535.91458925232!2d-46.8123284!3d-23.5323974!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cbbcbf73ff75c1%3A0x2d17961ae85cb5d7!2sOsasco%20-%20SP!5e0!3m2!1spt-BR!2sbr!4v1717282800000!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            title="Mapa do Studio Isabella Lopreti"
          />
        </div>
        <div className={styles.contactInfo}>
          <p>
            <MapPin size={14} /> Osasco - SP
          </p>
          <p>
            <Phone size={14} /> (11) 99999-9999
          </p>
          <p>
            <Clock size={14} /> Terça a Sábado — 09h às 19h
          </p>
        </div>
      </section>

      <footer className={styles.footer}>
        <p>© 2026 Isabella Lopreti Studio. Direitos Reservados.</p>
      </footer>

      <a
        href={whatsappUrl}
        className={styles.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <MessageCircle size={22} />
      </a>
    </div>
  );
}
