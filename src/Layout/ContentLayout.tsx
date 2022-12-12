import { useState } from "react";
import { Layout } from "antd";
import SideBar from "Components/SideBar/SideBar";

const { Content, Sider } = Layout;
const ContentLayout = (props: any) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  return (
    <Layout style={{ minHeight: "100vh", background: "#EAF5FF" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <SideBar />
      </Sider>
      <Content style={{ paddingTop: "30px" }}>{props.children}</Content>
    </Layout>
  );
};

export default ContentLayout;
