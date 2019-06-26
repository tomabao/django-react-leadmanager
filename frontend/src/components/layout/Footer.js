import React, { Component } from "react";

export class Footer extends Component {
  render() {
    return (
      <footer
        className="text-muted text-center"
        style={{ paddingTop: "3rem", paddingBottom: "3rem" }}
      >
        <div className="container">
          <p>
            Developed by:{" "}
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/kormin"
            >
              Tom
            </a>
          </p>
        </div>
      </footer>
    );
  }
}

export default Footer;
