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
document.addEventListener('DOMContentLoaded', function () {
       // Get the "Fade In" button element and set focus on it when the page loads
       const fadeInButton = document.getElementById('fadeInButton');
       fadeInButton.focus();
   
       // Initialize a variable to keep track of the currently focused button
       let focusedButton = fadeInButton;
   
       // Add a click event listener to the document to handle focus behavior
       document.addEventListener('click', (event) => {
           const target = event.target;
   
           // Check if the clicked element is not one of the buttons
           if (!target.classList.contains('menu')) {
               // Prevent buttons from losing focus
               focusedButton.focus();
           } else {
               // Update the focused button
               focusedButton = target;
           }
       });
   });

// Store selected effect

let selectedEffect = null;
const parentElement=document.getElementById('parent');
const child=document.createElement('div');
child.classList.add('grid')
child.classList.add('mb-5')
// Function to handle button click
function selectEffect(effect) {
        

     

       const buttons = document.querySelectorAll('.menu');
       let focusedButton = null;
       
       buttons.forEach(button => {
           button.addEventListener('click', () => {
               if (focusedButton !== button) {
                   // Set focus to the clicked button only if it's not already focused
                   button.focus();
       
                   // Remove focus from the previously focused button (if any)
                   if (focusedButton) {
                       focusedButton.blur();
                   }
       
                   // Update the currently focused button
                   focusedButton = button;
               }
           });
       });
       
       document.addEventListener('click', (event) => {
           const target = event.target;
       
           // Check if the clicked element is not a button
           if (!target.classList.contains('menu')) {
               // Prevent buttons from losing focus
               if (focusedButton) {
                   focusedButton.focus();
               }
           }
       });
       
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
         <h3 class='text-center'>Love conquers all.</h3>
         <h5 class='text-center'>In solitude, I found <br> my purpose and <br>the strength to endure.</h5>
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
         <h3 class='text-center'>Time heals wounds</h3>
         <h5 class='text-center'>The sunset painted <br> the sky with hues of <br> orange and purple.</h5>
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
         <h3 class='text-center'>Actions speak louder.</h3>
         <h5 class='text-center'>Forgiveness liberates <br> the heart, allowing healing <br> to finally take place.</h5>
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
         <h3 class='text-center'>Hope never dies</h3>
         <h5 class='text-center'>Through adversity, we <br> discover our true resilience <br> and inner strength.</h5>
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
         <h3 class='text-center'>Beauty is subjective.</h3>
         <h5 class='text-center'>Kindness is a language <br> understood by all, bridging <br> divides effortlessly.</h5>
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
         <h3 class='text-center'>Life goes on.</h3>
         <h5 class='text-center'>With each challenge, <br> we have the opportunity <br> to learn and grow.</h5>
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
         <h3 class='text-center'>Dreams come true.</h3>
         <h5 class='text-center'>In the silence of nature, <br> I found solace <br> and inner peace.</h5>
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
         <h3 class='text-center'>Truth sets free.</h3>
         <h5 class='text-center'>The journey of a  <br>thousand miles begins <br> with a single step.</h5>
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
         <h3 class='text-center'>Laughter heals pain.</h3>
         <h5 class='text-center'>Memories linger like echoes,<br> reminding us of moments <br> cherished deeply.</h5>
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
         <h3 class='text-center'>Change is constant.</h3>
         <h5 class='text-center'>Love's warmth melts even <br> the coldest of hearts, <br> thawing all resistance.</h5>
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
         <h3 class='text-center'>Forgive and forget.</h3>
         <h5 class='text-center'>The stars above guide <br> us through the darkest <br> of nights, offering hope.</h5>
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
         <h3 class='text-center'>Knowledge is power.</h3>
         <h5 class='text-center'>True friendship is a bond <br> unbreakable, a treasure <br> beyond measure.</h5>
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
         <h3 class='text-center'>Honesty is best.</h3>
         <h5 class='text-center'>Courage is not the absence <br> of fear but the <br> triumph over it.</h5>
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
         <h3 class='text-center'>Patience is virtue.</h3>
         <h5 class='text-center'>The embrace of a loved <br> one is a balm <br> for the soul.</h5>
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
         <h3 class='text-center'>Unity breeds strength.</h3>
         <h5 class='text-center'>Life's twists and turns <br> often lead to unexpected and <br> beautiful destinations.</h5>
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
         <h3 class='text-center'>Courage over fear.</h3>
         <h5 class='text-center'>In the dance of life, <br> we take both graceful <br> and stumbling steps.</h5>
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
         <h3 class='text-center'>Kindness matters most.</h3>
         <h5 class='text-center'>The power of words <br> can wound or heal, <br> so choose wisely.</h5>
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
         <h3 class='text-center'>Family first always.</h3>
         <h5 class='text-center'>In the depth of silence, <br> the mind finds clarity <br> and wisdom.</h5>
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
         <h3 class='text-center'>Tomorrow is another.</h3>
         <h5 class='text-center'>The sunrise heralds <br> a new day, offering a <br> chance for renewal.</h5>
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
         <h3 class='text-center'>Love conquers all.</h3>
         <h5 class='text-center'>In solitude, I found <br> my purpose and <br>the strength to endure.</h5>
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
         <h3 class='text-center'>Time heals wounds</h3>
         <h5 class='text-center'>The sunset painted <br> the sky with hues of <br> orange and purple.</h5>
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
         <h3 class='text-center'>Actions speak louder.</h3>
         <h5 class='text-center'>Forgiveness liberates <br> the heart, allowing healing <br> to finally take place.</h5>
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
         <h3 class='text-center'>Hope never dies</h3>
         <h5 class='text-center'>Through adversity, we <br> discover our true resilience <br> and inner strength.</h5>
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
         <h3 class='text-center'>Beauty is subjective.</h3>
         <h5 class='text-center'>Kindness is a language <br> understood by all, bridging <br> divides effortlessly.</h5>
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
         <h3 class='text-center'>Life goes on.</h3>
         <h5 class='text-center'>With each challenge, <br> we have the opportunity <br> to learn and grow.</h5>
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
         <h3 class='text-center'>Dreams come true.</h3>
         <h5 class='text-center'>In the silence of nature, <br> I found solace <br> and inner peace.</h5>
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
         <h3 class='text-center'>Truth sets free.</h3>
         <h5 class='text-center'>The journey of a  <br>thousand miles begins <br> with a single step.</h5>
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
         <h3 class='text-center'>Laughter heals pain.</h3>
         <h5 class='text-center'>Memories linger like echoes,<br> reminding us of moments <br> cherished deeply.</h5>
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
         <h3 class='text-center'>Change is constant.</h3>
         <h5 class='text-center'>Love's warmth melts even <br> the coldest of hearts, <br> thawing all resistance.</h5>
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
         <h3 class='text-center'>Forgive and forget.</h3>
         <h5 class='text-center'>The stars above guide <br> us through the darkest <br> of nights, offering hope.</h5>
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
         <h3 class='text-center'>Knowledge is power.</h3>
         <h5 class='text-center'>True friendship is a bond <br> unbreakable, a treasure <br> beyond measure.</h5>
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
         <h3 class='text-center'>Honesty is best.</h3>
         <h5 class='text-center'>Courage is not the absence <br> of fear but the <br> triumph over it.</h5>
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
         <h3 class='text-center'>Patience is virtue.</h3>
         <h5 class='text-center'>The embrace of a loved <br> one is a balm <br> for the soul.</h5>
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
         <h3 class='text-center'>Unity breeds strength.</h3>
         <h5 class='text-center'>Life's twists and turns <br> often lead to unexpected and <br> beautiful destinations.</h5>
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
         <h3 class='text-center'>Courage over fear.</h3>
         <h5 class='text-center'>In the dance of life, <br> we take both graceful <br> and stumbling steps.</h5>
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
         <h3 class='text-center'>Kindness matters most.</h3>
         <h5 class='text-center'>The power of words <br> can wound or heal, <br> so choose wisely.</h5>
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
         <h3 class='text-center'>Family first always.</h3>
         <h5 class='text-center'>In the depth of silence, <br> the mind finds clarity <br> and wisdom.</h5>
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
         <h3 class='text-center'>Tomorrow is another.</h3>
         <h5 class='text-center'>The sunrise heralds <br> a new day, offering a <br> chance for renewal.</h5>
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
    <h3 class='text-center'>Love conquers all.</h3>
    <h5 class='text-center'>In solitude, I found <br> my purpose and <br>the strength to endure.</h5>
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
    <h3 class='text-center'>Time heals wounds</h3>
    <h5 class='text-center'>The sunset painted <br> the sky with hues of <br> orange and purple.</h5>
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
    <h3 class='text-center'>Actions speak louder.</h3>
    <h5 class='text-center'>Forgiveness liberates <br> the heart, allowing healing <br> to finally take place.</h5>
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
    <h3 class='text-center'>Hope never dies</h3>
    <h5 class='text-center'>Through adversity, we <br> discover our true resilience <br> and inner strength.</h5>
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
    <h3 class='text-center'>Beauty is subjective.</h3>
    <h5 class='text-center'>Kindness is a language <br> understood by all, bridging <br> divides effortlessly.</h5>
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
    <h3 class='text-center'>Life goes on.</h3>
    <h5 class='text-center'>With each challenge, <br> we have the opportunity <br> to learn and grow.</h5>
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
    <h3 class='text-center'>Dreams come true.</h3>
    <h5 class='text-center'>In the silence of nature, <br> I found solace <br> and inner peace.</h5>
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
    <h3 class='text-center'>Truth sets free.</h3>
    <h5 class='text-center'>The journey of a  <br>thousand miles begins <br> with a single step.</h5>
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
    <h3 class='text-center'>Laughter heals pain.</h3>
    <h5 class='text-center'>Memories linger like echoes,<br> reminding us of moments <br> cherished deeply.</h5>
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
    <h3 class='text-center'>Change is constant.</h3>
    <h5 class='text-center'>Love's warmth melts even <br> the coldest of hearts, <br> thawing all resistance.</h5>
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
    <h3 class='text-center'>Forgive and forget.</h3>
    <h5 class='text-center'>The stars above guide <br> us through the darkest <br> of nights, offering hope.</h5>
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
    <h3 class='text-center'>Knowledge is power.</h3>
    <h5 class='text-center'>True friendship is a bond <br> unbreakable, a treasure <br> beyond measure.</h5>
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
    <h3 class='text-center'>Honesty is best.</h3>
    <h5 class='text-center'>Courage is not the absence <br> of fear but the <br> triumph over it.</h5>
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
    <h5 class='text-center'>The embrace of a loved <br> one is a balm <br> for the soul.</h5>
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
    <h3 class='text-center'>Unity breeds strength.</h3>
    <h5 class='text-center'>Life's twists and turns <br> often lead to unexpected and <br> beautiful destinations.</h5>
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
    <h3 class='text-center'>Courage over fear.</h3>
    <h5 class='text-center'>In the dance of life, <br> we take both graceful <br> and stumbling steps.</h5>
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
    <h3 class='text-center'>Kindness matters most.</h3>
    <h5 class='text-center'>The power of words <br> can wound or heal, <br> so choose wisely.</h5>
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
    <h3 class='text-center'>Family first always.</h3>
    <h5 class='text-center'>In the depth of silence, <br> the mind finds clarity <br> and wisdom.</h5>
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
    <h3 class='text-center'>Tomorrow is another.</h3>
    <h5 class='text-center'>The sunrise heralds <br> a new day, offering a <br> chance for renewal.</h5>
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
         <h3 class='text-center'>Love conquers all.</h3>
         <h5 class='text-center'>In solitude, I found <br> my purpose and <br>the strength to endure.</h5>
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
         <h3 class='text-center'>Time heals wounds</h3>
         <h5 class='text-center'>The sunset painted <br> the sky with hues of <br> orange and purple.</h5>
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
         <h3 class='text-center'>Actions speak louder.</h3>
         <h5 class='text-center'>Forgiveness liberates <br> the heart, allowing healing <br> to finally take place.</h5>
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
         <h3 class='text-center'>Hope never dies</h3>
         <h5 class='text-center'>Through adversity, we <br> discover our true resilience <br> and inner strength.</h5>
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
         <h3 class='text-center'>Beauty is subjective.</h3>
         <h5 class='text-center'>Kindness is a language <br> understood by all, bridging <br> divides effortlessly.</h5>
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
         <h3 class='text-center'>Life goes on.</h3>
         <h5 class='text-center'>With each challenge, <br> we have the opportunity <br> to learn and grow.</h5>
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
         <h3 class='text-center'>Dreams come true.</h3>
         <h5 class='text-center'>In the silence of nature, <br> I found solace <br> and inner peace.</h5>
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
         <h3 class='text-center'>Truth sets free.</h3>
         <h5 class='text-center'>The journey of a  <br>thousand miles begins <br> with a single step.</h5>
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
         <h3 class='text-center'>Laughter heals pain.</h3>
         <h5 class='text-center'>Memories linger like echoes,<br> reminding us of moments <br> cherished deeply.</h5>
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
         <h3 class='text-center'>Change is constant.</h3>
         <h5 class='text-center'>Love's warmth melts even <br> the coldest of hearts, <br> thawing all resistance.</h5>
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
         <h3 class='text-center'>Forgive and forget.</h3>
         <h5 class='text-center'>The stars above guide <br> us through the darkest <br> of nights, offering hope.</h5>
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
         <h3 class='text-center'>Knowledge is power.</h3>
         <h5 class='text-center'>True friendship is a bond <br> unbreakable, a treasure <br> beyond measure.</h5>
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
         <h3 class='text-center'>Honesty is best.</h3>
         <h5 class='text-center'>Courage is not the absence <br> of fear but the <br> triumph over it.</h5>
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
         <h3 class='text-center'>Patience is virtue.</h3>
         <h5 class='text-center'>The embrace of a loved <br> one is a balm <br> for the soul.</h5>
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
         <h3 class='text-center'>Unity breeds strength.</h3>
         <h5 class='text-center'>Life's twists and turns <br> often lead to unexpected and <br> beautiful destinations.</h5>
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
         <h3 class='text-center'>Courage over fear.</h3>
         <h5 class='text-center'>In the dance of life, <br> we take both graceful <br> and stumbling steps.</h5>
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
         <h3 class='text-center'>Kindness matters most.</h3>
         <h5 class='text-center'>The power of words <br> can wound or heal, <br> so choose wisely.</h5>
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
         <h3 class='text-center'>Family first always.</h3>
         <h5 class='text-center'>In the depth of silence, <br> the mind finds clarity <br> and wisdom.</h5>
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
         <h3 class='text-center'>Tomorrow is another.</h3>
         <h5 class='text-center'>The sunrise heralds <br> a new day, offering a <br> chance for renewal.</h5>
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
         <h3 class='text-center'>Love conquers all.</h3>
         <h5 class='text-center'>In solitude, I found <br> my purpose and <br>the strength to endure.</h5>
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
         <h3 class='text-center'>Time heals wounds</h3>
         <h5 class='text-center'>The sunset painted <br> the sky with hues of <br> orange and purple.</h5>
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
         <h3 class='text-center'>Actions speak louder.</h3>
         <h5 class='text-center'>Forgiveness liberates <br> the heart, allowing healing <br> to finally take place.</h5>
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
         <h3 class='text-center'>Hope never dies</h3>
         <h5 class='text-center'>Through adversity, we <br> discover our true resilience <br> and inner strength.</h5>
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
         <h3 class='text-center'>Beauty is subjective.</h3>
         <h5 class='text-center'>Kindness is a language <br> understood by all, bridging <br> divides effortlessly.</h5>
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
         <h3 class='text-center'>Life goes on.</h3>
         <h5 class='text-center'>With each challenge, <br> we have the opportunity <br> to learn and grow.</h5>
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
         <h3 class='text-center'>Dreams come true.</h3>
         <h5 class='text-center'>In the silence of nature, <br> I found solace <br> and inner peace.</h5>
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
         <h3 class='text-center'>Truth sets free.</h3>
         <h5 class='text-center'>The journey of a  <br>thousand miles begins <br> with a single step.</h5>
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
         <h3 class='text-center'>Laughter heals pain.</h3>
         <h5 class='text-center'>Memories linger like echoes,<br> reminding us of moments <br> cherished deeply.</h5>
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
         <h3 class='text-center'>Change is constant.</h3>
         <h5 class='text-center'>Love's warmth melts even <br> the coldest of hearts, <br> thawing all resistance.</h5>
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
         <h3 class='text-center'>Forgive and forget.</h3>
         <h5 class='text-center'>The stars above guide <br> us through the darkest <br> of nights, offering hope.</h5>
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
         <h3 class='text-center'>Knowledge is power.</h3>
         <h5 class='text-center'>True friendship is a bond <br> unbreakable, a treasure <br> beyond measure.</h5>
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
         <h3 class='text-center'>Honesty is best.</h3>
         <h5 class='text-center'>Courage is not the absence <br> of fear but the <br> triumph over it.</h5>
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
         <h3 class='text-center'>Patience is virtue.</h3>
         <h5 class='text-center'>The embrace of a loved <br> one is a balm <br> for the soul.</h5>
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
         <h3 class='text-center'>Unity breeds strength.</h3>
         <h5 class='text-center'>Life's twists and turns <br> often lead to unexpected and <br> beautiful destinations.</h5>
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
         <h3 class='text-center'>Courage over fear.</h3>
         <h5 class='text-center'>In the dance of life, <br> we take both graceful <br> and stumbling steps.</h5>
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
         <h3 class='text-center'>Kindness matters most.</h3>
         <h5 class='text-center'>The power of words <br> can wound or heal, <br> so choose wisely.</h5>
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
         <h3 class='text-center'>Family first always.</h3>
         <h5 class='text-center'>In the depth of silence, <br> the mind finds clarity <br> and wisdom.</h5>
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
         <h3 class='text-center'>Tomorrow is another.</h3>
         <h5 class='text-center'>The sunrise heralds <br> a new day, offering a <br> chance for renewal.</h5>
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
    <h3 class='text-center'>Love conquers all.</h3>
    <h5 class='text-center'>In solitude, I found <br> my purpose and <br>the strength to endure.</h5>
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
    <h3 class='text-center'>Time heals wounds</h3>
    <h5 class='text-center'>The sunset painted <br> the sky with hues of <br> orange and purple.</h5>
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
    <h3 class='text-center'>Actions speak louder.</h3>
    <h5 class='text-center'>Forgiveness liberates <br> the heart, allowing healing <br> to finally take place.</h5>
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
    <h3 class='text-center'>Hope never dies</h3>
    <h5 class='text-center'>Through adversity, we <br> discover our true resilience <br> and inner strength.</h5>
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
    <h3 class='text-center'>Beauty is subjective.</h3>
    <h5 class='text-center'>Kindness is a language <br> understood by all, bridging <br> divides effortlessly.</h5>
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
    <h3 class='text-center'>Life goes on.</h3>
    <h5 class='text-center'>With each challenge, <br> we have the opportunity <br> to learn and grow.</h5>
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
    <h3 class='text-center'>Dreams come true.</h3>
    <h5 class='text-center'>In the silence of nature, <br> I found solace <br> and inner peace.</h5>
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
    <h3 class='text-center'>Truth sets free.</h3>
    <h5 class='text-center'>The journey of a  <br>thousand miles begins <br> with a single step.</h5>
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
    <h3 class='text-center'>Laughter heals pain.</h3>
    <h5 class='text-center'>Memories linger like echoes,<br> reminding us of moments <br> cherished deeply.</h5>
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
    <h3 class='text-center'>Change is constant.</h3>
    <h5 class='text-center'>Love's warmth melts even <br> the coldest of hearts, <br> thawing all resistance.</h5>
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
    <h3 class='text-center'>Forgive and forget.</h3>
    <h5 class='text-center'>The stars above guide <br> us through the darkest <br> of nights, offering hope.</h5>
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
    <h3 class='text-center'>Knowledge is power.</h3>
    <h5 class='text-center'>True friendship is a bond <br> unbreakable, a treasure <br> beyond measure.</h5>
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
    <h3 class='text-center'>Honesty is best.</h3>
    <h5 class='text-center'>Courage is not the absence <br> of fear but the <br> triumph over it.</h5>
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
    <h5 class='text-center'>The embrace of a loved <br> one is a balm <br> for the soul.</h5>
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
    <h3 class='text-center'>Unity breeds strength.</h3>
    <h5 class='text-center'>Life's twists and turns <br> often lead to unexpected and <br> beautiful destinations.</h5>
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
    <h3 class='text-center'>Courage over fear.</h3>
    <h5 class='text-center'>In the dance of life, <br> we take both graceful <br> and stumbling steps.</h5>
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
    <h3 class='text-center'>Kindness matters most.</h3>
    <h5 class='text-center'>The power of words <br> can wound or heal, <br> so choose wisely.</h5>
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
    <h3 class='text-center'>Family first always.</h3>
    <h5 class='text-center'>In the depth of silence, <br> the mind finds clarity <br> and wisdom.</h5>
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
    <h3 class='text-center'>Tomorrow is another.</h3>
    <h5 class='text-center'>The sunrise heralds <br> a new day, offering a <br> chance for renewal.</h5>
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
   <h3 class='text-center'>Love conquers all.</h3>
   <h5 class='text-center'>In solitude, I found <br> my purpose and <br>the strength to endure.</h5>
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
   <h3 class='text-center'>Time heals wounds</h3>
   <h5 class='text-center'>The sunset painted <br> the sky with hues of <br> orange and purple.</h5>
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
   <h3 class='text-center'>Actions speak louder.</h3>
   <h5 class='text-center'>Forgiveness liberates <br> the heart, allowing healing <br> to finally take place.</h5>
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
   <h3 class='text-center'>Hope never dies</h3>
   <h5 class='text-center'>Through adversity, we <br> discover our true resilience <br> and inner strength.</h5>
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
   <h3 class='text-center'>Beauty is subjective.</h3>
   <h5 class='text-center'>Kindness is a language <br> understood by all, bridging <br> divides effortlessly.</h5>
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
   <h3 class='text-center'>Life goes on.</h3>
   <h5 class='text-center'>With each challenge, <br> we have the opportunity <br> to learn and grow.</h5>
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
   <h3 class='text-center'>Dreams come true.</h3>
   <h5 class='text-center'>In the silence of nature, <br> I found solace <br> and inner peace.</h5>
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
   <h3 class='text-center'>Truth sets free.</h3>
   <h5 class='text-center'>The journey of a  <br>thousand miles begins <br> with a single step.</h5>
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
   <h3 class='text-center'>Laughter heals pain.</h3>
   <h5 class='text-center'>Memories linger like echoes,<br> reminding us of moments <br> cherished deeply.</h5>
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
   <h3 class='text-center'>Change is constant.</h3>
   <h5 class='text-center'>Love's warmth melts even <br> the coldest of hearts, <br> thawing all resistance.</h5>
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
   <h3 class='text-center'>Forgive and forget.</h3>
   <h5 class='text-center'>The stars above guide <br> us through the darkest <br> of nights, offering hope.</h5>
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
   <h3 class='text-center'>Knowledge is power.</h3>
   <h5 class='text-center'>True friendship is a bond <br> unbreakable, a treasure <br> beyond measure.</h5>
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
   <h3 class='text-center'>Honesty is best.</h3>
   <h5 class='text-center'>Courage is not the absence <br> of fear but the <br> triumph over it.</h5>
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
   <h5 class='text-center'>The embrace of a loved <br> one is a balm <br> for the soul.</h5>
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
   <h3 class='text-center'>Unity breeds strength.</h3>
   <h5 class='text-center'>Life's twists and turns <br> often lead to unexpected and <br> beautiful destinations.</h5>
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
   <h3 class='text-center'>Courage over fear.</h3>
   <h5 class='text-center'>In the dance of life, <br> we take both graceful <br> and stumbling steps.</h5>
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
   <h3 class='text-center'>Kindness matters most.</h3>
   <h5 class='text-center'>The power of words <br> can wound or heal, <br> so choose wisely.</h5>
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
   <h3 class='text-center'>Family first always.</h3>
   <h5 class='text-center'>In the depth of silence, <br> the mind finds clarity <br> and wisdom.</h5>
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
   <h3 class='text-center'>Tomorrow is another.</h3>
   <h5 class='text-center'>The sunrise heralds <br> a new day, offering a <br> chance for renewal.</h5>
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
         <h3 class='text-center'>Love conquers all.</h3>
         <h5 class='text-center'>In solitude, I found <br> my purpose and <br>the strength to endure.</h5>
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
         <h3 class='text-center'>Time heals wounds</h3>
         <h5 class='text-center'>The sunset painted <br> the sky with hues of <br> orange and purple.</h5>
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
         <h3 class='text-center'>Actions speak louder.</h3>
         <h5 class='text-center'>Forgiveness liberates <br> the heart, allowing healing <br> to finally take place.</h5>
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
         <h3 class='text-center'>Hope never dies</h3>
         <h5 class='text-center'>Through adversity, we <br> discover our true resilience <br> and inner strength.</h5>
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
         <h3 class='text-center'>Beauty is subjective.</h3>
         <h5 class='text-center'>Kindness is a language <br> understood by all, bridging <br> divides effortlessly.</h5>
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
         <h3 class='text-center'>Life goes on.</h3>
         <h5 class='text-center'>With each challenge, <br> we have the opportunity <br> to learn and grow.</h5>
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
         <h3 class='text-center'>Dreams come true.</h3>
         <h5 class='text-center'>In the silence of nature, <br> I found solace <br> and inner peace.</h5>
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
         <h3 class='text-center'>Truth sets free.</h3>
         <h5 class='text-center'>The journey of a  <br>thousand miles begins <br> with a single step.</h5>
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
         <h3 class='text-center'>Laughter heals pain.</h3>
         <h5 class='text-center'>Memories linger like echoes,<br> reminding us of moments <br> cherished deeply.</h5>
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
         <h3 class='text-center'>Change is constant.</h3>
         <h5 class='text-center'>Love's warmth melts even <br> the coldest of hearts, <br> thawing all resistance.</h5>
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
         <h3 class='text-center'>Forgive and forget.</h3>
         <h5 class='text-center'>The stars above guide <br> us through the darkest <br> of nights, offering hope.</h5>
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
         <h3 class='text-center'>Knowledge is power.</h3>
         <h5 class='text-center'>True friendship is a bond <br> unbreakable, a treasure <br> beyond measure.</h5>
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
         <h3 class='text-center'>Honesty is best.</h3>
         <h5 class='text-center'>Courage is not the absence <br> of fear but the <br> triumph over it.</h5>
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
         <h3 class='text-center'>Patience is virtue.</h3>
         <h5 class='text-center'>The embrace of a loved <br> one is a balm <br> for the soul.</h5>
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
         <h3 class='text-center'>Unity breeds strength.</h3>
         <h5 class='text-center'>Life's twists and turns <br> often lead to unexpected and <br> beautiful destinations.</h5>
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
         <h3 class='text-center'>Courage over fear.</h3>
         <h5 class='text-center'>In the dance of life, <br> we take both graceful <br> and stumbling steps.</h5>
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
         <h3 class='text-center'>Kindness matters most.</h3>
         <h5 class='text-center'>The power of words <br> can wound or heal, <br> so choose wisely.</h5>
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
         <h3 class='text-center'>Family first always.</h3>
         <h5 class='text-center'>In the depth of silence, <br> the mind finds clarity <br> and wisdom.</h5>
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
         <h3 class='text-center'>Tomorrow is another.</h3>
         <h5 class='text-center'>The sunrise heralds <br> a new day, offering a <br> chance for renewal.</h5>
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
         <h3 class='text-center'>Love conquers all.</h3>
         <h5 class='text-center'>In solitude, I found <br> my purpose and <br>the strength to endure.</h5>
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
         <h3 class='text-center'>Time heals wounds</h3>
         <h5 class='text-center'>The sunset painted <br> the sky with hues of <br> orange and purple.</h5>
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
         <h3 class='text-center'>Actions speak louder.</h3>
         <h5 class='text-center'>Forgiveness liberates <br> the heart, allowing healing <br> to finally take place.</h5>
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
         <h3 class='text-center'>Hope never dies</h3>
         <h5 class='text-center'>Through adversity, we <br> discover our true resilience <br> and inner strength.</h5>
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
         <h3 class='text-center'>Beauty is subjective.</h3>
         <h5 class='text-center'>Kindness is a language <br> understood by all, bridging <br> divides effortlessly.</h5>
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
         <h3 class='text-center'>Life goes on.</h3>
         <h5 class='text-center'>With each challenge, <br> we have the opportunity <br> to learn and grow.</h5>
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
         <h3 class='text-center'>Dreams come true.</h3>
         <h5 class='text-center'>In the silence of nature, <br> I found solace <br> and inner peace.</h5>
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
         <h3 class='text-center'>Truth sets free.</h3>
         <h5 class='text-center'>The journey of a  <br>thousand miles begins <br> with a single step.</h5>
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
         <h3 class='text-center'>Laughter heals pain.</h3>
         <h5 class='text-center'>Memories linger like echoes,<br> reminding us of moments <br> cherished deeply.</h5>
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
         <h3 class='text-center'>Change is constant.</h3>
         <h5 class='text-center'>Love's warmth melts even <br> the coldest of hearts, <br> thawing all resistance.</h5>
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
         <h3 class='text-center'>Forgive and forget.</h3>
         <h5 class='text-center'>The stars above guide <br> us through the darkest <br> of nights, offering hope.</h5>
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
         <h3 class='text-center'>Knowledge is power.</h3>
         <h5 class='text-center'>True friendship is a bond <br> unbreakable, a treasure <br> beyond measure.</h5>
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
         <h3 class='text-center'>Honesty is best.</h3>
         <h5 class='text-center'>Courage is not the absence <br> of fear but the <br> triumph over it.</h5>
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
         <h3 class='text-center'>Patience is virtue.</h3>
         <h5 class='text-center'>The embrace of a loved <br> one is a balm <br> for the soul.</h5>
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
         <h3 class='text-center'>Unity breeds strength.</h3>
         <h5 class='text-center'>Life's twists and turns <br> often lead to unexpected and <br> beautiful destinations.</h5>
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
         <h3 class='text-center'>Courage over fear.</h3>
         <h5 class='text-center'>In the dance of life, <br> we take both graceful <br> and stumbling steps.</h5>
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
         <h3 class='text-center'>Kindness matters most.</h3>
         <h5 class='text-center'>The power of words <br> can wound or heal, <br> so choose wisely.</h5>
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
         <h3 class='text-center'>Family first always.</h3>
         <h5 class='text-center'>In the depth of silence, <br> the mind finds clarity <br> and wisdom.</h5>
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
         <h3 class='text-center'>Tomorrow is another.</h3>
         <h5 class='text-center'>The sunrise heralds <br> a new day, offering a <br> chance for renewal.</h5>
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
         <h3 class='text-center'>Love conquers all.</h3>
         <h5 class='text-center'>In solitude, I found <br> my purpose and <br>the strength to endure.</h5>
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
         <h3 class='text-center'>Time heals wounds</h3>
         <h5 class='text-center'>The sunset painted <br> the sky with hues of <br> orange and purple.</h5>
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
         <h3 class='text-center'>Actions speak louder.</h3>
         <h5 class='text-center'>Forgiveness liberates <br> the heart, allowing healing <br> to finally take place.</h5>
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
         <h3 class='text-center'>Hope never dies</h3>
         <h5 class='text-center'>Through adversity, we <br> discover our true resilience <br> and inner strength.</h5>
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
         <h3 class='text-center'>Beauty is subjective.</h3>
         <h5 class='text-center'>Kindness is a language <br> understood by all, bridging <br> divides effortlessly.</h5>
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
         <h3 class='text-center'>Life goes on.</h3>
         <h5 class='text-center'>With each challenge, <br> we have the opportunity <br> to learn and grow.</h5>
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
         <h3 class='text-center'>Dreams come true.</h3>
         <h5 class='text-center'>In the silence of nature, <br> I found solace <br> and inner peace.</h5>
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
         <h3 class='text-center'>Truth sets free.</h3>
         <h5 class='text-center'>The journey of a  <br>thousand miles begins <br> with a single step.</h5>
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
         <h3 class='text-center'>Laughter heals pain.</h3>
         <h5 class='text-center'>Memories linger like echoes,<br> reminding us of moments <br> cherished deeply.</h5>
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
         <h3 class='text-center'>Change is constant.</h3>
         <h5 class='text-center'>Love's warmth melts even <br> the coldest of hearts, <br> thawing all resistance.</h5>
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
         <h3 class='text-center'>Forgive and forget.</h3>
         <h5 class='text-center'>The stars above guide <br> us through the darkest <br> of nights, offering hope.</h5>
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
         <h3 class='text-center'>Knowledge is power.</h3>
         <h5 class='text-center'>True friendship is a bond <br> unbreakable, a treasure <br> beyond measure.</h5>
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
         <h3 class='text-center'>Honesty is best.</h3>
         <h5 class='text-center'>Courage is not the absence <br> of fear but the <br> triumph over it.</h5>
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
         <h3 class='text-center'>Patience is virtue.</h3>
         <h5 class='text-center'>The embrace of a loved <br> one is a balm <br> for the soul.</h5>
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
         <h3 class='text-center'>Unity breeds strength.</h3>
         <h5 class='text-center'>Life's twists and turns <br> often lead to unexpected and <br> beautiful destinations.</h5>
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
         <h3 class='text-center'>Courage over fear.</h3>
         <h5 class='text-center'>In the dance of life, <br> we take both graceful <br> and stumbling steps.</h5>
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
         <h3 class='text-center'>Kindness matters most.</h3>
         <h5 class='text-center'>The power of words <br> can wound or heal, <br> so choose wisely.</h5>
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
         <h3 class='text-center'>Family first always.</h3>
         <h5 class='text-center'>In the depth of silence, <br> the mind finds clarity <br> and wisdom.</h5>
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
         <h3 class='text-center'>Tomorrow is another.</h3>
         <h5 class='text-center'>The sunrise heralds <br> a new day, offering a <br> chance for renewal.</h5>
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
        <h3 class='text-center'>Love conquers all.</h3>
        <h5 class='text-center'>In solitude, I found <br> my purpose and <br>the strength to endure.</h5>
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
        <h3 class='text-center'>Time heals wounds</h3>
        <h5 class='text-center'>The sunset painted <br> the sky with hues of <br> orange and purple.</h5>
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
        <h3 class='text-center'>Actions speak louder.</h3>
        <h5 class='text-center'>Forgiveness liberates <br> the heart, allowing healing <br> to finally take place.</h5>
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
        <h3 class='text-center'>Hope never dies</h3>
        <h5 class='text-center'>Through adversity, we <br> discover our true resilience <br> and inner strength.</h5>
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
        <h3 class='text-center'>Beauty is subjective.</h3>
        <h5 class='text-center'>Kindness is a language <br> understood by all, bridging <br> divides effortlessly.</h5>
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
        <h3 class='text-center'>Life goes on.</h3>
        <h5 class='text-center'>With each challenge, <br> we have the opportunity <br> to learn and grow.</h5>
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
        <h3 class='text-center'>Dreams come true.</h3>
        <h5 class='text-center'>In the silence of nature, <br> I found solace <br> and inner peace.</h5>
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
        <h3 class='text-center'>Truth sets free.</h3>
        <h5 class='text-center'>The journey of a  <br>thousand miles begins <br> with a single step.</h5>
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
        <h3 class='text-center'>Laughter heals pain.</h3>
        <h5 class='text-center'>Memories linger like echoes,<br> reminding us of moments <br> cherished deeply.</h5>
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
        <h3 class='text-center'>Change is constant.</h3>
        <h5 class='text-center'>Love's warmth melts even <br> the coldest of hearts, <br> thawing all resistance.</h5>
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
        <h3 class='text-center'>Forgive and forget.</h3>
        <h5 class='text-center'>The stars above guide <br> us through the darkest <br> of nights, offering hope.</h5>
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
        <h3 class='text-center'>Knowledge is power.</h3>
        <h5 class='text-center'>True friendship is a bond <br> unbreakable, a treasure <br> beyond measure.</h5>
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
        <h3 class='text-center'>Honesty is best.</h3>
        <h5 class='text-center'>Courage is not the absence <br> of fear but the <br> triumph over it.</h5>
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
        <h3 class='text-center'>Patience is virtue.</h3>
        <h5 class='text-center'>The embrace of a loved <br> one is a balm <br> for the soul.</h5>
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
        <h3 class='text-center'>Unity breeds strength.</h3>
        <h5 class='text-center'>Life's twists and turns <br> often lead to unexpected and <br> beautiful destinations.</h5>
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
        <h3 class='text-center'>Courage over fear.</h3>
        <h5 class='text-center'>In the dance of life, <br> we take both graceful <br> and stumbling steps.</h5>
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
        <h3 class='text-center'>Kindness matters most.</h3>
        <h5 class='text-center'>The power of words <br> can wound or heal, <br> so choose wisely.</h5>
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
        <h3 class='text-center'>Family first always.</h3>
        <h5 class='text-center'>In the depth of silence, <br> the mind finds clarity <br> and wisdom.</h5>
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
        <h3 class='text-center'>Tomorrow is another.</h3>
        <h5 class='text-center'>The sunrise heralds <br> a new day, offering a <br> chance for renewal.</h5>
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
         <h3 class='text-center'>Love conquers all.</h3>
         <h5 class='text-center'>In solitude, I found <br> my purpose and <br>the strength to endure.</h5>
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
         <h3 class='text-center'>Time heals wounds</h3>
         <h5 class='text-center'>The sunset painted <br> the sky with hues of <br> orange and purple.</h5>
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
         <h3 class='text-center'>Actions speak louder.</h3>
         <h5 class='text-center'>Forgiveness liberates <br> the heart, allowing healing <br> to finally take place.</h5>
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
         <h3 class='text-center'>Hope never dies</h3>
         <h5 class='text-center'>Through adversity, we <br> discover our true resilience <br> and inner strength.</h5>
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
         <h3 class='text-center'>Beauty is subjective.</h3>
         <h5 class='text-center'>Kindness is a language <br> understood by all, bridging <br> divides effortlessly.</h5>
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
         <h3 class='text-center'>Life goes on.</h3>
         <h5 class='text-center'>With each challenge, <br> we have the opportunity <br> to learn and grow.</h5>
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
         <h3 class='text-center'>Dreams come true.</h3>
         <h5 class='text-center'>In the silence of nature, <br> I found solace <br> and inner peace.</h5>
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
         <h3 class='text-center'>Truth sets free.</h3>
         <h5 class='text-center'>The journey of a  <br>thousand miles begins <br> with a single step.</h5>
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
         <h3 class='text-center'>Laughter heals pain.</h3>
         <h5 class='text-center'>Memories linger like echoes,<br> reminding us of moments <br> cherished deeply.</h5>
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
         <h3 class='text-center'>Change is constant.</h3>
         <h5 class='text-center'>Love's warmth melts even <br> the coldest of hearts, <br> thawing all resistance.</h5>
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
         <h3 class='text-center'>Forgive and forget.</h3>
         <h5 class='text-center'>The stars above guide <br> us through the darkest <br> of nights, offering hope.</h5>
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
         <h3 class='text-center'>Knowledge is power.</h3>
         <h5 class='text-center'>True friendship is a bond <br> unbreakable, a treasure <br> beyond measure.</h5>
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
         <h3 class='text-center'>Honesty is best.</h3>
         <h5 class='text-center'>Courage is not the absence <br> of fear but the <br> triumph over it.</h5>
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
         <h3 class='text-center'>Patience is virtue.</h3>
         <h5 class='text-center'>The embrace of a loved <br> one is a balm <br> for the soul.</h5>
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
         <h3 class='text-center'>Unity breeds strength.</h3>
         <h5 class='text-center'>Life's twists and turns <br> often lead to unexpected and <br> beautiful destinations.</h5>
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
         <h3 class='text-center'>Courage over fear.</h3>
         <h5 class='text-center'>In the dance of life, <br> we take both graceful <br> and stumbling steps.</h5>
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
         <h3 class='text-center'>Kindness matters most.</h3>
         <h5 class='text-center'>The power of words <br> can wound or heal, <br> so choose wisely.</h5>
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
         <h3 class='text-center'>Family first always.</h3>
         <h5 class='text-center'>In the depth of silence, <br> the mind finds clarity <br> and wisdom.</h5>
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
         <h3 class='text-center'>Tomorrow is another.</h3>
         <h5 class='text-center'>The sunrise heralds <br> a new day, offering a <br> chance for renewal.</h5>
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
    <h3 class='text-center'>Love conquers all.</h3>
    <h5 class='text-center'>In solitude, I found <br> my purpose and <br>the strength to endure.</h5>
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
    <h3 class='text-center'>Time heals wounds</h3>
    <h5 class='text-center'>The sunset painted <br> the sky with hues of <br> orange and purple.</h5>
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
    <h3 class='text-center'>Actions speak louder.</h3>
    <h5 class='text-center'>Forgiveness liberates <br> the heart, allowing healing <br> to finally take place.</h5>
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
    <h3 class='text-center'>Hope never dies</h3>
    <h5 class='text-center'>Through adversity, we <br> discover our true resilience <br> and inner strength.</h5>
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
    <h3 class='text-center'>Beauty is subjective.</h3>
    <h5 class='text-center'>Kindness is a language <br> understood by all, bridging <br> divides effortlessly.</h5>
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
    <h3 class='text-center'>Life goes on.</h3>
    <h5 class='text-center'>With each challenge, <br> we have the opportunity <br> to learn and grow.</h5>
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
    <h3 class='text-center'>Dreams come true.</h3>
    <h5 class='text-center'>In the silence of nature, <br> I found solace <br> and inner peace.</h5>
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
    <h3 class='text-center'>Truth sets free.</h3>
    <h5 class='text-center'>The journey of a  <br>thousand miles begins <br> with a single step.</h5>
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
    <h3 class='text-center'>Laughter heals pain.</h3>
    <h5 class='text-center'>Memories linger like echoes,<br> reminding us of moments <br> cherished deeply.</h5>
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
    <h3 class='text-center'>Change is constant.</h3>
    <h5 class='text-center'>Love's warmth melts even <br> the coldest of hearts, <br> thawing all resistance.</h5>
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
    <h3 class='text-center'>Forgive and forget.</h3>
    <h5 class='text-center'>The stars above guide <br> us through the darkest <br> of nights, offering hope.</h5>
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
    <h3 class='text-center'>Knowledge is power.</h3>
    <h5 class='text-center'>True friendship is a bond <br> unbreakable, a treasure <br> beyond measure.</h5>
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
    <h3 class='text-center'>Honesty is best.</h3>
    <h5 class='text-center'>Courage is not the absence <br> of fear but the <br> triumph over it.</h5>
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
    <h3 class='text-center'>Patience is virtue.</h3>
    <h5 class='text-center'>The embrace of a loved <br> one is a balm <br> for the soul.</h5>
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
    <h3 class='text-center'>Unity breeds strength.</h3>
    <h5 class='text-center'>Life's twists and turns <br> often lead to unexpected and <br> beautiful destinations.</h5>
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
    <h3 class='text-center'>Courage over fear.</h3>
    <h5 class='text-center'>In the dance of life, <br> we take both graceful <br> and stumbling steps.</h5>
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
    <h3 class='text-center'>Kindness matters most.</h3>
    <h5 class='text-center'>The power of words <br> can wound or heal, <br> so choose wisely.</h5>
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
    <h3 class='text-center'>Family first always.</h3>
    <h5 class='text-center'>In the depth of silence, <br> the mind finds clarity <br> and wisdom.</h5>
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
    <h3 class='text-center'>Tomorrow is another.</h3>
    <h5 class='text-center'>The sunrise heralds <br> a new day, offering a <br> chance for renewal.</h5>
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
         <h3 class='text-center'>Love conquers all.</h3>
         <h5 class='text-center'>In solitude, I found <br> my purpose and <br>the strength to endure.</h5>
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
         <h3 class='text-center'>Time heals wounds</h3>
         <h5 class='text-center'>The sunset painted <br> the sky with hues of <br> orange and purple.</h5>
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
         <h3 class='text-center'>Actions speak louder.</h3>
         <h5 class='text-center'>Forgiveness liberates <br> the heart, allowing healing <br> to finally take place.</h5>
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
         <h3 class='text-center'>Hope never dies</h3>
         <h5 class='text-center'>Through adversity, we <br> discover our true resilience <br> and inner strength.</h5>
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
         <h3 class='text-center'>Beauty is subjective.</h3>
         <h5 class='text-center'>Kindness is a language <br> understood by all, bridging <br> divides effortlessly.</h5>
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
         <h3 class='text-center'>Life goes on.</h3>
         <h5 class='text-center'>With each challenge, <br> we have the opportunity <br> to learn and grow.</h5>
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
         <h3 class='text-center'>Dreams come true.</h3>
         <h5 class='text-center'>In the silence of nature, <br> I found solace <br> and inner peace.</h5>
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
         <h3 class='text-center'>Truth sets free.</h3>
         <h5 class='text-center'>The journey of a  <br>thousand miles begins <br> with a single step.</h5>
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
         <h3 class='text-center'>Laughter heals pain.</h3>
         <h5 class='text-center'>Memories linger like echoes,<br> reminding us of moments <br> cherished deeply.</h5>
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
         <h3 class='text-center'>Change is constant.</h3>
         <h5 class='text-center'>Love's warmth melts even <br> the coldest of hearts, <br> thawing all resistance.</h5>
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
         <h3 class='text-center'>Forgive and forget.</h3>
         <h5 class='text-center'>The stars above guide <br> us through the darkest <br> of nights, offering hope.</h5>
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
         <h3 class='text-center'>Knowledge is power.</h3>
         <h5 class='text-center'>True friendship is a bond <br> unbreakable, a treasure <br> beyond measure.</h5>
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
         <h3 class='text-center'>Honesty is best.</h3>
         <h5 class='text-center'>Courage is not the absence <br> of fear but the <br> triumph over it.</h5>
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
         <h3 class='text-center'>Patience is virtue.</h3>
         <h5 class='text-center'>The embrace of a loved <br> one is a balm <br> for the soul.</h5>
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
         <h3 class='text-center'>Unity breeds strength.</h3>
         <h5 class='text-center'>Life's twists and turns <br> often lead to unexpected and <br> beautiful destinations.</h5>
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
         <h3 class='text-center'>Courage over fear.</h3>
         <h5 class='text-center'>In the dance of life, <br> we take both graceful <br> and stumbling steps.</h5>
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
         <h3 class='text-center'>Kindness matters most.</h3>
         <h5 class='text-center'>The power of words <br> can wound or heal, <br> so choose wisely.</h5>
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
         <h3 class='text-center'>Family first always.</h3>
         <h5 class='text-center'>In the depth of silence, <br> the mind finds clarity <br> and wisdom.</h5>
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
         <h3 class='text-center'>Tomorrow is another.</h3>
         <h5 class='text-center'>The sunrise heralds <br> a new day, offering a <br> chance for renewal.</h5>
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
         <h3 class='text-center'>Love conquers all.</h3>
         <h5 class='text-center'>In solitude, I found <br> my purpose and <br>the strength to endure.</h5>
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
         <h3 class='text-center'>Time heals wounds</h3>
         <h5 class='text-center'>The sunset painted <br> the sky with hues of <br> orange and purple.</h5>
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
         <h3 class='text-center'>Actions speak louder.</h3>
         <h5 class='text-center'>Forgiveness liberates <br> the heart, allowing healing <br> to finally take place.</h5>
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
         <h3 class='text-center'>Hope never dies</h3>
         <h5 class='text-center'>Through adversity, we <br> discover our true resilience <br> and inner strength.</h5>
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
         <h3 class='text-center'>Beauty is subjective.</h3>
         <h5 class='text-center'>Kindness is a language <br> understood by all, bridging <br> divides effortlessly.</h5>
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
         <h3 class='text-center'>Life goes on.</h3>
         <h5 class='text-center'>With each challenge, <br> we have the opportunity <br> to learn and grow.</h5>
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
         <h3 class='text-center'>Dreams come true.</h3>
         <h5 class='text-center'>In the silence of nature, <br> I found solace <br> and inner peace.</h5>
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
         <h3 class='text-center'>Truth sets free.</h3>
         <h5 class='text-center'>The journey of a  <br>thousand miles begins <br> with a single step.</h5>
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
         <h3 class='text-center'>Laughter heals pain.</h3>
         <h5 class='text-center'>Memories linger like echoes,<br> reminding us of moments <br> cherished deeply.</h5>
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
         <h3 class='text-center'>Change is constant.</h3>
         <h5 class='text-center'>Love's warmth melts even <br> the coldest of hearts, <br> thawing all resistance.</h5>
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
         <h3 class='text-center'>Forgive and forget.</h3>
         <h5 class='text-center'>The stars above guide <br> us through the darkest <br> of nights, offering hope.</h5>
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
         <h3 class='text-center'>Knowledge is power.</h3>
         <h5 class='text-center'>True friendship is a bond <br> unbreakable, a treasure <br> beyond measure.</h5>
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
         <h3 class='text-center'>Honesty is best.</h3>
         <h5 class='text-center'>Courage is not the absence <br> of fear but the <br> triumph over it.</h5>
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
         <h3 class='text-center'>Patience is virtue.</h3>
         <h5 class='text-center'>The embrace of a loved <br> one is a balm <br> for the soul.</h5>
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
         <h3 class='text-center'>Unity breeds strength.</h3>
         <h5 class='text-center'>Life's twists and turns <br> often lead to unexpected and <br> beautiful destinations.</h5>
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
         <h3 class='text-center'>Courage over fear.</h3>
         <h5 class='text-center'>In the dance of life, <br> we take both graceful <br> and stumbling steps.</h5>
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
         <h3 class='text-center'>Kindness matters most.</h3>
         <h5 class='text-center'>The power of words <br> can wound or heal, <br> so choose wisely.</h5>
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
         <h3 class='text-center'>Family first always.</h3>
         <h5 class='text-center'>In the depth of silence, <br> the mind finds clarity <br> and wisdom.</h5>
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
         <h3 class='text-center'>Tomorrow is another.</h3>
         <h5 class='text-center'>The sunrise heralds <br> a new day, offering a <br> chance for renewal.</h5>
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
         <h3 class='text-center'>Love conquers all.</h3>
         <h5 class='text-center'>In solitude, I found <br> my purpose and <br>the strength to endure.</h5>
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
         <h3 class='text-center'>Time heals wounds</h3>
         <h5 class='text-center'>The sunset painted <br> the sky with hues of <br> orange and purple.</h5>
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
         <h3 class='text-center'>Actions speak louder.</h3>
         <h5 class='text-center'>Forgiveness liberates <br> the heart, allowing healing <br> to finally take place.</h5>
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
         <h3 class='text-center'>Hope never dies</h3>
         <h5 class='text-center'>Through adversity, we <br> discover our true resilience <br> and inner strength.</h5>
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
         <h3 class='text-center'>Beauty is subjective.</h3>
         <h5 class='text-center'>Kindness is a language <br> understood by all, bridging <br> divides effortlessly.</h5>
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
         <h3 class='text-center'>Life goes on.</h3>
         <h5 class='text-center'>With each challenge, <br> we have the opportunity <br> to learn and grow.</h5>
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
         <h3 class='text-center'>Dreams come true.</h3>
         <h5 class='text-center'>In the silence of nature, <br> I found solace <br> and inner peace.</h5>
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
         <h3 class='text-center'>Truth sets free.</h3>
         <h5 class='text-center'>The journey of a  <br>thousand miles begins <br> with a single step.</h5>
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
         <h3 class='text-center'>Laughter heals pain.</h3>
         <h5 class='text-center'>Memories linger like echoes,<br> reminding us of moments <br> cherished deeply.</h5>
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
         <h3 class='text-center'>Change is constant.</h3>
         <h5 class='text-center'>Love's warmth melts even <br> the coldest of hearts, <br> thawing all resistance.</h5>
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
         <h3 class='text-center'>Forgive and forget.</h3>
         <h5 class='text-center'>The stars above guide <br> us through the darkest <br> of nights, offering hope.</h5>
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
         <h3 class='text-center'>Knowledge is power.</h3>
         <h5 class='text-center'>True friendship is a bond <br> unbreakable, a treasure <br> beyond measure.</h5>
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
         <h3 class='text-center'>Honesty is best.</h3>
         <h5 class='text-center'>Courage is not the absence <br> of fear but the <br> triumph over it.</h5>
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
         <h3 class='text-center'>Patience is virtue.</h3>
         <h5 class='text-center'>The embrace of a loved <br> one is a balm <br> for the soul.</h5>
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
         <h3 class='text-center'>Unity breeds strength.</h3>
         <h5 class='text-center'>Life's twists and turns <br> often lead to unexpected and <br> beautiful destinations.</h5>
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
         <h3 class='text-center'>Courage over fear.</h3>
         <h5 class='text-center'>In the dance of life, <br> we take both graceful <br> and stumbling steps.</h5>
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
         <h3 class='text-center'>Kindness matters most.</h3>
         <h5 class='text-center'>The power of words <br> can wound or heal, <br> so choose wisely.</h5>
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
         <h3 class='text-center'>Family first always.</h3>
         <h5 class='text-center'>In the depth of silence, <br> the mind finds clarity <br> and wisdom.</h5>
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
         <h3 class='text-center'>Tomorrow is another.</h3>
         <h5 class='text-center'>The sunrise heralds <br> a new day, offering a <br> chance for renewal.</h5>
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
    <h3 class='text-center'>Love conquers all.</h3>
    <h5 class='text-center'>In solitude, I found <br> my purpose and <br>the strength to endure.</h5>
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
    <h3 class='text-center'>Time heals wounds</h3>
    <h5 class='text-center'>The sunset painted <br> the sky with hues of <br> orange and purple.</h5>
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
    <h3 class='text-center'>Actions speak louder.</h3>
    <h5 class='text-center'>Forgiveness liberates <br> the heart, allowing healing <br> to finally take place.</h5>
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
    <h3 class='text-center'>Hope never dies</h3>
    <h5 class='text-center'>Through adversity, we <br> discover our true resilience <br> and inner strength.</h5>
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
    <h3 class='text-center'>Beauty is subjective.</h3>
    <h5 class='text-center'>Kindness is a language <br> understood by all, bridging <br> divides effortlessly.</h5>
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
    <h3 class='text-center'>Life goes on.</h3>
    <h5 class='text-center'>With each challenge, <br> we have the opportunity <br> to learn and grow.</h5>
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
    <h3 class='text-center'>Dreams come true.</h3>
    <h5 class='text-center'>In the silence of nature, <br> I found solace <br> and inner peace.</h5>
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
    <h3 class='text-center'>Truth sets free.</h3>
    <h5 class='text-center'>The journey of a  <br>thousand miles begins <br> with a single step.</h5>
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
    <h3 class='text-center'>Laughter heals pain.</h3>
    <h5 class='text-center'>Memories linger like echoes,<br> reminding us of moments <br> cherished deeply.</h5>
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
    <h3 class='text-center'>Change is constant.</h3>
    <h5 class='text-center'>Love's warmth melts even <br> the coldest of hearts, <br> thawing all resistance.</h5>
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
    <h3 class='text-center'>Forgive and forget.</h3>
    <h5 class='text-center'>The stars above guide <br> us through the darkest <br> of nights, offering hope.</h5>
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
    <h3 class='text-center'>Knowledge is power.</h3>
    <h5 class='text-center'>True friendship is a bond <br> unbreakable, a treasure <br> beyond measure.</h5>
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
    <h3 class='text-center'>Honesty is best.</h3>
    <h5 class='text-center'>Courage is not the absence <br> of fear but the <br> triumph over it.</h5>
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
    <h3 class='text-center'>Patience is virtue.</h3>
    <h5 class='text-center'>The embrace of a loved <br> one is a balm <br> for the soul.</h5>
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
    <h3 class='text-center'>Unity breeds strength.</h3>
    <h5 class='text-center'>Life's twists and turns <br> often lead to unexpected and <br> beautiful destinations.</h5>
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
    <h3 class='text-center'>Courage over fear.</h3>
    <h5 class='text-center'>In the dance of life, <br> we take both graceful <br> and stumbling steps.</h5>
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
    <h3 class='text-center'>Kindness matters most.</h3>
    <h5 class='text-center'>The power of words <br> can wound or heal, <br> so choose wisely.</h5>
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
    <h3 class='text-center'>Family first always.</h3>
    <h5 class='text-center'>In the depth of silence, <br> the mind finds clarity <br> and wisdom.</h5>
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
    <h3 class='text-center'>Tomorrow is another.</h3>
    <h5 class='text-center'>The sunrise heralds <br> a new day, offering a <br> chance for renewal.</h5>
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
    <h3 class='text-center'>Love conquers all.</h3>
    <h5 class='text-center'>In solitude, I found <br> my purpose and <br>the strength to endure.</h5>
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
    <h3 class='text-center'>Time heals wounds</h3>
    <h5 class='text-center'>The sunset painted <br> the sky with hues of <br> orange and purple.</h5>
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
    <h3 class='text-center'>Actions speak louder.</h3>
    <h5 class='text-center'>Forgiveness liberates <br> the heart, allowing healing <br> to finally take place.</h5>
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
    <h3 class='text-center'>Hope never dies</h3>
    <h5 class='text-center'>Through adversity, we <br> discover our true resilience <br> and inner strength.</h5>
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
    <h3 class='text-center'>Beauty is subjective.</h3>
    <h5 class='text-center'>Kindness is a language <br> understood by all, bridging <br> divides effortlessly.</h5>
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
    <h3 class='text-center'>Life goes on.</h3>
    <h5 class='text-center'>With each challenge, <br> we have the opportunity <br> to learn and grow.</h5>
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
    <h3 class='text-center'>Dreams come true.</h3>
    <h5 class='text-center'>In the silence of nature, <br> I found solace <br> and inner peace.</h5>
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
    <h3 class='text-center'>Truth sets free.</h3>
    <h5 class='text-center'>The journey of a  <br>thousand miles begins <br> with a single step.</h5>
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
    <h3 class='text-center'>Laughter heals pain.</h3>
    <h5 class='text-center'>Memories linger like echoes,<br> reminding us of moments <br> cherished deeply.</h5>
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
    <h3 class='text-center'>Change is constant.</h3>
    <h5 class='text-center'>Love's warmth melts even <br> the coldest of hearts, <br> thawing all resistance.</h5>
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
    <h3 class='text-center'>Forgive and forget.</h3>
    <h5 class='text-center'>The stars above guide <br> us through the darkest <br> of nights, offering hope.</h5>
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
    <h3 class='text-center'>Knowledge is power.</h3>
    <h5 class='text-center'>True friendship is a bond <br> unbreakable, a treasure <br> beyond measure.</h5>
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
    <h3 class='text-center'>Honesty is best.</h3>
    <h5 class='text-center'>Courage is not the absence <br> of fear but the <br> triumph over it.</h5>
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
    <h3 class='text-center'>Patience is virtue.</h3>
    <h5 class='text-center'>The embrace of a loved <br> one is a balm <br> for the soul.</h5>
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
    <h3 class='text-center'>Unity breeds strength.</h3>
    <h5 class='text-center'>Life's twists and turns <br> often lead to unexpected and <br> beautiful destinations.</h5>
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
    <h3 class='text-center'>Courage over fear.</h3>
    <h5 class='text-center'>In the dance of life, <br> we take both graceful <br> and stumbling steps.</h5>
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
    <h3 class='text-center'>Kindness matters most.</h3>
    <h5 class='text-center'>The power of words <br> can wound or heal, <br> so choose wisely.</h5>
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
    <h3 class='text-center'>Family first always.</h3>
    <h5 class='text-center'>In the depth of silence, <br> the mind finds clarity <br> and wisdom.</h5>
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
    <h3 class='text-center'>Tomorrow is another.</h3>
    <h5 class='text-center'>The sunrise heralds <br> a new day, offering a <br> chance for renewal.</h5>
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
         <h3 class='text-center'>Love conquers all.</h3>
         <h5 class='text-center'>In solitude, I found <br> my purpose and <br>the strength to endure.</h5>
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
         <h3 class='text-center'>Time heals wounds</h3>
         <h5 class='text-center'>The sunset painted <br> the sky with hues of <br> orange and purple.</h5>
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
         <h3 class='text-center'>Actions speak louder.</h3>
         <h5 class='text-center'>Forgiveness liberates <br> the heart, allowing healing <br> to finally take place.</h5>
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
         <h3 class='text-center'>Hope never dies</h3>
         <h5 class='text-center'>Through adversity, we <br> discover our true resilience <br> and inner strength.</h5>
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
         <h3 class='text-center'>Beauty is subjective.</h3>
         <h5 class='text-center'>Kindness is a language <br> understood by all, bridging <br> divides effortlessly.</h5>
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
         <h3 class='text-center'>Life goes on.</h3>
         <h5 class='text-center'>With each challenge, <br> we have the opportunity <br> to learn and grow.</h5>
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
         <h3 class='text-center'>Dreams come true.</h3>
         <h5 class='text-center'>In the silence of nature, <br> I found solace <br> and inner peace.</h5>
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
         <h3 class='text-center'>Truth sets free.</h3>
         <h5 class='text-center'>The journey of a  <br>thousand miles begins <br> with a single step.</h5>
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
         <h3 class='text-center'>Laughter heals pain.</h3>
         <h5 class='text-center'>Memories linger like echoes,<br> reminding us of moments <br> cherished deeply.</h5>
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
         <h3 class='text-center'>Change is constant.</h3>
         <h5 class='text-center'>Love's warmth melts even <br> the coldest of hearts, <br> thawing all resistance.</h5>
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
         <h3 class='text-center'>Forgive and forget.</h3>
         <h5 class='text-center'>The stars above guide <br> us through the darkest <br> of nights, offering hope.</h5>
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
         <h3 class='text-center'>Knowledge is power.</h3>
         <h5 class='text-center'>True friendship is a bond <br> unbreakable, a treasure <br> beyond measure.</h5>
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
         <h3 class='text-center'>Honesty is best.</h3>
         <h5 class='text-center'>Courage is not the absence <br> of fear but the <br> triumph over it.</h5>
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
         <h3 class='text-center'>Patience is virtue.</h3>
         <h5 class='text-center'>The embrace of a loved <br> one is a balm <br> for the soul.</h5>
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
         <h3 class='text-center'>Unity breeds strength.</h3>
         <h5 class='text-center'>Life's twists and turns <br> often lead to unexpected and <br> beautiful destinations.</h5>
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
         <h3 class='text-center'>Courage over fear.</h3>
         <h5 class='text-center'>In the dance of life, <br> we take both graceful <br> and stumbling steps.</h5>
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
         <h3 class='text-center'>Kindness matters most.</h3>
         <h5 class='text-center'>The power of words <br> can wound or heal, <br> so choose wisely.</h5>
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
         <h3 class='text-center'>Family first always.</h3>
         <h5 class='text-center'>In the depth of silence, <br> the mind finds clarity <br> and wisdom.</h5>
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
         <h3 class='text-center'>Tomorrow is another.</h3>
         <h5 class='text-center'>The sunrise heralds <br> a new day, offering a <br> chance for renewal.</h5>
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
        <h3 class='text-center'>Love conquers all.</h3>
        <h5 class='text-center'>In solitude, I found <br> my purpose and <br>the strength to endure.</h5>
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
        <h3 class='text-center'>Time heals wounds</h3>
        <h5 class='text-center'>The sunset painted <br> the sky with hues of <br> orange and purple.</h5>
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
        <h3 class='text-center'>Actions speak louder.</h3>
        <h5 class='text-center'>Forgiveness liberates <br> the heart, allowing healing <br> to finally take place.</h5>
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
        <h3 class='text-center'>Hope never dies</h3>
        <h5 class='text-center'>Through adversity, we <br> discover our true resilience <br> and inner strength.</h5>
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
        <h3 class='text-center'>Beauty is subjective.</h3>
        <h5 class='text-center'>Kindness is a language <br> understood by all, bridging <br> divides effortlessly.</h5>
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
        <h3 class='text-center'>Life goes on.</h3>
        <h5 class='text-center'>With each challenge, <br> we have the opportunity <br> to learn and grow.</h5>
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
        <h3 class='text-center'>Dreams come true.</h3>
        <h5 class='text-center'>In the silence of nature, <br> I found solace <br> and inner peace.</h5>
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
        <h3 class='text-center'>Truth sets free.</h3>
        <h5 class='text-center'>The journey of a  <br>thousand miles begins <br> with a single step.</h5>
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
        <h3 class='text-center'>Laughter heals pain.</h3>
        <h5 class='text-center'>Memories linger like echoes,<br> reminding us of moments <br> cherished deeply.</h5>
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
        <h3 class='text-center'>Change is constant.</h3>
        <h5 class='text-center'>Love's warmth melts even <br> the coldest of hearts, <br> thawing all resistance.</h5>
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
        <h3 class='text-center'>Forgive and forget.</h3>
        <h5 class='text-center'>The stars above guide <br> us through the darkest <br> of nights, offering hope.</h5>
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
        <h3 class='text-center'>Knowledge is power.</h3>
        <h5 class='text-center'>True friendship is a bond <br> unbreakable, a treasure <br> beyond measure.</h5>
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
        <h3 class='text-center'>Honesty is best.</h3>
        <h5 class='text-center'>Courage is not the absence <br> of fear but the <br> triumph over it.</h5>
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
        <h5 class='text-center'>The embrace of a loved <br> one is a balm <br> for the soul.</h5>
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
        <h3 class='text-center'>Unity breeds strength.</h3>
        <h5 class='text-center'>Life's twists and turns <br> often lead to unexpected and <br> beautiful destinations.</h5>
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
        <h3 class='text-center'>Courage over fear.</h3>
        <h5 class='text-center'>In the dance of life, <br> we take both graceful <br> and stumbling steps.</h5>
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
        <h3 class='text-center'>Kindness matters most.</h3>
        <h5 class='text-center'>The power of words <br> can wound or heal, <br> so choose wisely.</h5>
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
        <h3 class='text-center'>Family first always.</h3>
        <h5 class='text-center'>In the depth of silence, <br> the mind finds clarity <br> and wisdom.</h5>
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
        <h3 class='text-center'>Tomorrow is another.</h3>
        <h5 class='text-center'>The sunrise heralds <br> a new day, offering a <br> chance for renewal.</h5>
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
         <h3 class='text-center'>Love conquers all.</h3>
         <h5 class='text-center'>In solitude, I found <br> my purpose and <br>the strength to endure.</h5>
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
         <h3 class='text-center'>Time heals wounds</h3>
         <h5 class='text-center'>The sunset painted <br> the sky with hues of <br> orange and purple.</h5>
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
         <h3 class='text-center'>Actions speak louder.</h3>
         <h5 class='text-center'>Forgiveness liberates <br> the heart, allowing healing <br> to finally take place.</h5>
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
         <h3 class='text-center'>Hope never dies</h3>
         <h5 class='text-center'>Through adversity, we <br> discover our true resilience <br> and inner strength.</h5>
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
         <h3 class='text-center'>Beauty is subjective.</h3>
         <h5 class='text-center'>Kindness is a language <br> understood by all, bridging <br> divides effortlessly.</h5>
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
         <h3 class='text-center'>Life goes on.</h3>
         <h5 class='text-center'>With each challenge, <br> we have the opportunity <br> to learn and grow.</h5>
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
         <h3 class='text-center'>Dreams come true.</h3>
         <h5 class='text-center'>In the silence of nature, <br> I found solace <br> and inner peace.</h5>
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
         <h3 class='text-center'>Truth sets free.</h3>
         <h5 class='text-center'>The journey of a  <br>thousand miles begins <br> with a single step.</h5>
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
         <h3 class='text-center'>Laughter heals pain.</h3>
         <h5 class='text-center'>Memories linger like echoes,<br> reminding us of moments <br> cherished deeply.</h5>
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
         <h3 class='text-center'>Change is constant.</h3>
         <h5 class='text-center'>Love's warmth melts even <br> the coldest of hearts, <br> thawing all resistance.</h5>
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
         <h3 class='text-center'>Forgive and forget.</h3>
         <h5 class='text-center'>The stars above guide <br> us through the darkest <br> of nights, offering hope.</h5>
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
         <h3 class='text-center'>Knowledge is power.</h3>
         <h5 class='text-center'>True friendship is a bond <br> unbreakable, a treasure <br> beyond measure.</h5>
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
         <h3 class='text-center'>Honesty is best.</h3>
         <h5 class='text-center'>Courage is not the absence <br> of fear but the <br> triumph over it.</h5>
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
         <h3 class='text-center'>Patience is virtue.</h3>
         <h5 class='text-center'>The embrace of a loved <br> one is a balm <br> for the soul.</h5>
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
         <h3 class='text-center'>Unity breeds strength.</h3>
         <h5 class='text-center'>Life's twists and turns <br> often lead to unexpected and <br> beautiful destinations.</h5>
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
         <h3 class='text-center'>Courage over fear.</h3>
         <h5 class='text-center'>In the dance of life, <br> we take both graceful <br> and stumbling steps.</h5>
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
         <h3 class='text-center'>Kindness matters most.</h3>
         <h5 class='text-center'>The power of words <br> can wound or heal, <br> so choose wisely.</h5>
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
         <h3 class='text-center'>Family first always.</h3>
         <h5 class='text-center'>In the depth of silence, <br> the mind finds clarity <br> and wisdom.</h5>
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
         <h3 class='text-center'>Tomorrow is another.</h3>
         <h5 class='text-center'>The sunrise heralds <br> a new day, offering a <br> chance for renewal.</h5>
         <div class="d-flex justify-content-center icons">
         <i class="fa-brands fa-github mr-5"></i><i class="fa-solid fa-basketball mr-5"></i><i class="fab fa-medium"></i>
         </div>
         </div>
         </div>
         
         </div>
`

parentElement.appendChild(child)

let theme=true;
let themeParent=document.getElementById('theme');
let themeChild=document.createElement('a');

function toggleTheme(){
   theme=!theme;
   updateThemeIcon();
   
   let elements=document.getElementsByClassName('menu');
   for (let i = 0; i < elements.length; i++) {
     const el = elements[i];
    
     if (theme) {
       document.body.classList.add('dark-mode');
       el.classList.add('dark_menu');
     
     } else {
       document.body.classList.remove('dark-mode');
       el.classList.remove('dark_menu');
     }
   }

}
let elements=document.getElementsByClassName('menu');
for (let i = 0; i < elements.length; i++) {
  const el = elements[i];
 
  if (theme) {
    document.body.classList.add('dark-mode');
    el.classList.add('dark_menu');
  
  } else {
    document.body.classList.remove('dark-mode');
    el.classList.remove('dark_menu');
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

