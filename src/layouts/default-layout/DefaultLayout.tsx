import React, {useState} from "react";
import {Redirect, Route} from "react-router-dom";
import useStyles from "./styles";
import AuthService from "../../services/auth-service";
import NavBar from "../../components/nav-bar/NavBar";
import SideBar from "../../components/side-bar/SideBar";

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
                AuthService.isAuthenticated() ? (
                    <Component/>
                ) : (
                    <Redirect
                        to={{pathname: "/login", state: {from: location}}}
                    />
                )
            }
        />
    );
};


const DefaultLayout = ({
                           component: Component,
                           exact,
                           path,
                           location,
                       }: any) => {
    const classes = useStyles();

    const [isMobileNavOpen, setMobileNavOpen] = useState(false);
    return (

        <div className={classes.root}>
            <NavBar onMobileNavOpen={() => setMobileNavOpen(true)}/>
            <SideBar
                onMobileClose={() => setMobileNavOpen(false)}
                openMobile={isMobileNavOpen}
            />
            <div className={classes.wrapper}>
                <div className={classes.container}>
                    <div className={classes.content}>
                        <ProtectedRoute
                            component={Component}
                            exact={exact}
                            path={path}
                            location={location}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DefaultLayout;
