exports.seed = function(knex) {
  return knex('users').insert([
    {"airport name": 'LAX'},
    {airline: 'Southwest'},
    {"flight number": '1544'},
    {"departure time": '2:30PM'},
    {"carryon items": '5'},
    {children: '3'},
    {"special needs": 'We have a stroller'},

  ]);
};