const app = require('../src/app');
const session = require('supertest');
const agent = session(app);

const character = {
    id: 923,
    name: 'Ramiro',
    species: 'Human',
    gender: 'Male',
    status: 'Alive',
    origin: {
        name: 'Earth (C-137)'
    },
    image: 'image.jpg'
};

describe('Test de Rutas', () => { 
    describe(`GET /rickandmorty/character/:id`, () => {
        it("Responde con status: 200", async() => {
            const response = await agent.get('/rickandmorty/character/1');
            expect(response.statusCode).toBe(200);
        });
    
        it("Responde un objeto con las propiedades: id, name, species, gender, status, origin e image", async() => {
           const response =  await agent.get('/rickandmorty/character/1')
           const props = ["id","name","species","gender","status","origin","image"];
           props.forEach(prop => {
                expect(response.body).toHaveProperty(prop)
           })
        });

        it("Si hay un error responde con status: 500", async() => {
            response = await agent.get('/rickandmorty/character/99999a')
            expect(response.statusCode).toBe(500);
        })
    })

    describe('GET/rickandmorty/login', () => { 
        const access = {access: true};

        it("Devolver access: true si email y password son correctas", async() => {
           const response = await agent.get("/rickandmorty/login?email=ramiro.fassetta.01@gmail.com&password=123asd");
           expect(response.body).toEqual(access);
        })

        it("Devolver access: false si email y password son incorrectas", async() => {
            const response = await agent.get("/rickandmorty/login?email=ramiro.fassetta.01@gmail.com&password=123asd");
            access.access = false;
            expect(response.body).toEqual(access);
        })
    })

    describe("POST /rickandmorty/fav", () => {

        it("Debe guardar el personaje en favoritos", async() => {
            const response = await agent.post('/rickandmorty/fav').send(character);
            expect(response.body).toContainEqual(character);
        })
        it("Debe agregar personajes a favoritos sin eliminar los existentes", async() => {
            character.id = 1923;
            character.name = 'FT 37a';
            const response = await agent.post('/rickandmorty/fav').send(character);
            expect(response.body.length).toBe(2);
        })
    })

    describe('DELETE /rickandmorty/fav/:id', () => { 
        it("Si el ID solicitado no existe, debería retornar un arreglo con todos los favoritos", async() => {
            const response = await agent.delete('/rickandmorty/fav/2gh56');
            expect(response.body.length).toBe(2);
        })
        it("Si el ID enviado existe, debería eliminarlo de favoritos", async() => {
            const response = await agent.delete('/rickandmorty/fav/1923');
            expect(response.body.length).toBe(1);
        })
    })

})
