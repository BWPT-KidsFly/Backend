exports.seed = function(knex) {
  return knex('users').insert([
    {"airport name": 'LAX', airline: 'Southwest',"flight_number": '1544', "departure_time": '2:30PM',"carryon_items": '5', children: '3', "special_needs": 'We have a stroller'},
    {"airport name": 'SFO', airline: 'American Airlines',"flight_number": '300', "departure_time": '5PM',"carryon_items": '4', children: '5', "special_needs": 'NA'},
    {"airport name": 'MEX', airline: 'International',"flight_number": '2463', "departure_time": '8AM',"carryon_items": '2', children: '1', "special_needs": ''},


  ]);

  
};