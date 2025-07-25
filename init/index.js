const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

//Establsihing connection between javascript and mongoDB using mongoose
main()
  .then((res) => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderlust");
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "684af5819aee33be8b28af2b",
  }));
  await Listing.insertMany(initData.data);
  console.log("Data initialized Succesfully");
};
initDB();
