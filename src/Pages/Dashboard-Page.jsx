import React, {Fragment, lazy} from 'react';
import MasterLayout from "../Component/MasterLayout/Master-Layout.jsx";
// import LazyLoader from "../Component/MasterLayout/LazyLoader.jsx";
const Dashboard=lazy(()=> import("../Component/Dashboard/Dashboard.jsx"))

const DashboardPage = () => {
    return (
        <Fragment>
            <MasterLayout>
                    <Dashboard/>
            </MasterLayout>
        </Fragment>
    );
};

export default DashboardPage;