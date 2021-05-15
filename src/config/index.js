
require('dotenv').config();

const config = {
    ENVIRONMENT: process.env.ENVIRONMENT,
    GOOGLE_OAUTH_CLIENT_ID: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_ID,
    GOOGLE_OAUTH_CLIENT_SECRET: process.env.REACT_APP_GOOGLE_OAUTH_CLIENT_SECRET
};

export default config;