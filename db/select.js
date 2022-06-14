const { db } = require("./dbConnection");

exports.firstName = async function (firstName) {
  const result = await db("users").select().where({ firstName: firstName });
  return result;
};

exports.duplicateEmail = async function duplicateEmail(email) {
  const result = await db("users").select().where({ email: email });
  if(result.length) {
    throw "This email exist!!!"
  }
  return result;
};
