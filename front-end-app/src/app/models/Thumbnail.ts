import {Deserializable} from "./deserializable";
export class Thumbnail implements Deserializable{
    height:Number;
    size:String;
    url:String;
    width:Number;

    deserialize(input: any):Thumbnail {
        Object.assign(this, input);
        return this;
    };
}

