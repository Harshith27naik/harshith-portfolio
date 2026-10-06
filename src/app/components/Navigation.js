import Link from "next/link";

const Navigation = () => {
  return (
    <nav className="navbar">
      <h2 className="logo">Harshith S</h2>

      <div className="nav-links">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/skills">Skills</Link>
        <Link href="/projects">Projects</Link>
        <Link href="/contact">Contact</Link>
      </div>
    </nav>
  );
};

export default Navigation;