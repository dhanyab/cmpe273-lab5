$(":button").click(function() {
    var isbn = this.id;
    $.ajax({
    	type:'PUT',
    	url:'http://localhost:8001/library/v1/books/2?status=lost',
    	contentType: 'application/json',
		dataType: 'json',
		success:function(response){
		$(":button").attr("disabled",true);
		
		}
    	
    	
    })
    
    
    alert('About to report lost on ISBN ' + isbn);
});
