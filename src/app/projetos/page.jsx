import Link from "next/link";

export const metadata = { title: "Projetos" };

const githubReposUrl = "https://api.github.com/users/joao-vitor-queiroz/repos?sort=updated";

async function getRepositories() {
  try {
    const response = await fetch(githubReposUrl, {
      headers: { Accept: "application/vnd.github+json" },
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return { repositories: [], error: `A API do GitHub respondeu com status ${response.status}.` };
    }

    const data = await response.json();
    if (!Array.isArray(data)) {
      return { repositories: [], error: "A resposta da API do GitHub veio em um formato inesperado." };
    }

    return {
      repositories: data.filter((repo) => !repo.fork),
      error: null,
    };
  } catch (error) {
    console.error("Não foi possível carregar os repositórios do GitHub:", error);
    return { repositories: [], error: "Não foi possível conectar à API do GitHub agora. Tente novamente mais tarde." };
  }
}

function FeaturedProject({ number, name, subtitle, description, achievement, tags }) {
  return (
    <article className="featured-card">
      <div className="featured-topline"><span>Projeto em destaque</span><span className="featured-number">{number}</span></div>
      <p className="eyebrow">{subtitle}</p>
      <h3>{name}</h3>
      <p className="body-copy">{description}</p>
      <div className="project-achievement"><span aria-hidden="true">✦</span>{achievement}</div>
      <div className="tag-list">
        {tags.map((tag) => <span className="tag" key={tag}>{tag}</span>)}
      </div>
    </article>
  );
}

export default async function ProjectsPage() {
  const { repositories, error } = await getRepositories();

  return (
    <div className="container page-shell">
      <header className="page-heading">
        <p className="eyebrow">Projetos</p>
        <h1>Projetos <span className="heading-period">desenvolvidos.</span></h1>
        <p className="page-lead">Projetos que desenvolvi na Residência Tecnológica e nos meus estudos.</p>
      </header>

      <section>
        <div className="section-heading">
          <p className="eyebrow">Porto Digital · UNICAP</p>
          <h2>Projetos em Destaque (Residência Tecnológica)</h2>
        </div>
        <div className="featured-grid">
          <FeaturedProject
            number="01"
            subtitle="Residência Tecnológica · Squad 48"
            name="Avança Fácil"
            description="Aplicativo de alfabetização de adultos que combina uma experiência gamificada com inteligência artificial para apoiar a jornada de aprendizagem."
            achievement="1º lugar no Demoday da Residência Tecnológica, entre 49 equipes."
            tags={["Educação", "Gamificação", "Inteligência artificial"]}
          />
          <FeaturedProject
            number="02"
            subtitle="Residência RiseUp · Beyond Co."
            name="Cultura.app"
            description="Aplicativo gamificado para descobrir eventos culturais gratuitos e ajudar a democratizar o acesso à cultura."
            achievement="Projeto selecionado para o Coday."
            tags={["Cultura", "Aplicativo", "Acesso gratuito"]}
          />
        </div>
      </section>

      <section className="repositories-section section-spacing">
        <div className="section-heading repo-heading">
          <div>
            <p className="eyebrow">Código aberto</p>
            <h2>Repositórios no GitHub</h2>
          </div>
          <Link className="text-link" href="https://github.com/joao-vitor-queiroz" target="_blank" rel="noreferrer">
            Meu perfil no GitHub <span aria-hidden="true">↗</span>
          </Link>
        </div>

        {error ? (
          <p className="notice-card" role="status">{error}</p>
        ) : repositories.length === 0 ? (
          <p className="notice-card">Nenhum repositório público encontrado por enquanto.</p>
        ) : (
          <div className="repo-grid">
            {repositories.map((repo) => (
              <article className="repo-card" key={repo.id}>
                <div className="repo-card-top">
                  <span className="repo-icon" aria-hidden="true">⌘</span>
                  <span className="repo-stars">☆ {repo.stargazers_count}</span>
                </div>
                <h3><Link href={repo.html_url} target="_blank" rel="noreferrer">{repo.name}<span aria-hidden="true"> ↗</span></Link></h3>
                <p className="body-copy">{repo.description || "Repositório sem descrição."}</p>
                <div className="repo-language"><span className="language-dot" />{repo.language || "Linguagem não informada"}</div>
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
