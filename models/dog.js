const { Schema, model } = require("mongoose");

//DOG SCHEMA
const dogSchema = new Schema(
  {
    name: String,
    age: Number,
    img: String,
  },
  { timestamps: true }
);

//DOG MODEL
const Dog = model("dog", dogSchema);

//EXPORT MODEL
module.exports = Dog;
