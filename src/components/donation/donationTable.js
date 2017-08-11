import React, { Component } from "react";
import Table from "antd/lib/table";
import Icon from "antd/lib/icon";
import Card from "antd/lib/card";
import DonationModal from "./donationModal";

class DonationTable extends Component {
  state = {
    modalVisible: false,
    rowDetail: null
  };

  showRowDetails = (event, rowData) => {
    event.preventDefault();

    	this.setState({
      modalVisible: true,
      rowDetail: rowData
    });
  };

  handleCancel() {
    this.setState({
      modalVisible: false
    });
  }

  render() {
    const columns = [
      {
        title: "Musteri Numarasi",
        dataIndex: "cif",
        key: "cif"
      },
      {
        title: "Kurum Adi",
        dataIndex: "institutionName",
        key: "institutionName"
      },
      {
        title: "Kurum Kisa Adi",
        dataIndex: "institutionAbbr",
        key: "institutionAbbr"
      },
      {
        title: "Statu",
        dataIndex: "status",
        key: "status"
      },
      {
        title: "",
        key: "action",
        render: (text, record) => {
          return (
            <a
              href="#close"
              onClick={event => this.showRowDetails(event, record)}
              className="ant-dropdown-link"
            >
              <Icon type="file" />
            </a>
          );
        }
      }
    ];

    const dataSource = [
      {
        key: "1",
        cif: "123",
        institutionName: "Lorem Ipsum",
        institutionAbbr: "Lipsum",
        status: "Aktif"
      },
      {
        key: "2",
        cif: "456",
        institutionName: "Dolor Sit Amet",
        institutionAbbr: "dsa",
        status: "Aktif"
      }
    ];

    return (
      <Card title="Bagis Kurumlari" bordered={false}>
        <Table
          dataSource={dataSource}
          columns={columns}
          bordered
          title={() => "Header (buraya ekle butonu vs gelir)"}
        />

        {this.state.modalVisible &&
          <DonationModal
            visible={this.state.modalVisible}
            onCancel={e => this.handleCancel()}
            data={this.state.rowDetail}
          />}
      </Card>
    );
  }
}

export default DonationTable;
