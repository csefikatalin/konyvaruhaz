import { Outlet, Link } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm  bg-dark  navbar-dark">
                <div className="container-fluid">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">
                                Könyváruház
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin">
                                Admin felület
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
            <article>
                {/* Ide kerül majd az útvonalak/linkek által meghatározott tartalom */}
                <Outlet />
            </article>
        </>
    );
};

export default Layout;
