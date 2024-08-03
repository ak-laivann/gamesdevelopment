import { RootRouter } from "../Router";
import { Layout } from "antd";
const { Content, Sider } = Layout;

export const HomeContainer = () => {
  return (
    <Layout style={{ height: "100vh", overflow: "hidden" }}>
      <Content
        style={{
          margin: "24px 16px",
          padding: "0px 10px 0px 10px",
          height: "100vh",
          overflowY: "scroll",
          overflowX: "hidden",
        }}
      >
        <RootRouter />
      </Content>
    </Layout>
  );
};
