document.addEventListener("DOMContentLoaded", function() {
  // Set up the event listener for the check button
  const button = document.getElementById('checkButton');
  button.addEventListener('click', function() {
    // Get the input value, normalize it to lowercase
    let atlantaTop5 = document.getElementById('atlantaInput').value.trim().toLowerCase();

    // Define the top 5 lists
    const top5Ludacris = ["ludacris", "luda"];
    const top5Dre = ["dre 3000", "andre 3000"];
    const top5TI = ["t.i.", "ti", "tip"];
    const top5Jeezy = ["jeezy", "young jeezy", "the snowman"];
    const top5Gucci = ["gucci mane", "gucci", "guwop"];

    // Check if the input matches any of the top 5 lists
    if (top5Ludacris.includes(atlantaTop5)) {
      alert("ATLANTA'S TOP 5 MC");
    } else if (top5Dre.includes(atlantaTop5) || top5TI.includes(atlantaTop5) || 
               top5Jeezy.includes(atlantaTop5) || top5Gucci.includes(atlantaTop5)) {
      alert("ATLANTA'S TOP 5 MC");
    } else {
      alert("GREAT PICK BUT NOT CONSIDERED ATLANTA'S TOP 5 RAPPER");
    }

    // Optionally reset the input field after checking
    document.getElementById('atlantaInput').value = '';
  });
});