import mongoose from "mongoose";
const { Schema } = mongoose;
import paginate from "mongoose-paginate-v2";
const productSchema = new Schema(
  {
    name: String,
    author: String,
    price: Number,
    priceSale: Number,
    image: Array,
    rating: Number,
    description: String,
    quantity: Number,
    description_short: String,
    isVisible: {
      type: Boolean,
      default: false,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    isNew: {
      type: Boolean,
      default: false,
    },
    hot_sale: {
      type: Number,
      default: 0,
    },
    inventoryStatus: {
      type: String,
      enum: ["INSTOCK", "LOWSTOCK", "OUTOFSTOCK"],
    },
    categoryId: {
      type: mongoose.Types.ObjectId,
      ref: "Category",
    },
  },
  { timestamps: true, versionKey: false }
);

productSchema.pre("save", function (next) {
  if (this.isModified("hot_sale") || this.isModified("price")) {
    this.priceSale = this.price * (1 - this.hot_sale / 100);
  }
 
  switch (true) {
    case this.quantity <= 0:
      this.inventoryStatus = "OUTOFSTOCK";
      break;
    case this.quantity <= 10:
      this.inventoryStatus = "LOWSTOCK";
      break;
    default:
      this.inventoryStatus = "INSTOCK";
  }
  next();
});
productSchema.plugin(paginate);
export default mongoose.model("Product", productSchema);