import { Schema, model } from "mongoose";

// Write the schema
const schema = new Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  desc: {
    type: String,
    required: true,
  },
  // director:
  // {
  //   type: String,
  //   required: true,
  // },
});

// Create your model
const Movie = model("Movie", schema);

export default Movie;


// //sorting
// const results = await Movie.find().sort({ title: 1 });
// console.log(results);

// db.collection.find().sort({ rating: -1 });

// db.collection.find().sort({ rating: 1, title: 1 });


