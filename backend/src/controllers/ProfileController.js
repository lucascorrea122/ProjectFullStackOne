const connection = require ('../database/connection');

module.exports ={
    async index(request, response){
        const ong_id = request.headers.authorization;
        const incidents = await connection('incidents').where('ongs_id', ong_id).select('*');
        // const incidents = await connection('incidents').select('*');
        return response.json(incidents);

       
    }

}