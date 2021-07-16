'use strict';

// https://developer.mozilla.org/en-US/docs/Web/API/HTMLAudioElement/Audio

const alertSound = new Audio('./sound/alert.mp3');
const bgSound = new Audio('./sound/bg.mp3');

function startGame() {
  playSound(bgSound);
}

function stopGame() {
  playSound(alterSound);
  stopSound(bgSound);
}

function playSound(sound) {
  sound.currentTime = 0;
  sound.play();
}

function stopSound(sound) {
  sound.pause();
}
