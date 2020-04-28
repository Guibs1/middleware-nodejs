require('dotenv/config'); //temporary
const axios = require('axios');

const Authenticate = async () => {
    try {
        return await axios.post(`${process.env.APIMC_BASEURLAUTH}`, {
            grant_type: `${process.env.APIMC_GRANT_TYPE}`,
            client_id: `${process.env.APIMC_CLIENTID}`,
            client_secret: `${process.env.APIMC_CLIENTSECRET}`
        });
    } catch (error) {
        console.error(error);
    }
}

async function inserInDE(Users, Authenticate) {
    try {
        const token = await Authenticate();
        const baseUrlAuthorized = await axios.post(`${token.data.rest_instance_url}/data/v1/async/dataextensions/key:${process.env.APIMC_DATAEXTENSION_KEY}/rows`, {
            headers: {
              'Authorization': `${token.data.token_type} ${token.data.access_token}`
            },
            body: Users
        });
        return baseUrlAuthorized;
    } catch (error) {
        console.error(error);
    }
}

//module.exports = getTokenMC;