import React from "react";
import "./Navbar.css";
// import logo from '../../assets/Travel-Icon-PNG-HD.png'
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar({ logged }) {
  const router = useRouter();
  function disconnect() {
    localStorage.removeItem("token");
    router.push("/login");
  }
  return (
    <nav className="container">
      <img alt="" className="logo" />
      <ul>
        <li>Acceuil</li>
        <li>Gerer la reservation</li>
        {logged ? (
          <button className="btn" onClick={disconnect}>
            Se deconnecter
          </button>
        ) : (
          <li>
            <Link href="/login" className="btn">
              Se connecter
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
}
