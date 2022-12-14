import "./NavBar.scss";

import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
    const totalPrice = useSelector((state) => state.totalPrice);

    return (
        <div className="app__navbar">
            <div className="app__title">
                <h2>
                    <span>Luxury</span> <br />
                    hotels
                </h2>
            </div>
            <div className="nav__links">
                <Link to="/" className="nav__links_button">
                    Rooms
                </Link>
                <Link to="/payment" className="nav__links_button">
                    Payment
                </Link>
            </div>
            <div className="nav__cart">
                <h2 className="price__total">
                    Total price: <br /> ${totalPrice}
                </h2>
                <Link to="/payment" className="buy__button">
                    Buy
                </Link>
            </div>
        </div>
    );
};

export default NavBar;
