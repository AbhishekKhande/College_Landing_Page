document.addEventListener('DOMContentLoaded',()=>{
    let options={
        root:null,
        rootMargin:"-200px 0px 0px 0px",
        threshold:0
    }
    
    let observer = new IntersectionObserver(touching,options)
    document.querySelectorAll(".on-screen").forEach(
        divs=>observer.observe(divs)

    )
    
    function touching(entries){
        entries.forEach(entry=>
            {
                if(entry.isIntersecting)
                {
                    console.log('intersecting')
                    console.log(entry.target)
                    entry.target.classList.add("active")
                }
                // else{
                //     entry.target.classList.remove("active")
                // }    

            }
        )

    }
})

const home=document.getElementById('home');

const subMenu=document.getElementById('sub-menu1');

var toggle1=false; //true
var toggle2=false;
var toggle3=false;

home.addEventListener('click',()=>{
    toggle1=!toggle1
    subMenu.classList.toggle('sub-menu-add',toggle1); //no class added
    console.log(toggle1);
});

const menu_dis=document.querySelector('.menu');
const btn=document.getElementById('btn');

btn.addEventListener('click',()=>{
    toggle2=!toggle2
    menu_dis.classList.toggle('show',toggle2);
    console.log(toggle2);
});

const btn_close=document.getElementById("btn-close");
btn_close.addEventListener('click',()=>{
    toggle2=!toggle2;
    menu_dis.classList.toggle('show',toggle2);
    console.log(toggle2)

});

var info_btn=document.getElementById('info-btn');
var card=document.querySelector('.card-info');

info_btn.addEventListener('click',()=>{
    toggle3=!toggle3; //true
    card.classList.toggle('card-dis',toggle3);
    console.log(toggle3);

});







