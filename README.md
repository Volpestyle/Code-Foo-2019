# Code Foo 2019 - Front End
A single page web app for loading news content from IGN.com. Made with Angular 7.

## Description 
This app loads content and comment data from IGN's API at (https://ign-apis.herokuapp.com/). Content can be filtered to either show only videos or only articles. <br /> 
To see website in action, check out the github page [here.](https://volpestyle.github.io/Code-Foo-2019/)

## Implementation Details
#### Styling
I first built a static mockup of the app with HTML and Sass, using Bootstrap to quickly create a responsive grid layout. In order to make the most out of Angular, I held off on creating any css transitions or interactive features.

#### Components
I split my static website into two parent components: 'Navbar' and 'Content'. Navbar contains children components named 'NavItem', while Content contains children named 'ContentItem'. As you can imagine, a NavItem is represented in the app by each option in the navigation menu: Latest, Videos, and Articles. A ContentItem is represented by each article or video listed on the page. <br />
Inside the Content component, Services are used to request the content from the api and store it into an array of Models. Using `*ngFor`, this array of Models is used to initialize the children ContentItem components. Inside each ContentItem componenent, a Service is used to make another api request for the given article or video's comments. <br />
Inside the Navbar component, a Service is used to request each NavItem. The Model data of each NavItem is simply hard-coded into the Service.  

#### HTTP Requests
All HTTP requests for content within the app reside in a Service cleverly named ContentService. Here I used the HTTPClient Module to make a JSONP request to the api. (The important thing here is that a JSONP request is used. IGN's api supports JSONP so that clients can bypass the [Same Origin Policy](https://gist.github.com/jesperorb/6ca596217c8dfba237744966c2b5ab1e))

#### Services

#### Use of Models
I created a set of models to handle the json being returned by the api

