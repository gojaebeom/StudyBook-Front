import React from "react";
import Header from "../shared/header";

function DefaultLayout({ children }){
    return(
    <React.Fragment>
        <Header />
        <main className="w-full flex flex-col items-center">
            <section className="w-full lg:w-1000">
                {children}
            </section>
        </main>
    </React.Fragment>
    );
}
export default DefaultLayout;