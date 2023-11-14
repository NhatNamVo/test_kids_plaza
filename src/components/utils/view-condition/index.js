const ViewCondition = ({ children, rIf }) => {
    if (!rIf) {
        return null;
    }

    return children;
};

export default ViewCondition;