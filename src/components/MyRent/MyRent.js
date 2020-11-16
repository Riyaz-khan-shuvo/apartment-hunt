import React from "react";
import Sidebar from "../Sidebar/Sidebar";

const MyRent = () => {
    return (
        <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-3 col-sm-4 col-12">
                <Sidebar></Sidebar>
            </div>
            <div className="col-xl-10 col-lg-10 col-md-9 col-sm-8 col-12">
                <h1>This is My rent section</h1>
            </div>
        </div>
    );
};

export default MyRent;
