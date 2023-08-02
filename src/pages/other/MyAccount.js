import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import * as Yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup';

import axiosClient from "../../axiosClient";
import { useForm } from "react-hook-form";
import { storeImageToFireBase } from "./../../utils/storeImageToFirebase.";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from 'react-toastify';



const MyAccount = ({ location }) => {
  const { pathname } = location;

  const [selectedFile, setSelectedFile] = useState();
  const [imgAvatar, setImgAvatar] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [User, setUser] = useState({})

  const dispatch = useDispatch();

  useEffect(async () => {
    const data = await axiosClient.get("user")
    console.log(data);
    dispatch({ type: "SET_USER_INFORMATION", payload: data.user });
    setUser(data.user)
    console.log(data.user)

  }, []);

  const onSubmit = async (newUser) => {
    try {
      newUser.image = imgAvatar ? imgAvatar : newUser.image
      console.log("newUser",newUser);
      await axiosClient.put(`user/${User._id}`, newUser);
      newUser.role = User.role;
      // window.location.reload();
      toast.success('Information saved successfully');
    } catch (error) {
      toast.error('Error occurred while saving information');
    }
  };


  const defaultValues = {
    name: User.name,
    email: User.email,
    phone: User.phone,
    address: User.address,
    image: User.image,
    tax: User.tax,
    status: true,
    role: User.role
  };
  const validationSchema = Yup.object({
    name: Yup.string().required('Vui lòng nhập họ và tên').typeError('Vui lòng nhập họ và tên'),
    phone: Yup.number().required('Vui lòng nhập số điện thoại').typeError('Vui lòng nhập số điện thoại hợp lệ'),
    email: Yup.string().email('Vui lòng nhập địa chỉ email hợp lệ').required('Vui lòng nhập địa chỉ email'),
    tax: Yup.number().required('Vui lòng nhập thuế').typeError('Vui lòng nhập thuế hợp lệ'),
    address: Yup.string().required('Vui lòng nhập địa chỉ').typeError('Vui lòng nhập địa chỉ'),
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues,
    resolver: yupResolver(validationSchema)
  });


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
  // console.log(imgAvatar);
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
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Trang Chủ</BreadcrumbsItem>
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
                            <form onSubmit={handleSubmit(onSubmit)}>
                              <div className="row">
                                <div className="col-lg-12 col-md-12">
                                  <div className="login-img-avatar" style={{ textAlign: 'center' }}>
                                    {imgAvatar == null || imgAvatar === "" ? (
                                      <img
                                        src={User.image}
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
                                        <div className="loading-img-avatar">upload</div>
                                      </div>
                                    )}
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12"></div>
                                <div className="col-lg-6 col-md-6" style={{ marginTop: '50px' }}>
                                  <div className="billing-info">
                                    <label>Họ Và Tên</label>
                                    <input
                                      type="text"
                                      defaultValue={User.name}
                                      name="name"
                                      {...register("name")}
                                    />
                                    {errors.name && (
                                      <p style={{color: 'red'}}>{errors.name.message}</p>
                                    )}
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6" style={{ marginTop: '50px' }}>
                                  <div className="billing-info">
                                    <label>Số Điện Thoại</label>
                                    <input
                                      type="text"
                                      name="phone"
                                      defaultValue={User.phone}
                                      {...register("phone")}
                                    />
                                     {errors.phone && (
                                      <p style={{color: 'red'}}>{errors.phone.message}</p>
                                    )}
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info">
                                    <label>Email</label>
                                    <input
                                      type="email"
                                      defaultValue={User.email}
                                      name="email"
                                      {...register("email")}
                                    />
                                     {errors.email && (
                                      <p style={{color: 'red'}}>{errors.email.message}</p>
                                    )}
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info">
                                    <label>Thuế</label>
                                    <input
                                      type="text"
                                      defaultValue={User.tax}
                                      name="tax"
                                      {...register("tax")}
                                    />
                                     {errors.tax && (
                                      <p style={{color: 'red'}}>{errors.tax.message}</p>
                                    )}
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                  <div className="billing-info">
                                    <label>Địa Chỉ</label>
                                    <input
                                      type="text"
                                      defaultValue={User.address}
                                      name="address"
                                      {...register("address")}
                                    />
                                     {errors.address && (
                                      <p style={{color: 'red'}}>{errors.address.message}</p>
                                    )}
                                  </div>
                                </div>
                              </div>
                              <div className="billing-back-btn">
                                <div className="billing-btn">
                                  <input value="Lưu Thông Tin" type="submit" />
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
                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
      <ToastContainer />
    </Fragment>
  );
};

MyAccount.propTypes = {
  location: PropTypes.object
};

export default MyAccount;
