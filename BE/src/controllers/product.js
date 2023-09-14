import Product from "../models/product";
import { productSchema } from "../Schema/product";
export const getAll = async (req, res) => {
  const { _sort = "priceSale", _limit = 100, _order = "asc" } = req.query;
  const option = {
    limit: _limit,
    sort: {
      [_sort]: _order === "asc" ? 1 : -1,
    },
  };
  try {
    const product = await Product.paginate({}, option);
    if (product.length === 0) {
      return res.json({
        message: "Không có sản phẩm nào !",
      });
    }
    return res.json({
      message: "Lấy danh sách sản phẩm thành công !",
      product,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const get = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) {
      return res.json({
        message: "Lấy sản phẩm không thành công !",
      });
    }
    return res.json({
      message: "Lấy 1 sản phẩm thành công !",
      product,
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ message: "Id không hợp lệ" });
    }
  }
};
export const create = async (req, res) => {
  try {
    //validate
    const { error } = productSchema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json({
        message: error.details.map((error) => error.message),
      });
    }
    // Lấy thông tin từ request body
    const {
      name,
      author,
      price,
      priceSale,
      image,
      rating,
      description,
      description_short,
      isVisible,
      featured,
      hot_sale,
      isNew,
      categoryId,
    } = req.body;
;

    // Tạo sản phẩm mới với thông tin đã được format
    const product = await Product.create({
      name,
      author,
      price,
      priceSale,
      image,
      rating,
      description,
      description_short,
      isVisible,
      featured,
      hot_sale,
      isNew,
      categoryId,
    });

    if (!product) {
      return res.json({
        message: "Thêm sản phẩm không thành công!",
      });
    }
    return res.json({
      message: "Thêm sản phẩm thành công",
      product,
    });
  } catch (error) {
    return res.status(400).json({
      message: error.message,
    });
  }
};

export const update = async (req, res) => {
  try {
    // Validate
    const { error } = productSchema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json({
        message: error.details.map((error) => error.message),
      });
    }
  
    // Lấy thông tin sản phẩm từ yêu cầu
    const updatedProduct = req.body;
    // Cập nhật số lượng tổng cộng và trạng thái tồn kho
    switch (true) {
      case updatedProduct.quantity <= 0:
        updatedProduct.inventoryStatus = "OUTOFSTOCK";
        break;
      case updatedProduct.quantity <= 10:
        updatedProduct.inventoryStatus = "LOWSTOCK";
        break;
      default:
        updatedProduct.inventoryStatus = "INSTOCK";
    }

    // Cập nhật sản phẩm
    const product = await Product.findByIdAndUpdate(req.params.id, updatedProduct, {
      new: true,
    });

    if (!product) {
      return res.json({
        message: "Cập nhật sản phẩm không thành công!",
      });
    }

    return res.json({
      message: "Cập nhật sản phẩm thành công!",
      product,
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ message: "Id không hợp lệ" });
    }
    return res.status(400).json({ message: error.message });
  }
};

export const remove = async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      return res.json({
        message: "Xóa sản phẩm không thành công",
      });
    }
    return res.json({
      message: "Xóa sản phẩm thành công",
      product,
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({ message: "Id không hợp lệ" });
    }
  }
};
