"use strict";
log('----------')
log('Entered example.js')


// ######################################################################
const cards1 = new cardsGenerator('myId1')
cards1.addCard('card9', './images/profilepic.jpeg', "Laura", "Pexel Model", "An awesone person who loves to go on hiking and mountain biking")

// ######################################################################

const cards2 = new cardsGenerator('myId2')

cards2.addCard('card1', './images/profilepic.jpeg', "Laura", "Pexel Model", "An awesone person who loves to go on hiking and mountain biking")

cards2.addLink('card1', 'http://www.google.com', 'Google')
cards2.addLink('card1', 'http://www.facebook.com', 'Facebook')
cards2.addLink('card1', 'http://www.linkedin.com', 'LinkedIn')
// cards.turnOnCollapse('Contacts')

cards2.addCard('card2', './images/profilepic4.jpeg', "Jacob", "Pexel Model", "An awesone person who loves to go on hiking and mountain biking")

cards2.addLink('card2', 'http://www.google.com', 'Google')
cards2.addLink('card2', 'http://www.facebook.com', 'Facebook')
cards2.addLink('card2', 'http://www.linkedin.com', 'LinkedIn')

cards2.addCard('card3', './images/profilepic3.jpeg', "Cassandra", "Pexel Model", "An awesone person who loves to go on hiking and mountain biking")

cards2.addCard('card4', './images/profilepic5.jpeg', "Christine", "Pexel Model", "An awesone person who loves to go on hiking and mountain biking")

cards2.addCard('card5', './images/profilepic8.jpeg', "Toby", "Pexel Model", "An awesone person who loves to go on hiking and mountain biking")


cards2.addCard('card6', './images/profilepic7.jpeg', "Ashley", "Pexel Model", "An awesone person who loves to go on hiking and mountain biking")

cards2.addCard('card7', './images/profilepic6.jpeg', "Bhavik", "Pexel Model", "An awesone person who loves to go on hiking and mountain biking")
// ######################################################################

const cards3 = new cardsGenerator('myId3')
cards3.addCard('card1', './images/profilepic.jpeg', "Laura", "Pexel Model", "An awesone person who loves to go on hiking and mountain biking")

cards3.addLink('card1', 'http://www.google.com', 'Google')
cards3.addLink('card1', 'http://www.facebook.com', 'Facebook')
cards3.addLink('card1', 'http://www.linkedin.com', 'LinkedIn')
// cards.turnOnCollapse('Contacts')


cards3.addCard('card2', './images/profilepic4.jpeg', "Jacob", "Pexel Model", "An awesone person who loves to go on hiking and mountain biking")

cards3.addLink('card1', 'http://www.google.com', 'Google')
cards3.addLink('card1', 'http://www.facebook.com', 'Facebook')
cards3.addLink('card1', 'http://www.linkedin.com', 'LinkedIn')

cards3.addCard('card3', './images/profilepic3.jpeg', "Cassandra", "Pexel Model", "An awesone person who loves to go on hiking and mountain biking")

cards3.addCard('card4', './images/profilepic5.jpeg', "Christine", "Pexel Model", "An awesone person who loves to go on hiking and mountain biking")

cards3.addCard('card5', './images/profilepic8.jpeg', "Toby", "Pexel Model", "An awesone person who loves to go on hiking and mountain biking")

cards3.addCard('card6', './images/profilepic7.jpeg', "Ashley", "Pexel Model", "An awesone person who loves to go on hiking and mountain biking")

cards3.addCard('card7', './images/profilepic6.jpeg', "Bhavik", "Pexel Model", "An awesone person who loves to go on hiking and mountain biking")
cards3.changeContainerBackground('#AFEEEE')
cards3.turnOnCollapse('Contacts')
cards3.changeCollapsedCardColor('#4169E1')
cards3.removeCard('card5')
cards3.removeCard('card5')

// ######################################################################

const cards4 = new cardsGenerator('myId4')
cards4.addCard('card1', './images/profilepic4.jpeg', "Jacob", "Pexel Model", "An awesone person who loves to go on hiking and mountain biking")
cards4.addLink('card1', 'http://www.google.com', 'Google')
cards4.addLink('card1', 'http://www.facebook.com', 'Facebook')
cards4.addLink('card1', 'http://www.linkedin.com', 'LinkedIn')
cards4.changeThemeColorOfCard('card1',  '#F5F5DC')


// ######################################################################
const cards5 = new cardsGenerator('myId5')
cards5.addCard('card1', '', "Unknown Person", "This person does not have a photo", "Woah, that means we don't have to put photo, it still works!! That's awesome.")


// ####################################################################### USE CASES #############################
const productLibrary = new cardsGenerator('productLibrary')
productLibrary.addCard('firestick', './images/firestick.jpg', "Amazon Fire Stick", "Price: $34.99", "All-new Fire TV Stick with Alexa Voice Remote (includes TV controls) | HD streaming device | 2020 release.")
productLibrary.addLink('firestick', 'https://www.amazon.ca/Staging-Product-Not-Retail-Sale/dp/B07ZZW1B86/ref=zg_bsnr_electronics_1?_encoding=UTF8&psc=1&refRID=9P83G033ED9G2VHGRRN4', 'Click here to buy')


productLibrary.addCard('drone', './images/drone.jpg', "Drone Quadcopter", "Price: $569", "DJI Mini 2 – Ultralight and Foldable Drone Quadcopter for Adults and Kids, 3-Axis Gimbal with 4K Camera, 12MP Photo, 31 Mins Flight Time, OcuSync 2.0 10km HD Video Transmission, QuickShots, Gray")
productLibrary.addLink('drone', 'https://www.amazon.ca/DJI-Mini-Ultralight-Quadcopter-Transmission/dp/B08JGYF5W1/ref=zg_bsnr_electronics_46?_encoding=UTF8&psc=1&refRID=9P83G033ED9G2VHGRRN4', 'Click here to buy')


productLibrary.addCard('iphone', './images/iphone.jpg', "iPhone XS", "Price: $599.99", "Apple iPhone X, GSM Unlocked 5.8in, 64 GB - Silver (Renewed)")
productLibrary.addLink('iphone', 'https://www.amazon.ca/Apple-iPhone-GSM-Unlocked-5-8/dp/B07757WNJP/ref=sr_1_6?dchild=1&keywords=iphone&qid=1606266678&s=electronics&sr=1-6', 'Click here to buy')

productLibrary.addCard('xbox', './images/xbox.jpg', "Xbox Series S", "Price: Currently Unavailable", "Introducing the Xbox Series S, the smallest, sleekest Xbox console ever. Experience the speed and performance of a next-gen all-digital console at an accessible price point.Go all-digital and enjoy disc-free, next-gen gaming with the smallest Xbox console ever made.")
productLibrary.addLink('xbox', 'https://www.amazon.ca/Microsoft-RRS-00001-Xbox-Series-S/dp/B08G9J44ZN?ref_=ast_sto_dp', 'Click here to buy')
productLibrary.changeContainerBackground('#c5c5c7')
productLibrary.changeThemeColorOfCard('firestick', '#ff9f29')
productLibrary.changeThemeColorOfCard('drone', '#626cf5')
productLibrary.changeThemeColorOfCard('iphone', '#db7563')
productLibrary.changeThemeColorOfCard('xbox', '#91ed82')

// ######################################################################

const contacts = new cardsGenerator('contacts')

contacts.addCard('Jacob', './images/profilepic4.jpeg', "Jacob", "Pexel Model", "An awesone person who loves to go on hiking and mountain biking")

const form = document.querySelector('#addCardContact')
form.addEventListener('submit', onFormClick)

function onFormClick(e){
    e.preventDefault(); // prevent default form action

    const addName = document.querySelector('#name').value
    console.log(addName)
    const addTitle = document.querySelector('#title').value
    const addBio = document.querySelector('#bio').value
    const sMedia = document.querySelector('#smedia').value
    const imgLink = document.querySelector('#photo').value
    log(addTitle, addBio, sMedia, imgLink)
        //Add card

    contacts.addCard(addName, imgLink, addName, addTitle, addBio)
    contacts.addLink(addName, addBio)



}


const delform = document.querySelector('#deleteContact')
delform.addEventListener('submit', deleteContact)

function deleteContact(e){
    e.preventDefault(); // prevent default form action

    const deleteName = document.querySelector('#dname').value
    contacts.removeCard(deleteName)
}