import { useCallback, useMemo } from "react";
import style from "./style.module.scss";

import {
  InfoCircleOutlined,
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
} from "@ant-design/icons";

import { NOTIFICATION_TYPE } from "constants/app-constants";
import classNames from "classnames";
import { toast } from "react-toastify";

function Notification({ type, message }) {
  const IconStatus = useCallback(() => {
    switch (type) {
      case NOTIFICATION_TYPE.SUCCESS:
        return <CheckCircleOutlined />;
      case NOTIFICATION_TYPE.ERROR:
        return <CloseCircleOutlined />;
      case NOTIFICATION_TYPE.INFO:
        return <ExclamationCircleOutlined />;
      case NOTIFICATION_TYPE.WARN:
        return <InfoCircleOutlined />;
      default:
        return <CheckCircleOutlined />;
    }
  }, [type]);

  const notificationClass = useMemo(() => {
    switch (type) {
      case NOTIFICATION_TYPE.SUCCESS:
        return style.success;
      case NOTIFICATION_TYPE.ERROR:
        return style.error;
      case NOTIFICATION_TYPE.INFO:
        return style.info;
      case NOTIFICATION_TYPE.WARN:
        return style.warn;
      default:
        return style.success;
    }
  }, [type]);

  return (
    <div className={style.notification}>
      <div
        className={classNames([style.notification__status, notificationClass])}
      >
        <IconStatus />
      </div>

      <div className={style.notification__message}>{message}</div>
    </div>
  );
}

const notice = (type, message, uid = "custom-id-yes") => {
  toast(<Notification type={type} message={message} />, {
    autoClose: 2000,
    hideProgressBar: true,
    toastId: uid,
  });
};

export default notice;
