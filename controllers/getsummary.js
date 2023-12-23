const { getClient } = require("../Utilities/db");

exports.getSummary = async (req, res) => {
  try {
    const client = getClient();
    const result = await client.db("Summary").collection("Summary").find({}).toArray();
    res.status(200).json({ status: "success", message: "Summary Get Successfully", data: result });
  } catch (error) {
    res.status(400).json({ status: "Failed", message: "Summary Get Failed", data: error });
  }
};
