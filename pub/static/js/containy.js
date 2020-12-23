"use strict";
const log = console.log;
log('----------');
log('Entered containy.js');

(function(global, document) { 

    class card {
        constructor(id,themeColor, height, width){
            // Initialize main card container div
            this.div = document.createElement('div')
            this.div.id = id
            this.div.style.height = '320px'
            this.div.style.width = '240px'
            // this.div.style.height = '130px'
            // this.div.style.width = '80px'

            // Initialise front view
            this.frontView = document.createElement('div')
            this.backView = document.createElement('div')
            this.aboutSection = document.createElement('div')
            this.linksSection = document.createElement('div')
            this.themeColor = themeColor


        }
        makeCard(imgUrl, name, title, description){
            // Set the main div
            this.div.className = 'cardMainDiv'

            // Setup front view
            this._setupFrontView(imgUrl,name,title)

            // Setup back view
            this._setupBackView(imgUrl, name,title, description)

            // Only append front since that is the default view
            this.div.onclick = () => this._switchMainView()
            this.div.appendChild(this.frontView)
            // this.div.appendChild(this.backView)
        }
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
        updateThemeColor(newColor){
            this.themeColor = newColor
            this.frontView.style.backgroundColor = this.themeColor
            this.backView.firstChild.style.backgroundColor = this.themeColor

        } 


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

        _getAvatarPhotoTag(imgUrl){
            const profileImg = document.createElement('img')
            profileImg.className = 'profileImg'
            profileImg.src = imgUrl

            return profileImg

        }

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

        _switchMainView(){
            if(this.div.classList.contains("active")){
                this.div.classList.remove("active")
            }
            else{
                this.div.classList.add("active")
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
        
    function _expandContainer(self){
        self.mainDiv.replaceChild(self.expandedContainer, self.collapsed)
        self.mainDiv.classList.add("expandAnimate")
    }
    function _collapseContainer(self){
        self.mainDiv.replaceChild(self.collapsed, self.expandedContainer)
        self.mainDiv.classList.remove("expandAnimate")
    }













    
    class cardsGenerator{
        constructor(selector, themeColor, containerColor){
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

        addCard(id, imgUrl, name, title, description){
            const cardObj = new card(id,this.themeColor)
            cardObj.makeCard(imgUrl,name, title, description)
            this.expanded.appendChild(cardObj.div)
            this.cards.push(cardObj)
        }
        addLink(id, linkUrl, linkText){
            const card = this.getRequestedCard(id)
            card.addLink(linkUrl, linkText)
        }

        turnOnCollapse(name){
            if(!this.collapse){
                _setupCollapsedContainer(this, name);
            }
            else{
                console.log("Collapse is already active!")
            }

        }

        changeContainerBackground(newColor){
            this.containerColor = newColor
            this.mainDiv.style.backgroundColor = this.containerColor
        }


        changeThemeColorOfCard(id, newColor){
            const card = this.getRequestedCard(id)
            card.updateThemeColor(newColor)

        }

        changeCollapsedCardColor(newColor){
            if(this.collapse){
                this.collapsed.firstChild.style.backgroundColor = newColor
            }
        }

        getRequestedCard(id){
            const card = this.cards.filter((currCard) => currCard.div.id === id)
            return card[0]
        }

        getAllCards(){
            return this.cards
        }
        removeCard(id){
            const deletedCard = this.getRequestedCard(id)
            if(deletedCard !== undefined){
                this.expanded.removeChild(deletedCard.div)
                const updatedCards = this.cards.filter((currCard) => currCard.div.id !== id)
                this.cards = updatedCards
            }     
        }
     


    }


    global.cardsGenerator = global.cardsGenerator || cardsGenerator
})(window, window.document);


