"use client";
import "./page.css";

export default function page() {
  function handleSubmit(e) {
    // Prevent the browser from reloading the page
    e.preventDefault();

    // Read the form data
    const form = e.target;
    const formData = new FormData(form);

    fetch("http://localhost:8080/api/auth/register", {
      method: "post",
      body: formData,
    }).catch((error) => console.log(error));
  }

  return (
    <form method="post" onSubmit={handleSubmit}>
      <div className="register">
        <div className="email">
          <input
            type="email"
            placeholder="donner votre email"
            className="em"
            name="email"
          />
        </div>
        <div className="password">
          <input
            type="password"
            placeholder="password"
            className="pa"
            name="password"
          />
        </div>
        <div className="nom">
          <input
            type="text"
            placeholder="Nom"
            className="pa"
            name="firstname"
          />
        </div>
        <div className="prenom">
          <input
            type="text"
            placeholder="Prenom"
            className="pa"
            name="lastname"
          />
        </div>
        <div className="Image">
          <input type="file" placeholder="Image" className="pa" name="image" />
        </div>
        <button className="btn" type="submit">
          S'inscrire
        </button>
      </div>
    </form>
  );
}
