import express from 'express';
import Data from '../Models/DataModel.js';

const DataRouter = express.Router();

DataRouter.get('/', async (req, res) => {
  const data = await Data.find();
  res.send(data);
});

export default DataRouter;
