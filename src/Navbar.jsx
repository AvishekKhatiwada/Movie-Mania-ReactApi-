
const Navbar = ({ brand, item1, item2 }) => {
    return (
        <nav className="navbar navbar-expand-lg">
            {/* <div className="container-fluid"> */}
            <div id="navbarBrand">
                <a className="navbar-brand">{brand ? brand : "MovieMania"}</a>
            </div>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#">{item1 ? item1 : "Home"}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">{item2 ? item2 : "Movies"}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">{item1 ? item1 : "Tv shows"}</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">{item2 ? item2 : "Top Rated"}</a>
                    </li>
                </ul>
            </div>
            {/* </div> */}
        </nav>
    );
}

export default Navbar;