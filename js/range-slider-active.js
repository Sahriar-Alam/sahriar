 var onMove = function (e, percentage) {
     $(".opacity-box").css("opacity", percentage / 100);
     $(".opacity-box").text((percentage).toFixed(0) + "%");
 }
 var range = new RangeSlider($("#slider_1"), {
     percentage: 20,
     onMove: onMove,
     onDown: onMove,
     pollLimit: 60
 });

