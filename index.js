var request = require('request');
var Discord = require('discord.io');

var bot = new Discord.Client({
	token: "MzIzNzk4NTY0NjE2NjY3MTM3.DCAYhg.TyBHpATcwpb58690wxEDBS1Jbgk",
	autorun: true
});



bot.on('ready', function() {
	console.log('Logged in as %s - %s\n', bot.username, bot.id);
});



bot.on('message', function(user, userID, channelID, message, event) {
	if (message === "ping") {
		bot.sendMessage({
			to: channelID,
			message: "pong"
		});
	}
	if (message === 'help') {
		bot.sendMessage({
			to: channelID,
			message: "Commandes possibles : 'eth, etheur, ethusd, btc, btcusd, gdax'"
		});	
	}

	if (message === "eth" || message==='etheur') {
		var url = 'https://api.kraken.com/0/public/Ticker?pair=etheur';
		var msg='EMPTY';
		request.get({
			url: url,
			json: true,
			headers: {'User-Agent': 'request'}
		}, (err, res, data) => {
			if (err) {
				console.log('Error:', err);
				msg='Error '+ err;
			} else if (res.statusCode !== 200) {
				msg = 'Error Status code : '+res.statusCode;
				console.log('Status:', res.statusCode);
			} else {
		      // data is already parsed as JSON:
		      console.log(data.result.XETHZEUR.a[0]);
		      msg = data.result.XETHZEUR.a[0]+'';
		      console.log(msg);
		      bot.sendMessage({
		      	to: channelID,
		      	message: ("KRAKEN - ETH/EUR : " + msg)
		      });
		  }
		});

	}
	if (message==='ethusd') {
		var url = 'https://api.kraken.com/0/public/Ticker?pair=ethusd';
		var msg='EMPTY';
		request.get({
			url: url,
			json: true,
			headers: {'User-Agent': 'request'}
		}, (err, res, data) => {
			if (err) {
				console.log('Error:', err);
				msg='Error '+ err;
			} else if (res.statusCode !== 200) {
				msg = 'Error Status code : '+res.statusCode;
				console.log('Status:', res.statusCode);
			} else {
		      // data is already parsed as JSON:
		      console.log(data.result.XETHZUSD.a[0]);
		      msg = data.result.XETHZUSD.a[0]+'';
		      console.log(msg);
		      bot.sendMessage({
		      	to: channelID,
		      	message: ("KRAKEN - ETH/USD : " + msg)
		      });
		  }
		});

	}
	if (message === "btc"|| message === "btceur") {
		var url = 'https://api.kraken.com/0/public/Ticker?pair=xbteur';
		var msg='EMPTY';
		request.get({
			url: url,
			json: true,
			headers: {'User-Agent': 'request'}
		}, (err, res, data) => {
			if (err) {
				console.log('Error:', err);
				msg='Error '+ err;
			} else if (res.statusCode !== 200) {
				msg = 'Error Status code : '+res.statusCode;
				console.log('Status:', res.statusCode);
			} else {
		      // data is already parsed as JSON:
		      console.log(data.result.XXBTZEUR.a[0]);
		      msg = data.result.XXBTZEUR.a[0]+'';
		      console.log(msg);
		      bot.sendMessage({
		      	to: channelID,
		      	message: ("KRAKEN - BTC/EUR : " + msg)
		      });
		  }
		});
	}
	if (message === "btcusd") {
		var url = 'https://api.kraken.com/0/public/Ticker?pair=xbtusd';
		var msg='EMPTY';
		request.get({
			url: url,
			json: true,
			headers: {'User-Agent': 'request'}
		}, (err, res, data) => {
			if (err) {
				console.log('Error:', err);
				msg='Error '+ err;
			} else if (res.statusCode !== 200) {
				msg = 'Error Status code : '+res.statusCode;
				console.log('Status:', res.statusCode);
			} else {
		      // data is already parsed as JSON:
		      console.log(data.result.XXBTZUSD.a[0]);
		      msg = data.result.XXBTZUSD.a[0]+'';
		      console.log(msg);
		      bot.sendMessage({
		      	to: channelID,
		      	message: ("KRAKEN - BTC/USD : " + msg)
		      });
		  }
		});
	}
	if (message === "gdax") {
		var url = 'https://api.gdax.com/products/ETH-USD/ticker';
		var msg='EMPTY';
		request.get({
			url: url,
			json: true,
			headers: {'User-Agent': 'request'}
		}, (err, res, data) => {
			if (err) {
				console.log('Error:', err);
				msg='Error '+ err;
			} else if (res.statusCode !== 200) {
				msg = 'Error Status code : '+res.statusCode;
				console.log('Status:', res.statusCode);
			} else {
		      // data is already parsed as JSON:
		      msg = data.price+'';
		      console.log(msg);
		      bot.sendMessage({
		      	to: channelID,
		      	message: ("GDAX - ETH/USD : " + msg)
		      });
		  }
		});
	}
});