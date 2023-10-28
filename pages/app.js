gsap.registerPlugin(ScrollTrigger);
console.log(ScrollTrigger);


let can1=document.querySelector('.can_fanta');
let can2=document.querySelector('.can_fanta2');

let slice1=document.querySelector('.Orange_slice');
let slice2=document.querySelector('.Orange_slice2');

let fruits1=document.querySelector('.fruits');
let fruits2=document.querySelector('.fruits2');

let leaf2_1=document.querySelector('.leaf2');
let leaf2_2=document.querySelector('.leaf2_2');

let leaf3_1=document.querySelector('.leaf3');
let leaf3_2=document.querySelector('.leaf3_2');

let leaf5_1=document.querySelector('.leaf5');
let leaf5_2=document.querySelector('.leaf5_2');




let tl_1=gsap.timeline();

tl_1.to('.can_fanta',4,{
    scrollTrigger:{
        trigger:'.min',
        start:"40% 30%",
        end:"bottom 20%",    
        scrub:2,
        // markers:true,
        id:'boxOne',
        onLeave:()=>{
            can1.classList.toggle('hidden');
            can2.classList.toggle('hidden');},
        onEnterBack:()=>{
            can1.classList.toggle('hidden');
            can2.classList.toggle('hidden');},
    },
    y:'175%',x:'-210%'});

tl_1.to('.Orange_slice',4,{
    scrollTrigger:{
        trigger:'.min',
        start:"40% 30%",
        end:"bottom 20%",    
        scrub:2,
        onLeave:()=>{
            slice1.classList.toggle('hidden');
            slice2.classList.toggle('hidden');},
        onEnterBack:()=>{
            slice1.classList.toggle('hidden');
            slice2.classList.toggle('hidden');},
    },
    y:'55em',x:'-8em'
});

tl_1.to('.fruits',4,{
        scrollTrigger:{
            trigger:'.min',
            start:"40% 30%",
            end:"bottom 20%",    
            scrub:2,

            onLeave:()=>{
                fruits1.classList.toggle('hidden');
                fruits2.classList.toggle('hidden');},
            onEnterBack:()=>{
                fruits1.classList.toggle('hidden');
                fruits2.classList.toggle('hidden');},
        },
        y:'275%',x:'154%'});


tl_1.to('.leaf2',4,{
    scrollTrigger:{
        trigger:'.min',
        start:"40% 30%",
        end:"bottom 20%",    
        scrub:2,
        onLeave:()=>{
            leaf2_1.classList.toggle('hidden');
            leaf2_2.classList.toggle('hidden');},
        onEnterBack:()=>{
            leaf2_1.classList.toggle('hidden');
            leaf2_2.classList.toggle('hidden');},
        // markers:true,
    },
    y:'27em',x:'-27em',rotate:80});

tl_1.to('.leaf3',4,{
    scrollTrigger:{
        trigger:'.min',
        start:"40% 30%",
        end:"bottom 20%",    
        scrub:2,
        onLeave:()=>{
            leaf3_1.classList.toggle('hidden');
            leaf3_2.classList.toggle('hidden');},
        onEnterBack:()=>{
            leaf3_1.classList.toggle('hidden');
            leaf3_2.classList.toggle('hidden');},
        // markers:true,
    },
    y:'32em',x:'-3em',rotate:260,});

tl_1.to('.leaf5',4,{
    scrollTrigger:{
        trigger:'.min',
        start:"40% 30%",
        end:"bottom 20%",    
        scrub:2,
        onLeave:()=>{
            leaf5_1.classList.toggle('hidden');
            leaf5_2.classList.toggle('hidden');},
        onEnterBack:()=>{
            leaf5_1.classList.toggle('hidden');
            leaf5_2.classList.toggle('hidden');},
        // markers:true,
    },
    y:'36em',x:'4em',rotate:70,});

// ============================================

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
tl_1.to('.can_fanta2',4,{
    scrollTrigger:{
        trigger:'.center',
        start:"center 40%",
        end:"110% 30%",    
        scrub:1.5,
  
    },
    y:'155%',x:'155%',

});

// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

tl_1.to('.Orange_slice2',4,{
    scrollTrigger:{
        trigger:'.center',
        start:"center 40%",
        end:"110% 30%",    
        scrub:1.5,
    },
    y:'100%',x:'60%',height:"44vh",

});


tl_1.to('.Orange_slice2',4,{
    scrollTrigger:{
        trigger:'.center',
        start:"center 40%",
        end:"110% 30%",    
        scrub:1.5,
        
    },
    y:'100%',x:'60%',height:"44vh",

});

tl_1.to('.leaf2_2',4,{
    scrollTrigger:{
        trigger:'.center',
        start:"center 40%",
        end:"110% 30%",    
        scrub:1.5,
    },
    y:'395%',x:'260%',rotate:180,

});
tl_1.to('.leaf3_2',4,{
    scrollTrigger:{
        trigger:'.center',
        
        start:"center 40%",
        end:"110% 30%",    
        scrub:1.5,
    },
    y:'300%',x:'260%',rotate:180,

});

tl_1.to('.leaf5_2',4,{
    scrollTrigger:{
        trigger:'.center',
        
        start:"center 40%",
        end:"110% 30%",    
        scrub:1.5,
    },
    y:'260%',x:'10%',rotate:0,

});


// imge cart1

tl_1.from('.Lemon_slices',5,{
    scrollTrigger:{
        trigger:'.center',
        start:"center 40%",
        end:"110% 30%",    
        scrub:1.5,
        id:'box2',
    },
    y:'100%',x:'-250%',
    height:"20vh",
});
tl_1.from('.sprite',5,{
    scrollTrigger:{
        trigger:'.center',
        start:"center 40%",
        end:"110% 30%",    
        scrub:1.5,
        // markers:true,
        id:'box2',
        
    },
    y:'100%',x:'-250%',
    rotate:-50,
});


// imge cart3

tl_1.from('.citrus_slice',5,{
    scrollTrigger:{
        trigger:'.center',
        
        start:"center 40%",
        end:"110% 30%",    
        scrub:1.5,
        id:'box2',
        
    },
    y:'100%',x:'350%',
    height:"20vh",
});


tl_1.from('.citrus',5,{
    scrollTrigger:{
        trigger:'.center',
        
        start:"center 40%",
        end:"110% 30%",    
        scrub:1.5,
        // pin:true,
        // toggleActions:"restart none none none",
        // markers:true,
        id:'box2',
        
    },
    y:'100%',x:'350%',
    rotate:50,
});