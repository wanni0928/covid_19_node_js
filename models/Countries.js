import mongoose from "mongoose";

const CountrySchema = new mongoose.Schema({
    country: String
});

const model = mongoose.model("Country", CountrySchema);
export default model;