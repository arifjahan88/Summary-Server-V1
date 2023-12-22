const { getClient } = require("../Utilities/db");

exports.createSummary = async (req, res) => {
  const Summary = req.body;
  try {
    const client = getClient();
    const result = await client.db("Summary").collection("Summary").insertOne(Summary);
    res.status(200).json({ status: "succes", message: "Summary Added Successfully", data: result });
  } catch (error) {
    res.status(400).json({ status: "failed", message: "Summary Added Failed", data: error });
  }
};
