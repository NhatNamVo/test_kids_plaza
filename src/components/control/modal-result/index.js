import { Modal } from "antd";
import CloseSvg from "components/icons/svg/common/close-svg";
import React from "react";

const ModalComponent = ({
  title,
  children,
  isOpen,
  setIsOpen,
  onYes,
  okText = "Ok",
  fullWidth = false,
  className,
  ...props
}) => {
  const handleOk = () => {
    onYes();
  };

  const handleCancel = () => {
    setIsOpen(false);
  };

  return (
    <Modal
      {...props}
      closeIcon={<CloseSvg />}
      className={`modal-result ${className}`}
      title={title}
      centered
      footer={null}
      open={isOpen}
      onOk={handleOk}
      onCancel={handleCancel}
      okText={okText}
      wrapClassName={fullWidth && "modal-full"}
    >
      {children}
    </Modal>
  );
};

export default ModalComponent;
