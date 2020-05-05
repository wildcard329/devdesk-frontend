import React, {useEffect} from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import {connect} from "react-redux";

import {getTickets} from "../../actions";
import TicketCard from "./ticketcard";

const useStyles = makeStyles(() => {

    return {
        "appbar": {
            minHeight: "25px",
            maxHeight: "25px"
        },
        "section": {
            border: "2px solid black",
            height: "80vh"
        }
    }
})

const TicketInfo = props => {
    const classes = useStyles();

    useEffect(() => {
        props.getTickets();
    }, []);
    return(
        <div>
            <AppBar position="static">
                <Toolbar className={classes["appbar"]}>
                    <Typography>COVID Summary</Typography>
                </Toolbar>
            </AppBar>
            <TicketCard />
            { props.tickets && props.ticket.map( ticket => {
                return <TicketCard ticket={ticket} />
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        tickets: state.tickets
    }
}

export default connect(mapStateToProps, {getTickets}) (TicketInfo);