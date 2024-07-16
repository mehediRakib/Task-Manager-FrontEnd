import React, {Fragment, lazy, Suspense} from 'react';

const Login =lazy(() => import("../Component/Login/Login.jsx"));

import LazyLoader from "../Component/MasterLayout/LazyLoader.jsx";

const LoginPage = () => {
    return (
        <Fragment>
            <Suspense fallback={<LazyLoader/>}>
                <Login/>
            </Suspense>
        </Fragment>
    );
};

export default LoginPage;