gsap.registerPlugin(ScrollTrigger);

gsap.to(".nav",{
  y:500,
  duration:2,
  scrollTrigger:{
    trigger:".slides",
    start:"top 20%",
    end:"top 50%",
    scrub: 2,
    //toggleActions:"restart pause resume complete",
    markers:true


  }
}
  
)
//intersection observer
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
              if(entry.intersectionRatio>0)
              {   //console.log(entry);
                  entry.target.classList.add("active")
                 
              }
              else{
                  entry.target.classList.remove("active")
              }    

          }
      )

  }
})


//'i' Button
var info_btn=document.getElementById('info-btn');
var card=document.querySelector('.card-info');
var toggle3=false

info_btn.addEventListener('click',()=>{
    toggle3=!toggle3; //true
    card.classList.toggle('card-dis',toggle3);
    console.log(toggle3);

});
//Menu-toggle

const btn_burger = document.getElementById("btn");
const btn_close  = document.getElementById("btn-close");
const menu = document.getElementById('menu1');
var toggle1 = false;

btn_burger.addEventListener('click', ()=>{
    toggle1=!toggle1;
    menu.classList.toggle('show',toggle1);
})

btn_close.addEventListener('click',()=>{
    toggle1=!toggle1;
    menu.classList.toggle('show',toggle1);
});
//DROP-DOWN-MENU
const item1 = document.getElementById('item1');
const item2 = document.getElementById('item2');
const item3 = document.getElementById('item3');
const item4 = document.getElementById('item4');
const item5 = document.getElementById('item5');
const item6 = document.getElementById('item6');
const item7 = document.getElementById('item7');
const item8 = document.getElementById('item8');
const item9 = document.getElementById('item9');
const item10 = document.getElementById('item10');
const item11 = document.getElementById('item11');
const item12 = document.getElementById('item12');
const item13 = document.getElementById('item13');

const division1 = document.getElementById('division1');
const division2 = document.getElementById('division2');
const division3 = document.getElementById('division3');
const division4 = document.getElementById('division4');
const division5 = document.getElementById('division5');
const division6 = document.getElementById('division6');
const division7 = document.getElementById('division7');
const division8 = document.getElementById('division8');
const division9 = document.getElementById('division9');
const division10 = document.getElementById('division10');
const division11 = document.getElementById('division11');
const division12 = document.getElementById('division12');
const division13 = document.getElementById('division13');

const sub_menu1 = document.getElementById('submenu1');
const sub_menu2 = document.getElementById('submenu2');
const sub_menu3 = document.getElementById('submenu3');
const sub_menu4 = document.getElementById('submenu4');
const sub_menu5 = document.getElementById('submenu5');
const sub_menu6 = document.getElementById('submenu6');
const sub_menu7 = document.getElementById('submenu7');
const sub_menu8 = document.getElementById('submenu8');
const sub_menu9 = document.getElementById('submenu9');
const sub_menu10= document.getElementById('submenu10');
const sub_menu11= document.getElementById('submenu11');
const sub_menu12= document.getElementById('submenu12');
const sub_menu13= document.getElementById('submenu13');


var Flag1 = false;
var Flag2 = false;
var Flag3  = false;
var Flag4  = false;
var Flag5  = false;
var Flag6  = false;
var Flag7  = false;
var Flag8  = false;
var Flag9  = false;
var Flag10 = false;
var Flag11 = false;
var Flag12 = false;
var Flag13 = false;

const item_list = [item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12,item13];

const division_list = [division1 ,division2 ,division3 ,division4 ,division5 ,division6 ,division7 ,division8 ,division9 ,division10,division11,division12,division13];

const flag_list = [Flag1 ,Flag2 , Flag3 ,Flag4 ,Flag5 ,Flag6 ,Flag7 ,Flag8 ,Flag9 ,Flag10,Flag11,Flag12,Flag13];

const sub_menu_items = [sub_menu1,sub_menu2,sub_menu3,sub_menu4,sub_menu5,sub_menu6,sub_menu7,sub_menu8,sub_menu9,sub_menu10,sub_menu11,sub_menu12,sub_menu13];


item_list.forEach(ev => 
{
 ev.addEventListener('click', BoxCreate);   
});

function BoxCreate(ev){
  var num = ev.target.dataset.id ;
  flag_list[num]=!flag_list[num];
  division_list[num] = document.getElementById(`division${num}`).classList;
  item_list[num]= document.getElementById(`item${num}`).classList;
if(flag_list[num] == true){
  division_list[num].add('add');
  item_list[num].add('item_add');
  setTimeout(()=>{
    sub_menu_items[num-1].classList.add('sub-menu-timer');
  },700)
}
else{
  sub_menu_items[num-1].classList.remove('sub-menu-timer');
  setTimeout(()=>{
    division_list[num].add('add_out');
  },300)
  setTimeout(()=>{
      division_list[num].remove('add','add_out')
      item_list[num].remove('item_add') 
  },1000);
 }
}
