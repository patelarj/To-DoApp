export class Task {
    taskName: string;
    taskDetails: string;
    taskDate: string;
    status: TaskStatus;
}

export enum TaskStatus {
    Complited = "complited",
    Panding = "panding",
    Overdue = "overdue",
}