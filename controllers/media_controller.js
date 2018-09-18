var express = require("express");
var db = require("../models");

var router = express.Router();

router.get("/", function(req, res) {
    // media.selectAll(function(data) {
    //     res.render("index", {media: data})
    // });
    db.Media.findAll({}).then(function(dbMedia) {
        res.render("index", {media: dbMedia});
    })
});

router.post("/api/media", function(req, res) {
    // console.log(req.body)
    // media.insertOne("media_name", req.body.media_name, function(result) {
    //     res.json({ id: result.insertId})
    // });
    db.Media.create({
        media_name: req.body.media_name
    }).then(function(dbMedia) {
        res.json({ id: dbMedia.insertId})
    });
});

router.put("/api/media/:id", function(req, res) {
    // condition = "id = " + req.params.id
    // media.updateOne({completed: 1}, condition, function(result) {
    //     res.json(result)
    // });
    db.Media.update({
        completed: 1
    }, {
        where: {
            id: req.params.id
        }
    }).then(function(dbMedia) {
        res.json(dbMedia);
    })
});

module.exports = router;