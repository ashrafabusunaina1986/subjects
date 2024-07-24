import { Schema, models, model } from "mongoose";

const subjectSchema = new Schema({
  title: String,
  description: String,
  country:String,
  city:String,
  region:String,
  image: {
    filename: String,
    url: String,
  },
  endDate: String,
});

const Subject = models.Subject || model("Subject", subjectSchema);
export default Subject;
