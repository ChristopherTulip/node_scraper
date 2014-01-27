var request 	= require("request");
var cheerio 	= require('cheerio');
var url 	= process.argv[2];
var links	= [];

// finds and prints all links on a page.
request(url, function(err, response, body) { 
	if (!err && response.statusCode == 200) {
		
		$ = cheerio.load(body);
		$("a").each( function () {
			links.push( $(this).attr("href") );
		});

		console.log(links);
	}
});

