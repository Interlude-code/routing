import {Document, Model, model, models, Schema} from 'mongoose'

export interface TaskDoc extends Document {
    date: string,
    place: string,
    customer: string,
    comments: string,
    creationDate: string,
    searchKey: string
}

export const taskSchema = new Schema<TaskDoc>(
    {
        date: {
            type: String,
            required: true,
        },
        place: {
            type: String,
            required: true,
        },
        customer: {
            type: String,
            required: true,
        },
        comments: {
            type: String,
            required: true,
        },
        creationDate: {
            type: String,
            required: true,
            default: new Date().toISOString()
        },
        searchKey: {
            type: String,
            required: true,
            index: true
        }

    },
    {
        versionKey: false,
    },
)
export default (models.Task as Model<TaskDoc, {}, {}, {}, any>) || model<TaskDoc>('Task', taskSchema)
