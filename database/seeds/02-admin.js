exports.seed = function(knex) {
  return knex('users').insert([
    {username: 'LambdaStudent247'},
    {password: 'password'},
    
  ]);
};