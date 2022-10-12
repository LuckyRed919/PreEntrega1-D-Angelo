
import CartWidget from './CartWidget/CartWidget';
import "./NavBar.scss";

const Navbar = () => {
    
        return (
            <nav className='NavBar'>
                <h1>DripShoes</h1>
                <ul className='CategoryButtom'>
                    <li className='items'>
                        <a href="https://google.com">Productos</a>
                    </li>
                    <li className='items'>
                        <a href="https://google.com">Nosotros</a>
                    </li>
                    <li className='items'>
                        <a href="https://google.com">Contacto</a>
                    </li>
                </ul>
                <CartWidget/>
            </nav>
        )
};


export default Navbar;