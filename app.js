// import Swiper from 'swiper';

// Initialize Swiper


var mySwiper;

document.addEventListener('DOMContentLoaded', function () {
    mySwiper = new Swiper('.swiper', {
        slidesPerView:1,
        centeredSlides:false,
        slidesPerGroupSkip:1,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            769: {
                slidesPerView: 3, // Show three buttons per view on tablet-sized screens
                slidesPerGroup: 3,
              },
              1200: {
                slidesPerView: 4, // Show four buttons per view on larger screens
                slidesPerGroup: 4,
              }
           
             
        },
    });
})


// Store selected effect
let selectedEffect = null;
const parentElement=document.getElementById('parent');
const child=document.createElement('div');
child.classList.add('grid')
child.classList.add('mb-5')
// Function to handle button click
function selectEffect(effect) {
    selectedEffect = effect;
    // You can perform additional actions based on the selected effect here
    console.log(`Selected effect: ${selectedEffect}`);
    switch(selectedEffect){
        
        // Fade In effect 
        case "FadeIn":
            
         child.innerHTML=` 
                         
                      
         <div class="container1 ${selectedEffect}">
    <img src="./asset/1.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/2.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/3.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 four ${selectedEffect}">
    <img class='four1' src="./asset/4.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/5.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/6.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/7.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 eight ${selectedEffect}">
    <img class='eight1' src="./asset/8.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/9.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/10.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/11.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/12.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/13.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/14.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/15.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 sixteen ${selectedEffect}">
    <img class='sixteen1' src="./asset/16.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/17.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/18.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/19.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    `
    
    parentElement.appendChild(child)
    break;
    // Fade Out effect 
    case "FadeOut":
        child.innerHTML=`
        <div class="container1 ${selectedEffect}">
    <img src="./asset/1.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/2.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/3.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 four ${selectedEffect}">
    <img class='four1' src="./asset/4.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/5.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/6.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/7.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 eight ${selectedEffect}">
    <img class='eight1' src="./asset/8.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/9.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/10.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/11.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/12.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/13.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/14.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/15.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 sixteen ${selectedEffect}">
    <img class='sixteen1' src="./asset/16.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/17.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/18.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/19.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>`
    parentElement.appendChild(child)
    break;
    // Swipe Effect 
    case "Swipe":
        
        child.innerHTML=`
        <div class="container1 ${selectedEffect}">
    <img src="./asset/1.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    <div class="white_box"></div>
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/2.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    <div class="white_box"></div>
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/3.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    <div class="white_box"></div>
    </div>
    <div class="container1 four ${selectedEffect}">
    <img class='four1' src="./asset/4.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    <div class="white_box"></div>
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/5.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    <div class="white_box"></div>
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/6.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    <div class="white_box"></div>
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/7.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    <div class="white_box"></div>
    </div>
    <div class="container1 eight ${selectedEffect}">
    <img class='eight1' src="./asset/8.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    <div class="white_box"></div>
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/9.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    <div class="white_box"></div>
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/10.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    <div class="white_box"></div>
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/11.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    <div class="white_box"></div>
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/12.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    <div class="white_box"></div>
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/13.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    <div class="white_box"></div>
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/14.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    <div class="white_box"></div>
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/15.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    <div class="white_box"></div>
    </div>
    <div class="container1 sixteen ${selectedEffect}">
    <img class='sixteen1' src="./asset/16.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    <div class="white_box"></div>
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/17.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    <div class="white_box"></div>
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/18.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    <div class="white_box"></div>
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/19.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    <div class="white_box"></div>
    </div>`
    parentElement.appendChild(child)
    break;
    // Slide Effect 
    case "Slide":
        child.innerHTML=` 
                         
                      
         <div class="container1 ${selectedEffect}">
    <img src="./asset/1.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/2.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/3.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 four ${selectedEffect}">
    <img class='four1' src="./asset/4.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/5.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/6.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/7.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 eight ${selectedEffect}">
    <img class='eight1' src="./asset/8.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/9.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/10.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/11.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/12.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/13.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/14.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/15.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 sixteen ${selectedEffect}">
    <img class='sixteen1' src="./asset/16.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/17.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/18.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/19.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    `
    
    parentElement.appendChild(child)
    break;
    
    // Slide over effect 
    
    case "SlideOver":
        child.innerHTML=` 
                         
                      
         <div class="container1 ${selectedEffect}">
    <img src="./asset/1.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/2.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/3.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 four ${selectedEffect}">
    <img class='four1' src="./asset/4.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/5.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/6.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/7.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 eight ${selectedEffect}">
    <img class='eight1' src="./asset/8.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/9.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/10.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/11.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/12.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/13.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/14.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/15.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 sixteen ${selectedEffect}">
    <img class='sixteen1' src="./asset/16.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/17.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/18.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/19.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    `
    
    parentElement.appendChild(child)
    break;
    
    // Zoom In Effect 
    case "ZoomIn":
        child.innerHTML=` 
                         
                      
         <div class="container1 ${selectedEffect}">
         <div class="zoom-in-container">
         <img src="./asset/1.jpg" alt="" />   
                </div>
   
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <div class="zoom-in-container">
    <img src="./asset/2.jpg" alt="" />   
           </div>
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <div class="zoom-in-container">
    <img src="./asset/3.jpg" alt="" />   
           </div>
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 four ${selectedEffect}">
    <div class="zoom-in-container">
    <img class="four1" src="./asset/4.jpg" alt="" />   
           </div>
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <div class="zoom-in-container">
    <img src="./asset/5.jpg" alt="" />   
           </div>
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <div class="zoom-in-container">
    <img src="./asset/6.jpg" alt="" />   
           </div>
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <div class="zoom-in-container">
    <img src="./asset/7.jpg" alt="" />   
           </div>
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 eight ${selectedEffect}">
    <div class="zoom-in-container">
    <img class="eight1" src="./asset/8.jpg" alt="" />   
           </div>
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <div class="zoom-in-container">
    <img src="./asset/9.jpg" alt="" />   
           </div>
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <div class="zoom-in-container">
    <img src="./asset/10.jpg" alt="" />   
           </div>
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <div class="zoom-in-container">
    <img src="./asset/11.jpg" alt="" />   
           </div>
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <div class="zoom-in-container">
    <img src="./asset/12.jpg" alt="" />   
           </div>
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <div class="zoom-in-container">
    <img src="./asset/13.jpg" alt="" />   
           </div>
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <div class="zoom-in-container">
    <img src="./asset/14.jpg" alt="" />   
           </div>
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <div class="zoom-in-container">
    <img src="./asset/15.jpg" alt="" />   
           </div>
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 sixteen ${selectedEffect}">
    <div class="zoom-in-container">
    <img class="sixteen1" src="./asset/16.jpg" alt="" />   
           </div>
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <div class="zoom-in-container">
    <img src="./asset/17.jpg" alt="" />   
           </div>
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <div class="zoom-in-container">
    <img src="./asset/18.jpg" alt="" />   
           </div>
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <div class="zoom-in-container">
         <img src="./asset/19.jpg" alt="" />   
                </div>
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    `
    
    parentElement.appendChild(child)
    break;
    
    // Zoom Out Effect 
    case "ZoomOut":
        child.innerHTML=` 
                         
                      
        <div class="container1 ${selectedEffect}">
        <div class="zoom-out-container">
        <img src="./asset/1.jpg" alt="" />   
               </div>
  
   
   <div class="overlay">
   <div class="text">
   <h3 class='text-center'>Silence is golden</h3>
   <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
   <div class="d-flex justify-content-center icons">
   <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
   </div>
   </div>
   </div>
   
   </div>
   <div class="container1 ${selectedEffect}">
   <div class="zoom-out-container">
   <img src="./asset/2.jpg" alt="" />   
          </div>
   
   <div class="overlay">
   <div class="text">
   <h3 class='text-center'>Silence is golden</h3>
   <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
   <div class="d-flex justify-content-center icons">
   <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
   </div>
   </div>
   </div>
   
   </div>
   <div class="container1 ${selectedEffect}">
   <div class="zoom-out-container">
   <img src="./asset/3.jpg" alt="" />   
          </div>
   
   <div class="overlay">
   <div class="text">
   <h3 class='text-center'>Silence is golden</h3>
   <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
   <div class="d-flex justify-content-center icons">
   <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
   </div>
   </div>
   </div>
   
   </div>
   <div class="container1 four ${selectedEffect}">
   <div class="zoom-out-container">
   <img class="four1" src="./asset/4.jpg" alt="" />   
          </div>
   
   <div class="overlay">
   <div class="text">
   <h3 class='text-center'>Silence is golden</h3>
   <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
   <div class="d-flex justify-content-center icons">
   <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
   </div>
   </div>
   </div>
   
   </div>
   <div class="container1 ${selectedEffect}">
   <div class="zoom-out-container">
   <img src="./asset/5.jpg" alt="" />   
          </div>
   
   <div class="overlay">
   <div class="text">
   <h3 class='text-center'>Silence is golden</h3>
   <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
   <div class="d-flex justify-content-center icons">
   <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
   </div>
   </div>
   </div>
   
   </div>
   <div class="container1 ${selectedEffect}">
   <div class="zoom-out-container">
   <img src="./asset/6.jpg" alt="" />   
          </div>
   
   <div class="overlay">
   <div class="text">
   <h3 class='text-center'>Silence is golden</h3>
   <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
   <div class="d-flex justify-content-center icons">
   <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
   </div>
   </div>
   </div>
   
   </div>
   <div class="container1 ${selectedEffect}">
   <div class="zoom-out-container">
   <img src="./asset/7.jpg" alt="" />   
          </div>
   
   <div class="overlay">
   <div class="text">
   <h3 class='text-center'>Silence is golden</h3>
   <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
   <div class="d-flex justify-content-center icons">
   <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
   </div>
   </div>
   </div>
   
   </div>
   <div class="container1 eight ${selectedEffect}">
   <div class="zoom-out-container">
   <img class="eight1" src="./asset/8.jpg" alt="" />   
          </div>
   
   <div class="overlay">
   <div class="text">
   <h3 class='text-center'>Silence is golden</h3>
   <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
   <div class="d-flex justify-content-center icons">
   <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
   </div>
   </div>
   </div>
   
   </div>
   <div class="container1 ${selectedEffect}">
   <div class="zoom-out-container">
   <img src="./asset/9.jpg" alt="" />   
          </div>
   
   <div class="overlay">
   <div class="text">
   <h3 class='text-center'>Silence is golden</h3>
   <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
   <div class="d-flex justify-content-center icons">
   <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
   </div>
   </div>
   </div>
   
   </div>
   <div class="container1 ${selectedEffect}">
   <div class="zoom-out-container">
   <img src="./asset/10.jpg" alt="" />   
          </div>
   
   <div class="overlay">
   <div class="text">
   <h3 class='text-center'>Silence is golden</h3>
   <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
   <div class="d-flex justify-content-center icons">
   <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
   </div>
   </div>
   </div>
   
   </div>
   <div class="container1 ${selectedEffect}">
   <div class="zoom-out-container">
   <img src="./asset/11.jpg" alt="" />   
          </div>
   
   <div class="overlay">
   <div class="text">
   <h3 class='text-center'>Silence is golden</h3>
   <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
   <div class="d-flex justify-content-center icons">
   <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
   </div>
   </div>
   </div>
   
   </div>
   <div class="container1 ${selectedEffect}">
   <div class="zoom-out-container">
   <img src="./asset/12.jpg" alt="" />   
          </div>
   
   <div class="overlay">
   <div class="text">
   <h3 class='text-center'>Silence is golden</h3>
   <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
   <div class="d-flex justify-content-center icons">
   <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
   </div>
   </div>
   </div>
   
   </div>
   <div class="container1 ${selectedEffect}">
   <div class="zoom-out-container">
   <img src="./asset/13.jpg" alt="" />   
          </div>
   
   <div class="overlay">
   <div class="text">
   <h3 class='text-center'>Silence is golden</h3>
   <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
   <div class="d-flex justify-content-center icons">
   <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
   </div>
   </div>
   </div>
   
   </div>
   <div class="container1 ${selectedEffect}">
   <div class="zoom-out-container">
   <img src="./asset/14.jpg" alt="" />   
          </div>
   
   <div class="overlay">
   <div class="text">
   <h3 class='text-center'>Silence is golden</h3>
   <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
   <div class="d-flex justify-content-center icons">
   <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
   </div>
   </div>
   </div>
   
   </div>
   <div class="container1 ${selectedEffect}">
   <div class="zoom-out-container">
   <img src="./asset/15.jpg" alt="" />   
          </div>
   
   <div class="overlay">
   <div class="text">
   <h3 class='text-center'>Silence is golden</h3>
   <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
   <div class="d-flex justify-content-center icons">
   <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
   </div>
   </div>
   </div>
   
   </div>
   <div class="container1 sixteen ${selectedEffect}">
   <div class="zoom-out-container">
   <img class="sixteen1" src="./asset/16.jpg" alt="" />   
          </div>
   
   <div class="overlay">
   <div class="text">
   <h3 class='text-center'>Silence is golden</h3>
   <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
   <div class="d-flex justify-content-center icons">
   <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
   </div>
   </div>
   </div>
   
   </div>
   <div class="container1 ${selectedEffect}">
   <div class="zoom-out-container">
   <img src="./asset/17.jpg" alt="" />   
          </div>
   
   <div class="overlay">
   <div class="text">
   <h3 class='text-center'>Silence is golden</h3>
   <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
   <div class="d-flex justify-content-center icons">
   <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
   </div>
   </div>
   </div>
   
   </div>
   <div class="container1 ${selectedEffect}">
   <div class="zoom-out-container">
   <img src="./asset/18.jpg" alt="" />   
          </div>
   
   <div class="overlay">
   <div class="text">
   <h3 class='text-center'>Silence is golden</h3>
   <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
   <div class="d-flex justify-content-center icons">
   <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
   </div>
   </div>
   </div>
   
   </div>
   <div class="container1 ${selectedEffect}">
   <div class="zoom-out-container">
        <img src="./asset/19.jpg" alt="" />   
               </div>
   
   <div class="overlay">
   <div class="text">
   <h3 class='text-center'>Silence is golden</h3>
   <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
   <div class="d-flex justify-content-center icons">
   <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
   </div>
   </div>
   </div>
   
   </div>
   `
    
    parentElement.appendChild(child)
    break;
    
    // Shake Effect 
    case "Shake":
        child.innerHTML=` 
                         
                      
         <div class="container1 ${selectedEffect}">
    <img src="./asset/1.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/2.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/3.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 four ${selectedEffect}">
    <img class='four1' src="./asset/4.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/5.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/6.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/7.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 eight ${selectedEffect}">
    <img class='eight1' src="./asset/8.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/9.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/10.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/11.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/12.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/13.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/14.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/15.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 sixteen ${selectedEffect}">
    <img class='sixteen1' src="./asset/16.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/17.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/18.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/19.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    `
    
    parentElement.appendChild(child)
    break;
    
    // Sense3D effect 
    case "Sense3D":
        child.innerHTML=` 
                         
                      
         <div class="container1 ${selectedEffect}">
    <img src="./asset/1.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/2.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/3.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 four ${selectedEffect}">
    <img class='four1' src="./asset/4.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/5.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/6.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/7.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 eight ${selectedEffect}">
    <img class='eight1' src="./asset/8.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/9.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/10.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/11.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/12.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/13.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/14.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/15.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 sixteen ${selectedEffect}">
    <img class='sixteen1' src="./asset/16.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/17.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/18.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/19.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    `
    
    parentElement.appendChild(child)
    break;
    // Trans Effect 
    case "Trans":
        child.innerHTML=` 
                         
                      
         <div class="container1 ${selectedEffect}">
    <img src="./asset/1.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/2.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/3.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 four ${selectedEffect}">
    <img class='four1' src="./asset/4.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/5.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/6.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/7.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 eight ${selectedEffect}">
    <img class='eight1' src="./asset/8.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/9.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/10.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/11.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/12.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/13.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/14.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/15.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 sixteen ${selectedEffect}">
    <img class='sixteen1' src="./asset/16.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/17.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/18.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/19.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    `
    
    parentElement.appendChild(child)
    break;
    // Flip Effect 
    case "Flip":
        child.innerHTML=` 
                  
                  
       
<div class="container1 ${selectedEffect}">
        
<div class="flip-card-inner">
<div class="flip-card-front">
<img  src="./asset/1.jpg" alt="" />
</div>


<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</div>

</div>
<div class="container1 ${selectedEffect}">

<div class="flip-card-inner">
<div class="flip-card-front">
<img  src="./asset/2.jpg" alt="" />
</div>


<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</div>

</div>
<div class="container1 ${selectedEffect}">

<div class="flip-card-inner">
<div class="flip-card-front">
<img  src="./asset/3.jpg" alt="" />
</div>


<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</div>

</div>
<div class="container1 four ${selectedEffect}">

<div class="flip-card-inner">
<div class="flip-card-front">
<img class='four1' src="./asset/4.jpg" alt="" />
</div>


<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</div>

</div>
<div class="container1 ${selectedEffect}">

<div class="flip-card-inner">
<div class="flip-card-front">
<img src="./asset/5.jpg" alt="" />
</div>


<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</div>

</div>
<div class="container1 ${selectedEffect}">

<div class="flip-card-inner">
<div class="flip-card-front">
<img  src="./asset/6.jpg" alt="" />
</div>


<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</div>

</div>
<div class="container1 ${selectedEffect}">

<div class="flip-card-inner">
<div class="flip-card-front">
<img  src="./asset/7.jpg" alt="" />
</div>


<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</div>

</div>
<div class="container1 eight ${selectedEffect}">

<div class="flip-card-inner">
<div class="flip-card-front">
<img class='eight1' src="./asset/8.jpg" alt="" />
</div>


<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</div>

</div>
<div class="container1 ${selectedEffect}">

<div class="flip-card-inner">
<div class="flip-card-front">
<img  src="./asset/9.jpg" alt="" />
</div>


<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</div>

</div>
<div class="container1 ${selectedEffect}">

<div class="flip-card-inner">
<div class="flip-card-front">
<img  src="./asset/10.jpg" alt="" />
</div>


<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</div>

</div>
<div class="container1 ${selectedEffect}">

<div class="flip-card-inner">
<div class="flip-card-front">
<img  src="./asset/11.jpg" alt="" />
</div>


<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</div>

</div>
<div class="container1 ${selectedEffect}">

<div class="flip-card-inner">
<div class="flip-card-front">
<img  src="./asset/12.jpg" alt="" />
</div>


<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</div>

</div>
<div class="container1 ${selectedEffect}">

<div class="flip-card-inner">
<div class="flip-card-front">
<img  src="./asset/13.jpg" alt="" />
</div>


<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</div>

</div>
<div class="container1 ${selectedEffect}">

<div class="flip-card-inner">
<div class="flip-card-front">
<img  src="./asset/14.jpg" alt="" />
</div>


<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</div>

</div>
<div class="container1 ${selectedEffect}">

<div class="flip-card-inner">
<div class="flip-card-front">
<img  src="./asset/15.jpg" alt="" />
</div>


<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</div>

</div>
<div class="container1 sixteen ${selectedEffect}">

<div class="flip-card-inner">
<div class="flip-card-front">
<img class='sixteen1' src="./asset/16.jpg" alt="" />
</div>


<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</div>

</div>
<div class="container1 ${selectedEffect}">

<div class="flip-card-inner">
<div class="flip-card-front">
<img  src="./asset/17.jpg" alt="" />
</div>


<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</div>

</div>
<div class="container1 ${selectedEffect}">

<div class="flip-card-inner">
<div class="flip-card-front">
<img  src="./asset/18.jpg" alt="" />
</div>


<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</div>

</div>
<div class="container1 ${selectedEffect}">

<div class="flip-card-inner">
<div class="flip-card-front">
<img  src="./asset/19.jpg" alt="" />
</div>


<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>
</div>

</div>
    `
    
    parentElement.appendChild(child)
    break;
    // Flip In Effect 
    case "FlipIn":
        child.innerHTML=` 
                         
                      
         <div class="container1 ${selectedEffect}">
    <img src="./asset/1.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/2.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/3.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 four ${selectedEffect}">
    <img class='four1' src="./asset/4.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/5.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/6.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/7.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 eight ${selectedEffect}">
    <img class='eight1' src="./asset/8.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/9.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/10.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/11.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/12.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/13.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/14.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/15.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 sixteen ${selectedEffect}">
    <img class='sixteen1' src="./asset/16.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/17.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/18.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/19.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    `
    
    parentElement.appendChild(child)
    break;
    // Flip Out Effect 
    case "FlipOut":
        child.innerHTML=`      
        <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/1.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/2.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/3.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 four ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img class='four1' src="./asset/4.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img src="./asset/5.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/6.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/7.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 eight ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img class='eight1' src="./asset/8.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/9.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/10.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/11.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/12.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/13.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/14.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/15.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 sixteen ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img class='sixteen1' src="./asset/16.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/17.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/18.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/19.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>`
    
    parentElement.appendChild(child)
    break;
    // Bubble Effect 
    case "Bubble":
        child.innerHTML=` 
                         
                      
         <div class="container1 ${selectedEffect}">
    <img src="./asset/1.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/2.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/3.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 four ${selectedEffect}">
    <img class='four1' src="./asset/4.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/5.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/6.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/7.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 eight ${selectedEffect}">
    <img class='eight1' src="./asset/8.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/9.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/10.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/11.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/12.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/13.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/14.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/15.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 sixteen ${selectedEffect}">
    <img class='sixteen1' src="./asset/16.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/17.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/18.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/19.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    `
    
    parentElement.appendChild(child)
    break;
    // Bounce In effect 
    case "BounceIn":
        child.innerHTML=` 
                         
                      
         <div class="container1 ${selectedEffect}">
    <img src="./asset/1.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/2.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/3.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 four ${selectedEffect}">
    <img class='four1' src="./asset/4.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/5.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/6.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/7.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 eight ${selectedEffect}">
    <img class='eight1' src="./asset/8.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/9.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/10.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/11.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/12.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/13.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/14.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/15.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 sixteen ${selectedEffect}">
    <img class='sixteen1' src="./asset/16.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/17.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/18.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/19.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    `
    
    parentElement.appendChild(child)
    break;
    
    // Bounce Out Effect 
    case "BounceOut":
        child.innerHTML=` 
                         
                      
         <div class="container1 ${selectedEffect}">
    <img src="./asset/1.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/2.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/3.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 four ${selectedEffect}">
    <img class='four1' src="./asset/4.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/5.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/6.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/7.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 eight ${selectedEffect}">
    <img class='eight1' src="./asset/8.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/9.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/10.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/11.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/12.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/13.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/14.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/15.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 sixteen ${selectedEffect}">
    <img class='sixteen1' src="./asset/16.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/17.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/18.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/19.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    `
    
    parentElement.appendChild(child)
    break;
    // Flip Forward effect 
    case "FlipForward":
        child.innerHTML=`       
        <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/1.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/2.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/3.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 four ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img class='four1' src="./asset/4.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img src="./asset/5.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/6.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/7.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 eight ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img class='eight1' src="./asset/8.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/9.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/10.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/11.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/12.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/13.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/14.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/15.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 sixteen ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img class='sixteen1' src="./asset/16.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/17.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/18.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/19.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
    `
    
    parentElement.appendChild(child)
    break;
    // Flip Backward Effect 
    case "FlipBackward":
        child.innerHTML=`       
        <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/1.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/2.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/3.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 four ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img class='four1' src="./asset/4.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img src="./asset/5.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/6.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/7.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 eight ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img class='eight1' src="./asset/8.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/9.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/10.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/11.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/12.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/13.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/14.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/15.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 sixteen ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img class='sixteen1' src="./asset/16.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/17.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/18.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
         <div class="container1 ${selectedEffect}">
                
                <div class="flip-card-inner">
                <div class="flip-card-front">
         <img  src="./asset/19.jpg" alt="" />
         </div>
         
         
         <div class="overlay">
         <div class="text">
         <h3 class='text-center'>Silence is golden</h3>
         <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
                </div>
         
         </div>
    `
    
    parentElement.appendChild(child)
    break;
    
    
    
    default:
        child.innerHTML=` 
                         
                      
        <div class="container1 ${selectedEffect}">
    <img src="./asset/1.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/2.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/3.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 four ${selectedEffect}">
    <img class='four1' src="./asset/4.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/5.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/6.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/7.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 eight ${selectedEffect}">
    <img class='eight1' src="./asset/8.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/9.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/10.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/11.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/12.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/13.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/14.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/15.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 sixteen ${selectedEffect}">
    <img class='sixteen1' src="./asset/16.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/17.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/18.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    <div class="container1 ${selectedEffect}">
    <img src="./asset/19.jpg" alt="" />
    
    <div class="overlay">
    <div class="text">
    <h3 class='text-center'>Silence is golden</h3>
    <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
    <div class="d-flex justify-content-center icons">
    <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
    </div>
    </div>
    </div>
    
    </div>
    `
    
    parentElement.appendChild(child)
    break;
    case "Blinds":
        child.innerHTML=`<div class="container1 ${selectedEffect}">
        <div class="overlay-container">
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="text">
        <h3 class='text-center'>Silence is golden</h3>
        <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
        <div class="d-flex justify-content-center icons">
        <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
        </div>
        </div>
        </div>
        <img src="./asset/1.jpg" alt="Image"/>
        
        </div>
        <div class="container1 ${selectedEffect}">
        <div class="overlay-container">
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="text">
        <h3 class='text-center'>Silence is golden</h3>
        <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
        <div class="d-flex justify-content-center icons">
        <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
        </div>
        </div>
        </div>
        <img src="./asset/2.jpg" alt="Image"/>
        
        </div>
        <div class="container1 ${selectedEffect}">
        <div class="overlay-container">
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="text">
        <h3 class='text-center'>Silence is golden</h3>
        <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
        <div class="d-flex justify-content-center icons">
        <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
        </div>
        </div>
        </div>
        <img src="./asset/3.jpg" alt="Image"/>
        
        </div>
        <div class="container1 four ${selectedEffect}">
        <div class="overlay-container">
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="text">
        <h3 class='text-center'>Silence is golden</h3>
        <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
        <div class="d-flex justify-content-center icons">
        <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
        </div>
        </div>
        </div>
        <img class='four1' src="./asset/4.jpg" alt="Image"/>
        
        </div>
        <div class="container1 ${selectedEffect}">
        <div class="overlay-container">
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="text">
        <h3 class='text-center'>Silence is golden</h3>
        <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
        <div class="d-flex justify-content-center icons">
        <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
        </div>
        </div>
        </div>
        <img src="./asset/5.jpg" alt="Image"/>
        
        </div>
        <div class="container1 ${selectedEffect}">
        <div class="overlay-container">
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="text">
        <h3 class='text-center'>Silence is golden</h3>
        <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
        <div class="d-flex justify-content-center icons">
        <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
        </div>
        </div>
        </div>
        <img src="./asset/6.jpg" alt="Image"/>
        
        </div>
        <div class="container1 ${selectedEffect}">
        <div class="overlay-container">
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="text">
        <h3 class='text-center'>Silence is golden</h3>
        <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
        <div class="d-flex justify-content-center icons">
        <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
        </div>
        </div>
        </div>
        <img src="./asset/7.jpg" alt="Image"/>
        
        </div>
        <div class="container1 eight ${selectedEffect}">
        <div class="overlay-container">
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="text">
        <h3 class='text-center'>Silence is golden</h3>
        <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
        <div class="d-flex justify-content-center icons">
        <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
        </div>
        </div>
        </div>
        <img class='eight1' src="./asset/8.jpg" alt="Image"/>
        
        </div>
        <div class="container1 ${selectedEffect}">
        <div class="overlay-container">
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="text">
        <h3 class='text-center'>Silence is golden</h3>
        <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
        <div class="d-flex justify-content-center icons">
        <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
        </div>
        </div>
        </div>
        <img src="./asset/9.jpg" alt="Image"/>
        
        </div>
        <div class="container1 ${selectedEffect}">
        <div class="overlay-container">
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="text">
        <h3 class='text-center'>Silence is golden</h3>
        <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
        <div class="d-flex justify-content-center icons">
        <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
        </div>
        </div>
        </div>
        <img src="./asset/10.jpg" alt="Image"/>
        
        </div>
        <div class="container1 ${selectedEffect}">
        <div class="overlay-container">
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="text">
        <h3 class='text-center'>Silence is golden</h3>
        <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
        <div class="d-flex justify-content-center icons">
        <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
        </div>
        </div>
        </div>
        <img src="./asset/11.jpg" alt="Image"/>
        
        </div>
        <div class="container1 ${selectedEffect}">
        <div class="overlay-container">
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="text">
        <h3 class='text-center'>Silence is golden</h3>
        <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
        <div class="d-flex justify-content-center icons">
        <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
        </div>
        </div>
        </div>
        <img src="./asset/12.jpg" alt="Image"/>
        
        </div>
        <div class="container1 ${selectedEffect}">
        <div class="overlay-container">
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="text">
        <h3 class='text-center'>Silence is golden</h3>
        <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
        <div class="d-flex justify-content-center icons">
        <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
        </div>
        </div>
        </div>
        <img src="./asset/13.jpg" alt="Image"/>
        
        </div>
        <div class="container1 ${selectedEffect}">
        <div class="overlay-container">
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="text">
        <h3 class='text-center'>Silence is golden</h3>
        <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
        <div class="d-flex justify-content-center icons">
        <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
        </div>
        </div>
        </div>
        <img src="./asset/14.jpg" alt="Image"/>
        
        </div>
        <div class="container1 ${selectedEffect}">
        <div class="overlay-container">
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="text">
        <h3 class='text-center'>Silence is golden</h3>
        <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
        <div class="d-flex justify-content-center icons">
        <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
        </div>
        </div>
        </div>
        <img src="./asset/15.jpg" alt="Image"/>
        
        </div>
        <div class="container1 sixteen ${selectedEffect}">
        <div class="overlay-container">
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="text">
        <h3 class='text-center'>Silence is golden</h3>
        <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
        <div class="d-flex justify-content-center icons">
        <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
        </div>
        </div>
        </div>
        <img class='sixteen1' src="./asset/16.jpg" alt="Image"/>
        
        </div>
        <div class="container1 ${selectedEffect}">
        <div class="overlay-container">
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="text">
        <h3 class='text-center'>Silence is golden</h3>
        <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
        <div class="d-flex justify-content-center icons">
        <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
        </div>
        </div>
        </div>
        <img src="./asset/17.jpg" alt="Image"/>
        
        </div>
        <div class="container1 ${selectedEffect}">
        <div class="overlay-container">
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="text">
        <h3 class='text-center'>Silence is golden</h3>
        <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
        <div class="d-flex justify-content-center icons">
        <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
        </div>
        </div>
        </div>
        <img src="./asset/18.jpg" alt="Image"/>
        
        </div>
        <div class="container1 ${selectedEffect}">
        <div class="overlay-container">
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="overlay1"></div>
            <div class="text">
        <h3 class='text-center'>Silence is golden</h3>
        <h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
        <div class="d-flex justify-content-center icons">
        <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
        </div>
        </div>
        </div>
        <img src="./asset/19.jpg" alt="Image"/>
        
        </div>`
        parentElement.appendChild(child)
        break;
    }
   
     
// Sense3D.js

// Wrap your code in an event listener for when the DOM is ready

    // Get all elements with class 'container1'
    const elements = document.getElementsByClassName('Sense3D');
  
    // Loop through each element and add event listeners
    for (let i = 0; i < elements.length; i++) {
      const el = elements[i];
      console.log(el);
  
      // Get the height and width of the element
      const height = el.clientHeight;
      const width = el.clientWidth;
  
      // Add a listener for the mousemove event
      el.addEventListener('mousemove', handleMove);
  
      // Define function handleMove for each element
      function handleMove(e) {
        const xVal = e.layerX;
        const yVal = e.layerY;
  
        const yRotation = 20 * ((xVal - width / 2) / width);
        const xRotation = -20 * ((yVal - height / 2) / height);
        const string =
          'perspective(500px) scale(1.1) rotateX(' +
          xRotation +
          'deg) rotateY(' +
          yRotation +
          'deg)';
        el.style.transform = string;
      }
  
      // Add listener for mouseout event
      el.addEventListener('mouseout', function () {
        el.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)';
      });
  
      // Add listener for mousedown event
      el.addEventListener('mousedown', function () {
        el.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)';
      });
  
      // Add listener for mouseup event
      el.addEventListener('mouseup', function () {
        el.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)';
      });
    }
  ; 
    
}
child.innerHTML=` 
                         
                      
<div class="container1 ${selectedEffect}">
<img src="./asset/1.jpg" alt="" />

<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>

</div>
<div class="container1 ${selectedEffect}">
<img src="./asset/2.jpg" alt="" />

<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>

</div>
<div class="container1 ${selectedEffect}">
<img src="./asset/3.jpg" alt="" />

<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>

</div>
<div class="container1 four ${selectedEffect}">
<img class='four1' src="./asset/4.jpg" alt="" />

<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>

</div>
<div class="container1 ${selectedEffect}">
<img src="./asset/5.jpg" alt="" />

<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>

</div>
<div class="container1 ${selectedEffect}">
<img src="./asset/6.jpg" alt="" />

<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>

</div>
<div class="container1 ${selectedEffect}">
<img src="./asset/7.jpg" alt="" />

<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>

</div>
<div class="container1 eight ${selectedEffect}">
<img class='eight1' src="./asset/8.jpg" alt="" />

<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>

</div>
<div class="container1 ${selectedEffect}">
<img src="./asset/9.jpg" alt="" />

<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>

</div>
<div class="container1 ${selectedEffect}">
<img src="./asset/10.jpg" alt="" />

<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>

</div>
<div class="container1 ${selectedEffect}">
<img src="./asset/11.jpg" alt="" />

<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>

</div>
<div class="container1 ${selectedEffect}">
<img src="./asset/12.jpg" alt="" />

<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>

</div>
<div class="container1 ${selectedEffect}">
<img src="./asset/13.jpg" alt="" />

<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>

</div>
<div class="container1 ${selectedEffect}">
<img src="./asset/14.jpg" alt="" />

<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>

</div>
<div class="container1 ${selectedEffect}">
<img src="./asset/15.jpg" alt="" />

<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>

</div>
<div class="container1 sixteen ${selectedEffect}">
<img class='sixteen1' src="./asset/16.jpg" alt="" />

<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>

</div>
<div class="container1 ${selectedEffect}">
<img src="./asset/17.jpg" alt="" />

<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>

</div>
<div class="container1 ${selectedEffect}">
<img src="./asset/18.jpg" alt="" />

<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>

</div>
<div class="container1 ${selectedEffect}">
<img src="./asset/19.jpg" alt="" />

<div class="overlay">
<div class="text">
<h3 class='text-center'>Silence is golden</h3>
<h5 class='text-center'>Lorem ipsum dolor sit, amet <br /> consectetur adipisicing elit. Sint <br /> inventore debitis sequi.</h5>
<div class="d-flex justify-content-center icons">
<i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
</div>
</div>
</div>

</div>
`

parentElement.appendChild(child)

let theme=false;
let themeParent=document.getElementById('theme');
let themeChild=document.createElement('a');

function toggleTheme(){
   theme=!theme;
   updateThemeIcon();
   
   let elements=document.getElementsByClassName('menu');
   for (let i = 0; i < elements.length; i++) {
     const el = elements[i];
     el.classList.add('dark_menu');
     if (theme) {
       document.body.classList.add('dark-mode');
     
     } else {
       document.body.classList.remove('dark-mode');
       el.classList.remove('dark_menu');
     }
   }

}
function updateThemeIcon(){
    if(theme==false){
        themeChild.innerHTML=`<i class="fa-solid fa-moon "></i>`
        themeParent.appendChild(themeChild)
        themeParent.classList.add("moon")
        themeParent.classList.remove("sun")
    }
    else if(theme==true){
        themeChild.innerHTML=`<i class="fa-solid fa-sun "></i>`
        themeParent.appendChild(themeChild)
        themeParent.classList.remove('moon')
        themeParent.classList.add("sun")
    }
}


updateThemeIcon();