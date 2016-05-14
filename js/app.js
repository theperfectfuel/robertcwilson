$(document).ready(function() {


	$("a[name='showall']").click(function (e) {
	    e.preventDefault();
	    $(".filters div").show();
	});
	$("a[name='tag-jquery']").click(function (e) {
	    e.preventDefault();
	    $(".filters > div:not(.proj-jquery)").hide();
	    $(".filters div.proj-jquery").show();
	});
	$("a[name='tag-angular']").click(function (e) {
	    e.preventDefault();
	    $(".filters li:not(.proj-angular)").hide();
	    $(".filters li.proj-angular").show();
	});
	$("a[name='tag-node']").click(function (e) {
	    e.preventDefault();
	    $(".filters li:not(.proj-node)").hide();
	    $(".filters li.proj-node").show();
	});
	$("a[name='tag-aws']").click(function (e) {
	    e.preventDefault();
	    $(".filters li:not(.proj-aws)").hide();
	    $(".filters li.proj-aws").show();
	});
	$("a[name='tag-mean']").click(function (e) {
	    e.preventDefault();
	    $(".filters li:not(.proj-mean)").hide();
	    $(".filters li.proj-mean").show();
	});


});