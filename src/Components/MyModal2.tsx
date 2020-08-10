import React from "react";
import ReactModal, { Props as ReactModalProps } from "react-modal";

export const MyModal: React.FC<Pick<ReactModalProps, 'isOpen' | 'style'> & {
  width: number;
  height: number;
}> = props => {
  const { isOpen, width, height } = props;
  const contentStyle: React.CSSProperties = {
    width: width,
    height: height,
    border: '1px solid black',
    backgroundColor: 'white',
  };
  const styles = { content: contentStyle };

  return <ReactModal isOpen={isOpen} style={styles} />;
};

export default MyModal;
