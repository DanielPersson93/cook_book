import { model, Schema } from 'mongoose'
import IComments from './interfaces/comments.model';

const schema = new Schema<IComments>({
    comment: { type: String, required: true },
    name: { type: String, required: true },
    createdAt: { type: Date, default: () => new Date() },
});

const CommentModel = model<IComments>('Comment', schema)
export default CommentModel