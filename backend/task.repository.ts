import { CreateTask } from './task-create.dto'
import TaskModel, {TaskDoc} from './task.entity'

const createSearchKey = (
    place: string,
    customer: string,
): string => {
    return `${place}|${customer}`
}

export const createTask = async (newTask: CreateTask) => {
    TaskModel.create({
        ...newTask,
        searchKey: createSearchKey(newTask.place, newTask.customer)
    }).catch(e => {
        console.log(e);
    })
}