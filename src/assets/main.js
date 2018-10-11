function chatenter(e){
	let message = $('.chatinput').val();
	if ((e.which == 13) && (message != "") && (message.trim() != "")) {
		$('.chatbody').prepend("<div class='msgbox'><div class='row'><img src='http://placekitten.com/30/30' class='userimg'><div class='message col-md-6'>Jaskaran<br><div class='msgdate col-md-6'>11:55 AM | 01/02/2018</div></div></div><p class='msgcont'> " + $('.chatinput').val() + '</p></div></div>');
		$('.chatinput').val("");
	}
}
