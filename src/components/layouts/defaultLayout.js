import React from "react";
import Header from "../widgets/header";

function DefaultLayout({ children }){
    return(
    <React.Fragment>
        <Header />
        <main className="w-full flex flex-col items-center">
            <section className="w-full lg:w-1000 flex flex-col items-center">
                {children}
            </section>
        </main>
    </React.Fragment>
    );
}
export default DefaultLayout;