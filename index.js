const navAni = document.querySelector('.Nav-header');
navAni.addEventListener('mouseover', function(event){
    event.target.style.color = 'blue';

    setTimeout(function() {
        event.target.style.color = '#212529';
    },1000)
},false)


/*const dblClicker = document.querySelector('.btn');
dblClicker.addEventListener('dblclick', function(e){
    event.preventDefault();
    event.target.style.color = 'blue';
})

const hover = document.querySelector('.Profile-info');
hover.addEventListener('mouseover', function(evenrt){
    event.target.style.color = 'red';

    setTimeout(function() {
        event.target.style.color = 'purple';
    },1000)
},false)

const large = document.querySelectorAll('.profile');
large.addEventListener('dblclick', function(e){
    large.classlist.toggle('.grow');
})*/


/*
class TabLink {
    constructor (tab) {
      this.tab = tab;
      
      this.tabData = this.tab.dataset.tab;
      
      this.tabContent = document.querySelectorAll(`.content[data-tab="${this.tabData}"]`)
      
      this.tabContent = Array.from(this.tabContent).map(content => new TabContent(content));

      this.tabElement.addEventListener('click', () => this.tabClick());
      
      
      }
    tabClick() {
        const tabs = document.querySelectorAll('.tab-links')

        tabs.forEach( function (tab) {
            tabs.classList.remove('.active-tab')
        }) 

        const contents = document.querySelectorAll('.content')

        contents.forEach(function (content) {
            content.style.display = 'none';
            console.log(content)
          })

          this.tabElement.classList.add('.active-tab');
        console.log(this.tabElement)

        this.contents.forEach(content => content.selectCard());
        console.log(this.contents)

    }
  }
  
  
  class TabContent {
    constructor (content) {
      this.content = content;
       
    }
    
    toggleContent() {
      this.content.classlist.toggle('.change')
    }
  }
  
  
  const tabs = document.querySelectorAll('.tab-links .link')
                      .forEach(tab => new TabLink(tab))
  
  const tabContentCards = document.querySelectorAll('.content')
  
  tabContentCards.forEach( card => {
    //prepend the image to the card
  })
  */




 class TabLink {
    constructor(tabElement){
      // assign this.tabElement to the tabElement DOM reference
      this.tabElement = tabElement;
      console.log(this.tabElement)
      // Get the `data-tab` value from this.tabElement and store it here
       this.tabData = this.tabElement.dataset.tab;
       console.log(this.tabData)
      
      // We need to find out if a user clicked 'all' cards or a specific category.  Follow the instructions below to accomplish this task:    
            
      // Check to see if this.tabData is equal to 'all'
      if(this.tabData == 'all'){
        // If `all` is true, select all cards regardless of their data attribute values
         this.cards = document.querySelectorAll('.card');
      } else {
        // else if `all` is false, only select the cards with matching this.tabData values
         this.cards = document.querySelectorAll(`.card[data-tab="${this.tabData}"]`);
         
      }
            
       // Map over the newly converted NodeList we just created in our if statement above. Convert each this.cards element into a new instance of the TabCard class. Pass in a card object to the TabCard class. 
       this.cards = Array.from(this.cards).map(card => new TabCard(card)); 
  
      // Add a click event that invokes this.selectTab
       this.tabElement.addEventListener('click', () => this.selectTab());
    }
  
    selectTab(){
  
      // Select all elements with the .tab class on them
       const tabs = document.querySelectorAll('.tab');
      
      // Iterate through the NodeList removing the .active-tab class from each element
       tabs.forEach(function (tab) {
          tab.classList.remove('active-tab')
      } )
  
      // Select all of the elements with the .card class on them
       const cards = document.querySelectorAll('.card');
  
      // Iterate through the NodeList setting the display style each one to 'none'
       cards.forEach(function (card) {
         card.style.display = 'none';
         console.log(cards)
       })
      
      // Add a class of ".active-tab" to this.tabElement
       this.tabElement.classList.add('.active-tab');
       console.log(this.tabElement)
    
      // Notice we are looping through the this.cards array and invoking selectCard() from the TabCard class. Just un-comment the code and study what is happening here.
       this.cards.forEach(card => card.selectCard());
       console.log(this.cards)
       
    }
  }
  
  class TabCard {
    constructor(cardElement){
      // Assign this.cardElement to the cardElement DOM reference
       this.cardElement = cardElement
    }
    selectCard(){
      // Update the style of this.cardElement to display = "flex"
       this.cardElement.style.display = "flex";
       console.log(this.cardElement)
    }
  
  }
  
   //START HERE: 
  
  //Select all classes named ".tab" and assign that value to the tabs variable
  let tabs = document.querySelectorAll('.tab')
  
  tabs.forEach(tab => new TabLink(tab))
  console.log(tabs)
  
  //With your selection in place, now chain a .forEach() method onto the tabs variable to iterate over the DOM NodeList
  
   //In your .forEach() method's callback function, return a new instance of TabLink and pass in each tab as a parameter