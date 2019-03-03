import {Deserializable} from "./deserializable";

export class CommentInfo implements Deserializable{
    id:String;
    count:Number;
    deserialize(input: any):CommentInfo {
        Object.assign(this, input);
        return this;
    };
}

