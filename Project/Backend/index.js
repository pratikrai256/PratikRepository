const app=require('./app.js')
const logger=require('./config/logger.js')
const port=4000

app.listen(port, ()=>{
    logger.info(`The server is listening on port ${port}`);
})