import React, { Component, Fragment } from "react";
import Search from "../../components/Search/Search";
import { Table } from "antd";
import { connect } from "react-redux";
import * as actionCreators from "../../actionCreators/resourse"; //store 里有出口文件 已经导出

class Resource extends Component {
  componentDidMount() {
    this.props.handleResource();
  }
  render() {
    const columns = [
      {
        title: "资料名称",
        dataIndex: "name",
        key: "name"
      },
      {
        title: "文件大小",
        dataIndex: "size",
        key: "size"
      },
      {
        title: "上传人",
        dataIndex: "publisher",
        key: "publisher"
      },

      {
        title: "上传时间",
        key: "createdAt",
        render: () => <span>Delete</span>
      },
      {
        title: "下载资料",
        dataIndex: "load",
        key: "load"
      }
    ];

    const data = [...this.props.resource];

    return (
      <Fragment>
        <Search
          option1={"资料名称"}
          option2={"上传人"}
          api={" http://localhost:3000/api/resource.json"}
        />
        <Table
          pagination={false}
          size="small"
          columns={columns}
          dataSource={data}
        ></Table>
      </Fragment>
    );
  }
}

const mapStateToProps = state => {
  return {
    resource: state.resource.get("result")
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleResource() {
      dispatch(actionCreators.getResourceApi());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Resource);
