exports.seed = function(knex) {
  return knex('users').insert([
    {username: 'LambdaStudent247'},
    {password: 'password'},
    {"first name": 'Heather'},
    {"last name": 'Ridgill'},
    {"street address": '123 Crown Dr'},
    {city: 'Lambdaville'},
    {state: 'CA'},
    {zip: '92831'},
    {"phone number": '555-555-5555'},
    {"home airport": 'LAX'},

    
  ]);
};