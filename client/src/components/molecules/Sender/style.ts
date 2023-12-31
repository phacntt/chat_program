import { styled } from 'styled-components';

export const MessageSender = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const ContentMessageSender = styled.div`
  max-width: 80%;
  border: 2px solid #e5efff;
  background-color: #e5efff;
  border-radius: 5px;
  padding: 10px;
  margin: 5px;
  font-size: 17px;
  word-break: break-word;
  line-height: 1.6;
`;

export const ContentFooterMessageSender = styled.div`
  font-size: 15px;
  color: gray;
  margin-top: 15px;
`;
