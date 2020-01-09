exports.seed = function(knex) {
  return knex('users').insert([
    {email: 'LambdaStudent365@lambda.edu'},
    {password: 'password'},
    {first_name: 'Heather'},
    {last_name: 'Ridgill'},
    {confirm: 'password'},

  ]);
};
