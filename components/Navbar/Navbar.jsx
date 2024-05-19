import React from "react";
import "./Navbar.css";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Navbar({ logged }) {
  const router = useRouter();
  function disconnect() {
    localStorage.removeItem("token");
    router.push("/login");
  }
  return (
    <nav>
      <img width="150px" src="/saffff.png" className="logo" />
      <ul>
        <li>
          <Link href="/">Acceuil</Link>
        </li>
        <li>
          <Link href="/reserver">Gerer la reservation</Link>
        </li>
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
