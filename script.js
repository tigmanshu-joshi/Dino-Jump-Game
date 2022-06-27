var character = document.getElementById("character");
var block = document.getElementById("block");
var counter = 0;

// Jump Funtion
function jump() {
  if (character.classList == "animate") {
    return;
  }
  character.classList.add("animate");
  setTimeout(function () {
    character.classList.remove("animate");
  }, 300);
}
//set Jump Key
document.body.onkeydown = function (e) {
  if (e.keyCode == 32) {
    jump();
  }
};
// set variables
var checkDead = setInterval(function () {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue("top")
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue("left")
  );

  // Check Collision

  if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
    block.style.animation = "none";
    alert("Game Over. score: " + Math.floor(counter / 100));
    counter = 0;
    block.style.animation = "block 2s infinite linear";
  } else {
    // Increasing Score
    counter++;
    // Increasing speed on the basis of score
    if (counter % 5 == 0) {
      block_speed -= 0.1;
      block.style.animation = `block ${block_speed} infinite linear`;
    }
    document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
  }
}, 10);
