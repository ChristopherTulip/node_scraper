var request 	= require("request");
var cheerio 	= require('cheerio');
var url 	= process.argv[2];
var links	= [];
request(url, function(err, response, body) { 
	if (!err && response.statusCode == 200) {
		
		$ = cheerio.load(body);
		$("a").each( function () {
			links.push( url + $(this).attr("href") );
		});

		console.log(links);
		/*
		for (i = 0; i < links.length; i++) {
			console.log(links[i]);
			//crawl(links[i]);
		} 
		*/
	}
});

function crawl (url) {
	request(url, function (err, response, body) {
		if (!err && response.statusCode == 200) {
			$ = cheerio.load(body);
			$("a").each( function () {
				links.push( $(this).attr("href") );
			});
		}
	});
}
