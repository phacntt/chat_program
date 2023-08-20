import { Image } from 'antd';
import React, { FC } from 'react';

interface Props {
  urlImage: string;
}

const FileImage: FC<Props> = ({ urlImage }) => {
  return <Image width={200} src={urlImage} />;
};

export default FileImage;
