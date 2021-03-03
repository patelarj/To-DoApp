import React from "react"
import { Task } from "../../models/Task";
import TaskCard from "./TaskCard";

interface ITaskList {
    taskList : Task[];
}


const TaskBar: React.FunctionComponent<ITaskList> = (props) => {




    return(
        <div><TaskCard task={props.taskList}></TaskCard></div>
    )
}

export default TaskBar;