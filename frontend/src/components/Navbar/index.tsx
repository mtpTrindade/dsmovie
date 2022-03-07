import {ReactComponent as GithubIcon} from "../../assets/img/github_logo.svg";
import "./styles.css";

function NavBar () {
    return(
    <header>
      <nav className="container">
        <div className="dsmovie-nav-content">
          <h1>DS MOVIE</h1>
          <a href="https://github.com/mtpTrindade/dsmovie">
            <div className="dsmovie-contact-container">
              <GithubIcon />
              <p className="dsmovie-contact-link">/Matheus Trindade</p>
            </div>
          </a>
        </div>
      </nav>
    </header>
    );

}

export default NavBar;