import React from "react";
import {Grid, Card, CardContent, Typography} from "@material-ui/core";

const TicketCard = (props) => {
    console.log(props)    
    return(
        <Card>
{props.ticket && <CardContent>
            <Grid container>
                  <Grid item xs={6}>
                      <Typography color="textSecondary" variant="h6">Country Name</Typography>
                  </Grid>
                  <Grid item xs={6}>
                      <Typography variant="h5">{}</Typography>
                  </Grid>
            </Grid>
            <Grid container>
                  <Grid item xs={6}>
                      <Typography variant="caption" color="textSecondary">{`New Confirmed Cases: ${props}`}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                      <Typography variant="caption">{`Total Confirmed Cases: ${props}`}</Typography>
                  </Grid>
            </Grid>
            <Grid container>
                  <Grid item xs={6}>
                      <Typography variant="caption" color="textSecondary">{`New Fatalities: ${props}`}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                      <Typography variant="caption">{`Total Confirmed Fatalities: ${props}`}</Typography>
                  </Grid>
            </Grid>
            <Grid container>
                  <Grid item xs={6}>
                      <Typography variant="caption" color="textSecondary">{`New Recovered:  ${props}`}</Typography>
                  </Grid>
                  <Grid item xs={6}>
                      <Typography variant="caption">{`Total Confirmed Recovered: ${props}`}</Typography>
                  </Grid>
            </Grid>
        </CardContent>}
    </Card>
    )
}

export default TicketCard;