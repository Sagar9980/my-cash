import { Row, Col, Typography } from "antd";
import "./OverviewCard.scss";
function OverviewCards(props: any) {
  const { title, image, amount, color } = props;
  return (
    <Row
      justify="center"
      align="middle"
      className="card__container box shadow"
      style={{ background: `${color}` }}
    >
      <Col lg={24}>
        <Row justify="space-between" gutter={[20, 20]}>
          <Col lg={4}>{image}</Col>
          <Col lg={18}>
            <Typography.Paragraph className="text white small">
              {title}
            </Typography.Paragraph>
            <Typography.Paragraph className="text white bold small">
              Rs. {amount}
            </Typography.Paragraph>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default OverviewCards;
