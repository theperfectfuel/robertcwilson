$(document).ready(function() {

	$("a[name='tag-all']").closest('li').addClass('active');

	$("a[name='tag-all']").click(function (e) {
	    //e.preventDefault();
	    $(".filters div").show();
	    $('li').removeClass('active');
	    $(this).closest('li').addClass('active');
	});
	$("a[name='tag-jquery']").click(function (e) {
	    //e.preventDefault();
	    $(".filters > div:not(.proj-jquery)").hide(1000);
	    $(".filters div.proj-jquery").show(1000);
	    $('li').removeClass('active');
	    $(this).closest('li').addClass('active');
	});
	$("a[name='tag-angular']").click(function (e) {
	    //e.preventDefault();
	    $(".filters > div:not(.proj-angular)").hide(1000);
	    $(".filters div.proj-angular").show(1000);
	    $('li').removeClass('active');
	    $(this).closest('li').addClass('active');
	});
	$("a[name='tag-node']").click(function (e) {
	    //e.preventDefault();
	    $(".filters > div:not(.proj-node)").hide(1000);
	    $(".filters div.proj-node").show(1000);
	    $('li').removeClass('active');
	    $(this).closest('li').addClass('active');
	});
	$("a[name='tag-aws']").click(function (e) {
	    //e.preventDefault();
	    $(".filters > div:not(.proj-aws)").hide(1000);
	    $(".filters div.proj-aws").show(1000);
	    $('li').removeClass('active');
	    $(this).closest('li').addClass('active');
	});
	$("a[name='tag-mean']").click(function (e) {
	    //e.preventDefault();
	    $(".filters > div:not(.proj-mean)").hide(1000);
	    $(".filters div.proj-mean").show(1000);
	    $('li').removeClass('active');
	    $(this).closest('li').addClass('active');
	});
	$("a[name='tag-rails']").click(function (e) {
	    //e.preventDefault();
	    $(".filters > div:not(.proj-rails)").hide(1000);
	    $(".filters div.proj-rails").show(1000);
	    $('li').removeClass('active');
	    $(this).closest('li').addClass('active');
	});
	$("a[name='tag-python']").click(function (e) {
	    //e.preventDefault();
	    $(".filters > div:not(.proj-python)").hide(1000);
	    $(".filters div.proj-python").show(1000);
	    $('li').removeClass('active');
	    $(this).closest('li').addClass('active');
	});
	$("a[name='tag-postgresql']").click(function (e) {
	    //e.preventDefault();
	    $(".filters > div:not(.proj-postgresql)").hide(1000);
	    $(".filters div.proj-postgresql").show(1000);
	    $('li').removeClass('active');
	    $(this).closest('li').addClass('active');
	});


});