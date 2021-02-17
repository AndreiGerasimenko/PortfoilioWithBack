import React from "react";
import "antd/dist/antd.css";
import { Layout } from "antd";
import contactMe from "./assets/contact-backdrop.jpg";
import {
  Header,
  GreetingPage,
  PageLayout,
  AboutMePage,
  PortfolioSection,
  FeedbackSection,
  ScrollTopButton,
} from "./components";

const { Content, Footer } = Layout;

function App() {
  return (
    <Layout className="main-layout-container">
      <div className="contant-wrapper">
        <Header />
      </div>
      <Content>
        <div className="contant-wrapper">
          <GreetingPage />
          <PageLayout
            title="about me"
            titleColor={"rgb(120, 119, 115)"}
            id="about"
          >
            <AboutMePage />
          </PageLayout>
          <PageLayout
            title="portfolio"
            styles={{ backgroundColor: "#e9e6e6f5" }}
            titleColor={"rgb(120, 119, 115)"}
            id="portfolio"
          >
            <PortfolioSection />
          </PageLayout>
          <PageLayout
            title="contact me!"
            styles={{
              backgroundImage: `url(${contactMe})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: "inset 2000px 0 0 0 rgba(0, 0, 0, 0.3)",
            }}
            titleColor={"rgb(255, 255, 255)"}
            id="contact"
          >
            <FeedbackSection />
          </PageLayout>
        </div>
      </Content>
      <div className="contant-wrapper">
        <Footer style={{ textAlign: "center" }}>
          Made by <strong>Andrew</strong>
        </Footer>
      </div>
      <ScrollTopButton />
    </Layout>
  );
}

export default App;
