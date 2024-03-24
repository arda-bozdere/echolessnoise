document.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById('audio');
  const fileInput = document.getElementById('audioFileInput');
  const backwardButton = document.getElementById('backward');
  const pauseButton = document.getElementById('pause');
  const forwardButton = document.getElementById('forward');
  const volumeInput = document.getElementById('volume');
  const themeSelector = document.getElementById('themeSelector');

  fileInput.addEventListener('change', function (event) {
    const file = event.target.files[0];
    const url = URL.createObjectURL(file);
    audio.src = url;
  });

  backwardButton.addEventListener('click', function () {
    audio.currentTime -= 10;
  });

  pauseButton.addEventListener('click', function () {
    if (audio.paused) {
      audio.play();
      pauseButton.textContent = 'Pause';
    } else {
      audio.pause();
      pauseButton.textContent = 'Resume';
    }
  });

  forwardButton.addEventListener('click', function () {
    audio.currentTime += 10;
  });

  volumeInput.addEventListener('input', function () {
    audio.volume = volumeInput.value;
  });

  themeSelector.addEventListener('change', function () {
    const selectedTheme = themeSelector.value;
    document.body.className = selectedTheme + '-mode';
  });
});
