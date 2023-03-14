

function Header(props) {
    const {shoppingCart} = props;
    return (
        <header>
            <h1>Nike Store</h1>
            <p>Shopping Cart: {shoppingCart.length}</p>
        </header>
    )
}

export default Header;