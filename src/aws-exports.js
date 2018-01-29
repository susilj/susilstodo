const config = {
    AWS_ACCESS_KEY_ID: 'AKIAIVSGIB4OQ32MPIEA',
    AWS_SECRET_ACCESS_KEY: 'I0RTRMtz5QnnRhCRZcV1x4jv+Iq60fCcQ7hicQnd',
    HOST: 'smrvj2g4zfcblctfarrtvlreze.appsync-api.us-east-1.amazonaws.com', // Your hostname
    REGION: 'us-east-1',  //Your region
    PATH: '/graphql',
}
config.ENDPOINT = `https://${config.HOST}${config.PATH}`;
export default config;