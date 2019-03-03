import { Thumbnail } from '../models/Thumbnail';
import {Deserializable} from "./deserializable";

export class ContentItem implements Deserializable{
    authors:String[];
    contentId:String;
    contentType:String;
    metadata: {
        description:String;
        duration:Number;
        headline:String;
        networks:String[];
        publishDate:Date;
        slug:String;
        state:String;
        title:String;
        videoSeries:String;
    }
    tags: String[];
    title:String;
    thumbnails:Thumbnail[];

    deserialize(input: any):ContentItem {
        Object.assign(this, input);
        //this cars = input.cars.map((car) => new Car().deserialze(car));
        this.thumbnails = input.thumbnails.map((thumbnail) => new Thumbnail().deserialize(thumbnail));
        return this;
    };
}

