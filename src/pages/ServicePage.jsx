import { useParams, Link } from "react-router-dom";
import { services } from "../servicos/servicos";
import styles from "./ServicePage.module.css";

export default function ServicePage() {
  const { slug } = useParams();

  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return <p className={styles.notFound}>Serviço não encontrado.</p>;
  }

  const whatsappUrl = `https://wa.me/5511999999999?text=${encodeURIComponent(
    `Olá, gostaria de agendar um horário para: ${service.title}`
  )}`;

  return (
    <main className={styles.page}>
      <Link to="/" className={styles.backLink}>
        Voltar
      </Link>

      <section className={styles.hero}>
        <div className={styles.heroText}>
          <h1>{service.title}</h1>
          <p>{service.desc}</p>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.whatsappButton}
          >
            Agendar pelo WhatsApp
          </a>
        </div>

        <div className={styles.priceBox}>
          <h2>Tabela de preços</h2>

          <table className={styles.priceTable}>
            <tbody>
              {service.precos.map((preco) => (
                <tr key={preco.nome}>
                  <td>{preco.nome}</td>
                  <td>{preco.valor}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className={styles.section}>
        <h2>Fotos do serviço</h2>

        <div className={styles.carousel}>
          {service.fotos.map((foto, index) => (
            <img
              key={index}
              className={styles.photo}
              src={foto}
              alt={`${service.title} ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </main>
  );
}