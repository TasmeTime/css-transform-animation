let dots=document.getElementsByClassName('dots');
let skipper=document.getElementsByClassName('skipper')[0];

for(let dot of dots) {
    let n=dot.dataset.number;

    dot.addEventListener('mouseenter',function(el){
        if(1==n){
            skipper.classList.remove('tr','br','bl');
            skipper.classList.add('tl');
        }else if(2==n){
            skipper.classList.remove('tl','br','bl');
            skipper.classList.add('tr');
        }else if(3==n){
            skipper.classList.remove('tl','br','tr');
            skipper.classList.add('bl');
        }else if(4==n){
            skipper.classList.remove('tl','bl','tr');
            skipper.classList.add('br');
        }
    });
};

