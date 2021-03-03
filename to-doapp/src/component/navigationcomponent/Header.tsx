import { createStyles, Grid, makeStyles, Paper, Theme } from "@material-ui/core";
import React from "react"


const useStyles = makeStyles((theme: Theme)=>

    createStyles({
        root:{
            flexGrow:1,
        },
        paper:{
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }),

);





export default function Sections() {

    const classes = useStyles();

    return(
        <div>
            <Grid container spacing={3} >
                <Grid item xs={12}>
                    <Paper className={classes.paper}>Top Bar</Paper>
                </Grid>
                <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper}>Side bar</Paper>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Paper className={classes.paper}>Upcomming Taskes</Paper>
                </Grid>
            </Grid>
        </div>
    );
}