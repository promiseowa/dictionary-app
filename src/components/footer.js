import React from "react";
import { GoMarkGithub } from "react-icons/go";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <p className="built_by">
        <a
          href="https://github.com/martamd-front/dictionary-react"
          target="_blank"
          rel="noreferrer"
        >
          <GoMarkGithub className="icon" /> Open-source code
        </a>
        by Marta Muñoz
      </p>
    </footer>
  );
};

export default Footer;
