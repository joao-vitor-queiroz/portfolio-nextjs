export const metadata = { title: "Experiência Acadêmica" };

const skills = ["HTML5", "CSS3", "JavaScript", "React", "Next.js", "Python", "SQL", "Git / GitHub", "Scrum", "Kanban"];

export default function AcademicPage() {
  return (
    <div className="container page-shell">
      <header className="page-heading">
        <p className="eyebrow">Formação</p>
        <h1>Experiência <span className="heading-period">acadêmica.</span></h1>
        <p className="page-lead">Minha formação em Sistemas para Internet na UNICAP.</p>
      </header>

      <section className="timeline-section">
        <h2 className="section-title">Minha formação</h2>
        <div className="timeline">
          <article className="timeline-item">
            <span className="timeline-marker" aria-hidden="true" />
            <div className="timeline-card">
              <p className="timeline-date">2025.2 — atualmente <span className="tag">3º período</span></p>
              <h3>Graduação Tecnológica em Sistemas para Internet</h3>
              <p className="timeline-place">Universidade Católica de Pernambuco (UNICAP) · Embarque Digital</p>
              <p className="body-copy">Formação voltada à criação e evolução de soluções para a web. Tenho desenvolvido conhecimentos em desenvolvimento web, arquitetura de software, banco de dados e engenharia de requisitos.</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section-spacing skills-section">
        <div className="section-heading">
          <p className="eyebrow">Tecnologias</p>
          <h2>Competências e ferramentas</h2>
          <p className="body-copy">Tecnologias e práticas que venho aprendendo na faculdade e aplicando nos projetos.</p>
        </div>
        <div className="tag-list">
          {skills.map((skill) => <span className="tag tag-large" key={skill}>{skill}</span>)}
        </div>
      </section>
    </div>
  );
}
