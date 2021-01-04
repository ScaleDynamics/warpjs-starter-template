const axios = require("axios");

const hello = function (name) {
  return `Hello ${name} from Node.js ${process.version}`;
};

const fetchData = async () => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");
  return data;
};

module.exports = { hello, fetchData };
