import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <h2>Secrets Resorts and Spa</h2>
      <p>
        &copy; <span>{year}</span> Secrets.com - All Rights Copyright
      </p>
    </footer>
  );
}
