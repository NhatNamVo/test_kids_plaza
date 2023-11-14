import { Table } from "antd";
import classNames from "classnames";

import { useEffect, useRef, useState } from "react";

const TableSystem = ({ className, pagination, ...tableProps }) => {
    

    const tableRef = useRef();

    const emptyContent = t('common.no-data')

    useEffect(() => {
        if (!tableProps.dataSource?.length) {
            const tableEmptyWrapper = tableRef.current.querySelector('.ant-empty');
            const emptyElement = document.createElement('span')
            emptyElement.textContent = emptyContent;
            emptyElement.classList.add('empty-content')
            tableEmptyWrapper.appendChild(emptyElement)
        }
    }, [tableProps.dataSource, emptyContent]);

    return (
        <Table
            ref={tableRef}
            pagination={pagination ? { ...pagination, size: 'small' } : false}
            className={
                classNames([
                    className,
                    'table-system',
                    {
                        'table-expandable': tableProps.expandable
                    }
                ])
            }
            {...tableProps}
        />
    )
};

export default TableSystem;

export const withExpandableTable = (WapperComponent) => {
    return (props) => {
        const [rowExpands, setRowExpands] = useState(['0']);

        const expand = (key) => {
            setRowExpands([key.toString()]);
        };

        const collapse = () => {
            setRowExpands(['0'])
        };

        return (
            <WapperComponent {...props} expandedRowKeys={rowExpands} expand={expand} collapse={collapse} />
        )
    }
};
