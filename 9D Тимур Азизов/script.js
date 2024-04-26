const totalFrames = 3;
const animationDuration = 300;
const timePerFrame = animationDuration / totalFrames;
let timeWhenLastUpdate;
let timeFromLastUpdate;
let frameNumber = 1;


function step(startTime) {
  
  if (!timeWhenLastUpdate) timeWhenLastUpdate = startTime;
  timeFromLastUpdate = startTime - timeWhenLastUpdate;


  if (timeFromLastUpdate > timePerFrame) {
   
    $('.eye-animation').css('opacity', 0);
    
    $(.eye-animation-${frameNumber}).css('opacity', 1);
   
    timeWhenLastUpdate = startTime;

    if (frameNumber >= totalFrames) {
      frameNumber = 1;
    } else {
      frameNumber = frameNumber + 1;
    }        
  }

  requestAnimationFrame(step);
}
$(window).on('load', () => {
  requestAnimationFrame(step);
});