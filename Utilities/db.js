const { MongoClient, ServerApiVersion } = require("mongodb");

// const uri = "mongodb://localhost:27017";
const userDB = "summaryDB";
const passwordDB = "eKFROGErKfjVmPvL";
const uri = `mongodb+srv://${userDB}:${passwordDB}@cluster0.b8vg83y.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

module.exports = {
  connectToDatabase: () => client.connect(),
  getClient: () => client,
};
