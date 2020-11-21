"use strict";
const log = console.log
log('----------')
log('Entered containy.js')



class card {
    constructor(id){
        // Initialize main card container div
        this.div = document.createElement('div')
        this.div.id = id


        // Initialise front view
        this.frontView = document.createElement('div')
        this.frontView.id = `${id}front`
        this.backView = document.createElement('div')
        this.backView.id = `${id}back`
    }
    makeCard(imgUrl, name, title, description){
        // Set the main div
        this.div.style.margin = '10%'
        this.div.style.height = 'fit-content'
        this.div.style.width = 'fit-content'

        // Setup front view
        this._setupFrontView(imgUrl,name,title)
        // Setup back view
        this._setupBackView(imgUrl, name,title, description)
        // Only append front since that is the default view
        this.div.appendChild(this.frontView)
        this.div.appendChild(this.backView)
    } 


    _setupFrontView(imgUrl, name, title){
        // Setup front view image and background
        this.frontView.style.backgroundImage = `url('${imgUrl}')`
        this.frontView.style.backgroundColor = '#FFD600'
        this.frontView.style.backgroundSize = 'cover'
        this.frontView.style.height = '40vh'
        this.frontView.style.width =  '30vh'
        this.frontView.style.borderRadius = '10px'
        // Setup name 
        const frontText = document.createElement('div')
        const nameText = document.createElement('p')
        nameText.style.fontWeight = 'bolder'
        nameText.style.marginBottom = '8px'
        nameText.appendChild(document.createTextNode(name))
        frontText.appendChild(nameText)

        // Setup title
        const titleText = document.createTextNode(title)
        frontText.appendChild(titleText)

        // Adding to the front view
        frontText.style.paddingTop = '90%'
        frontText.style.paddingLeft = '5%'
        // cardname.style.bottom = '20%'
        // frontText.appendChild(cardname)
        // frontText.appendChild(document.createTextNode(title).style.bottom='10%')
        this.frontView.appendChild(frontText)
    }

    _setupBackView(imgUrl, name, title, description){
        // Setup main back view styling   
        this.backView.style.height = '40vh'
        this.backView.style.width =  '30vh'
        this.backView.style.borderRadius = '10px'

        // Back View is divided into two sections
        // Setting up the first section
        const upperHalf = document.createElement('div')
        upperHalf.style.backgroundColor = '#FFD600'
        upperHalf.style.height = '50%'
        upperHalf.style.width = '100%'
        



        // Setting up the second section
        const lowerHalf = document.createElement('div')


        this.backView.appendChild(upperHalf)
        this.backView.appendChild(lowerHalf)

    }




}






class cardsGenerator{
    constructor(selector){
        this.mainDiv = document.getElementById(selector);
        this.mainDiv.style.height = 'fit-content'
        this.mainDiv.style.width = 'fit-content'
        this.cards = []
    }

    addCard(id, imgUrl, name, title, description){
        // const card = document.createElement('div')
        // card.id = id
        // const faceView = document.createElement('div')
        // this._setupFaceView(faceView, imgUrl, name, title)
        // this.mainDiv.appendChild(faceView)
        const cardObj = new card(id)
        cardObj.makeCard(imgUrl,name, title, description)
        this.mainDiv.appendChild(cardObj.div)
        this.cards.push(cardObj)


    }



    // _setupFaceView(faceView, imgUrl){
    //     faceView.style.height = '50px';
    //     faceView.style.backgroundImage = `url('${imgUrl}')`
    //     faceView.style.backgroundColor = '#FFD600'

    // }


}


