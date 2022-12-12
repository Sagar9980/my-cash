import { Row, Col, Layout } from "antd";
import ContentLayout from "Layout/ContentLayout";
const { Content } = Layout;
function AdminContainer({ children, ...rest }: any) {
  return (
    <ContentLayout>
      <Content {...rest}>
        <Row justify="center">
          <Col xl={22} lg={23} md={23} sm={23} xs={23}>
            {children}
          </Col>
        </Row>
      </Content>
    </ContentLayout>
  );
}

export default AdminContainer;
