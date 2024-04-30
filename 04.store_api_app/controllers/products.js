const { errorWrapper } = require("../middleware/erroWrapper");
const allProductsDB = require("../models/product");

const getAllproducts = errorWrapper(async (request, response) => {
  const { company, featured, name, sort } = request.query;
  const queryObject = {};

  if (featured) {
    queryObject.featured = featured === "true" ? false : true;
  }
  if (company) {
    queryObject.company = company;
  }

  if (name) {
    queryObject.name = { $regex: name, $options: "i" };
  }

  let datafetched = allProductsDB.find(queryObject);

  if (sort) {
    console.log(sort);
    const newSort = sort.split(",").join(" ");
    datafetched.sort(newSort);
  } else {
    datafetched.sort("-createdAt");
  }

  const myDatafetched = await datafetched;
  console.log(myDatafetched);
  response.status(200).json({
    status: "success",
    products: myDatafetched,
    totlaClick: datafetched.length,
  });
});

const getAllProductStatic = errorWrapper(async (request, response) => {
  const { numericFilters } = request.query;

  const queryObject = {};

  if (numericFilters) {
    const operatorMap = {
      ">": "$gt",
      ">=": "$gte",
      "=": "$eq",
      "<": "$lt",
      "<=": "$lte",
    };
    const regEx = /\b(<|>|>=|=|<|<=)\b/g;
    let filters = numericFilters.replace(
      regEx,
      (match) => `-${operatorMap[match]}-`
    );

    const options = ["price", "rating"];
    filters = filters.split("-");
    const [fiels, operator, unitNumber] = filters;

    filters.forEach((element) => {
      if (options.includes(element)) {
        queryObject[fiels] = { [operator]: Number([unitNumber]) };
      }
    });
  }

  console.log(queryObject);

  let datafetched = await allProductsDB.find(queryObject);
  return response.status(200).json({
    total: datafetched.length,
    data: datafetched,
  });
});

module.exports = { getAllproducts, getAllProductStatic };
