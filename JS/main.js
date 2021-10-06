//1- //Select landing page from the dom that contain the image 
// //& assign it to variable. (OPTIONAL)
// let landingPage = document.querySelector('.landing');
// // Create Array contain part of the images URL. (OPTIONAL   )
// let imagesUrl = [1 , 2 , 3 , 4, 5, 6];
// // ------------------
// // function to excute after millisecons without stop:
// setInterval(()=>{
// //Random number between [1 to 4] called 'randomNumber'
// randomNumber = Math.floor(Math.random()*6);
// //assign that 'randomNumber' to the image URL in proper position
// //background image changes After this -> 
// landingPage.style.backgroundImage ="url('images/Landing"+imagesUrl[randomNumber]+".jpg')"
// } , // wait 1 sec to repeat the whole function.
// 5000);
// //Short code same Result HERE.
//------------------------------
//1 - Changing landing page images dynamically.\
//variable control the random change authority
function RandomizeBackground(){
let randomNumber = Math.ceil(Math.random()*6);
document.querySelector('.landing').style.backgroundImage ="url('images/Landing"+randomNumber+".jpg')"
}

setInterval(RandomizeBackground,5000);

// changeBackImg;
//------------------------------

//2 - open the Settings box when the icon clicked.(by adding class 'open') 
//also make the settings icon spin after click with toggle Attr.

document.querySelector('.fa-cog').onclick = function(){
    this.classList.toggle('fa-spin')
    document.querySelector('.settings').classList.toggle('open');
}
document.querySelector('.fa-cog').addEventListener('hover',(e)=>{
    e.target.classList.add('fa-spin');
})
//----------------------------------------

// myColors = document.querySelectorAll('.color-option ul li')

// myColors.forEach(li => {

//     li.addEventListener('click',(e)=>{
//         document.documentElement.style.setProperty('--main-color',e.target.dataset.color);
//     })

// });

//3 - Change the page theme

//add click Event on the color input Element
document.querySelector('input').addEventListener('click',(e)=>{
// Function to Excute after click
   setInterval(()=>{
        // Set the chosen color to a Variable
        var newColor = e.target.value;
        //Replace the new color with the main color in the root of CSS.
        document.documentElement.style.setProperty('--main-color',newColor);
        // Set that color to the local storage
        localStorage.setItem('main-color', newColor);
        //Check the chosen color after 0.1 Sec.
        
    },100)
})
document.body.onclick = ()=>{
    console.log('you"ve clicked the body');
}
// Get the color saved in localStorage 
if(localStorage.getItem('main-color') !== null ){
    document.documentElement.style.setProperty('--main-color',localStorage.getItem('main-color'));
    document.querySelector('input').value = localStorage.getItem('main-color'); 
}

//change active class on backgroundbox in settings 
let mySpan = document.querySelectorAll('.randomBackground .box span');
mySpan.forEach(span=>{
    span.addEventListener('click',(e)=>{
        e.target.parentElement.querySelector('.active').classList.remove('active');
        e.target.classList.add('active');
        if(e.target.classList.contains('no') === true){
           let goRandom = false;
            clearInterval(SI);
        }
        else if(e.target.classList.contains('yes') === true){
        let goRandom = true;
        SI();             
        }
})
})

