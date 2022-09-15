import { Link } from "react-router-dom";
import {
  RiLoginCircleLine,
  RiHome4Fill,
  RiFolderUserFill,
  RiArticleFill,
  RiPriceTag3Fill,
} from "react-icons/ri";
import { MdCategory } from "react-icons/md";

function NavBar() {
  return (
    <nav>
      <div
        className="offcanvas offcanvas-start sidenav"
        tabindex="-1"
        id="offcanvasExample"
        aria-labelledby="offcanvasExampleLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            BLOG Admin
          </h5>
          <Link className="nav-link p-2" to="/login">
            <RiLoginCircleLine 
              className="text-secondary" 
              size={"2rem"} />
          </Link>
        </div>
        <div className="offcanvas-body">
          <ul className="navbar-nav">
            <li className="nav-item p-2">
              <Link className="nav-link p-1" to="/">
                <RiHome4Fill 
                  className="text-secondary me-2" 
                  size={"1.4rem"} />
                <span className="align-bottom">Accueil</span>
              </Link>
            </li>
            <li className="nav-item p-2">
              <Link className="nav-link p-1" to="/accounts">
                <RiFolderUserFill
                  className="text-secondary me-2"
                  size={"1.4rem"}
                />
                <span className="align-bottom">Utilisateurs</span>
              </Link>
            </li>
            <li className="nav-item p-1">
              <Link className="nav-link p-2" to="/articles">
                <RiArticleFill
                  className="text-secondary me-2"
                  size={"1.4rem"}
                />
                <span className="align-bottom">Articles</span>
              </Link>
            </li>
            <li className="nav-item p-1">
              <Link className="nav-link p-2" to="/themes">
                <MdCategory 
                  className="text-secondary me-2" 
                  size={"1.4rem"} />
                <span className="align-bottom">Thèmes</span>
              </Link>
            </li>
            <li className="nav-item p-1">
              <Link className="nav-link p-2" to="/tags">
                <RiPriceTag3Fill
                  className="text-secondary me-2"
                  size={"1.4rem"}
                />
                <span className="align-bottom">Tags</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default NavBar;