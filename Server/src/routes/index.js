const {getCharById} = require("./../controllers/getCharById");
const {postFav, deleteFav} = require("./../controllers/handleFavorites");
const {login} = require("./../controllers/login")

const express = require("express");
const Router = express.Router()

Router.get("/character/:id", (req, res) => {
    getCharById(req,res);
})

Router.get("/login", (req, res) => {
    login(req,res);
})

Router.post("/fav", (req, res) => {
    postFav(req,res);
})

Router.delete("/fav/:id", (req, res) => {
    deleteFav(req,res);
})

//poniendo directamente la funcion, en vez del callback, es valido tambien (es lo que habia hecho)
module.exports = Router;