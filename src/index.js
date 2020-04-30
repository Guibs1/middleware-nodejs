//const jobs = require('./scheduler');
//const api = require('./services/MarketingCloud/api');
require('dotenv/config'); //temporary
const axios = require('axios');

function start(element, index, array) {
    return element.start();
}

//jobs.every(start);

async function inserInDE(body, token) {
    try {
        const baseUrlAuthorized = await axios.post(`${process.env.APIMC_BASEURL}/data/v1/async/dataextensions/key:${process.env.APIMC_DATAEXTENSION_KEY}/rows`, body, {
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json'
            }
        });
        return baseUrlAuthorized;
    } catch (error) {
        console.error(error);
    }
}


async function test() {
    const users = {
        items: [{
            nome: "Guilherme",
            email: "guilherme.salviano@teste.com",
            celular: "5511912345678"
         }]
    }
    const tokens = '';
    console.log(await inserInDE(users, tokens));

}
test()