import { FC, useEffect } from 'react';
import { UploadFile } from './style';
import { UploadOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';

interface Props {
  handleFileChange: (info: any) => void;
  files: File[];
  setFiles: (files: File[]) => void;
}

const UploadFileArea: FC<Props> = ({ handleFileChange, files, setFiles }) => {
  return (
    <UploadFile multiple beforeUpload={() => false} customRequest={() => {}} showUploadList onChange={handleFileChange} listType="picture">
      <Button icon={<UploadOutlined />}>Upload</Button>
    </UploadFile>
  );
};

export default UploadFileArea;
