import Layout from "antd/lib/layout";
import Row from "antd/lib/row";
import Col from "antd/lib/col";
import Card from "antd/lib/card";

import React from "react";
import DonationTable from "./components/donation/donationTable";
import "./App.css";

// const { Header, Footer, Sider, Content } = Layout;
const { Content } = Layout;

const App = () => {
  return (
    <div>
      <Row gutter={16}>
        <Col sm={24}>
          <div className="gutter-box">
            <DonationTable />
          </div>
        </Col>
        <Col sm={12} xs={24}>
          <div className="gutter-box">
            <Card title="Card title" bordered={false}>
              Some other content
            </Card>
          </div>
        </Col>
        <Col sm={12} xs={24}>
          <div className="gutter-box">
            <Card title="Card title" bordered={false}>
              Some other content
            </Card>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default App;
