import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI;
let clientPromise;

if (!clientPromise) {
  const mongoClient = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  clientPromise = mongoClient
    .connect()
    .then(() => {
      console.log("Connected to Mongo");
      return mongoClient;
    })
    .catch((err) => {
      console.error("MongoDB connection error:", err);
      throw err;
    });
}

export default clientPromise;
