const config = {
    AWS_ACCESS_KEY_ID: '',
    AWS_SECRET_ACCESS_KEY: '',
    HOST: '', // Your hostname
    REGION: '',  //Your region
    PATH: '/graphql',
}
config.ENDPOINT = `https://${config.HOST}${config.PATH}`;
export default config;