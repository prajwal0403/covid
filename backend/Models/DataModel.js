import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema(
  {
    NewConfirmed: { type: Number, required: true },
    TotalConfirmed: { type: Number, required: true },
    NewDeaths: { type: Number, required: true },
    TotalDeaths: { type: Number, required: true },
    NewRecovered: { type: Number, required: true },
    TotalRecovered: { type: Number, required: true },
    Date: { type: Date, required: true },
    Countries: [],
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Data = mongoose.model('Data', dataSchema);
export default Data;
