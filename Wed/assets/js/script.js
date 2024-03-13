const currentWordSpan = document.getElementById("current-word");
const newWordSpan = document.getElementById("new-word");
const newWord1span=document.getElementById("new-word1");
  let slideIndex=1;
  showslides();
// Choose your desired transition interval (in milliseconds)
const transitionInterval = 5000; // Change words every 2 seconds

function changeWord() {
  const tempWord = currentWordSpan.textContent;
  currentWordSpan.textContent = newWordSpan.textContent;
  newWordSpan.textContent = newWord1span.textContent;
  newWord1span.textContent=tempWord;

  // Optionally, use opacity transition for smoother effect
  currentWordSpan.style.opacity = 0;
  setTimeout(() => {
    currentWordSpan.style.opacity = 1;
  }, 100); // Adjust opacity transition duration (ms)

  // Schedule the next change after the interval
  setTimeout(changeWord, transitionInterval);
}

// Call the changeWord function to start the animation
changeWord();

 function plusslide(n){
showslide(slideIndex += n);
 }
 function currentslide(n){
  showslide(slideIndex = n);
 }
 function showslide(){
  let i;
  let slide= document.getElementsByClassName("myslide");
  if (n > slide.lenght){
    slideIndex=1;
  }
  if (n < 1) {
    slideIndex = slide.length;
  }
  for (i=0; i< slide.lenght; i++){
slide[i].style.diplay="none";
  }
 }