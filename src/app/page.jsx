import Link from "next/link";

export default function HomePage() {
  return (
    <div className="container home-page">
      <section className="hero">
        <div className="hero-copy">
          <h1>Olá, eu sou João Vitor.</h1>
          <p className="hero-role">Estudante de Sistemas para Internet na UNICAP e desenvolvedor Full Stack em formação.</p>
          <p className="hero-description">
            Faço parte do Embarque Digital e tenho aprendido desenvolvimento web na faculdade e na Residência Tecnológica do Porto Digital.
          </p>
          <p className="home-achievement">1º lugar no Demoday do Porto Digital com o Squad 48.</p>
          <div className="hero-actions">
            <Link className="button button-primary" href="/projetos">Projetos</Link>
            <Link className="button button-outline" href="/profissional">Experiência profissional</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
