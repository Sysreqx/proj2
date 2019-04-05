$(document).ready(function() {
	$('#submit').click(function () {
		let n = $('#prodname').val();
		let p = $('#prodprice').val();
		let cp = $('#cngdprice').text();
		cp = parseInt(cp);
		p = parseInt(p);
		// $('#myTable tr:last').after('<tr><td>' + n + '</td><td>' + p + '</td></tr>');
		$('#myTable tr:last').after('<tr><td>' + n + '</td><td>' + p + '</td></tr>');
		cp += p;
		console.log(cp);
		$('#cngdprice').text(cp);
		return false;
	});
});