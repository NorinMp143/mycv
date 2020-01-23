var delaySequence = anime({
  targets: '.square',
  backgroundColor:'#499',
  delay: function(target, index) {
    return index * 200;
  },
  autoplay: true,
  loop:true
});
