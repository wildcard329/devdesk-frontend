import React from "react";
import {Grid} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";

import Header from "./header";
import Footer from "./footer";
import TicketInfo from "./ticketinfo";
// import UserInfo from "./userinfo";

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

const Dashboard = () => {

    const classes = useStyles();


    return (
        <div>
            <Grid className={classes["footer-header"]} container xs={12}>
                <Grid item xs={12}>
                    <Header />
                </Grid>
            </Grid>
            <Grid className={classes["middle-grid"]} container xs={12}>
                <Grid item xs={6}>
                    {/* <UserInfo /> */}
                </Grid>
                <Grid item xs={6}>
                    <TicketInfo />
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

export default Dashboard;