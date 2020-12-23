"use strict";
const log = console.log;
log('----------');
log('Entered containy.js');

// Wrapping the code in an anonymous function
(function(global, document) { 



    // This is a private object whose instances are stores in container object.
    class card {
        constructor(id,themeColor){
            // Initialize main card container div
            this.div = document.createElement('div')
            this.div.id = id
            this.div.style.height = '320px'
            this.div.style.width = '240px'


            // Initialise front view
            this.frontView = document.createElement('div')
            this.backView = document.createElement('div')
            this.aboutSection = document.createElement('div')
            this.linksSection = document.createElement('div')
            this.themeColor = themeColor
            this.zoom = false;

        }
        makeCard(imgUrl, name, title, description){
            // Set the main div
            this.div.className = 'cardMainDiv'

            // Setup front view
            this._setupFrontView(imgUrl,name,title)

            // Setup back view
            this._setupBackView(imgUrl, name,title, description)

            // Adding the ability to flip between views!
            this.div.onclick = () => this._switchMainView()

            // Only append front since that is the default view
            this.div.appendChild(this.frontView)

        }

        // This function adds links to the link section in the backview of card.
        addLink(linkUrl, linkText){
            const linkButton = document.createElement('button')
            linkButton.appendChild(document.createTextNode(linkText))
            linkButton.onclick = (e) =>{
                e.stopPropagation();
                window.open(linkUrl)
            } 
            linkButton.className = 'addLinkButton'
            this.linksSection.appendChild(linkButton)

        }

        // Updates the Theme color of this specific card
        updateThemeColor(newColor){
            this.themeColor = newColor
            this.frontView.style.backgroundColor = this.themeColor
            this.backView.firstChild.style.backgroundColor = this.themeColor

        }

        // This function adds Zoom ability to the card.
        addZoomAbility(){
            this.zoom = true;
            this.div.classList.remove("active")
            this.div.onmouseenter = () => {
                this.div.classList.add("zoom")
            }

            this.div.onmouseleave = () => {
                this.div.classList.remove("zoom")
            } 
        }


        // Helper Function for setting up thr DOM elements during initilization
        _getNameandTitleTag(name, title){
            const profileText = document.createElement('div')
            const nameText = document.createElement('p')
            nameText.className = 'nameText'
            nameText.appendChild(document.createTextNode(name))
            profileText.appendChild(nameText)

            // Setup title
            const titleText = document.createElement('p')
            titleText.className = 'titleText'
            titleText.appendChild(document.createTextNode(title))


            profileText.appendChild(titleText)

            profileText.style.display = 'flex'
            profileText.style.justifyContent = 'center'
            profileText.style.flexDirection = 'column'
            return profileText

        }


        // Helper Function for setting up thr DOM elements during initilization

        _setupFrontView(imgUrl, name, title){
            // Setup front view image and background
            this.frontView.className = 'frontView'
            this.frontView.style.backgroundImage = `url('${imgUrl}')`
            this.frontView.style.backgroundColor = this.themeColor

            // Setup name and title
            const frontText = this._getNameandTitleTag(name, title)
            // Adding to the front view
            frontText.className = 'frontText'

            this.frontView.appendChild(frontText)
            
        }

        // Helper Function for setting up thr DOM elements during initilization
        _getAvatarPhotoTag(imgUrl){
            const profileImg = document.createElement('img')
            profileImg.className = 'profileImg'
            profileImg.src = imgUrl

            return profileImg

        }
        // Helper Function for setting up thr DOM elements during initilization

        _setupUpperHalfBackView(imgUrl, name, title){
            const upperHalf = document.createElement('div')
            upperHalf.className = 'upperHalf'
            upperHalf.style.backgroundColor = this.themeColor

            if(imgUrl != ''){
            // Create image avatar 
            const profileImg = this._getAvatarPhotoTag(imgUrl)
            upperHalf.appendChild(profileImg)
            }


            // Create the Name and title
            const profileInfo = this._getNameandTitleTag(name, title)
            profileInfo.style.fontSize = '1em'
            upperHalf.appendChild(profileInfo)
            
            return upperHalf

        }

        // Helper Function for setting up thr DOM elements during initilization
        _setupLowerHalfBackView(description){
            const lowerHalf = document.createElement('div')
            lowerHalf.className = 'lowerHalf'
            const buttonPanel = document.createElement('div')
            buttonPanel.className = 'buttonPanel'

            const aboutButton = document.createElement('button')
            aboutButton.className = 'aboutButton'
            aboutButton.onclick = (e) => {
                e.stopPropagation();
                this._switchDescription('aboutButton')
            }

            aboutButton.appendChild(document.createTextNode('About'))
            // Setting border for about us because that is clicked by default.
            aboutButton.style.borderTopStyle = 'solid'
            buttonPanel.appendChild(aboutButton)


            const linksButton = document.createElement('button')
            linksButton.className = 'linksButton'
            linksButton.appendChild(document.createTextNode('Links'))
            linksButton.onclick = (e)=> {
                e.stopPropagation();
                this._switchDescription('linksButton')
            }
            buttonPanel.appendChild(linksButton)

            // Setting up about section
            const descriptionText = document.createElement('p')
            descriptionText.className = 'descriptionText'
            descriptionText.appendChild(document.createTextNode(description))
            this.aboutSection.appendChild(descriptionText)
            this.aboutSection.className = 'aboutSection'
            
            this.linksSection.className = 'linksSection'
            lowerHalf.appendChild(buttonPanel)
            lowerHalf.appendChild(this.aboutSection)
            return lowerHalf

        }

        // Helper Function for setting up thr DOM elements during initilization
        _setupBackView(imgUrl, name, title, description){
            // // Setup main back view styling   
            this.backView.style.height = '100%'
            this.backView.style.width =  '100%'

            // Back View is divided into two sections
            // Setting up the first section
            const upperHalf = this._setupUpperHalfBackView(imgUrl, name, title)


            // Setting up the second section
            const lowerHalf = this._setupLowerHalfBackView(description)


            this.backView.appendChild(upperHalf)
            this.backView.appendChild(lowerHalf)

        }
        // This helpers helps us to switch between sections in backview and perform DOM manipulation
        _switchDescription(buttonName) {
            if(buttonName == 'aboutButton'){
                if(!this.backView.children[1].contains(this.aboutSection)){
                    this.backView.children[1].children[0].firstChild.style.borderTopStyle = 'solid'
                    this.backView.children[1].children[0].lastChild.style.borderTopStyle = 'None'
                    this.backView.children[1].replaceChild( this.aboutSection, this.linksSection)
                }

            }
            else if(buttonName == 'linksButton'){
                if(!this.backView.children[1].contains(this.linksSection)){
                    this.backView.children[1].children[0].lastChild.style.borderTopStyle = 'solid'
                    this.backView.children[1].children[0].firstChild.style.borderTopStyle = 'None'
                    this.backView.children[1].replaceChild(this.linksSection, this.aboutSection)
                }
            }
        }

        // This helpers helps us to switch between front and back view, and perform DOM manioulation
        _switchMainView(){
            if(this.zoom === false){

                if(this.div.classList.contains("active")){
                    this.div.classList.remove("active")
                }
                else{
                    this.div.classList.add("active")
                }
            }

            if(this.div.firstChild === this.frontView)
            {
                log("front clicked")
                this.div.replaceChild(this.backView, this.frontView)
            }
            else if(this.div.firstChild === this.backView){
                log("back clicked")
                this.div.replaceChild(this.frontView, this.backView)
            }
            
        }

    }


    // Private Method used by Container Object Below.
    function _setupCollapsedContainer(self, name){
        console.log("zooobiedoobie")
        console.log(self)
        const collapsedCard = document.createElement('div')
        collapsedCard.className = 'collapsedCard'

        collapsedCard.style.backgroundColor = self.themeColor
        collapsedCard.onclick = () => _expandContainer(self)


        
        collapsedCard.appendChild(document.createTextNode(name))
        self.collapsed.appendChild(collapsedCard)
        self.mainDiv.replaceChild(self.collapsed, self.expandedContainer)

        // add button on expanded view to close it
        const closeButtonBar = document.createElement('div')
        closeButtonBar.className = 'closeButtonBar'

        
        const closeButton = document.createElement('button')
        closeButton.appendChild(document.createTextNode('Collapse'))
        closeButton.onclick = (e) => _collapseContainer(self)
        closeButton.className = 'collapseButton'
        closeButtonBar.appendChild(closeButton)
        self.expandedContainer.prepend(closeButtonBar)
        
        self.collapse = true
    }
        // Private Method used by Container Object Below.
        
    function _expandContainer(self){
        self.mainDiv.replaceChild(self.expandedContainer, self.collapsed)
        self.mainDiv.classList.add("expandAnimate")
    }
        // Private Method used by Container Object Below.
    function _collapseContainer(self){
        self.mainDiv.replaceChild(self.collapsed, self.expandedContainer)
        self.mainDiv.classList.remove("expandAnimate")
    }



    
    class cardsGenerator{
        constructor(selector, themeColor, containerColor){

            // Initializinf attributes to keep track of the structure.
            this.mainDiv = document.getElementById(selector);
            this.mainDiv.className = 'containerMainDiv'

            this.expandedContainer = document.createElement('div');
            this.expanded = document.createElement('div');
            this.expanded.className = 'expandedCards'
            this.collapsed = document.createElement('div');
            this.collapsed.className = 'collapsedContainer'

            this.expandedContainer.appendChild(this.expanded)
            this.mainDiv.appendChild(this.expandedContainer)
            this.themeColor = themeColor;
            if(themeColor === undefined){
                this.themeColor = '#FFD600'
            }
            this.cards = []
            this.collapse = false
            this.containerColor = containerColor
            if(containerColor === undefined){
                this.containerColor = 'dimgrey'
            }
        }

        // Add Card to the container
        addCard(id, imgUrl, name, title, description){
            const cardObj = new card(id,this.themeColor)
            cardObj.makeCard(imgUrl,name, title, description)
            this.expanded.appendChild(cardObj.div)
            this.cards.push(cardObj)
        }

        // Add link to a spcific card.
        addLink(id, linkUrl, linkText){
            const card = this.getRequestedCard(id)
            card.addLink(linkUrl, linkText)
        }

        // Turn on the Collapse Feature for eholr container.
        turnOnCollapse(name){
            if(!this.collapse){
                _setupCollapsedContainer(this, name);
            }
            else{
                console.log("Collapse is already active!")
            }

        }

        // Changes the Container Background
        changeContainerBackground(newColor){
            this.containerColor = newColor
            this.mainDiv.style.backgroundColor = this.containerColor
        }

        // Change the theme colour of specific card.
        changeThemeColorOfCard(id, newColor){
            const card = this.getRequestedCard(id)
            card.updateThemeColor(newColor)

        }

        // Change the colour of the card that is shown on collapsing the big container.
        changeCollapsedCardColor(newColor){
            if(this.collapse){
                this.collapsed.firstChild.style.backgroundColor = newColor
            }
        }

        // Returns the requested card object
        getRequestedCard(id){
            const card = this.cards.filter((currCard) => currCard.div.id === id)
            return card[0]
        }

        // Return all the card objects in this container
        getAllCards(){
            return this.cards
        }

        // Delete a specific card from the container.
        removeCard(id){
            const deletedCard = this.getRequestedCard(id)
            if(deletedCard !== undefined){
                this.expanded.removeChild(deletedCard.div)
                const updatedCards = this.cards.filter((currCard) => currCard.div.id !== id)
                this.cards = updatedCards
            }     
        }

        // Add zoom functionality to a specific card.
        addZoomAbilityToCard(id){
            const card = this.getRequestedCard(id);
            if(card !== undefined){
                card.addZoomAbility();
            }
        }
    }

    // Attach only the cards generator object (Container Object), rest everything is private.
    global.cardsGenerator = global.cardsGenerator || cardsGenerator
})(window, window.document);


