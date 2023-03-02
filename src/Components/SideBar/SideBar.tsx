import { Menu, Row, Col, Typography } from "antd";
import { ReactComponent as OverviewIcon } from "Assets/Icons/overview.svg";
import { ReactComponent as TransactionIcon } from "Assets/Icons/transaction.svg";
import Logo from "Assets/Icons/mycash-logo.png";
import LogoIcon from "Assets/Icons/mycash-icon.png";
import { useNavigate } from "react-router-dom";

function SideBar({ isCollapsed }: any) {
  const navigate = useNavigate();
  const handleClick = (value: any) => {
    navigate(`/${value?.key}`);
  };
  return (
    <Row>
      <Col lg={24}>
        <div>
          <Typography.Title level={3} style={{ textAlign: "center" }}>
            <img src={isCollapsed ? LogoIcon : Logo} alt="logo" />
          </Typography.Title>
        </div>
        <Menu mode="inline" onClick={handleClick} defaultSelectedKeys={[""]}>
          <Menu.Item key="" icon={<OverviewIcon />}>
            Overview
          </Menu.Item>
          <Menu.Item key="transactions" icon={<TransactionIcon />}>
            Transactions
          </Menu.Item>
        </Menu>
      </Col>
    </Row>
  );
}

export default SideBar;
