import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  console.log(links);
  return (
    <nav>
      <a href="#home" key={links.id}>
        Home
      </a>
      <a href="#about" key={links.id}>
        About
      </a>
      <a href="#projects" key={links.id}>
        Projects
      </a>
    </nav>
  );
}

export default NavBar;
