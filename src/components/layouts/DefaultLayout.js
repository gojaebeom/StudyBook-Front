import React from "react";
import { Link } from "react-router-dom";

export default function DefaultLayout(props){

    return (
    <React.Fragment>
        <header className="header">
            <div className="position-container">
                <figure className="left-menu">
                    <Link to="/" className="title">StudyBook</Link>
                </figure>
                <figure className="right-menu">
                    <Link to="/login" className="menu">로그인</Link>
                </figure>
            </div>
        </header>
        <section className="section">
            <div className="position-container">
                { props.children }
            </div>
        </section>
    </React.Fragment>
    );
}