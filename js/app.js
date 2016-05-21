$(document).ready(function() {

	$("a[name='tag-all']").closest('li').addClass('active');

	$("a[name='tag-all']").click(function (e) {
	    //e.preventDefault();
	    $(".filters div").fadeIn(1000);
	    $('li').removeClass('active');
	    $(this).closest('li').addClass('active');
	});
	$("a[name='tag-jquery']").click(function (e) {
	    //e.preventDefault();
	    $(".filters > div:not(.proj-jquery)").fadeOut(1000);
	    $(".filters div.proj-jquery").fadeIn(1000);
	    $('li').removeClass('active');
	    $(this).closest('li').addClass('active');
	});
	$("a[name='tag-angular']").click(function (e) {
	    //e.preventDefault();
	    $(".filters > div:not(.proj-angular)").fadeOut(1000);
	    $(".filters div.proj-angular").fadeIn(1000);
	    $('li').removeClass('active');
	    $(this).closest('li').addClass('active');
	});
	$("a[name='tag-node']").click(function (e) {
	    //e.preventDefault();
	    $(".filters > div:not(.proj-node)").fadeOut(1000);
	    $(".filters div.proj-node").fadeIn(1000);
	    $('li').removeClass('active');
	    $(this).closest('li').addClass('active');
	});
	$("a[name='tag-aws']").click(function (e) {
	    //e.preventDefault();
	    $(".filters > div:not(.proj-aws)").fadeOut(1000);
	    $(".filters div.proj-aws").fadeIn(1000);
	    $('li').removeClass('active');
	    $(this).closest('li').addClass('active');
	});
	$("a[name='tag-mean']").click(function (e) {
	    //e.preventDefault();
	    $(".filters > div:not(.proj-mean)").fadeOut(1000);
	    $(".filters div.proj-mean").fadeIn(1000);
	    $('li').removeClass('active');
	    $(this).closest('li').addClass('active');
	});
	$("a[name='tag-rails']").click(function (e) {
	    //e.preventDefault();
	    $(".filters > div:not(.proj-rails)").fadeOut(1000);
	    $(".filters div.proj-rails").fadeIn(1000);
	    $('li').removeClass('active');
	    $(this).closest('li').addClass('active');
	});
	$("a[name='tag-python']").click(function (e) {
	    //e.preventDefault();
	    $(".filters > div:not(.proj-python)").fadeOut(1000);
	    $(".filters div.proj-python").fadeIn(1000);
	    $('li').removeClass('active');
	    $(this).closest('li').addClass('active');
	});
	$("a[name='tag-postgresql']").click(function (e) {
	    //e.preventDefault();
	    $(".filters > div:not(.proj-postgresql)").fadeOut(1000);
	    $(".filters div.proj-postgresql").fadeIn(1000);
	    $('li').removeClass('active');
	    $(this).closest('li').addClass('active');
	});


});