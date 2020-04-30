const axios = require('axios');

module.exports = async function authenticate() {
    try {
        return await axios.post(`${process.env.APIMC_BASEURLAUTH}`, {
            grant_type: `${process.env.APIMC_GRANT_TYPE}`,
            client_id: `${process.env.APIMC_CLIENTID}`,
            client_secret: `${process.env.APIMC_CLIENTSECRET}`
        });
    } catch (error) {
        throw error;
    }
}
