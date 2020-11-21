"use strict";
const log = console.log
log('----------')
log('Entered containy.js')



class card {
    constructor(id){
        // Initialize main card container div
        this.div = document.createElement('div')
        this.div.id = id
        this.div.style.height = '40vh'
        this.div.style.width = '30vh'


        // Initialise front view
        this.frontView = document.createElement('div')
        this.frontView.id = `${id}front`
        this.backView = document.createElement('div')
        this.backView.id = `${id}back`
        this.aboutSection = document.createElement('div')
        this.linksSection = document.createElement('div')
        this.themeColor = '#FFD600'

    }


    _getNameandTitleTag(name, title){
        const profileText = document.createElement('div')
        const nameText = document.createElement('p')
        nameText.style.fontWeight = 'bolder'
        nameText.style.marginBottom = '1px'
        nameText.appendChild(document.createTextNode(name))
        profileText.appendChild(nameText)

        // Setup title
        const titleText = document.createElement('p')
        titleText.style.marginTop = '1px'
        titleText.appendChild(document.createTextNode(title))


        profileText.appendChild(titleText)
        profileText.style.display = 'flex'
        profileText.style.justifyContent = 'center'
        profileText.style.flexDirection = 'column'
        return profileText

    }




    _setupFrontView(imgUrl, name, title){
        // Setup front view image and background
        this.frontView.className = 'frontView'
        this.frontView.style.backgroundImage = `url('${imgUrl}')`
        this.frontView.style.backgroundColor = this.themeColor

        // Setup name and title
        const frontText = this._getNameandTitleTag(name, title)
        // Adding to the front view
        frontText.style.paddingTop = '90%'
        frontText.style.paddingLeft = '5%'
        // cardname.style.bottom = '20%'
        // frontText.appendChild(cardname)
        // frontText.appendChild(document.createTextNode(title).style.bottom='10%')
        this.frontView.appendChild(frontText)
    }

    _getAvatarPhotoTag(imgUrl){
        const profileImg = document.createElement('img')
        profileImg.src = imgUrl
        profileImg.style.width = '25%'
        profileImg.style.height = '50%'
        profileImg.style.borderRadius = '50%'
        profileImg.style.margin = '15%'
        profileImg.style.marginRight = '2%'
        profileImg.style.marginLeft = '5%'
        return profileImg

    }

    _setupUpperHalfBackView(imgUrl, name, title){
        const upperHalf = document.createElement('div')
        upperHalf.style.backgroundColor = '#FFD600'
        upperHalf.style.height = '50%'
        upperHalf.style.width = '100%'

        // Create image avatar 
        const profileImg = this._getAvatarPhotoTag(imgUrl)
        upperHalf.appendChild(profileImg)

        // Create the Name and title
        const profileInfo = this._getNameandTitleTag(name, title)
        upperHalf.appendChild(profileInfo)
        

        // Setting up alignment of upper Half
        upperHalf.style.display = 'flex'
        upperHalf.style.justifyContent = 'center'
        upperHalf.style.flexWrap = 'wrap'
        upperHalf.style.textAlign = 'center'
        return upperHalf

    }

    _setupLowerHalfBackView(description){
        const lowerHalf = document.createElement('div')
        lowerHalf.className = 'lowerHalf'
        const buttonPanel = document.createElement('div')
        buttonPanel.className = 'buttonPanel'

        const aboutButton = document.createElement('button')
        aboutButton.className = 'aboutButton'
        aboutButton.appendChild(document.createTextNode('About'))
        // Setting border for about us because that is clicked by default.
        aboutButton.style.borderTopStyle = 'solid'
        buttonPanel.appendChild(aboutButton)


        const linksButton = document.createElement('button')
        linksButton.className = 'linksButton'
        linksButton.appendChild(document.createTextNode('Links'))
        buttonPanel.appendChild(linksButton)

        // Setting up about section
        const descriptionText = document.createElement('p')
        descriptionText.className = 'descriptionText'
        descriptionText.appendChild(document.createTextNode(description))
        this.aboutSection.appendChild(descriptionText)
        this.aboutSection.className = 'aboutSection'

        lowerHalf.appendChild(buttonPanel)
        lowerHalf.appendChild(this.aboutSection)
        return lowerHalf

    }

    _setupBackView(imgUrl, name, title, description){
        // Setup main back view styling   
        this.backView.style.height = '40vh'
        this.backView.style.width =  '30vh'
        this.backView.style.borderRadius = '10px'

        // Back View is divided into two sections
        // Setting up the first section
        const upperHalf = this._setupUpperHalfBackView(imgUrl, name, title)


        // Setting up the second section
        const lowerHalf = this._setupLowerHalfBackView(description)


        this.backView.appendChild(upperHalf)
        this.backView.appendChild(lowerHalf)

    }
    makeCard(imgUrl, name, title, description){
        // Set the main div
        this.div.className = 'cardMainDiv'

        // Setup front view
        this._setupFrontView(imgUrl,name,title)

        // Setup back view
        this._setupBackView(imgUrl, name,title, description)

        // Only append front since that is the default view
        this.div.appendChild(this.frontView)
        this.div.appendChild(this.backView)
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
        const cardObj = new card(id)
        cardObj.makeCard(imgUrl,name, title, description)
        this.mainDiv.appendChild(cardObj.div)
        this.cards.push(cardObj)
    }

}


