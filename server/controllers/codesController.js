const { v4: uuidv4 } = require("uuid");
const Code = require("../database/schemas/code");

exports.createCode = async (req, res) => {
  try {
    const { username, code, percentage } = req.body;
    if (!code || !percentage) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields",
      });
    }
    var lowercasecode = code.toLowerCase();
    if (lowercasecode.length > 8) {
      return res.status(409).json({
        success: false,
        message: "Code should not exceed 8 characters.",
      });
    }
    const existingCode = await Code.findOne({ code: lowercasecode });
    if (existingCode) {
      return res.status(409).json({
        success: false,
        message: "Code already exists in the database",
      });
    }

    const randomId = uuidv4();
    let new_code = await Code.create({
      id: randomId,
      owner: username ? username : null,
      code: lowercasecode,
      percentage: percentage,
    });

    res.status(201).json({
      success: true,
      message: `${lowercasecode} is Created Successfully`,
      data: new_code,
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Internal Server Error", error: err });
  }
};
exports.deleteCode = async (req, res) => {
  const { id } = req.body;
  if (!id) {
    return res.status(400).json({
      success: false,
      message: "Please provide code ID",
    });
  }
  const existingCode = await Code.findOne({ id: id });
  if (!existingCode) {
    return res.status(409).json({
      success: false,
      message: "Code not exists in the database",
    });
  }

  Code.findOneAndDelete({
    id: id,
  })
    .then((doc) => {
      return res.status(202).json({
        success: true,
        message: `${doc.id} is deleted Successfully`,
        data: doc,
      });
    })
    .catch((err) => {
      res
        .status(500)
        .json({ success: false, message: "Internal Server Error", error: err });
    });
};
exports.allCodes = async (req, res) => {
  try {
    const data = await Code.find();
    return res.status(200).json({
      status: true,
      data: {
        length: data.length,
        docs: data,
      },
    });
  } catch (err) {
    res
      .status(500)
      .json({ success: false, message: "Internal Server Error", error: err });
  }
};
