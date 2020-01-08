exports.seed = function(knex) {
  return knex('users').insert([
    {email: 'LambdaStudent247@Lambda.edu'},
    {password: 'password'},

  ]);
};
