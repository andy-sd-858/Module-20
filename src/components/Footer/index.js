import React from "react";
import "./style.css";

function Footer() {
  return (
    <footer class="page-footer fixed-bottom font-small special-color-dark pt-5">
      <div class="container">
        <ul class="list-unstyled list-inline text-center">
          <li class="list-inline-item">
            <a
              class="btn-floating btn-fb mx-2"
              href="https://github.com/andy-sd-858"
            >
              <i class="fab fa-github"> </i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
