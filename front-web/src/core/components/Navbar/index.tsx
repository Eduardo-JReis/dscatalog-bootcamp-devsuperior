import './styles.scss';

export const NavBar = () => (
    <nav className="row bg-primary main-nav">
        <div className="col-2">
            <a className="nav-logo-text" href="">
                <h4>DS Catalog</h4>
            </a>
        </div>
        <div className="col-6 offset-2">
            <ul className="main-menu">
                <li><a href="http://" className="active">HOME</a></li>
                <li><a href="http://">CATALOGO</a></li>
                <li><a href="http://">ADMIN</a></li>
            </ul>
        </div>

        
    </nav>
);
