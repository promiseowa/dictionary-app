import React from "react";
import { GoMarkGithub } from "react-icons/go";

import "./footer.scss";

const Footer = () => {
  return (
    <footer className="Footer">
      <p className="built_by">
        <a
          href="https://github.com/promiseowa/dictionary-app"
          target="_blank"
          rel="noreferrer"
        >
          <GoMarkGithub className="icon" /> source-code
        </a>
        by Promise Owa
      </p>
    </footer>
  );
};

export default Footer;
