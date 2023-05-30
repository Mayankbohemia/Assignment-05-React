import "./NavBar.css"
function NavBar() {


    return (
        <div className="container">
            <img src="https://as1.ftcdn.net/v2/jpg/03/66/63/52/1000_F_366635299_S1MlOWCcUVFPwgtxznb89r56tvyBBBVU.jpg" alt="" />
            <div className="nav__links">
                <button className="nav__link home__page">Home</button>
                <button className="nav__link">About</button>
                <button className="nav__link">Menu</button>
                <button className="nav__link">Order</button>
                <button className="nav__link">Contact</button>

            </div>
        </div>
    )

}
export default NavBar