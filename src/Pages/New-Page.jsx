import React, {lazy, Suspense} from 'react';
import MasterLayout from "../Component/MasterLayout/Master-Layout.jsx";
import LazyLoader from "../Component/MasterLayout/LazyLoader.jsx";
const New=lazy(()=>import('../Component/New/New.jsx'))

const NewPage = () => {
    return (
        <MasterLayout>
           <Suspense fallback={<LazyLoader/>}>
               <New/>
           </Suspense>
        </MasterLayout>
    );
};

export default NewPage;