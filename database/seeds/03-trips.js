exports.seed = function(knex) {
  return knex('users').insert([
    {"airport name": 'LAX'},
    {airline: 'Southwest'},
    {"flight_number": '1544'},
    {"departure_time": '2:30PM'},
    {"carryon_items": '5'},
    {children: '3'},
    {"special_needs": 'We have a stroller'},

  ]);
};