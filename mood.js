
// Mood Changer using event delegation


let moodDisplay = document.getElementById('moodDisplay');


let moods = {
    happy:     { bg: '#ff9800', text: '#3e2723', message: 'Pumpkin spice everything!' },
    calm:      { bg: '#8ecfdc', text: '#edd78a'},
    excited:   { bg: '#edd78a', text: '#b27587'},
    chill:     { bg: '#989c68', text: '#ff9800'},
    mysterious:{ bg: '#b27587', text: '#3e2723'},
    reset:     {bg:  '#ffffff', text: '#000000ff', message: 'Click a mood to change the vibe!'}
};

document.addEventListener('click', function (event) {
  if (event.target.classList.contains('mood-btn')) {
    const mood = event.target.getAttribute('data-mood');
    const config = moods[mood];
    // Updates the background color of the body
    document.body.style.backgroundColor = config.bg;
    // Updates the text color of the body
    document.body.style.color = config.text;
    // Updates the display message
    moodDisplay.textContent = config.message;
  }
});

