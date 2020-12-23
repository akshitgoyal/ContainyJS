# ContainyJS

**Description:** 
ContainyJS is a library making the developer's and user's life easy by creating container objects for them! The idea was inspired from app folders on iOS devices, and can prove to be game changer for web developers! There is nothing similar out there, and I hope you enjoy it. 

**Note** :In this repository, the library can be located at `/pub/static/js/containy.js` and style sheet for library at `/pub/static/containy.css`. The example page HTML, CSS, and JS are also located in the same static directory.


### Link: https://containyjs.herokuapp.com/

--- 

## Getting Started
#### Enjoying the library so far? Let's transform your website with these amazing containers!

### Download and Install

1. Download the [latest release from Github.](https://www.google.com/)
2. Obtain the `containy.js` which contains the library and `containy.css` which contains the CSS styling for the library objects.

### Loading the JavaScript files to your HTML page

- Follow the following order to load the library. The following order needs to be followed strictly!

```html
<!DOCTYPE html>
<html lang="en">
    <head>
        <!-- Loading the Style Sheet for Library -->
        <link rel="stylesheet" type="text/css" href="containy.css">

        <!-- Loading the library itself. (with defer tag) -->
        <script type="text/javascript" defer src="/js/containy.js"></script>
    </head>
    <body>
      <!-- We are setting the id to 'myId'. We will use this unique id to select our div tag in JS file. -->
        <div id='myId'></div>
    </body>
</html>
```

### Using the library

Let's look at a simple basic example to get you started:

- Follow to following steps in your JavaScript file:

```javascript
// Pass the id for div tag in your HTML. In our example, we used 'myId'.
const cards = new cardsGenerator('myId');

function examples(){
    // Add a card
    cards.addCard('card1', 'imgurl', "name", "title", "description")
    // Add a link for the first card
    cards.addLink('card1', 'http://www.example.com', 'Example')

    // Add second card
    cards.addCard('card2', 'imgurl', "name", "title", "description")
    // Change the colour of second card
    cards.changeThemeColorOfCard('card2',  '#F5F5DC')
}

examples();
```
Congratulations! You've successfully created your first Containy Object!! Its not over yet, it's just the start!

For detailed documentation and to explore more cool features, please visit [API Documentation.](https://containyjs.herokuapp.com/docs/api) To see more examples and use cases, visit [the examples page.](https://containyjs.herokuapp.com/example.html)

---

### Direct Link to API Documentation: https://containyjs.herokuapp.com/docs/api

For any feedback or improvments, don't hesitate to reach out at goyalakshit.ag@gmail.com
