import { Card, CardContent, makeStyles, Typography } from "@material-ui/core"
import React from "react"
import { Task } from "../../models/Task"

const useStryles = makeStyles({
    root: {
        minWidth: 275,
    },

    bullet:{
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    tital:{
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

interface ITask{
    task: Task[];
}

const TaskCard: React.FunctionComponent<ITask> = (props) =>{
const classes = useStryles();


return(
    <Card>
        <CardContent>
            <Typography className={classes.tital}>{props.task[0].taskName}</Typography>
            <Typography variant="body2" component="p">{props.task[0].taskDetails}</Typography>

        </CardContent>
    </Card>
)


}

export default TaskCard;