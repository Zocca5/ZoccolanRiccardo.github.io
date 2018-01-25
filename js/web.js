$(document).ready(function() {
	$.ajax({
		url : "https://bitcoin.mubiz.com/blocks",
		dataType : "json",
		contentType : "application/json; charset=utf-8",
		type : "GET",
		timeout:	"5000",
		async : false,

		success : function(data) {
			$('#number_blocks').append(data.blocks);
		},

		error : function(xhr, status, err) {
			$('#number_blocks').append(err+" N/A");
		}
	});
});


	$('#btn-block').click(function(){
		$.get( 'https://api.blockcypher.com/v1/btc/main/blocks/' +$('#input-block').val(), function(data) {
				var sortie = '';
			if(data.error != undefined){
				sortie += data.error;
			}
			else{
				sortie += '</p><h3> Détails du block</h3> <table class="table">' +
				'<tr><th>Hash</th><td> '+data.hash+'</td></tr> <tr><th>Hauteur</th><td>'+data.height
				+'</td></tr> <tr><th>Date</th><td>'+data.time +'</td></tr> <tr><th>Taille (bytes)</th><td>'
				 +data.size + '</td></tr> </table> ';

			}
			$('#result').html( sortie );
			});
	});

		$('#btn-trx').click(function(){
		$.get( 'https://api.blockcypher.com/v1/btc/main/txs/' +$('#input-trx').val(), function(data) {
				var sortie = '';
			if(data.error != undefined){
				sortie += data.error;
			}
			else{
				sortie +='</p><h3> Détails de la transaction</h3> <table class="table">' +
				'<tr><th>Hash</th><td>'+data.hash+'</td></tr> <tr><th>Date</th><td>'+data.time +
				'</td></tr> <tr><th>Taille (bytes)</th><td>' +data.size  
				+'</td></tr> <tr><th>Hauteur (-1 si non validée)</th><td>' + data.block_height 
				+ '</td></tr> <tr><th>Hash du block (bytes)</th><td>' + data.block_hash + '</td></tr> </table> ';

			}
			$('#resultat').html( sortie );
			});
	});

	$('#btn-add').click(function(){
		$.get( 'https://api.blockcypher.com/v1/btc/main/addrs/' +$('#input-add').val(), function(data) {
				var sortie = '';
			if(data.error != undefined){
				sortie += data.error;
			}
			else{
				sortie +="</p><h3> Détails de l'adresse</h3> <table class='table'>" 
				+'<tr><th>Adresse</th><td>'+data.address +'</td></tr> <tr><th>Nombre de satoshis reçus</th><td>'
				+data.total_received +'</td></tr> <tr><th>Nombre de satoshis envoyés</th><td>'+ data.total_sent  
				+'</td></tr> <tr><th>balance</th><td>'+data.balance +'</td></tr> <tr><th>Nombre de transactions associées</th><td>'
				+ data.n_tx + '</td></tr> </table> ';

			}
			$('#resultat').html( sortie );
			});
	});