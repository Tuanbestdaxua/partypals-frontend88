import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";
import Axios from "axios";

const ProductTabLeft = ({ location, product }) => {
  const { pathname } = location;
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    const getAccountInfo = async () => {
      Axios({
        method: "GET",
        url: `https://partypal-vwog.onrender.com/api/product/${product.id}`,
      })
        .then((res) => {
          setData(res.data.product);
        })
        .catch((err) => {
          console.log(err);
        });
    };
    getAccountInfo();
    // eslint-disable-next-line
  }, []);
  return (
    <Fragment>
      <MetaTags>
        <title>PartyPaLs | Sản Phẩm</title>
        <meta
          name="description"
          content="Product page of flone react minimalist eCommerce template."
        />
      </MetaTags>

      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Sản Phẩm
      </BreadcrumbsItem>

      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        {data && (
          <>
            {/* product description with image */}
            <ProductImageDescription
              spaceTopClass="pt-100"
              spaceBottomClass="pb-100"
              product={data}
              galleryType="leftThumb"
            />

            {/* product description tab */}
            <ProductDescriptionTab
              spaceBottomClass="pb-90"
              productFullDesc={data?.fullDescription}
            />

            {/* related product slider */}
            <RelatedProductSlider
              spaceBottomClass="pb-95"
              category={data.categoryID}
            />
          </>
        )}
      </LayoutOne>
    </Fragment>
  );
};

ProductTabLeft.propTypes = {
  location: PropTypes.object,
  product: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
  const itemId = ownProps.match.params.id;
  console.log(
    state.productData.products
  );
  return {
    product: state.productData.products.filter(
      single => single.id === itemId
    )[0]
  };
};

export default connect(mapStateToProps)(ProductTabLeft);
