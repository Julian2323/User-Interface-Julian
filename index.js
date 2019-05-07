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