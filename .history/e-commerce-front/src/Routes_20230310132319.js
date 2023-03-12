import React from "react";
import { BrowserRouter , Switch, Route} from "react-router-dom";
import Signup from "./user/signup";
import Signin from "./User/Signin";

const Routes = () => {
    return ( <div>
        <Switch>
            <Route path="/signin" exact component={Signin}>
            <Route path="/signin" exact component={Signin}></Route>
        </Switch>
    </div> )
}