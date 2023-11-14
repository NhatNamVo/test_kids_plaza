const { Skeleton } = require("antd")

const SkeletonSystem = ({children, row = 1, ...props}) => {
    return (
        <Skeleton {...props} paragraph={{ rows: row }}>
            { children }
        </Skeleton>
    )
}

export default SkeletonSystem;