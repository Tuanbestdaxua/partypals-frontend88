import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { History } from "../../data/history";

const OrderHistory = ({ location }) => {
  const { pathname } = location;

  return (
    <Fragment>
      <MetaTags>
        <title>PartyPaLs | Lịch sử</title>
        <meta
          name="description"
          content="Compare page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Lịch Sử Đơn Hàng
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="cart-main-area pt-90 pb-100">
          <div className="container">
            <h3 className="cart-page-title">LỊCH SỬ ĐƠN HÀNG</h3>
            <div className="row">
              <div className="col-12">
                <div className="table-content table-responsive cart-table-content">
                  <table>
                    <thead>
                      <tr>
                        <th>Mã đơn</th>
                        <th>Hình ảnh</th>
                        <th>Sản phẩm</th>
                        <th>Công ty</th>
                        <th>Ngày đặt</th>
                        <th>Tổng cộng</th>
                        <th>Trạng thái</th>
                      </tr>
                    </thead>
                    <tbody>
                      {History.map((history, key) => (
                        <tr key={history.id} >
                          <td className="product-thumbnail">{history.code}</td>
                          <td>
                            <img className="img-fluid" src={history.image} alt={history.color} />
                          </td>
                          <td className="product-name" ><a>{history.name}</a>
                            <div className="cart-item-variation">
                              <span>
                                Màu: {history.color}
                              </span>
                              <span>
                                Số lượng: {history.quantity}
                              </span>
                              <span>
                                Đơn giá: {history.price} VNĐ
                              </span>
                            </div>
                          </td>
                          <td className="product-name text-center">{history.company}</td>
                          <td>{history.date}
                          </td>
                          <td className="product-price-cart">{history.price*history.quantity} VNĐ</td>
                          <td>{history.status}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

OrderHistory.propTypes = {
  location: PropTypes.object
};

export default OrderHistory;
