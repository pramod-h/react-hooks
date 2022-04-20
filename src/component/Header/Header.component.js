import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="navBar">
            <Link className='header-link' to='/'>
                Home
            </Link>
            <Link className='header-link' to='/books'>
                Books
            </Link>
        </div>
    );
}

export default Header;