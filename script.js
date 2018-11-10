var siteWidth = $(window).width();
var siteHeight = $(window).height();
for (i = 0; i <= 100; i++) {
  var anim = Math.floor(Math.random() * 4) + 2;
  var size = Math.floor(Math.random() * 3) + 1;
  var start = $("<div>")
    .addClass("star star_" + i + " anim-"+anim + " star-size-"+size)
    .css({
      top: Math.floor(Math.random() * siteHeight),
      left: Math.floor(Math.random() * siteWidth)
    })
    .appendTo(".stars");
}
