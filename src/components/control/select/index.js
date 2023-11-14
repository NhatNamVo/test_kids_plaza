import { Col, Row, Select } from "antd";
import {
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
  useState,
} from "react";
import classNames from "classnames";
import useResponsive from "hooks/useResponsive";
import ModalSystem from "../modal";

import style from "./style.module.scss";
import LazyImage from "components/utils/lazy-image";

const SelectSystem = ({
  selectRef,
  title,
  isEmpty = false,
  className,
  children,
  labelKey = "label",
  valueKey = "value",
  options,
  isDropShow = false,
  ...selectProps
}) => {
  const { screens } = useResponsive();
  const { isMobile } = screens;

  const [openOptions, setOpenOptions] = useState(false);

  const selectOptions = useMemo(() => {
    if (!options) {
      return [];
    }

    return options.map((option) => ({
      label: option[labelKey],
      value: option[valueKey],
    }));
  }, [labelKey, valueKey, options]);

  const selectOptionsIcon = useMemo(() => {
    if (!options) {
      return [];
    }

    return options.map((option) => ({
      label: option[labelKey],
      value: option[valueKey],
      ...(option?.icon && {
        label: (
          <Row align="middle" gutter={[10, 0]}>
            <Col>
              <LazyImage
                className={style.bankItem__logo}
                src={option?.icon}
                alt="fiat-bizz88-bank"
                layout="fill"
              />
            </Col>
            <Col>{option[labelKey]}</Col>
          </Row>
        ),
      }),
    }));
  }, [labelKey, valueKey, options]);

  const NothingOptions = useCallback(() => {
    return <p className="empty-options">Không có dữ liệu</p>;
  }, []);

  const selectMobileValue = useMemo(() => {
    if (!selectProps.value && !isEmpty) {
      return undefined;
    }

    const selectedOption = selectOptions.find(
      (option) => option.value === selectProps.value
    );

    return selectedOption?.label || undefined;
  }, [selectProps.value, selectOptions]);

  const handleMobileSelectClick = (event) => {
    event.preventDefault();

    setOpenOptions(true);
  };

  const selectOptionValue = (value) => {
    setOpenOptions(false);
    selectProps.onChange?.(value);
  };

  const isCheckSelectIcon = useMemo(() => {
    const isCheck = options?.every((option) => option.icon);

    return isCheck;
  }, [options]);

  useImperativeHandle(selectRef, () => ({
    selectOptionValue,
  }));

  return (
    <>
      {(!isMobile || !isDropShow) && (
        <Select
          {...selectProps}
          options={isCheckSelectIcon ? selectOptionsIcon : selectOptions}
          notFoundContent={<NothingOptions />}
          className={classNames(["select-system", className])}
        >
          {children}
        </Select>
      )}

      {isMobile && isDropShow && (
        <>
          <Select
            open={false}
            showSearch={false}
            value={selectMobileValue}
            placeholder={selectProps.placeholder}
            onClick={handleMobileSelectClick}
          />

          <ModalSystem
            open={openOptions}
            title={title}
            onCancel={() => setOpenOptions(false)}
          >
            {children}

            {!children && (
              <div className={style.mobileOptions}>
                <div className={style.bankGroup}>
                  {selectOptions.map((option, index) => (
                    <div
                      key={`${option.value}_${index}`}
                      className={classNames([
                        style.bankItem,
                        {
                          [style.selected]: selectProps.value === option.value,
                        },
                      ])}
                      onClick={() => selectOptionValue(option.value)}
                    >
                      {option.label}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </ModalSystem>
        </>
      )}
    </>
  );
};

export default SelectSystem;

export const withSelectOptions = (Wapped) => {
  return (props) => {
    const selectRef = useRef();

    const selectOption = (value) => {
      selectRef.current.selectOptionValue(value);
    };

    return (
      <SelectSystem {...props} selectRef={selectRef}>
        <Wapped
          value={props.value}
          onSelect={selectOption}
          options={props.options}
        />
      </SelectSystem>
    );
  };
};
