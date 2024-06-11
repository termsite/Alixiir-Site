var click=0; // Click variable.
var c = document.getElementById("click");
function hi(){ // Click button.
    click+=1;
    
    c.innerHTML = click;
}
function reset(){ // Reset button.
    click=0;
    alert("click = " + click);
    c.innerHTML = click;
}
	// Sentences to cycle through.
const sentences = [
    "This website is Open Source!",
    "Made by Alixiir! alixiir.work",
    "If you click the reset button you get infinite clicks!",
    "This website has over five-hundred lines of code!"
  ];
  
const output = document.getElementById("output");
  let index = 0;

  // Function to update the paragraph with the next sentence
  function cycleText() {
    output.textContent = sentences[index];
    index = (index + 1) % sentences.length; // Move to the next sentence, looping back to the start if necessary
  }

  // Call the function initially
  cycleText();

  // Uncomment the line below to cycle text every 3 seconds
  setInterval(cycleText, 3000);