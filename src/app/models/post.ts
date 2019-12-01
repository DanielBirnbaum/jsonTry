import { CommentModel } from './comment';

export class PostModel {

    "userId": number;
    "id": number;
    "title": string;
    "body": string;
    comments:CommentModel[];
}