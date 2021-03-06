const { json } = require("express");
const fs = require("fs")

module.exports = (app) => {
    let list = JSON.parse(fs.readFileSync('./db/db.json', 'utf-8'))

    app.get('/api/notes', (req, res) => {
        return res.json(list)
    });

    app.post('/api/notes', (req, res) => {
        let noteid;
        if (list.length) {
            noteid = list.length + 1
        }
        else {
            noteid = 1;
        }
        let id = noteid
        list.push({id, ...req.body});
    });

    app.delete('/api/notes/:id', (req, res) => {
        const {id} = req.params;
        const idTodelete = list.findIndex(p => p.id == id);
        list.splice(idTodelete, 1);
        return res.send();
    })
}