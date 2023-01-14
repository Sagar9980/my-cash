import React from "react";
import { Row, Col, Typography } from "antd";
import LoadingGif from "Assets/Icons/Rhombus.gif";

function Loader() {
  return (
    <Row justify="center" align="middle" style={{ height: "100vh" }}>
      <Col>
        <img src={LoadingGif} alt="loading" />
        <Typography.Paragraph className="text grey">
          Loading...
        </Typography.Paragraph>
      </Col>
    </Row>
  );
}

export default Loader;
