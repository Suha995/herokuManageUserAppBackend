import express from "express";
import mongodb, { MongoClient } from "mongodb";
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
const port = process.env.PORT || 3016;
const mongoConnectString = process.env.MONGODB_URI;
const client = new MongoClient(mongoConnectString);

app.use(express.json()); // that was body parser
app.use(cors());


const execMongo = async (done) => { // i write it as an external function because it is reusable
  await client.connect();
  const db = client.db("api001");
  done(db); // i don't write done as an external function because i need it only once 
  
};

app.get("/", (req, res) => {
  execMongo(async (db) => {
    const users = await db
      .collection("users100")
      .find()
      .project({ name: 1, username: 1, email: 1 })
      .toArray();
    res.json(users);
  });
});

app.delete("/deleteuser/:id", (req, res) => {
  const id = req.params.id;
  execMongo(async (db) => {
    const deleteResult = await db
      .collection("users100")
      .deleteOne({ _id: new mongodb.ObjectId(id) });
    res.json({
      result: deleteResult,
    });
  });
});

app.post("/insertuser", (req, res) => {
  const user = req.body.user;
  execMongo(async (db) => {
    const insertResult = await db.collection('users100').insertOne(user);
    res.json({
      result: insertResult,
    });
  });
});

app.patch("/edituseremail/:id", (req, res) => {
    const email = req.body.email;
    const id = req.params.id;
    execMongo(async (db) => {
        const updateResult = await db.collection('users100').updateOne({ _id: new mongodb.ObjectId(id) }, { $set: { email } });
      res.json({
        result: updateResult,
      });
    });
  });

app.listen(port, () => {
  console.log(`listen on port ${port}`);
});
