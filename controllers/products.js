const products = [];

exports.getProducts = (req, res) => {
  res.render("shop", { prods: products, pageTitle: "Shop", path: "/" });
};

exports.postAddProducts = (req, res) => {
  products.push({ title: req.body.title });
  res.redirect("/");
};

exports.getAddProducts = (req, res) => {
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
};
