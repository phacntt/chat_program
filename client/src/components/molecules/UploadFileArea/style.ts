import { Upload } from "antd";
import styled from "styled-components";

export const UploadFile = styled(Upload)`
  display: flex;
  align-items: center;

  .ant-upload-list.ant-upload-list-picture {
    display: flex;
    margin-left: 10px;
    .ant-upload-list-item-container {
      width: 240px;
    }
  }
  .ant-upload-list-item.ant-upload-list-item-error {
    margin-right: 10px;
  }
`;
