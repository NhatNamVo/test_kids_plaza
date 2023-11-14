import { Modal } from "antd";
import classNames from "classnames";
import useResponsive from "hooks/useResponsive";

import DrawerSystem from "../drawer";

const ModalSystem = ({ open, title, children, className, onCancel, ...modalProps }) => {
    const { screens } = useResponsive();
    const { isMobile } = screens;

    return (
        <>
            {isMobile && (
                <DrawerSystem
                    open={open}
                    title={title}
                    placement="bottom"
                    className={className}
                    closable={modalProps.closable}

                    onClose={onCancel}
                >
                    {children}
                </DrawerSystem>
            )}

            {!isMobile && (
                <Modal
                    open={open}
                    title={title}
                    {...modalProps}
                    footer={false}
                    className={classNames([className, 'modal-system'])}

                    onCancel={onCancel}
                >
                    {children}
                </Modal>
            )}
        </>
    )
};

export default ModalSystem;