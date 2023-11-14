import React from "react";

import RightSvg from "modules/home/svg/right-svg";

import style from "./style.module.scss";

const BreadcrumbsTab = ({ root, lists, onSelectTab, isShow = false }) => {
  console.log({
    root,
    lists,
    onSelectTab,
    isShow,
  });

  if (!isShow) {
    return;
  }

  return (
    <div className={style.breadcrumbs}>
      <div className={style.breadcrumbs}>
        <div className={style.overview} onClick={() => onSelectTab(root.value)}>
          {root?.title}
        </div>

        <RightSvg />

        <div className={style.content}>
          {lists?.map((item, index) => (
            <div
              key={index}
              className={style.content_item}
              onClick={() => onSelectTab(item?.type)}
            >
              {item?.title}
              <RightSvg />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbsTab;
