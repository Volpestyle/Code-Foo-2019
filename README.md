# Code Foo 2019 - Front End
A single page web app for loading news articles and videos from IGN.com. Made with Angular 7.

## Usage 
Once downloaded, you can build and serve the app locally with:
```console 
cd front-end-app
ng serve --open 
```

## Description 
This app loads content and comment data from IGN's API at (https://ign-apis.herokuapp.com/). Content can be filtered to either show only videos or only articles. <br /> 
To see the app in action, check out the github page [here.](https://volpestyle.github.io/Code-Foo-2019/)

## Implementation Details
### Styling
I first built a static mockup of the app with HTML and Sass, using Bootstrap to quickly create a responsive grid layout. In order to make the most out of Angular, I held off on creating any css transitions or interactive features.

### Components
I split my static website into two parent components: 'NavbarComponent' and 'ContentComponent'. NavbarComponent contains children components named 'NavbarItemComponent', while ContentComponent contains children named 'ContentItemComponent'. As you can imagine, a NavbarItem is represented in the app by each option in the navigation menu: Latest, Videos, and Articles. A ContentItem is represented by each article or video listed on the page. <br />
Inside ContentComponent, Services are used to request the content from the api and store it into an array of [models](https://github.com/Volpestyle/Code-Foo-2019/blob/master/README.md#models). Using `*ngFor`, this array of models is used to initialize the children ContentItemComponents. Inside each ContentItemComponent, a Service is used to make another api request for the given article or video's comments. <br />
Inside the NavbarComponent, a Service is used to request each NavbarItem. The data for each NavbarItem is simply hard-coded into the Service.  

### Services
It is the [*Angular way*](https://angular.io/tutorial/toh-pt4#why-services) to use services to access data instead of components. This is why I used one for api requests. However, they also allow for [bi-directional communication](https://angular.io/guide/component-interaction#parent-and-children-communicate-via-a-service) between components, which I found helpful in the case of filtering content results.

#### HTTP Requests
All HTTP requests for content within the app reside in a Service cleverly named 'ContentService'. Here I used the 'HTTPClient' Module to make a JSONP request and return whats known as an 'Observable'. (The important thing here is that a JSONP request is used. IGN's api supports JSONP so that clients can bypass the [Same Origin Policy](https://gist.github.com/jesperorb/6ca596217c8dfba237744966c2b5ab1e))

#### Filtering Results
All content data recieved from the api is stored in a Service named 'FilterContentService'. The purpose of this service is to allow communication between NavItems and Content, so that when a user clicks on a menu item, the corresponding content is shown on the page. When a NavItem is clicked, it becomes 'active', and the Service uses information about the active NavItem to correctly filter the content data.

### Models
A 'model' just refers to a TypeScript object in which a set of data is stored. For example, each JSON object returned by the api call for content is stored in a 'ContentItem' model. The thumbnails inside each JSON object is also stored as in an array of 'Thumbnail' models, which is put inside its respective ContentItem model. [This article](https://nehalist.io/working-with-models-in-angular/) was very helpful in helping me understand how exactly to work with models and deserialize them from raw JSON. 

