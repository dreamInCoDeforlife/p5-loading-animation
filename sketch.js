var songs = [];
var images = [];
var totalSongs = 10;
var totalImages = 40;
var counterSound = 0;
var counterImage = 0;
var loadingSound = false;
var loadingImage = false;

var loading = true;

var loadingAnimation;
var loadedBkg;

function loadAudioElement(filename) {
  loadSound(filename, soundLoaded);

  function soundLoaded(sound) {
    console.log(filename);
    songs.push(sound);
    counterSound++;
    if (counterSound == totalSongs) {
      loadingSound = true;
    }
  }
}

function loadImageElement(filename) {
  loadImage(filename, imageLoaded);

  function imageLoaded(image) {
    console.log(filename);
    images.push(image);
    counterImage++;
    if (counterImage == totalImages) {
      loadingImage = true;
    }
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  clear();

  for (var i = 1; i <= totalSongs; i++) {
    loadAudioElement("songs/music" + i + ".mp3");
  }

  for (var i = 1; i <= totalImages; i++) {
    loadImageElement("anim/anim" + i + ".png");
  }

  loadingAnimation = select('.bubbles-wrapper');
  loadedBkg = select('.danBkg');
}

function draw() {
  if ((loadingImage) && (loadingSound)) {
    loading = false;
  }

  if (!loading) {
    clear();
    loadingAnimation.addClass('display-none');
    loadedBkg.removeClass('display-none');
    textAlign(CENTER, CENTER);
    textSize(120);
    textStyle(BOLD);
    fill("#8861A4");
    text("SUCCESS!!", width / 2, height / 2);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
