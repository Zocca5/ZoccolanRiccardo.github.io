
$(document).ready(function(){

	$('#btn-block').click(function(){
		$.get( 'https://api.blockcypher.com/v1/btc/main/blocks/' +$('#input-block').val(), function(data) {
				var sortie = '';
			if(data.error != undefined){
				sortie += data.error;
			}
			else{
				sortie += '</p><h3> Details of the block</h3> <table class="table">' +
				'<tr><th>Hash</th><td> '+data.hash+'</td></tr> <tr><th>Autor</th><td>'+data.height
				+'</td></tr> <tr><th>Date</th><td>'+data.time +'</td></tr> <tr><th>Size (bytes)</th><td>'
				 +data.size + '</td></tr> </table> ';

			}
			$('#resultat').html( sortie );
			});
	});

	$('#btn-trx').click(function(){
		$.get( 'https://api.blockcypher.com/v1/btc/main/txs/' +$('#input-trx').val(), function(data) {
				var sortie = '';
			if(data.error != undefined){
				sortie += data.error;
			}
			else{
				sortie +='</p><h3> Details of the transaction</h3> <table class="table">' +
				'<tr><th>Hash</th><td>'+data.hash+'</td></tr> <tr><th>Date</th><td>'+data.time +
				'</td></tr> <tr><th>Size (bytes)</th><td>' +data.size  
				+'</td></tr> <tr><th>Autor (-1 si non validée)</th><td>' + data.block_height 
				+ '</td></tr> <tr><th>Hash of the block (bytes)</th><td>' + data.block_hash + '</td></tr> </table> ';

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
				sortie +="</p><h3> Detail of the adresse</h3> <table class='table'>" 
				+'<tr><th>Adresse</th><td>'+data.address +'</td></tr> <tr><th>Nomber of satoshis given</th><td>'
				+data.total_received +'</td></tr> <tr><th>Number of satoshis send</th><td>'+ data.total_sent  
				+'</td></tr> <tr><th>balance</th><td>'+data.balance +'</td></tr> <tr><th>Number of the transaction associated</th><td>'
				+ data.n_tx + '</td></tr> </table> ';

			}
			$('#resultat').html( sortie );
			});
	});
});