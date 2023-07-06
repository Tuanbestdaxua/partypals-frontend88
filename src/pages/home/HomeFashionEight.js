import React, { useState, Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import BrandLogoSliderThree from "../../wrappers/brand-logo/BrandLogoSliderThree";
import NewsletterFour from "../../wrappers/newsletter/NewsletterFour";
import ProductSliderThree from "../../wrappers/product/ProductSliderThree";
import BannerThirty from "../../wrappers/banner/BannerThirty";
import ProductSliderFour from "../../wrappers/product/ProductSliderFour";
import VideoPopup from "../../components/video-popup/VideoPopup";
import FeatureIconSix from "../../wrappers/feature-icon/FeatureIconSix";
import HeroSliderTwentyEight from "../../wrappers/hero-slider/HeroSliderTwentyEight";
import { Modal } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useHistory, Link } from 'react-router-dom';
const HomeFashionEight = () => {
  const history = useHistory();
  const userData = useSelector((state) => state.userReducer.user);
  const [modalShow, setModalShow] = useState(userData ? userData?.phone ? false : true : false);
  return (
    <Fragment>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        className="product-quickview-modal-wrapper"
      >
        <Modal.Header closeButton></Modal.Header>
        <div className="modal-body">Bạn cần hoàn thành thông tin cá nhân</div>
        <div className="modal-body" style={{textAlign:"center"}}>
          <Link to="/my-account" className="my-next">
            <span>Tiếp tục</span>
          </Link>
        </div>
      </Modal>
      <MetaTags>
        <title>PartyPaLs | Home</title>
        <meta
          name="description"
          content="Fashion home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne headerTop="visible">
        {/* hero slider */}
        <HeroSliderTwentyEight />
        {/* feature text */}
        <FeatureIconSix spaceBottomClass="pb-100" spaceTopClass="pt-30" />
        {/* video popup */}
        <VideoPopup spaceBottomClass="pb-100" />
        {/* product slider */}
        <ProductSliderFour category="fashion" />
        {/* banner */}
        <BannerThirty spaceTopClass="pt-100" spaceBottomClass="pb-70" />
        {/* product slider */}
        <ProductSliderThree category="fashion" />
        {/* brand logo slider */}
        <BrandLogoSliderThree spaceBottomClass="pb-95" spaceTopClass="pt-100" />
        {/* newsletter */}
        <NewsletterFour
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          subscribeBtnClass="hover-red"
          bgColorClass="bg-gray-7"
        />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashionEight;
