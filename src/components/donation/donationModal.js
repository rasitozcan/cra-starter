import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Modal from 'antd/lib/modal';
import Button from 'antd/lib/button';
import Row from 'antd/lib/row';
import Col from 'antd/lib/col';

class DonationModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: false,
      data: props.data,
    };
  }

  editForm(e) {
    e.preventDefault();
    this.setState({
      editMode: true,
    });
  }

  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      data: { ...this.state.data, [name]: value },
    });
  }

  renderContent(data) {
    if (this.state.editMode) {
      return this.renderEdit(data);
    } else {
      return this.renderForm(data);
    }
  }

  renderForm(data) {
    return (
      <form>
        <Row>
          <Col sm={24}>
            <label htmlFor="cif">Museri Numarasi: </label>
            <span>
              {data.cif}
            </span>
          </Col>
          <Col sm={12}>
            <label htmlFor="instutionName">Kurumun Adi: </label>
            <span>
              {data.institutionName}
            </span>
          </Col>
          <Col sm={12}>
            <label htmlFor="instutionAbbr">Kurum Kisa Adi: </label>
            <span>
              {data.institutionAbbr}
            </span>
          </Col>
          <Button key="cancel" size="large" onClick={e => this.editForm(e)}>
            Edit
          </Button>
        </Row>
      </form>
    );
  }

  renderEdit(data) {
    return (
      <form>
        <Row>
          <Col sm={24}>
            <label htmlFor="cif">Museri Numarasi</label>
            <input
              value={this.state.data.cif}
              name="cif"
              onChange={e => this.handleChange(e)}
              type="text"
            />
          </Col>
          <Col sm={12}>
            <label htmlFor="institutionName">Kurumun Adi</label>
            <input
              value={this.state.data.institutionName}
              onChange={e => this.handleChange(e)}
              name="institutionName"
              type="text"
            />
          </Col>
          <Col sm={12}>
            <label htmlFor="institutionAbbr">Kurum Kisa Adi</label>
            <input
              value={this.state.data.institutionAbbr}
              onChange={e => this.handleChange(e)}
              name="institutionAbbr"
              type="text"
            />
          </Col>
        </Row>
      </form>
    );
  }

  onSave() {
    console.log('Data to save:', JSON.stringify(this.state.data));
    this.props.onCancel();
  }

  renderFooter() {
    if (this.state.editMode) {
      return [
        <Button
          key="cancel"
          size="large"
          onClick={() => this.setState({ editMode: false })}
        >
          Iptal
        </Button>,
        <Button key="save" size="large" onClick={e => this.onSave()}>
          Kaydet
        </Button>,
      ];
    } else {
      return [
        <Button key="cancel" size="large" onClick={this.props.onCancel}>
          Kapat
        </Button>,
      ];
    }
  }

  render() {
    const { editMode } = this.state;
    const { visible, data } = this.props;
    return (
      <div>
        <Modal
          visible={visible}
          title={editMode ? 'Edit' : 'View'}
          onOk={this.handleOk}
          onCancel={this.props.onCancel}
          footer={this.renderFooter()}
        >
          {data ? this.renderContent(data) : null}
        </Modal>
      </div>
    );
  }
}

DonationModal.propTypes = {
  visible: PropTypes.bool,
};

DonationModal.defaultProps = {
  visible: false,
};

export default DonationModal;
