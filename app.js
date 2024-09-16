let footer = document.querySelector("footer");
let celsInput = document.querySelector(".cels-input");
let fahrInput = document.querySelector(".fahr-input");

celsInput.onkeyup = function () {
  fahrInput.value = (+this.value * 1.8 + 32).toFixed(2);
};
fahrInput.onkeyup = function () {
  celsInput.value = (((+this.value - 32) * 5) / 9).toFixed(2);
};

// Type Writing Function
Array.prototype.typeWriter = function (element) {
  let currentIndex = 0;
  let currentWord = 0;
  let that = this;
  function interv() {
    let postChar = setInterval(function () {
      element.textContent += that[currentWord][currentIndex];
      currentIndex++;
      if (that[currentWord].length == currentIndex) {
        clearInterval(postChar);
        setTimeout(function () {
          let removeChar = setInterval(function () {
            currentIndex--;
            element.textContent = element.textContent.substring(
              0,
              currentIndex
            );
            if (currentIndex == 0) {
              clearInterval(removeChar);
              currentWord++;
              if (currentWord != that.length) {
                interv();
              } else {
                setTimeout(function () {
                  currentWord = 0;
                  interv();
                }, 1000);
              }
            }
          }, 100);
        }, 500);
      }
    }, 100);
  }
  interv();
};

["Mo3bassia", "Front End Web Developer"].typeWriter(
  footer.querySelectorAll("a")[1]
);
