import React from "react";
import { Redirect, Route } from "react-router-dom";
import AuthService from "../../services/auth-service";
// import ReactGA from "react-ga";

const ProtectedRoute = ({
    component: Component,
    exact = false,
    path,
    location,
}: any) => {
    return (
        <Route
            exact={exact}
            path={path}
            render={() =>
                !AuthService.isAuthenticated() ? (
                    <Component />
                ) : (
                    <Redirect
                        to={{ pathname: "/", state: { from: location } }}
                    />
                )
            }
        />
    );
};

const AuthenticationLayout = ({
    component: Component,
    exact,
    path,
    location,
}: any) => {

    // ReactGA.pageview(path);

    return (
        <ProtectedRoute
            component={Component}
            exact={exact}
            path={path}
            location={location}
        />
    );
};

export default AuthenticationLayout;
