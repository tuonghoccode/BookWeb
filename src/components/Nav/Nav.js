import './Nav.css';

function Nav(){
return(
    <div className="nav">
        <div className="nav__logo">
            <img src="https://png.pngtree.com/png-vector/20190303/ourmid/pngtree-modern-abstract-3d-logo-png-image_771012.jpg" alt=""/>
            <h3>Bookster</h3>
        </div>
        <div className="nav__link">
            <a href="#">Categories</a>
            <a href="#">New & Upcoming</a>
            <span className="nav__linkline">|</span>
            <a href="#">Special editions</a>
            <a href="#">Gifts</a>
 
        </div>
        <div className="nav__login">
          <p>Login</p>
        </div>
    </div>
)
}
export default Nav;