
require('dotenv').config();

const isDevelop = process.env.ENVIRONMENT === 'develop';
const streamsApiBaseUrl = isDevelop ? 'http://streams-api:5001/' : process.env.REACT_APP_STREAMS_API_BASE_URL
const config = {
    ENVIRONMENT: process.env.ENVIRONMENT,
    DEVELOP: isDevelop,
    GOOGLE_OAUTH_CLIENT_ID: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
    GOOGLE_OAUTH_CLIENT_SECRET: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_SECRET,
    STREAMS_API_BASE_URL: streamsApiBaseUrl 
};

export default config;