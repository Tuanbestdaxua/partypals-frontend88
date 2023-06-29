import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import MetaTags from "react-meta-tags";
import { connect } from "react-redux";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { getDiscountPrice } from "../../helpers/product";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { MDBAccordion, MDBAccordionItem, MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';

const Checkout = ({ location, cartItems, currency }) => {
  const { pathname } = location;
  let cartTotalPrice = 0;

  return (
    <Fragment>
      <MetaTags>
        <title>PartyPaLs | Thanh Toán</title>
        <meta
          name="description"
          content="Checkout page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Thanh Toán
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="checkout-area pt-95 pb-100">
          <div className="container">
            {cartItems && cartItems.length >= 1 ? (
              <div className="row">
                <div className="col-lg-7">
                  <div className="billing-info-wrap">
                    <h3>Thông Tin Thanh Toán</h3>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>Họ và Tên</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>Số Điện Thoại</label>
                          <input type="text" />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <label>Địa Chỉ</label>
                          <input type="text" />
                        </div>
                      </div>
                    </div>

                    <div className="additional-info-wrap">
                      <h4>Thông tin thêm</h4>
                      <div className="additional-info">
                        <label>Ghi chú đặt hàng</label>
                        <textarea
                          placeholder="Ghi chú về đơn đặt hàng của bạn, ví dụ: ghi chú đặc biệt cho giao hàng. "
                          name="message"
                          defaultValue={""}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-lg-5">
                  <div className="your-order-area">
                    <h3>Đơn Hàng Của Bạn</h3>
                    <div className="your-order-wrap gray-bg-4">
                      <div className="your-order-product-info">
                        <div className="your-order-top">
                          <ul>
                            <li>Sản Phẩm</li>
                            <li>Tổng Cộng</li>
                          </ul>
                        </div>
                        <div className="your-order-middle">
                          <ul>
                            {cartItems.map((cartItem, key) => {
                              const discountedPrice = getDiscountPrice(
                                cartItem.price,
                                cartItem.discount
                              );
                              const finalProductPrice = (
                                cartItem.price * currency.currencyRate
                              ).toFixed(2);
                              const finalDiscountedPrice = (
                                discountedPrice * currency.currencyRate
                              ).toFixed(2);

                              discountedPrice != null
                                ? (cartTotalPrice +=
                                  finalDiscountedPrice * cartItem.quantity)
                                : (cartTotalPrice +=
                                  finalProductPrice * cartItem.quantity);
                              return (
                                <li key={key}>
                                  <span className="order-middle-left">
                                    {cartItem.name} X {cartItem.quantity}
                                  </span>{" "}
                                  <span className="order-price">
                                    {discountedPrice !== null
                                      ?
                                      (
                                        finalDiscountedPrice *
                                        cartItem.quantity
                                      ).toFixed(2) + " VNĐ"
                                      :
                                      (
                                        finalProductPrice * cartItem.quantity
                                      ).toFixed(2) + " VNĐ"}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        <div className="your-order-bottom">
                          <ul>
                            <li className="your-order-shipping">Phí Vận Chuyển</li>
                            <li>Miễn Phí</li>
                          </ul>
                        </div>
                        <div className="your-order-total">
                          <ul>
                            <li className="order-total">Tổng Cộng</li>
                            <li>
                              {
                                cartTotalPrice.toFixed(2) + " VNĐ"}
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="payment-method"></div>
                    </div>
                    <div style={{ padding: '15px' }}></div>

                    <h3>Phương Thức Thanh Toán</h3>
                    <div>
                      <MDBAccordion >
                        <MDBAccordionItem collapseId={1} headerTitle={
                          <div style={{ display: "flex", alignItems: "center" }}>
                            <img
                              src="./assets/img/logo/momo.png"
                              alt="Logo Momo"
                              style={{ width: "20px", marginRight: "10px" }}
                            />
                            THANH TOÁN BẰNG MOMO
                          </div>
                        }>
                          <MDBContainer>
                            <MDBRow>
                              <p>Mở ứng dụng momo và chọn <strong>QUÉT MÃ</strong></p>
                              <MDBCol md='6'>
                                <img src="https://f11-zpc.zdn.vn/922550104966402819/befc3027d15800065949.jpg" style={{ width: '200px' }} alt="image"></img>
                              </MDBCol>
                              <MDBCol md='6' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                                <p>Tài Khoản: <strong>0913740946</strong></p>
                                <p>Chủ TK: <strong>Trần Anh Tuấn</strong></p>
                                <p>Tổng Tiền: <strong>{
                                  cartTotalPrice.toFixed(2) + " VNĐ"}</strong></p>
                                <p>Lời Nhắn: <strong>"Mã Đơn"</strong></p>
                              </MDBCol>
                              <p>Mã giao dịch MOMO sau khi chuyển tiền:</p>
                            </MDBRow>
                          </MDBContainer>
                        </MDBAccordionItem>
                      </MDBAccordion>
                      <div style={{ padding: '15px' }}></div>
                      <MDBAccordion >
                        <MDBAccordionItem collapseId={2} headerTitle={
                          <div style={{ display: "flex", alignItems: "center" }}>
                            <img
                              src="./assets/img/logo/tpbank.png"
                              alt="Logo TP Bank"
                              style={{ width: "20px", marginRight: "10px" }}
                            />
                            THANH TOÁN BẰNG NGÂN HÀNG
                          </div>
                        }>
                          <MDBContainer>
                            <MDBRow>
                              <p>Mở ứng dụng Banking và chọn <strong>QUÉT MÃ</strong></p>
                              <MDBCol md='6'>
                                <img src="https://f19-zpc.zdn.vn/3609110256941540703/f38e63b096cf47911ede.jpg" style={{ width: '200px' }} alt="image"></img>
                              </MDBCol>
                              <MDBCol md='6' style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly' }}>
                                <p>Số Tài Khoản: <strong>0363013901</strong></p>
                                <p>Ngân Hàng: <strong>TP BANK</strong></p>
                                <p>Chủ TK: <strong>Trần Anh Tuấn</strong></p>
                                <p>Tổng Tiền: <strong>{
                                  cartTotalPrice.toFixed(2) + " VNĐ"}</strong></p>
                                <p>Lời Nhắn: <strong>"Mã Đơn"</strong></p>
                              </MDBCol>
                              <p>Mã giao dịch Banking sau khi chuyển tiền:</p>
                            </MDBRow>
                          </MDBContainer>
                        </MDBAccordionItem>
                      </MDBAccordion>
                    </div>
                    <div className="place-order mt-25">
                      <button className="btn-hover">Đặt Hàng</button>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-cash"></i>
                    </div>
                    <div className="item-empty-area__text">
                      Không tìm thấy mặt hàng nào trong giỏ hàng để thanh toán <br />{" "}
                      <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                        Mua Ngay
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

Checkout.propTypes = {
  cartItems: PropTypes.array,
  currency: PropTypes.object,
  location: PropTypes.object
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartData,
    currency: state.currencyData
  };
};

export default connect(mapStateToProps)(Checkout);
