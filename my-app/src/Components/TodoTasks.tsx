import { ITask } from "../TypeScript/Interfaces";
import React from "react";


interface Props {
    task:ITask;
    completeTask(taskNameToDelete: string): void;
}

export const TodoTask = ({ task, completeTask} : Props) => {
    return (
        <div className="task">
            <div className="content">
                <span>{task.taskName}</span>
                <span>{task.deadline}</span>
            </div>
            <button onClick={() => completeTask(task.taskName)}></button>
        </div>
    )

}