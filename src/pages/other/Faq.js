import PropTypes from "prop-types";
import React, { Fragment, useState } from "react";
import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBCol,
  MDBCollapse,
  MDBContainer,
  MDBIcon,
  MDBListGroup,
  MDBListGroupItem,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";

const Faq = ({ location }) => {
  const { pathname } = location;

  const [collapse1, setCollapse1] = useState(false);
  const [collapse2, setCollapse2] = useState(false);
  const [collapse3, setCollapse3] = useState(false);
  const [collapse4, setCollapse4] = useState(false);
  const [collapse5, setCollapse5] = useState(false);
  const [collapse6, setCollapse6] = useState(false);
  const [collapse7, setCollapse7] = useState(false);
  const [collapse8, setCollapse8] = useState(false);
  const [collapse9, setCollapse9] = useState(false);
  const [collapse10, setCollapse10] = useState(false);
  const [collapse11, setCollapse11] = useState(false);
  const [collapse12, setCollapse12] = useState(false);

  const toggleCollapse = (callback) => callback((prev) => !prev);

  return (
    <Fragment>
      <MetaTags>
        <title>PartyPaLs | FAQs</title>
        <meta
          name="description"
          content="Compare page of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Trang Chủ</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        FAQs
      </BreadcrumbsItem>
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <MDBContainer className="mt-5" style={{ maxWidth: "1000px", marginBottom: '100px', paddingTop: '50px' }}>

          <MDBListGroup>
            <MDBListGroupItem
              tag="a"
              onClick={() => toggleCollapse(setCollapse10)}
              action
            >
              <div className="d-flex w-100 justify-content-between">
                <MDBRow className="w-100">
                  <MDBCol
                    size="1"
                    className="text-center d-flex align-items-center"
                  >
                    <MDBIcon fas icon="user-shield me-2" size="3x" />
                  </MDBCol>
                  <MDBCol size="10">
                    <MDBTypography tag="h4"><strong>Điều khoản sử dụng</strong></MDBTypography>
                    <p className="mb-1">Các điều khoản sử dụng của công ty </p>
                    <small>
                      <u>Learn more</u>
                    </small>
                    <MDBCollapse show={collapse10}>
                      -	Dịch vụ cho thuê: Trang web của chúng tôi cung cấp nền tảng để khách hàng tìm kiếm, lựa chọn và liên hệ với các bên cung cấp dịch vụ cho thuê. Chúng tôi chịu trách nhiệm đối với khách hàng trong việc cung cấp thông tin chính xác và đáng tin cậy về các dịch vụ cho thuê có sẵn trên trang web.
                    </MDBCollapse>
                    <p />
                    <MDBCollapse show={collapse10}>
                      -	Cam kết về số lượng và chất lượng: Chúng tôi cam kết đảm bảo số lượng sản phẩm và dịch vụ cho thuê được hiển thị trên trang web chính xác. Chúng tôi làm việc chặt chẽ với các bên cung cấp dịch vụ để đảm bảo chất lượng và sự chỉn chu trong mọi khía cạnh.
                    </MDBCollapse>
                    <p />
                    <MDBCollapse show={collapse10}>
                      -	Đặt cọc: Khách hàng sẽ được yêu cầu thanh toán một khoản tiền đặt cọc từ 10-30% tổng số tiền dịch vụ để xác nhận đơn hàng và đảm bảo việc thuê dịch vụ. Khoản tiền đặt cọc này sẽ được giữ bởi chúng tôi và được sử dụng để thanh toán cho các bên cung cấp dịch vụ.
                    </MDBCollapse>
                    <p />
                    <MDBCollapse show={collapse10}>
                      - Phần tiền còn lại (70-90%): Sau khi sự kiện hoàn thành và bộ phận nghiệm thu của chúng tôi xác nhận rằng sản phẩm và dịch vụ đã đúng như cam kết về mặt hình ảnh và số lượng, khách hàng sẽ tiến hành thanh toán phần tiền còn lại . Quy trình thanh toán có thể được thực hiện bằng chuyển khoản vào tài khoản của công ty hoặc trả trực tiếp cho nhân viên nghiêm thu tùy theo yêu cầu của khách hàng .
                    </MDBCollapse>
                  </MDBCol>
                </MDBRow>
              </div>
            </MDBListGroupItem>
            <MDBListGroupItem
              tag="a"
              onClick={() => toggleCollapse(setCollapse11)}
              action
            >
              <div className="d-flex w-100 justify-content-between">
                <MDBRow className="w-100">
                  <MDBCol
                    size="1"
                    className="text-center d-flex align-items-center"
                  >
                    <MDBIcon fas icon="book-open me-2" size="3x" />
                  </MDBCol>
                  <MDBCol size="10">
                    <MDBTypography tag="h4"><strong>Chính sách</strong> </MDBTypography>
                    <p className="mb-1">Các chính sách của công ty </p>
                    <small>
                      <u>Learn more</u>
                    </small>
                    <MDBCollapse show={collapse11}>
                      - Chính sách thanh toán: Khách hàng sẽ thanh toán khoản tiền đặt cọc từ 10-30% tổng số tiền dịch vụ ngay khi xác nhận đơn hàng. Số tiền còn lại phải được thanh toán ngay khi nghiệm thu xong và được xác nhận rằng không có sự cố hoặc sai xót.
                    </MDBCollapse>
                    <p />
                    <MDBCollapse show={collapse11}>
                      - Hủy đơn hàng: Khách hàng có thể hủy đơn hàng trước một khoảng thời gian cụ thể trước ngày sự kiện. Chúng tôi sẽ có một chính sách hủy đơn hàng riêng, bao gồm các khoản phí hủy đặt cụ thể, mà khách hàng phải tuân thủ.
                      Nếu khách hàng hủy đơn trước khi thanh toán tiền cọc thì công ty sẽ chấp nhận hủy đơn và khách hàng sẽ không chịu bất kì thiệt hại nào.
                      Nếu khách hàng hủy đơn sau khi cọc tiền thì công ty sẽ không hoàn lại phần tiền cọc đó theo bất kì hình thức nào.
                    </MDBCollapse>
                    <p />
                    <MDBCollapse show={collapse11}>
                      - Chính sách bảo mật: Chúng tôi cam kết bảo vệ thông tin cá nhân của khách hàng theo quy định bảo vệ dữ liệu cá nhân hiện hành và sử dụng thông tin chỉ nhằm mục đích cung cấp dịch vụ liên quan đến trang web.
                    </MDBCollapse>
                    <p />
                    <MDBCollapse show={collapse11}>
                      - Trách nhiệm pháp lý: Chúng tôi chịu trách nhiệm đối với bất kỳ tranh chấp, thiệt hại hoặc mất mát nào phát sinh từ việc sử dụng dịch vụ trang trí của các bên liên kết. Mọi tranh chấp hoặc khiếu nại phải được giải quyết trực tiếp với chúng tôi cùng các bên liên kết.
                    </MDBCollapse>
                  </MDBCol>
                </MDBRow>
              </div>
            </MDBListGroupItem>
            <MDBListGroupItem
              tag="a"
              onClick={() => toggleCollapse(setCollapse12)}
              action
            >
              <div className="d-flex w-100 justify-content-between">
                <MDBRow className="w-100">
                  <MDBCol
                    size="1"
                    className="text-center d-flex align-items-center"
                  >
                    <MDBIcon fas icon="money-bill me-2" size="3x" />
                  </MDBCol>
                  <MDBCol size="10">
                    <MDBTypography tag="h4"><strong>Quy trình thanh toán</strong></MDBTypography>
                    <p className="mb-1">Hướng dẫn người dùng thanh toán</p>
                    <small>
                      <u>Learn more</u>
                    </small>
                    <MDBCollapse show={collapse12}>
                      - 1. Người dùng đặt đơn hàng và xem trước về mẫu điều khoản và cam kết về dịch vụ :
                      <p>Khách hàng truy cập trang web của chúng tôi, lựa chọn sản phẩm và dịch vụ trang trí mong muốn.
                        Trước khi xác nhận đơn hàng, khách hàng xem qua mẫu điều khoản và cam kết về dịch vụ để hiểu rõ các quy định và điều kiện áp dụng.</p>

                    </MDBCollapse>
                    <p />
                    <MDBCollapse show={collapse12}>
                      - 2. Bên phía web nhận đơn hàng xem xét :
                      <p>Sau khi khách hàng đặt đơn hàng, bộ phận chăm sóc khách hàng của chúng tôi nhận thông tin và xác nhận đơn hàng.</p>

                    </MDBCollapse>
                    <p />
                    <MDBCollapse show={collapse12}>
                      - 3. Thanh toán trước :
                      <p>Khách hàng sẽ thanh toán khoản tiền đặt cọc từ 10-30% tổng số tiền dịch vụ để xác nhận đơn hàng. Chúng tôi cung cấp các phương thức thanh toán an toàn và thuận tiện cho khách hàng, bao gồm chuyển khoản ngân hàng, thẻ tín dụng, ví điện tử, hoặc các phương thức thanh toán trực tuyến khác.</p>
                    </MDBCollapse>
                    <p />
                    <MDBCollapse show={collapse12}>
                      - 4. Gửi email tự động về các phần tiền :
                      <p>Sau khi thanh toán thành công, chúng tôi sẽ tự động gửi một email xác nhận thanh toán cho khách hàng, bao gồm thông tin về các phần tiền đã thanh toán và các phần tiền còn lại.</p>
                    </MDBCollapse>
                    <p />
                    <MDBCollapse show={collapse12}>
                      - 5. Dịch vụ tới, nghiệm thu và lấy phần tiền :
                      <p>Bên cung cấp dịch vụ trang trí sẽ đến địa điểm để thiết lập và cung cấp dịch vụ theo yêu cầu của khách hàng.
                        Sau khi công việc  hoàn thành, bộ phận nghiệm thu của chúng tôi sẽ kiểm tra và xác nhận rằng sản phẩm và dịch vụ đã đúng như cam kết về mặt hình ảnh và số lượng.
                        Chúng tôi sẽ thu phần tiền còn lại từ khách hàng theo phương thức thanh toán đã thỏa thuận trước đó, có thể là chuyển khoản hoặc trả trực tiếp cho nhân viên nghiệm thu..
                      </p>
                    </MDBCollapse>
                  </MDBCol>
                </MDBRow>
              </div>
            </MDBListGroupItem>
          </MDBListGroup>
        </MDBContainer>
      </LayoutOne>
    </Fragment>
  );
};

Faq.propTypes = {
  location: PropTypes.object
};

export default Faq;
