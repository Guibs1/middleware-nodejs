require('dotenv/config'); //temporary
const axios = require('axios');

const authentication = async () => {
    try {
        return await axios.post(`${process.env.APIMC_BASEURLAUTH}`, {
            grant_type: `${process.env.APIMC_GRANT_TYPE}`,
            client_id: `${process.env.APIMC_CLIENTID}`,
            client_secret: `${process.env.APIMC_CLIENTSECRET}`
        });
    } catch (error) {
        console.error(error)
    }
}

async function getTokenMC() {
    const token = await authentication();
    return token.data.access_token;
}
console.log(getTokenMC());
//module.exports = getTokenMC;