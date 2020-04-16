const axios = require("axios");

const fetchData = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
  return data;
};

module.exports = { fetchData };
