$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Ваша заявка отправлена! В ближайшее время с Вами свяжется менеджер");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 100);
		});
		return false;
	});

});