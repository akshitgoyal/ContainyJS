"use strict";
log('----------')
log('Entered example.js')



const cards1 = new cardsGenerator('myId1')
cards1.addCard('card9', './profilepic.jpeg', "Laura", "Pexel Model", "An awesone person who loves to go on hiking and mountain biking")


const cards2 = new cardsGenerator('myId2')

cards2.addCard('card1', './profilepic.jpeg', "Laura", "Pexel Model", "An awesone person who loves to go on hiking and mountain biking")

cards2.addLink('card1', 'http://www.google.com', 'Google')
cards2.addLink('card1', 'http://www.facebook.com', 'Facebook')
cards2.addLink('card1', 'http://www.linkedin.com', 'LinkedIn')
// cards.turnOnCollapse('Contacts')


cards2.addCard('card2', './profilepic4.jpeg', "Jacob", "Pexel Model", "An awesone person who loves to go on hiking and mountain biking")

cards2.addLink('card1', 'http://www.google.com', 'Google')
cards2.addLink('card1', 'http://www.facebook.com', 'Facebook')
cards2.addLink('card1', 'http://www.linkedin.com', 'LinkedIn')

cards2.addCard('card3', './profilepic3.jpeg', "Cassandra", "Pexel Model", "An awesone person who loves to go on hiking and mountain biking")


cards2.addCard('card4', './profilepic5.jpeg', "Christine", "Pexel Model", "An awesone person who loves to go on hiking and mountain biking")

cards2.addCard('card5', './profilepic8.jpeg', "Toby", "Pexel Model", "An awesone person who loves to go on hiking and mountain biking")


cards2.addCard('card6', './profilepic7.jpeg', "Ashley", "Pexel Model", "An awesone person who loves to go on hiking and mountain biking")



cards2.addCard('card7', './profilepic6.jpeg', "Bhavik", "Pexel Model", "An awesone person who loves to go on hiking and mountain biking")


const cards3 = new cardsGenerator('myId3')


cards3.addCard('card1', './profilepic.jpeg', "Laura", "Pexel Model", "An awesone person who loves to go on hiking and mountain biking")

cards3.addLink('card1', 'http://www.google.com', 'Google')
cards3.addLink('card1', 'http://www.facebook.com', 'Facebook')
cards3.addLink('card1', 'http://www.linkedin.com', 'LinkedIn')
// cards.turnOnCollapse('Contacts')


cards3.addCard('card2', './profilepic4.jpeg', "Jacob", "Pexel Model", "An awesone person who loves to go on hiking and mountain biking")

cards3.addLink('card1', 'http://www.google.com', 'Google')
cards3.addLink('card1', 'http://www.facebook.com', 'Facebook')
cards3.addLink('card1', 'http://www.linkedin.com', 'LinkedIn')

cards3.addCard('card3', './profilepic3.jpeg', "Cassandra", "Pexel Model", "An awesone person who loves to go on hiking and mountain biking")


cards3.addCard('card4', './profilepic5.jpeg', "Christine", "Pexel Model", "An awesone person who loves to go on hiking and mountain biking")

cards3.addCard('card5', './profilepic8.jpeg', "Toby", "Pexel Model", "An awesone person who loves to go on hiking and mountain biking")


cards3.addCard('card6', './profilepic7.jpeg', "Ashley", "Pexel Model", "An awesone person who loves to go on hiking and mountain biking")



cards3.addCard('card7', './profilepic6.jpeg', "Bhavik", "Pexel Model", "An awesone person who loves to go on hiking and mountain biking")

cards3.turnOnCollapse('Contacts')