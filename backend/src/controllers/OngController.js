const connection = require('../database/connection')
const crypto = require('crypto')
module.exports = {

    async index(req, res) {
        const ongs = await connection('ongs').select('*')  //obtendo lista de ongs do banco de dados
        return res.json(ongs)
    },



    async create(req, res) {
        const { name, email, whatsapp, city, uf } = req.body

        const id = crypto.randomBytes(4).toString('HEX') //gera um id para cada ong cadastrada

        await connection('ongs').insert({
            id,
            name,
            email,
            whatsapp,
            city,
            uf
        }) //inserindo no banco de dados


        return res.json({ id })
    }
}