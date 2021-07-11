import React from "react";
import { Route, Switch } from "react-router-dom";
import JoinForm from "./components/widgets/JoinForm";
import LoginForm from "./components/widgets/LoginForm";
import DefaultLayout from "./components/layouts/DefaultLayout";
import SignLayout from "./components/layouts/SignLayout";
import Feed from "./components/containers/Feed";

export default function App() {
    return (
    <div className="app-container">
        <Switch>
            <Route exact path="/">
                <DefaultLayout>
                    <Feed />
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