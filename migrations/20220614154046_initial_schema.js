exports.up = async (knex) => {
  await knex.schema.createTable("users", (table) => {
    table.increments("id");
    table.string("firstName");
    table.string("sureName");
    table.string("email");
    table.unique("email");
    table.string("phoneNumber");
    table.string("gender");
    table.string("dateOfBirth");
    table.string("comments");
  });
};

exports.down = async (knex) => {
  await knex.schema.dropTable("users");
};
