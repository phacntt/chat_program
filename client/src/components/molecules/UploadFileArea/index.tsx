import { FC, useEffect, useRef } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { RcFile, UploadChangeParam, UploadFile } from 'antd/es/upload';
import { UploadFileAreaStyle } from './style';

interface Props {
  handleFileChange: (info: any) => void;
  resetKey: number;
  fileList: UploadFile<any>[];
}

const UploadFileArea: FC<Props> = ({ handleFileChange, resetKey, fileList }) => {
  return (
    <UploadFileAreaStyle
      multiple
      beforeUpload={() => false}
      customRequest={() => {}}
      key={resetKey}
      fileList={fileList}
      showUploadList
      onChange={handleFileChange}
      listType="picture"
    >
      <Button icon={<UploadOutlined />}>Upload</Button>
    </UploadFileAreaStyle>
  );
};

export default UploadFileArea;
