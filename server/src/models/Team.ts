import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const TeamSchema = new Schema({
  name: String
});

const teamModel = mongoose.model('Teams', TeamSchema);

export default teamModel;