import React, { Component } from "react";
import { Upload, Button } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import * as actFile from "./../../actions/quanlyfiles/actQuanLyFiles";
import { connect } from "react-redux";
class UploadFile extends Component {
  state = {
    fileList: [],
    uploading: false,
    fileDinhKem: {},
  };

  handleUpload = () => {
    const { fileList } = this.state;
    this.props.uploadFile(fileList, this.addToFileForm);
  };

  addToFileForm = (value) => {
    const { setFileDinhKem } = this.props;
    setFileDinhKem(value);
  };

  render() {
    const { fileList } = this.state;
    const props = {
      onRemove: (file) => {
        this.setState((state) => {
          const index = state.fileList.indexOf(file);
          const newFileList = state.fileList.slice();
          newFileList.splice(index, 1);
          return {
            fileList: newFileList,
          };
        });
      },

      beforeUpload: (file) => {
        this.setState((state) => ({
          // fileList: [...state.fileList, file],
          fileList: [file],
        }));
        return false;
      },
      fileList,
    };
    return (
      <div>
        <Upload {...props} onChange={this.handleUpload}>
          <Button icon={<UploadOutlined />}>Thêm file</Button>
        </Upload>
      </div>
    );
  }
}
const mapStateToProps = () => {};
const mapDispatchToProps = (dispatch) => ({
  uploadFile: (value = {}, func) => {
    dispatch(actFile.UploadFile_Request(value, func));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(UploadFile);
