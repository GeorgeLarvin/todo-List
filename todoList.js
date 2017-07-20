//check off specific todo's when clicked
$("ul").on("click", "li", function(){
	 $(this).toggleClass("completed");
});

//click X to delete todo
$("ul").on("click", "span", function(e){
	$(this).parent().fadeOut(1000, function(){
		$(this).remove();
	});
	e.stopPropagation();
})

//create new todo
$("input[type='text']").on("keypress", function(e){
	if(e.which === 13){
		var todoText = $(this).val();
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>" + todoText + "</li>");
		$(this).val("");
		
	}
});

$(".fa-plus").on("click", function(){
	$("input[type='text']").fadeToggle();
})