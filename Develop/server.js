const express = require('express');

//initiate express for use
const app = express();

app.use(express.static(__dirname + '/public'));

app.use(express.static('./'));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

require("./notes")(app);
require("./htmlPaths")(app);

app.listen(8000, function() {
    console.log('App running on PORT 8000')
})