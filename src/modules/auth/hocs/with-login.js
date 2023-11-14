import { useEffect } from "react";
import { useRouter } from "next/router";

import { useAuth } from "components/containers/auth";

const withLogin = (WappedComponent) => {
    return (props) => {
        const router = useRouter();
        const { isLogin } = useAuth();

        useEffect(() => {
            if (isLogin) {
                router.replace('/');
            }
        }, [isLogin]);

        return (
            <WappedComponent {...props} />
        )
    }
};

export default withLogin;