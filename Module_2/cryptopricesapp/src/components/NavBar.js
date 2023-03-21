import {Link} from 'react-router-dom';

function NavBar() {
    return (
        <nav className='nav'>
            <Link to='/'>
                <div>CRYPO PRICES</div>
            </Link>

            <Link to='/currencies'>
                <div>CURRENCIES</div>
            </Link>
        </nav>
    )
}

export default NavBar;