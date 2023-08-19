import { FileTwoTone } from "@ant-design/icons";
import React, { FC } from "react";
import {
  ContainerDetailFileAnother,
  ContainerFileAnother,
  DetailFileAnotherSize,
} from "./style";
import { convertFileSize } from "helper/convertSizeFile";
import {} from "antd";

interface Props {
  fileName: string;
  fileSize: number;
}

const FileAnother: FC<Props> = ({ fileName, fileSize }) => {
  return (
    <ContainerFileAnother>
      <FileTwoTone />
      <ContainerDetailFileAnother>
        <a href={`http://localhost:4000/${fileName}`} target="_blank" download={true}>
          <div>
            {fileName.slice(fileName.indexOf("-") + 1, fileName.length)}
          </div>
        </a>
        <DetailFileAnotherSize>
          {convertFileSize(fileSize)}
        </DetailFileAnotherSize>
      </ContainerDetailFileAnother>
    </ContainerFileAnother>
  );
};

export default FileAnother;
