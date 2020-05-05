import React from 'react';
import {Grid} from '@material-ui/core';
import {makeStyles} from "@material-ui/styles";

import Footer from "./footer.jsx";
import Header from "./header.jsx";
import Signup from "./signup.jsx";

const useStyles = makeStyles(() => {
    return {
        "footer-header": {
            height: "10vh",
            border: "2px solid black"
        },
        "middle-grid": {
            height: "80vh",
            border: "2px solid red"
        },
        "sign-up": {
            height: "80vh",
            border: "2px solid red"
        },
        "left-middle": {
            border: "2px solid blue",
            background: "lightgray"
        }
    }
})

const SignupPage = props => {
    const classes = useStyles();
    return (
        <div>
            <Grid className={classes["footer-header"]} container xs={12}>
                <Grid item xs={12}>
                    <Header />
                </Grid>
            </Grid>
            <Grid className={classes["middle-grid"]} container xs={12}>
                <Grid className={classes["left-middle"]} item xs={8}>
                </Grid>
                <Grid item xs={4}>
                    <Signup />
                </Grid>
            </Grid>
            <Grid className={classes["footer-header"]} container xs={12}>
                <Grid item xs={12}>
                    <Footer />
                </Grid>
            </Grid>
        </div>
    )
}

export default SignupPage;