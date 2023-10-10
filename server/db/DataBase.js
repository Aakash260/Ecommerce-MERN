import mongoose from 'mongoose';

const DataBase = async () => {
  try {

    const db = await mongoose.connect((process.env.MONGO_URL))
    console.log('connected')
  } catch (error) {
    console.log(error)
  }
}

export default DataBase