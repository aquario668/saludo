const colors = ["var(--color1)", "var(--color2)", "var(--color3)"];

const textGroups = document.querySelectorAll(".text-group");
textGroups.forEach((group) => group.count = group.querySelectorAll("text").length);
const uses = document.querySelectorAll("#textClip use");
const blobs = document.querySelectorAll("#background path");

let currCount = 1;

function colorBlobs() {
  blobs.forEach((blob) => {
    blob.style.fill = colors[Math.floor(Math.random() * colors.length)];
  });
}

function nextIteration() {
 
  colorBlobs();

 
  uses.forEach((use, i) => {
    use.setAttribute('href', i < textGroups[currCount].count ? `#text${currCount + 1}.${i + 1}` : '');
  });
  
  currCount = currCount + 1 < textGroups.length ? currCount + 1 : 0;
}


blobs[0].addEventListener("animationiteration", nextIteration);

colorBlobs();