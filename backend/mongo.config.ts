import {connect} from 'mongoose'

export const MongoDbConfig  = async () => {

    const connectionString = process.env.ENV_DB_CONNECT || "" //me traigo la variable del env
  
    return await connect(connectionString)
    .then(() => {})
    .catch((e) => {
      console.error('Error conectando a la bd', e)
    })
  }