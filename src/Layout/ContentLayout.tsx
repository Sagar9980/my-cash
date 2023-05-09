import { useState } from "react";
import { Affix, Layout } from "antd";
import SideBar from "Components/SideBar/SideBar";

const { Content, Sider } = Layout;
const ContentLayout = (props: any) => {
  const [collapsed, setCollapsed] = useState<boolean>(false);
  return (
    <Layout style={{ height: "100vh", background: "#EAF5FF" }}>
      <Affix>
        <Sider
          style={{ height: "100vh" }}
          collapsible
          collapsed={collapsed}
          onCollapse={(value) => setCollapsed(value)}
        >
          <SideBar isCollapsed={collapsed} />
        </Sider>
      </Affix>

      <Content style={{ paddingTop: "30px" }}>{props.children}</Content>
    </Layout>
  );
};

export default ContentLayout;
