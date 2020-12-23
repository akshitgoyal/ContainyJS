---
id: api
title: API Documentation
---



## Initialising the **cardsGenerator Object**

```javascript
// Pass the id for div tag in your HTML. In our example, we used 'myId'.
const cards = new cardsGenerator('myId', 'yellow', 'dimgrey');
``` 

| Property       	| Default    	| Type   	| Description                                                                                           	|
|----------------	|------------	|--------	|-------------------------------------------------------------------------------------------------------	|
| `selector`       	| (required) 	| String 	| This is the id of the *div* tag in the HTML that will be converted as container.                      	|
| `themeColor`    	| '#FFD600'  	| String 	| This will be the default colour of all the cards. (colour for individual card can be set via method)  	|
| `containerColor` 	| 'dimgrey'  	| String 	| This will be the colour of container background where cards will be displayed.                        	|

#### Addtional Attributes (Not to be initialised or modified directly)



| Attributes            	| Description                                                                                                                                                                                              	|
|-----------------------	|----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| `this.mainDiv`        	| contains the big container object itself                                                                                                                                                                 	|
| `this.expanded`       	| contains all the cards, and also additional elements like buttons, etc depending on the current state of the object. When a card is added, it is shown here and the size is also adjusted automatically. 	|
| `this.collapsed`      	| contains the condensed view of the container where all the cards are hidden and are only visible once container is expanded. It changes the view to expanded on clicking on it.                          	|
| `this.themeColor`     	| contains the default theme of the container and the cards unless changed by the user.                                                                                                                    	|
| `this.cards`          	| is an array of the cards present in current container. This can be used to support various other functions.                                                                                              	|
| `this.collapse`       	| stores the current state of the container as boolean whether it is expanded or collapsed.                                                                                                                	|
| `this.containerColor` 	| stores the background theme of the container when expanded.                                                                                                                                              	|

:::warning

You should not be modifying these attributes listed above directly. Always use methods below. I have listed these only for anyone looking to **experiment** or modify the library.

:::

## Methods

```javascript
addCard(id, imgUrl, name, title, description);
```
This method adds card to the container and adjusts the DOM automatically. The method should strictly follow the following property requirements:

| Property      	| Default    	| Type   	| Description                                                                                                                                                    	|
|---------------	|------------	|--------	|----------------------------------------------------------------------------------------------------------------------------------------------------------------	|
| `id`          	| (required) 	| String 	| This is the id of the card that will be added to the container. The `id` must be **unique**.                                                                   	|
| `imgUrl`      	| (required) 	| String 	| This will be image of the card. This will set as background in front view and icon in back view of the card. If you don't want the image, just set it as `''`. 	|
| `name`        	| (required) 	| String 	| This is the name of the card displayed in both front and back view. If you don't want the name, just set it as `''`                                            	|
| `title`       	| (required) 	| String 	| This is the title of the card. This is displayed as small text below name in both front and back view. If you don't want the title, just set it as  `''`       	|
| `description` 	| (required) 	| String 	| This is the description of the card. This is only displayed in the back view in the about section. If you don't want the description, just set it as  `''`     	|

---

```javascript
addLink(id, imgUrl, name, title, description);
```
This method adds links to back view of the card specified by the **id** in the container. The current version only supports 5 links. Adding more will be hidden. The method should strictly follow the following property requirements:

| Property   	| Default    	| Type   	| Description                                                                                                            	|
|------------	|------------	|--------	|------------------------------------------------------------------------------------------------------------------------	|
| `id`       	| (required) 	| String 	| This is the id of the card to which you want to add the link. The card with `id` must be **present** in the container. 	|
| `linkUrl`  	| (required) 	| String 	| This is the link that you want the card to redirect to. This must be in the standard form of `https://www.example.com` 	|
| `linkText` 	| (required) 	| String 	| This is the the placeholder for the link displayed in the links section in back view.                                  	|

---

```javascript
addZoomAbilityToCard(id);
```
This method adds the ability to zoom to the card specified by the **id** in the container. The method should follow the following property requirements:

| Property 	| Default    	| Type   	| Description                                                                	|
|----------	|------------	|--------	|----------------------------------------------------------------------------	|
| `id`     	| (required) 	| String 	| This is the id of the card in container to which you want to add Zoom Ability |

---


```javascript
turnOnCollapse(name);
```
This method converts the big container into a small collapsed version. It also adjusts the DOM automatically and elegantly. You can access the big container by clicking anywhere on the collapsed container. This also adds a 'collapse' button in the big container. The color of the card is same as the theme color. However, can be changed using methods below.

| Property 	| Default    	| Type   	| Description                                                                                         	|
|----------	|------------	|--------	|-----------------------------------------------------------------------------------------------------	|
| `name`   	| (required) 	| String 	| This is the name of the collapsed container which will be displayed in the center of the container. 	|

---

```javascript
changeCollapsedCardColor(newColor);
```
This method lets you change the colour of the collapse card which was set as default to theme colour while turning on the collapse feature. If the collapse state is **not active** then calling this method will not have any impact.

| Property   	| Default    	| Type   	| Description                            	|
|------------	|------------	|--------	|----------------------------------------	|
| `newColor` 	| (required) 	| String 	| The hex code or name of the new color. 	|

---

```javascript
changeThemeColorOfCard(id, newColor);
```
This method lets you change the theme color a specific card. The theme color is used in multiple views and cards. Changing a specific card does not impact the state of other cards.

| Property   	| Default    	| Type   	| Description                                                                                                                      	|
|------------	|------------	|--------	|----------------------------------------------------------------------------------------------------------------------------------	|
| `id`       	| (required) 	| String 	| This is the id of the card of which you want to change the theme color. The card with `id` must be **present** in the container. 	|
| `newColor` 	| (required) 	| String 	| The hex code or name of the new color.                                                                                           	|

---

```javascript
changeContainerBackground(newColor);
```
This method lets you change the background colour of the container itself. This can also be set when initialising the object.

| Property   	| Default    	| Type   	| Description                            	|
|------------	|------------	|--------	|----------------------------------------	|
| `newColor` 	| (required) 	| String 	| The hex code or name of the new color. 	|

---

```javascript
removeCard(id);
```
Deletes the specific card from the Container and view and adjusts the DOM automatically.

| Property 	| Default    	| Type   	| Description                                                                	|
|----------	|------------	|--------	|----------------------------------------------------------------------------	|
| `id`     	| (required) 	| String 	| This is the id of the card of which you want to remove from the container. 	|

---
:::tip

The following methods are for the use of developer for experimentation purposes and to understand and extend the functionality of the cards:
:::

```javascript
getRequestedCard(id); // This method will get the card present in the container with the given id. Card must be present.
getAllCards(); // This method gets all the cards in the container. 
```