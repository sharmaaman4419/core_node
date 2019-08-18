7. // Write respective headers object below.

8. // Write parsed object below of the url ``http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4
 var Purl = require("url");
 url = "http://localhost:3000/api/v3?token=8372fcb8y2874b2t478t6t48cbtbc72t4"
 var output = Purl.parse(url,true);
 console.log(output);
9. // Write parsed query object
query: [Object: null prototype] {
    token: '8372fcb8y2874b2t478t6t48cbtbc72t4'
