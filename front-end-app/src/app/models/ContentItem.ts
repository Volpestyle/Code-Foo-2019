export class ContentItem {
    thumbnails: [
        {
            url:String,
            size:String,
            width:Number,
            height:Number,
        }
    ]
    slug:String;
    title:String;
    publishDate:Date;
    contentType:String;
    numberOfComments:Number;
}