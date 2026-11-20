import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-inner">
        <p>Feito com curiosidade e café por João Vitor.</p>
        <Link href="/projetos">Conheça meus projetos <span aria-hidden="true">↗</span></Link>
      </div>
    </footer>
  );
}
