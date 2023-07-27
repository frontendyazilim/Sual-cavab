let big=document.querySelector('.big');
let correct=document.querySelector('.correct');
let two=document.querySelector('.two')
let three=document.querySelector('.three');

let ii=document.querySelectorAll('i')


correct.addEventListener('click',function(){
    
    
    big.classList.add('animation')
    correct.style.backgroundColor='limegreen'
    ii.forEach(function(i){
        i.style.display='block'
    })
    
})
two.addEventListener('click',function(){
    two.classList.add('wrong1')
    big.classList.add('animation1')
})

three.addEventListener('click',function(){
    three.classList.add('wrong2')
    big.classList.add('animation1')
})
