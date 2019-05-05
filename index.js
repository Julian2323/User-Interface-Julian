const navAni = document.querySelector('.Nav-header');
navAni.addEventListener('mouseover', function(event){
    event.target.style.color = 'blue';

    setTimeout(function() {
        event.target.style.color = '#212529';
    },1000)
},false)


const dblClicker = document.querySelector('.btn');
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
})