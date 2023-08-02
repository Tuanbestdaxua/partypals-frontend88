import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import axiosClient from "../../axiosClient";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { storeImageToFireBase } from "./../../utils/storeImageToFirebase.";
const LoginRegister = ({ location }) => {
  const history = useHistory();
  const { pathname } = location;


  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedFile, setSelectedFile] = useState();
  const [imgAvatar, setImgAvatar] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("login");


  const [redirectToHome, setRedirectToHome] = useState(false);
  useEffect(() => {
    if (redirectToHome) {
      history.push("/home");
    }
  }, [redirectToHome, history]);

  const [redirectToLogin, setRedirectToLogin] = useState(false);
  useEffect(() => {
    if (redirectToLogin) {
      history.push("/login-register");
    }
  }, [redirectToLogin, history]);

  const dispatch = useDispatch();

  const handleLogin = async (event) => {
    event.preventDefault();
    // Làm gì đó với username và password
    console.log("Username:", username);
    console.log("Password:", password);

    try {
      const data = await axiosClient.post("signIn", {
        username: username,
        password: password,
      });
      localStorage.setItem("access_token", data.token);
      console.log(data);
      toast.success("Login Successfull");
      setRedirectToHome(true);
    } catch (error) {
      toast.error(error.response.data.message);
    }
    // const data = await axiosClient.get(`signIn`);
    // const data = await axiosClient.put(`signIn/${}`,{email: username, password: password});
    // const data = await axiosClient.delete(`signIn/${}`);
    // Reset giá trị trong form
    setUsername("");
    setPassword("");


  };

  const handleRegistration = async (event) => {
    event.preventDefault();

    // Làm gì đó với username, password và email
    console.log("name", name);
    console.log("Username:", username);
    console.log("Password:", password);
    console.log("Email:", email);
    console.log("Phone:", phone);

    // Reset giá trị trong form
    setName("");
    setUsername("");
    setPassword("");
    setEmail("");
    setPhone("");
    setImgAvatar("")

    try {
      const dataRegister = await axiosClient.post("signUp", {
        name: name,
        username: username,
        password: password,
        email: email,
        image: imgAvatar,
        phone: phone
      });
      toast.success(dataRegister.message);
      setRedirectToLogin(true);
    } catch (error) {
      toast.error(error.response?.data?.message);
    }
  };
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
        <title>PartyPaLs | Đăng nhập</title>
        <meta
          name="description"
          content="Compare page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Trang Chủ</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Đăng Nhập - Đăng Kí
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-md-12 ml-auto mr-auto">
                <div className="login-register-wrapper">
                  <Tab.Container defaultActiveKey={activeTab}>
                    <Nav variant="pills" className="login-register-tab-list">
                      <Nav.Item>
                        <Nav.Link
                          eventKey="login"
                          onClick={() => setActiveTab("login")}
                        >
                          <h4>Đăng nhập</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link
                          eventKey="register"
                          onClick={() => setActiveTab("register")}
                        >
                          <h4>Đăng kí</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="login" style={{ paddingLeft: '100px', paddingRight: '100px' }}>
                        <div className="login-form-container" style={{ justifyContent: 'space-evenly' }}>
                          <div className="login-register-form">
                            <form onSubmit={handleLogin}>
                              <input
                                type="text"
                                name="user-name"
                                placeholder="Tên đăng nhập"
                                value={username}
                                onChange={(event) =>
                                  setUsername(event.target.value)
                                }
                              />
                              <input
                                type="password"
                                name="user-password"
                                placeholder="Mật khẩu"
                                value={password}
                                onChange={(event) =>
                                  setPassword(event.target.value)
                                }
                              />
                              <div className="button-box">
                                <div className="login-toggle-btn">
                                  <input type="checkbox" />
                                  <label className="ml-10">Nhớ mật khẩu</label>
                                  <Link to={process.env.PUBLIC_URL + "/"}>
                                    Quên mật khẩu?
                                  </Link>
                                </div>
                                <button type="submit">
                                  <span>Đăng nhập</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="register">
                        <div className="login-form-container">
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
                                <div className="loading-img-avatar">upload</div>
                              </div>
                            )}
                          </div>
                          <div className="login-register-form">
                            <form onSubmit={handleRegistration}>
                              <input
                                name="name"
                                placeholder="Họ và Tên"
                                type="name"
                                value={name}
                                onChange={(event) =>
                                  setName(event.target.value)
                                }
                              />
                              <input
                                type="text"
                                name="user-name"
                                placeholder="Tên đăng nhập"
                                value={username}
                                onChange={(event) =>
                                  setUsername(event.target.value)
                                }
                              />
                              <input
                                type="password"
                                name="user-password"
                                placeholder="Mật khẩu"
                                value={password}
                                onChange={(event) =>
                                  setPassword(event.target.value)
                                }
                              />
                              <input
                                name="user-email"
                                placeholder="Email"
                                type="email"
                                value={email}
                                onChange={(event) =>
                                  setEmail(event.target.value)
                                }
                              />
                              <FormControl
                                fullWidth
                                style={{
                                  paddingBottom: "15px",
                                  marginBottom: "15px",
                                }}
                              >
                                <InputLabel id="demo-simple-select-label">
                                  Bạn là ?
                                </InputLabel>
                                <Select
                                  labelId="demo-simple-select-label"
                                  id="demo-simple-select"
                                  value={age}
                                  label="Bạn là ?"
                                  onChange={handleChange}
                                >
                                  <MenuItem value={10}>Cá Nhân</MenuItem>
                                  <MenuItem value={20}>Doanh Nghiệp</MenuItem>
                                </Select>
                              </FormControl>

                              <input
                                name="user-phone"
                                placeholder="Số Điện Thoại"
                                type="phone"
                                value={phone}
                                onChange={(event) =>
                                  setPhone(event.target.value)
                                }
                              />
                              <div className="button-box">
                                <button type="submit">
                                  <span>Đăng kí</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

LoginRegister.propTypes = {
  location: PropTypes.object,
};

export default LoginRegister;
