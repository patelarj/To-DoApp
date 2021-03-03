import { createStyles, Grid, makeStyles, Paper, Theme } from "@material-ui/core";
import React, { useState } from "react"
import TaskBar from "../TaskBar/TaskBar";
import Data from "../../data/Data.json";
import { Task } from "../../models/Task";

const tasks = Data
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
const[currentList, chageList] = useState<any[]>(tasks)


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
                    <Paper className={classes.paper}><TaskBar taskList={currentList} ></TaskBar></Paper>
                </Grid>
            </Grid>
        </div>
    );
}