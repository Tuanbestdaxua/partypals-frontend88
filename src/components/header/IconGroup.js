import PropTypes from "prop-types";
import React from "react";
import { Link, useHistory } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";
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

  const dispatch = useDispatch();

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
    dispatch({ type: "SET_USER_INFORMATION", payload: null });
    history.push("/login-register");
  }

  console.log("Chạy tới dòng này", userData);

  return (
    <div
      className={`header-right-wrap ${iconWhiteClass ? iconWhiteClass : ""}`}
    >
      <div className="same-style header-search d-none d-lg-block">
        {isLogin && 
        <Notifications
          style={{ marginLeft: '-100px', zIndex: '220' }}
          data={[
            {
              image: '/assets/img/team/2.jpg',
              message: (
                <p>
                  Tuấn Anh Trần had shared a{' '}
                  <span style={{ color: '#7ac2fa' }}>feedback</span> with you.
                </p>
              ),
              detailPage: '/',
            },
            {
              image: '/assets/img/team/2.jpg',
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
        />}

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
      <div style={{paddingRight:'10px'}}></div>
      <div className="same-style account-setting d-none d-lg-block">
        {!isLogin &&
          <button
            className="account-setting-active"
          >

            <Link to={process.env.PUBLIC_URL + "/login-register"}><i className="pe-7s-user" /></Link>
          </button>
        }
        <a style={{fontSize:'15px', whiteSpace:'nowrap'}} onClick={e => handleClick(e)} >{userData && userData.name}</a>

        <div className="account-dropdown">
          <ul>
            {!isLogin &&
              <li>

              </li>
            }
            {isLogin &&
              <>
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

                <li>
                  <a onClick={() => Logout()}>
                    Đăng xuất
                  </a>
                </li>
              </>
            }
          </ul>
        </div>
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
