import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

export const JobSchema = new Schema(
  {
    company: { type: String, required: true, minlength: 3, maxlength: 50 },
    jobTitle: { type: String, required: true, minlength: 3, maxlength: 100 },
    hours: { type: Number, default: 0, min: 0, max: 100 },
    rate: { type: Number, default: 10, min: 1, max: 1000000 },
    description: { type: String, required: true, minlength: 1, maxlength: 500 },
    imgUrl: {
      type: String,
      default:
        "https://i.pinimg.com/236x/2d/0d/55/2d0d550ae0d7ccddf161f92c4691cd25.jpg",
    },
    sellerId: { type: ObjectId, required: true, ref: "Account" },
  },
  { timestamps: true, toJSON: { virtuals: true } }
);

JobSchema.virtual("seller", {
  localField: "sellerId",
  foreignField: "_id",
  justOne: true,
  ref: "Account",
});
