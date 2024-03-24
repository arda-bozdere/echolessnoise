document.addEventListener('DOMContentLoaded', function () {
  const audio = document.getElementById('audio');
  const backwardButton = document.getElementById('backward');
  const pauseButton = document.getElementById('pause');
  const forwardButton = document.getElementById('forward');
  const volumeInput = document.getElementById('volume');
  const themeSelector = document.getElementById('themeSelector');
  const playRandomButton = document.getElementById('playRandom');

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

  playRandomButton.addEventListener('click', function () {
    fetchRandomTrack();
  });

  function fetchRandomTrack() {
    fetch('https://freemusicarchive.org/api/get/tracks.json?api_key=YOUR_API_KEY&limit=1')
      .then(response => response.json())
      .then(data => {
        if (data && data.dataset && data.dataset.length > 0) {
          const track = data.dataset[0];
          if (track && track.track_id && track.track_id > 0) {
            const trackUrl = `https://freemusicarchive.org/track/${track.track_id}/${track.track_title}`;
            audio.src = trackUrl;
            audio.play();
          }
        }
      })
      .catch(error => console.error('Error fetching random track:', error));
  }
});
