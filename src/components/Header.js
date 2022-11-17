import React, { useState } from "react";
import { Link } from "react-router-dom";

function Header(props) {
  const [shown, setShown] = useState(false);

  return (
    <body id="body">
      <header>
        <h1>Marianne Seiwert</h1>
        <ul>
          <li>
            <Link to="/penelopeundercover.github.io/">About</Link>
          </li>
          <li>
            <Link to="/penelopeundercover.github.io/projects">Projects</Link>
          </li>

          {/* Future: Set up the pdf viewer for resume. Use resume.js or data.js or however it should be. https://react-pdf-viewer.dev/docs/basic-usage/*/}
          {/* https://react-pdf-viewer.dev/examples/preview-a-document-inside-a-modal/ */}
          {/* <button onClick={() => setShown(true)}>Resume</button> */}
          <li>
            <Link to="/penelopeundercover.github.io/resume">Resume</Link>
          </li>
          <li>
            <Link to="/penelopeundercover.github.io/contact">Contact</Link>
          </li>
        </ul>
      </header>
    </body>
  );
}

export default Header;
