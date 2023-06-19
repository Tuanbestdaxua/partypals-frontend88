import PropTypes from "prop-types";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { connect, useSelector } from "react-redux";
import MenuCart from "./sub-components/MenuCart";
import { deleteFromCart } from "../../redux/actions/cartActions";
import Notifications from "react-notifications-menu";


const IconGroup = ({
  currency,
  cartData,
  wishlistData,
  compareData,
  deleteFromCart,
  iconWhiteClass
}) => {

  const history = useHistory();

  const handleClick = e => {
    e.currentTarget.nextSibling.classList.toggle("active");
  };
  
  const isLogin = localStorage.getItem('access_token') == null ? false : true

  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.add("active");
  };

  const userData = useSelector(
    (state) => state.userReducer.user
  );

  const Logout = () => {
    localStorage.removeItem('access_token');
    history.push("/login-register");
  }

  console.log("Chạy tới dòng này", userData);

  return (
    <div
      className={`header-right-wrap ${iconWhiteClass ? iconWhiteClass : ""}`}
    >
      <div className="same-style header-search d-none d-lg-block">
        {/* <button className="search-active" onClick={e => handleClick(e)}>
          <i className="pe-7s-search" />
        </button>
        <div className="search-content">
          <form action="#">
            <input type="text" placeholder="Search" />
            <button className="button-search">
              <i className="pe-7s-search" />
            </button>
          </form>
        </div> */}
        <Notifications
          style={{ marginLeft: '-100px', zIndex: '220' }}
          data={[
            {
              image: 'https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/322484761_723859952382239_4232805868826205914_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=fP7VDqWloPIAX-dYw6y&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfDSqCDxlN51n_X3Au87HcF8c8eaztIrNWX6bHMuk3_FDg&oe=64854952',
              message: (
                <p>
                  Tuấn Anh Trần had shared a{' '}
                  <span style={{ color: '#7ac2fa' }}>feedback</span> with you.
                </p>
              ),
              detailPage: '/',
            },
            {
              image: 'https://scontent.fsgn2-9.fna.fbcdn.net/v/t39.30808-6/322484761_723859952382239_4232805868826205914_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=fP7VDqWloPIAX-dYw6y&_nc_ht=scontent.fsgn2-9.fna&oh=00_AfDSqCDxlN51n_X3Au87HcF8c8eaztIrNWX6bHMuk3_FDg&oe=64854952',
              message: (
                <p>
                  Tuấn Anh Trần had shared a{' '}
                  <span style={{ color: '#7ac2fa' }}>feedback</span> with you.
                </p>
              ),
              detailPage: '/',
            },
          ]}
          header={{
            title: 'Thông báo',
            option: { text: 'View All', onClick: () => console.log('Clicked') },
          }}
          className="okrjoy"
          icon={'https://cdn-icons-png.flaticon.com/512/3119/3119338.png'}
        />
      </div>
      <div className="same-style account-setting d-none d-lg-block">
        <button
          className="account-setting-active"
          onClick={e => handleClick(e)}
        >
          <i className="pe-7s-user-female" />
          {userData && userData.name}
        </button>
        <div className="account-dropdown">
          <ul>
            {!isLogin &&
              <li>
                <Link to={process.env.PUBLIC_URL + "/login-register"}>Đăng nhập</Link>
              </li>}

            <li>
              <Link to={process.env.PUBLIC_URL + "/my-account"}>
                Tài khoản
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/order-history"}>
                Lịch sử
              </Link>
            </li>
            <li>
              <Link to={process.env.PUBLIC_URL + "/order-detail"}>
                Đơn hàng
              </Link>
            </li>
            {isLogin &&
              <li>
                <a onClick={() => Logout()}>
                  Đăng xuất
                </a>
              </li>
            }
          </ul>
        </div>
      </div>
      <div className="same-style header-compare">
        <Link to={process.env.PUBLIC_URL + "/compare"}>
          <i className="pe-7s-shuffle" />
          <span className="count-style">
            {compareData && compareData.length ? compareData.length : 0}
          </span>
        </Link>
      </div>
      <div className="same-style header-wishlist">
        <Link to={process.env.PUBLIC_URL + "/wishlist"}>
          <i className="pe-7s-like" />
          <span className="count-style">
            {wishlistData && wishlistData.length ? wishlistData.length : 0}
          </span>
        </Link>
      </div>
      <div className="same-style cart-wrap d-none d-lg-block">
        <button className="icon-cart" onClick={e => handleClick(e)}>
          <i className="pe-7s-shopbag" />
          <span className="count-style">
            {cartData && cartData.length ? cartData.length : 0}
          </span>
        </button>
        {/* menu cart */}
        <MenuCart
          cartData={cartData}
          currency={currency}
          deleteFromCart={deleteFromCart}
        />
      </div>
      <div className="same-style cart-wrap d-block d-lg-none">
        <Link className="icon-cart" to={process.env.PUBLIC_URL + "/cart"}>
          <i className="pe-7s-shopbag" />
          <span className="count-style">
            {cartData && cartData.length ? cartData.length : 0}
          </span>
        </Link>
      </div>
      <div className="same-style mobile-off-canvas d-block d-lg-none">
        <button
          className="mobile-aside-button"
          onClick={() => triggerMobileMenu()}
        >
          <i className="pe-7s-menu" />
        </button>
      </div>
    </div>
  );
};

IconGroup.propTypes = {
  cartData: PropTypes.array,
  compareData: PropTypes.array,
  currency: PropTypes.object,
  iconWhiteClass: PropTypes.string,
  deleteFromCart: PropTypes.func,
  wishlistData: PropTypes.array
};

const mapStateToProps = state => {
  return {
    currency: state.currencyData,
    cartData: state.cartData,
    wishlistData: state.wishlistData,
    compareData: state.compareData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    deleteFromCart: (item, addToast) => {
      dispatch(deleteFromCart(item, addToast));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IconGroup);
