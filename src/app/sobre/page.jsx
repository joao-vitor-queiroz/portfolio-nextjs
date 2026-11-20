export const metadata = { title: "Sobre" };

const technologies = [
  { name: "Next.js", detail: "App Router e Server Components" },
  { name: "React", detail: "Componentes e interfaces" },
  { name: "CSS3", detail: "Grid, Flexbox e transições" },
  { name: "GitHub REST API", detail: "Integração com repositórios públicos" },
];

export default function AboutPage() {
  return (
    <div className="container page-shell">
      <header className="page-heading">
        <p className="eyebrow">Sobre mim</p>
        <h1>Sobre mim</h1>
        <p className="page-lead">Sou estudante de Sistemas para Internet na UNICAP e tenho interesse em desenvolvimento web e inteligência artificial.</p>
      </header>

      <section className="about-copy content-narrow">
        <h2>Minha trajetória</h2>
        <p>Curso Sistemas para Internet na Universidade Católica de Pernambuco (UNICAP), pelo Embarque Digital. Nos estudos e na Residência Tecnológica, trabalho com desenvolvimento de aplicações e projetos em equipe.</p>
        <p>Tenho interesse em desenvolvimento web e inteligência artificial. Quero seguir aprendendo e ganhar experiência criando soluções para problemas reais.</p>
      </section>

      <section className="section-spacing">
        <div className="section-heading">
          <p className="eyebrow">Tecnologias</p>
          <h2>Tecnologias e Módulos Utilizados neste App</h2>
          <p className="body-copy">Ferramentas e recursos utilizados neste site.</p>
        </div>
        <div className="tech-grid">
          {technologies.map((technology, index) => (
            <article className="tech-card" key={technology.name}>
              <span className="tech-index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{technology.name}</h3>
              <p>{technology.detail}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
