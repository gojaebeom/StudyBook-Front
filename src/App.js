import { Route, Switch } from "react-router-dom";
import Feed from "./components/pages/Feed";

export default function App() {
    return (
    <div className="w-full flex-col justify-center items-center">
        <header className="w-full border p-5">
            <figure className="border">StudyBook</figure>
        </header>
        <Switch>
            <Route exact path="/">
                <Feed />
            </Route>
            <Route exact path="/login">

            </Route>
            <Route exact path="/join">

            </Route>
        </Switch>
    </div>
    );
}