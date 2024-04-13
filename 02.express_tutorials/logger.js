const logData = (request, response, next) => {
  const method = request.method;
  const url = request.url;
  const currentYear = new Date().getFullYear();

  const data = {
    method,
    url,
    currentYear,
  };

  console.log(data);
  next();
};

module.exports = logData;

// app.use(express.json());

// app.get("/api/products", (request, response) => {
//   const newproducts = products.map((product) => {
//     const { id, name, image } = product;
//     return {
//       id,
//       name,
//       image,
//     };
//   });

// app.get("/api/products/:id", (request, response) => {
//   const { id } = request.params;
//   console.log(request.params);
//   const productSelected = products.find((product) => product.id === Number(id));
//   if (!productSelected) {
//     response.status(404).send("Product was not found ");
//   }
//   return response.json(productSelected);
// });

// app.get("/api/products/:productID/review/:reviewID", (request, response) => {
//   const { productID, reviewID } = request.params;

//   const productSelected = products.find((product) => product.id === Number(id));
//   if (!productSelected) {
//     response.status(404).send("Product was not found ");
//   }
//   return response.json(productSelected);
// });

// app.get("/api/v1/query", (request, response) => {
//   console.log(request.query);
//   const selectedData = [...products];
//   console.log(selectedData);
//   const { name, limit } = request.query;
//   const soetedSelcted = selectedData.filter((datafetched) => {
//     return datafetched.name.startsWith(name);
//   });

//   if (limit) {
//     const sortedWithLimit = soetedSelcted.slice(0, Number(limit));
//     response.status(200).json(sortedWithLimit);
//   } else {
//     response.status(200).json(soetedSelcted);
//   }
// });
