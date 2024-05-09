import React from "react";
import Link from "next/link";
import "./Footer.css";
export default function Footer() {
  return (
    <footer>
      <ul>
        <li>
          <Link href="/">Accueil</Link>
        </li>
        <li>
          <Link href="/login">Se connecter</Link>
        </li>
        <li>
          <Link href="/register">S'incrire</Link>
        </li>
      </ul>
      <div className="footer-img">
        <img src="/g4555-e1604594206164.png"></img>
        <img src="/Fichier-4.png"></img>
      </div>
    </footer>
  );
}
