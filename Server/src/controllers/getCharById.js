const axios = require("axios");

const URL = "https://rickandmortyapi.com/api/character";

const getCharById = async(req, res) => {
    try {
        const { id } = req.params;
        const { data } = await axios(`${URL}/${id}`);

        if(!data.name) throw new Error(`Faltan datos del personaje con ID: ${id}`);

        const char = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status
        }
        return res.status(200).json(char);
        // return res.status(404).send("Not found");
        
    } catch (error) {
       return error.message.includes("ID")
       ? res.status(400).send(error.message)
       : res.status(500).send(error.response.data.error)

    }
}

module.exports = {
    getCharById
};