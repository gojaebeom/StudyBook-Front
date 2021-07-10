import React from "react";
import { Route, Switch } from "react-router-dom";
import SummaryCard from "./components/cards/SummaryCard";
import JoinForm from "./components/JoinForm";
import LoginForm from "./components/LoginForm";
import DefaultLayout from "./layouts/DefaultLayout";
import SignLayout from "./layouts/SignLayout";

export default function App() {
    return (
    <div className="app-container">
        <Switch>
            <Route exact path="/">
                <DefaultLayout>
                    <SummaryCard />
                </DefaultLayout>
            </Route>
            <Route exact path="/login">
                <SignLayout children={<LoginForm />}/>
            </Route>
            <Route exact path="/join">
                <SignLayout children={<JoinForm />}/>
            </Route>
        </Switch>
    </div>
    );
}