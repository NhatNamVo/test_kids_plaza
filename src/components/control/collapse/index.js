import { Collapse } from "antd";
import classNames from "classnames";

const CollapseSystem = ({ className, items, content: Content, header: Header, ...collapseProps }) => {

    return (
        <Collapse
            {...collapseProps}

            expandIconPosition={collapseProps.expandIconPosition || 'end'}
            className={classNames(['collapse-system', className])}
        >
            {
                items?.map((item, index) => {
                    return (
                        <Collapse.Panel key={index} header={<Header item={item} />}>

                            <Content item={item} />

                        </Collapse.Panel>
                    )
                })
            }
        </Collapse>
    )
};

export default CollapseSystem;