export const metadata = { title: "Experiência Profissional" };

export default function ProfessionalPage() {
  return (
    <div className="container page-shell">
      <header className="page-heading">
        <p className="eyebrow">Trajetória</p>
        <h1>Experiência profissional</h1>
        <p className="page-lead">Meu trabalho e os projetos da Residência Tecnológica.</p>
      </header>

      <section className="timeline-section">
        <h2 className="section-title">Minha trajetória</h2>
        <div className="timeline">
          <article className="timeline-item">
            <span className="timeline-marker" aria-hidden="true" />
            <div className="timeline-card">
              <p className="timeline-date">2025 — atual</p>
              <h3>Jovem Aprendiz</h3>
              <p className="timeline-place">Empresa Brasileira de Correios e Telégrafos</p>
              <p className="body-copy">Atuação em rotinas administrativas e operacionais, organização de processos internos e colaboração com a equipe no dia a dia.</p>
            </div>
          </article>

          <article className="timeline-item">
            <span className="timeline-marker" aria-hidden="true" />
            <div className="timeline-card">
              <p className="timeline-date">2025.2 — atual</p>
              <h3>Residência Tecnológica</h3>
              <p className="timeline-place">Porto Digital / UNICAP · Embarque Digital</p>
              <div className="residency-entry">
                <p className="timeline-date">2º período · 2026.1</p>
                <h4>Residente RiseUp · Beyond Co.</h4>
                <p className="body-copy">Desenvolvimento e prototipação do <strong>Cultura.app</strong>, um aplicativo gamificado de eventos culturais gratuitos para democratizar o acesso à cultura. O projeto foi selecionado para o Coday.</p>
              </div>
              <div className="residency-entry">
                <p className="timeline-date">1º período · 2025.2</p>
                <h4>Residente em Inovação · Squad 48</h4>
                <p className="body-copy">Concepção e desenvolvimento do <strong>Avança Fácil</strong>, aplicativo de alfabetização de adultos com gamificação e inteligência artificial. O projeto conquistou o <strong>1º lugar no Demoday da Residência Tecnológica</strong>, entre 49 equipes.</p>
              </div>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
