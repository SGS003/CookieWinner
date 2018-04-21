$("#myCarousel").carousel('cycle');
$('#myCarousel').carousel({
    interval: 4000
});

window.onload=function(){
	var photo;
	var name="  "+"StoneGoast";
	var tier="  " +"bronze tier";
	var cookies="   "+"512 cookies";
	$('#name').text(name);
	$('#tier').text(tier);
	$('#cookies').html(cookies);
	// text()和html() 有啥区别叻？
};


