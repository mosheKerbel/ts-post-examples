import React from "react";
import ReactModal, { Props as ReactModalProps } from "react-modal";

type designPropsToOmit =
  | "className"
  | "portalClassName"
  | "bodyOpenClassName"
  | "overlayClassName";
type ReactModalPropsWithoutDesign = Partial<
  Omit<ReactModalProps, designPropsToOmit>
>;
type MyModalProps = ReactModalPropsWithoutDesign & {
  width: number;
  height: number;
};

export const MyModal: React.FC<MyModalProps> = (props) => {
  const { isOpen = false, width, height, ...rest } = props;
  const contentStyle: React.CSSProperties = {
    width: width,
    height: height,
    border: "1px solid black",
    backgroundColor: "white",
  };
  const styles = { content: contentStyle };

  return <ReactModal isOpen={isOpen} style={styles} {...rest} />;
};

export default MyModal;
