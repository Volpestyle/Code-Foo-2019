# Code Foo 2019 - Front End
A single page web app for loading news content from IGN.com. Made with Angular 7.

## Description 
This app loads content and comment data from IGN's API at (https://ign-apis.herokuapp.com/). Content can be filtered to either show only videos or only articles. <br /> 
To see website in action, check out the github page [here.](https://volpestyle.github.io/Code-Foo-2019/)

## Implementation Details
#### Styling
I first built a static mockup of the app with HTML and Sass, using Bootstrap to quickly create a responsive grid layout. In order to make the most out of Angular, I held off on creating any css transitions or interactive features.

#### Components
I split my static website into two parent components: 'Navbar' and 'Content'. Navbar contains children components named 'NavItem', while Content contains children named 'ContentItem'. Inside the Content component, I use Services to request the content from the api and store it into an array of Models. Using `\*ngFor`, this array of Models is then used to initialize the children ContentItem components.

### Services

#### HTTP Requests

#### Use of Models
I created a set of models to handle the json being returned by the api

