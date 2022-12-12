import { Row, Col, Space, Typography, Modal, message } from "antd";
import { ReactComponent as NotificationIcon } from "Assets/Icons/notification.svg";
import { ReactComponent as LogoutIcon } from "Assets/Icons/logout-icon.svg";
import ProfileImage from "Assets/Image/profile-image.jpg";
import "./ProfileView.scss";
import { useAppSelector } from "../../Redux/hooks";
import { useState } from "react";
import { ExclamationCircleOutlined } from "@ant-design/icons";
import { logoutUser } from "../../API/authApi";
import { useNavigate } from "react-router-dom";
function ProfileView() {
  const navigate = useNavigate();
  const { data } = useAppSelector((store) => store.UserDetailReducer);
  const confirmLogout = async () => {
    await logoutUser()
      .then(() => {
        navigate("/auth/login");
        message.success("User logged out Succesfully");
      })
      .catch(() => {
        message.error("Something went wrong while logging out");
      });
  };
  const confirm = () => {
    Modal.confirm({
      icon: <ExclamationCircleOutlined />,
      content: "Are yo sure want to logout?",
      okText: "Logout",
      cancelText: "Cancel",
      onOk: confirmLogout,
    });
  };
  return (
    <Row className="profile__view__container box shadow rounded">
      <Col lg={24}>
        <Row justify="end" align="middle" gutter={[20, 20]}>
          <Col>
            <NotificationIcon />
          </Col>
          <Col>
            <LogoutIcon onClick={confirm} style={{ cursor: "pointer" }} />
          </Col>
        </Row>
        <Space
          direction="vertical"
          align="center"
          style={{ width: "100%", gap: 0 }}
        >
          <img src={ProfileImage} className="profile__image" alt="" />
          <Typography.Text className="text light-blue bold medium">
            {data.name}
          </Typography.Text>
          <Typography.Text className="text grey small">
            Business Development Officer
          </Typography.Text>
        </Space>
      </Col>
    </Row>
  );
}

export default ProfileView;
