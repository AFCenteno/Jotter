const express = require('express');

//initiate express for use
const app = express();

app.use(express.static(__dirname + '/public'));

app.use(express.static('./'));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

require("./notes")(app);
require("./htmlPaths")(app);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});