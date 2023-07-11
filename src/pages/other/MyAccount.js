import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { useFormik } from "formik";
import * as Yup from 'yup'
import { useDispatch, useSelector } from "react-redux";
import { storeImageToFireBase } from "../../utils/storeImageToFirebase.";
import useForm from "../../helpers/useForm";

const MyAccount = ({ location }) => {
  const { pathname } = location;

  const dispatch = useDispatch();

  const userData = useSelector(
    (state) => state.userReducer.user
  );
  const phoneRegExp = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g
  const [profile, setProfile] = useState([])
  const [selectedFile, setSelectedFile] = useState();
  const [imgAvatar, setImgAvatar] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const baseURL = 'https://partypal-vwog.onrender.com/api/users'
  useEffect(() => {
    const getUserProfile = async () => {
      const user = await localStorage.getItem('access_token');
      console.log(user);
      if (user) {
        setProfile(user);
      }
      console.log("profile", profile);
    };
  
    getUserProfile();
  }, []);
const  validateInput = (values)=> {
  let errors = {};
  if (!userData.name && !values.name) {
    errors.name = "name is required";
  }
  if (!userData.email && !values.email) {
    errors.email = "email is required";
  }
    if (!userData.phone && !values.phone) {
      errors.phone = "phone is required";
    } else if (!phoneRegExp.test(values.phone)) {
      errors.phone = "Số điện thoại này không tồn tại";
    }
    if (!userData.tax && !values.tax) {
      errors.tax = "tax is required";
    }
  return errors;
}
  const { values, errors, handleChange, handleSubmit } = useForm(
    update,
    validateInput
  );
  function update() {
   console.log("values", values, imgAvatar);
  }
  const editAccount = useFormik({
    initialValues: {
      name: '',
      image: '',
      email: '',
      phone: '',
      tax: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .min(5, 'Tên phải tối thiểu 5 ký tự')
        .max(25, 'Tên phải dưới 25 ký tự')
        .required('Không được để trống ô này'),
      email: Yup.string().required("Không được để trống ô này"),
      image: Yup.string().required('Bạn phải tải ảnh lên'),
      phone: Yup.string()
        .required()
        .matches(phoneRegExp, 'Số điện thoại này không tồn tại'),
    }),
    onSubmit: async (values) => {
      try {
        await submitImage()

        const editAccountResponse = await fetch(baseURL, {
          method: 'PUT',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json',
          },
          credentials: 'same-origin',
        })
        if (!editAccountResponse.ok) {
          throw new Error(`HTTP Status: ${editAccountResponse.status}`)
        }
      } catch (error) {
        console.log(error.message)
      }
    },
  })
    useEffect(
      () => {
        const uploadImage = async () => {
          setIsLoading(true);
          if (!selectedFile) {
            setIsLoading(false);
            return;
          }
          const { isSuccess, imageUrl, message } = await storeImageToFireBase(
            selectedFile
          );
          if (isSuccess) {
            setImgAvatar(imageUrl);
            setIsLoading(false);
            return imageUrl;
          } else {
            console.log(message);
          }
          setIsLoading(false);
        };
        uploadImage();
      },
      // eslint-disable-next-line
      [selectedFile]
    );
    console.log(imgAvatar);
    const onSelectFile = (e) => {
      if (!e.target.files || e.target.files.length === 0) {
        setSelectedFile(undefined);
        return;
      }
      setSelectedFile(e.target.files[0]);
    };
  return (
    <Fragment>
      <MetaTags>
        <title>PartyPaLs | Tài Khoản</title>
        <meta
          name="description"
          content="Compare page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Tài khoản
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="myaccount-area pb-80 pt-100">
          <div className="container">
            <div className="row">
              <div className="ml-auto mr-auto col-lg-9">
                <div className="myaccount-wrapper">
                  <Accordion defaultActiveKey="0">
                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="0">
                          <h3 className="panel-title">
                            <span>1 .</span> Chỉnh Sửa Thông Tin Cá Nhân{" "}
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>thông tin tài khoản</h4>
                              <h5>Thông tin cá nhân của bạn</h5>
                            </div>
                            <div className="login-img-avatar">
                              {imgAvatar == null || imgAvatar === "" ? (
                                <img
                                  src="https://i.pinimg.com/originals/c6/e5/65/c6e56503cfdd87da299f72dc416023d4.jpg"
                                  alt="avatar"
                                />
                              ) : (
                                <img src={imgAvatar} alt="avatar" />
                              )}
                              {isLoading ? (
                                <div className="cover-img-avatar">
                                  <div className="loading-img-avatar">
                                    loading...
                                  </div>
                                </div>
                              ) : (
                                <div className="cover-img-avatar">
                                  <input
                                    type="file"
                                    name="profileImageUrl"
                                    accept="image/*"
                                    onChange={onSelectFile}
                                    id="upload"
                                  />
                                  <div className="loading-img-avatar">
                                    upload
                                  </div>
                                </div>
                              )}
                            </div>
                            <form
                              className="row"
                              onSubmit={handleSubmit}
                              noValidate
                            >
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Họ Và Tên</label>
                                  <input
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    value={values.name || userData.name}
                                    required
                                  />
                                  {errors.name && (
                                    <p style={{ color: "red" }}>
                                      {errors.name}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Số Điện Thoại</label>
                                  <input
                                    type="text"
                                    name="phone"
                                    onChange={handleChange}
                                    value={values.phone || userData.phone}
                                    required
                                  />
                                  {errors.phone && (
                                    <p style={{ color: "red" }}>
                                      {errors.phone}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Email</label>
                                  <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    value={values.email || userData.email}
                                    required
                                  />
                                  {errors.email && (
                                    <p style={{ color: "red" }}>
                                      {errors.email}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Thuế</label>
                                  <input
                                    type="text"
                                    name="tax"
                                    onChange={handleChange}
                                    value={values.tax || userData.tax}
                                    required
                                  />
                                  {errors.tax && (
                                    <p style={{ color: "red" }}>{errors.tax}</p>
                                  )}
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="billing-info">
                                  <label>Địa Chỉ</label>
                                  <input
                                    type="text"
                                    name="address"
                                    onChange={handleChange}
                                    value={values.address || userData.address}
                                    required
                                  />
                                </div>
                              </div>
                              <div className="billing-back-btn">
                                <div className="billing-btn">
                                  <button>Lưu Thông Tin</button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="1">
                          <h3 className="panel-title">
                            <span>2 .</span> Đổi mật khẩu của bạn
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>Đổi mật khẩu</h4>
                              <h5>Mật Khẩu Của Bạn</h5>
                            </div>
                            <div className="row">
                              <div className="col-lg-12 col-md-12">
                                <div className="billing-info">
                                  <label>Mật Khẩu Mới</label>
                                  <input type="password" />
                                </div>
                              </div>
                              <div className="col-lg-12 col-md-12">
                                <div className="billing-info">
                                  <label>Nhập lại Mật Khẩu Mới</label>
                                  <input type="password" />
                                </div>
                              </div>
                            </div>
                            <div className="billing-back-btn">
                              <div className="billing-btn">
                                <button type="submit">Tiếp Tục</button>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="2">
                          <h3 className="panel-title">
                            <span>3 .</span> Đổi địa chỉ của bạn{" "}
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>Địa Chỉ</h4>
                            </div>
                            <div className="entries-wrapper">
                              <div className="row">
                                <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                  <div className="entries-info text-center">
                                    <p>John Doe</p>
                                    <p>Paul Park </p>
                                    <p>Lorem ipsum dolor set amet</p>
                                    <p>NYC</p>
                                    <p>New York</p>
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6 d-flex align-items-center justify-content-center">
                                  <div className="entries-edit-delete text-center">
                                    <button className="edit">Chỉnh Sửa</button>
                                    <button>Xóa</button>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="billing-back-btn">
                              <div className="billing-btn">
                                <button type="submit">Tiếp Tục</button>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

MyAccount.propTypes = {
  location: PropTypes.object
};

export default MyAccount;
