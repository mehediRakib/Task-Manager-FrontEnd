import React, {Fragment, lazy} from 'react';
import MasterLayout from "../Component/MasterLayout/Master-Layout.jsx";
import Dashboard from "../Component/Dashboard/Dashboard.jsx";


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