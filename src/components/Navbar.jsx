import Link from "next/link";

const links = [
  { href: "/", label: "Início" },
  { href: "/sobre", label: "Sobre" },
  { href: "/academico", label: "Acadêmico" },
  { href: "/profissional", label: "Profissional" },
  { href: "/projetos", label: "Projetos" },
];

export default function Navbar() {
  return (
    <header className="site-header">
      <nav className="navbar container" aria-label="Navegação principal">
        <Link className="brand" href="/" aria-label="João Vitor, página inicial">
          <span>João Vitor</span>
        </Link>
        <div className="nav-links">
          {links.map((link) => (
            <Link className="nav-link" href={link.href} key={link.href}>
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
}
