import mongoose from 'mongoose';

mongoose.set('strictQuery', false);

const connectToDB = async (dbConString) => {
  return mongoose.connect(dbConString);
};

export default connectToDB;
