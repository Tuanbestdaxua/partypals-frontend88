import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import {
    MDBCard,
    MDBCardBody,
    MDBCardFooter,
    MDBCardHeader,
    MDBCardImage,
    MDBCol,
    MDBContainer,
    MDBProgress,
    MDBProgressBar,
    MDBRow,
    MDBTypography,
} from "mdb-react-ui-kit";


const OrderDetail = ({ location }) => {
    const { pathname } = location;

    return (
        <Fragment>
            <MetaTags>
                <title>PartyPaLs | Chi tiết đặt hàng</title>
                <meta
                    name="description"
                    content="Compare page of flone react minimalist eCommerce template."
                />
            </MetaTags>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Trang Chủ</BreadcrumbsItem>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
                Chỉ Tiết Đặt Hàng
            </BreadcrumbsItem>
            <LayoutOne headerTop="visible">
                {/* breadcrumb */}
                <Breadcrumb />
                <>
                    <section
                        className="h-100 gradient-custom"
                    >
                        <MDBContainer className="py-5 h-100">
                            <MDBRow className="justify-content-center align-items-center h-100">
                                <MDBCol lg="10" xl="8">
                                    <MDBCard style={{ borderRadius: "10px" }}>
                                        <MDBCardHeader className="px-4 py-5" style={{ display: 'flex', justifyContent: 'space-between' }}>
                                            <MDBTypography style={{ paddingTop: '30px' }} tag="h3" className="text-muted mb-0">
                                                Cảm ơn đã đặt hàng,{" "}
                                                <span style={{ color: "#a8729a" }}>Anh Tuấn</span>!
                                            </MDBTypography>
                                            <MDBCardImage
                                                style={{ width: '80px' }}
                                                src="https://static.vecteezy.com/system/resources/previews/017/350/135/original/green-check-mark-icon-in-round-shape-design-png.png"
                                            />
                                        </MDBCardHeader>
                                        <MDBCardBody className="p-4">
                                            <div className="d-flex justify-content-between align-items-center mb-4">
                                                <p
                                                    className="lead fw-normal mb-0"
                                                    style={{ color: "#a8729a" }}
                                                >
                                                    Biên Lai
                                                </p>
                                            </div>

                                            <MDBCard className="shadow-0 border mb-4">
                                                <MDBCardBody>
                                                    <MDBRow>
                                                        <MDBCol md="2">
                                                            <MDBCardImage
                                                                src="https://product.hstatic.net/1000181810/product/ghe-nhua-chan-go-eames-trang-1_c39e0ca6959c41bcac18f8b5544a959a_master.jpg"
                                                                fluid
                                                                alt="Chair"
                                                            />
                                                        </MDBCol>
                                                        <MDBCol
                                                            md="2"
                                                            className="text-center d-flex justify-content-center align-items-center"
                                                        >
                                                            <p className="text-muted mb-0">Ghế nhựa chân gỗ</p>
                                                        </MDBCol>
                                                        <MDBCol
                                                            md="2"
                                                            className="text-center d-flex justify-content-center align-items-center"
                                                        >
                                                            <p className="text-muted mb-0 small">Đỏ</p>
                                                        </MDBCol>
                                                        <MDBCol
                                                            md="2"
                                                            className="text-center d-flex justify-content-center align-items-center"
                                                        >
                                                            <p className="text-muted mb-0 small">
                                                                Công Ty: GS25
                                                            </p>
                                                        </MDBCol>
                                                        <MDBCol
                                                            md="2"
                                                            className="text-center d-flex justify-content-center align-items-center"
                                                        >
                                                            <p className="text-muted mb-0 small">Số Lượng: 1</p>
                                                        </MDBCol>
                                                        <MDBCol
                                                            md="2"
                                                            className="text-center d-flex justify-content-center align-items-center"
                                                        >
                                                            <p className="text-muted mb-0 small">10.99 VNĐ</p>
                                                        </MDBCol>
                                                    </MDBRow>
                                                    <hr
                                                        className="mb-4"
                                                        style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                                                    />
                                                    <MDBRow className="align-items-center">
                                                        <MDBCol md="2">
                                                            <a className="text-muted mb-0 small">Note : </a>
                                                        </MDBCol>
                                                        <MDBCol md="10">
                                                            <div className="d-flex justify-content mb-1">
                                                                <p className="text-muted mt-1 mb-0 small ms-xl-5">
                                                                    Giao ghế trước 7h
                                                                </p>
                                                            </div>
                                                        </MDBCol>
                                                    </MDBRow>

                                                </MDBCardBody>
                                            </MDBCard>

                                            <MDBCard className="shadow-0 border mb-4">
                                                <MDBCardBody>
                                                    <MDBRow>
                                                        <MDBCol md="2">
                                                            <MDBCardImage
                                                                src="https://product.hstatic.net/1000181810/product/ghe-nhua-chan-go-eames-trang-1_c39e0ca6959c41bcac18f8b5544a959a_master.jpg"
                                                                fluid
                                                                alt="Chair"
                                                            />
                                                        </MDBCol>
                                                        <MDBCol
                                                            md="2"
                                                            className="text-center d-flex justify-content-center align-items-center"
                                                        >
                                                            <p className="text-muted mb-0">Ghế nhựa chân gỗ</p>
                                                        </MDBCol>
                                                        <MDBCol
                                                            md="2"
                                                            className="text-center d-flex justify-content-center align-items-center"
                                                        >
                                                            <p className="text-muted mb-0 small">Xanh dương</p>
                                                        </MDBCol>
                                                        <MDBCol
                                                            md="2"
                                                            className="text-center d-flex justify-content-center align-items-center"
                                                        >
                                                            <p className="text-muted mb-0 small">
                                                                Công Ty: GS25
                                                            </p>
                                                        </MDBCol>
                                                        <MDBCol
                                                            md="2"
                                                            className="text-center d-flex justify-content-center align-items-center"
                                                        >
                                                            <p className="text-muted mb-0 small">Số Lượng: 1</p>
                                                        </MDBCol>
                                                        <MDBCol
                                                            md="2"
                                                            className="text-center d-flex justify-content-center align-items-center"
                                                        >
                                                            <p className="text-muted mb-0 small">19.99 VNĐ</p>
                                                        </MDBCol>
                                                    </MDBRow>
                                                    <hr
                                                        className="mb-4"
                                                        style={{ backgroundColor: "#e0e0e0", opacity: 1 }}
                                                    />
                                                    <MDBRow className="align-items-center">
                                                        <MDBCol md="2">
                                                            <p className="text-muted mb-0 small">Note :</p>
                                                        </MDBCol>

                                                    </MDBRow>
                                                </MDBCardBody>
                                            </MDBCard>

                                            <div className="d-flex justify-content-between pt-2">
                                                <p className="fw-bold mb-0">Chi tiết đặt hàng</p>
                                                <p className="text-muted mb-0">
                                                    <span className="fw-bold me-4">Tổng cộng</span> 30.98 VNĐ
                                                </p>
                                            </div>

                                            <div className="d-flex justify-content-between pt-2">
                                                <p className="text-muted mb-0">Số hóa đơn : 788152</p>
                                                <p className="text-muted mb-0">
                                                    <span className="fw-bold me-4">Giảm giá</span> 0 VNĐ
                                                </p>
                                            </div>

                                            <div className="d-flex justify-content-between">
                                                <p className="text-muted mb-0">
                                                    Ngày hóa đơn : 27 May,2023
                                                </p>
                                                <p className="text-muted mb-0">
                                                    <span className="fw-bold me-4">Thuế 10%</span> 3.098 VNĐ
                                                </p>
                                            </div>

                                            <div className="d-flex justify-content-between mb-5">
                                                <p className="text-muted mb-0">
                                                    Phiếu thu : 18KU-62IIK
                                                </p>
                                                <p className="text-muted mb-0">
                                                    <span className="fw-bold me-4">Phí vận chuyển</span>{" "}
                                                    Miễn phí
                                                </p>
                                            </div>
                                        </MDBCardBody>
                                        <MDBCardFooter
                                            className="border-0 px-4 py-5"
                                            style={{
                                                backgroundColor: "#a8729a",
                                                borderBottomLeftRadius: "10px",
                                                borderBottomRightRadius: "10px",
                                            }}
                                        >
                                            <MDBTypography
                                                tag="h5"
                                                className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0"
                                            >
                                                Tổng Thanh Toán: <span className="h2 mb-0 ms-2">34.078 VNĐ</span>
                                            </MDBTypography>
                                        </MDBCardFooter>
                                    </MDBCard>
                                </MDBCol>
                            </MDBRow>
                        </MDBContainer>
                    </section>
                </>
            </LayoutOne>
        </Fragment>
    );
};

OrderDetail.propTypes = {
    location: PropTypes.object
};

export default OrderDetail;
