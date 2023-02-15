const qrData = require("../Models/qrDataModel");
const randomstring = require("randomstring");


const qrDataContoller = {

    createCatalog: async (req, res) => {
    try {
        const refNumber = randomstring.generate()
        console.log("refnumber", refNumber)

        const {productName, productDesc } = req.body;

          const data = await qrData({
            productQRCode:refNumber,
            productName,
            productDesc
          });
    
          const allData = await data.save();
          res.status(200).json({ allData: allData });

        } catch (error) {
          console.log(error);
          res.status(500).json({ msg: "Something went wrong" });
        }
    },

    readCatalog: async (req, res) => {
    try {
        const getData = await qrData.find({})
        res.status(200).json("getData", getData);

    } catch (error) {
      console.log(error);
      res.status(500).json({ msg: "Something went wrong" });
    }
  }
};

module.exports = { qrDataContoller };