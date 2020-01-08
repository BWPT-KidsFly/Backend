# BW -Kids-Fly

### Register New User

POST to `https://bw-kids-fly.herokuapp.com/api/auth/register/user`

Takes an object including:
```javascript 
{
    "username": "LambdaStudent247",
    "password": "password",
    "confirm": "password",
    "first_name": "Heather",
    "last_name": "Ridgill",
    "street_address": "123 Lambda Court",
    "city": "LambdaVille",
    "state": "CA",
    "zip": "92831",
    "phone_number": "555-555-5555",
    "home_airport": "LAX"
}
```

Example Output:

{
    "id": 1,
    "username": "LambdaStudent247",
    "password": "$2a$10$6NrOGH/43.iC.t8gndaGV.N3ZNRnaaoln44K.urxOCsgmdwp67EeK",
    "first_name": "Heather",
    "last_name": "Ridgill",
    "street_address": "123 Lambda Court",
    "city": "LambdaVille",
    "state": "CA",
    "zip": "92831",
    "phone_number": "555-555-5555",
    "home_airport": "LAX",
    "admin": 0
}



### Login Existing User

POST to `https://bw-kids-fly.herokuapp.com/api/auth/login/user`

Takes an object including:
```javascript
{
   "username": "LambdaStudent247",
    "password": "password"
}
```

Example Output:

{
    "message": "Welcome LambdaStudent247!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyaWQiOjEsInVzZXJuYW1lIjoiTGFtYmRhU3R1ZGVudDI0NyIsInJvbGVzIjoidXNlciIsImlhdCI6MTU3ODM3MTE5NCwiZXhwIjoxNTc4NDU3NTk0fQ.N1XJpSGk2n33FdnMGaLn4TGf-P2C8XS6II8G_KqyWJc"
}


### Register New Admin

POST to `https://bw-kids-fly.herokuapp.com/api/adminauth/register/admin`

Takes an object including:
```javascript 
{
    "username": "LambdaStudent5000",
    "password": "password"
   
}
```

Example Output:

{
    "id": 1,
    "username": "LambdaStudent5000",
    "password": "$2a$10$X58bC9c2vZxnG6mgvf16uexgaaiyIDcyxRwLEw/34G54DF8r3mCaK"
}

### Login Existing Admin

POST to `https://bw-kids-fly.herokuapp.com/api/adminauth/login/admin`

Takes an object including:
```javascript
{
  "username": "LambdaStudent5000",
  "password": "password"
}
```

Example Output:

{
    "message": "Welcome admin LambdaStudent5000!",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhZG1pbmlkIjoxLCJ1c2VybmFtZSI6IkxhbWJkYVN0dWRlbnQ1MDAwIiwicm9sZXMiOiJhZG1pbiIsImlhdCI6MTU3ODM3MTQwMywiZXhwIjoxNTc4NDU3ODAzfQ.BLegBiUvih24THUB7LgzEFOnErW69vNXpfrMo9xfn50"
}



### Get all registered users

GET to `https://bw-kids-fly.herokuapp.com/api/user/`

Takes an object including:
```javascript
[
    {
        "id": 1,
        "username": "LambdaStudent247",
        "password": "$2a$10$6NrOGH/43.iC.t8gndaGV.N3ZNRnaaoln44K.urxOCsgmdwp67EeK"
    },
    {
        "id": 2,
        "username": "LambdaStudent247",
        "password": "$2a$10$65ZgEq5rUvjcw4WDfZsei.OysphHJWS/0VpSCvbgey5MI8qCyWWce"
    }
]
```

### Post a new trip

POST to `https://bw-kids-fly.herokuapp.com/api/trips/trip`

Takes a JWT and an object including: 

```javascript
{
"airport_name": "SFO",
"airline": "1255",
"flight_number": "25",
"departure_time": "12PM",
"carryon_items": "3",
"checked_items": "1",
"children": "10",
"special_needs": "We have a stroller",
}
```

Example Output:

{
    "message": "Congratulations, you successfully created a new trip!",
    "accountID": [
        1
    ]
}

### Update trip

PUT to `https://bw-kids-fly.herokuapp.com/api/trip/:id` //where id is trip's ID

Takes a JWT and an object containing any of the existing trip properties that are to be updated.

### Delete a trip

DELETE to `https://bw-kids-fly.herokuapp.com/api/trip/:id` //where id is trip's ID

Takes a JWT

### Get all trips items in database

GET to `https://bw-kids-fly.herokuapp.com/api/trips`


Will be returned an array with trip objects.

### Submitting an application

POST to `https://bw-kids-fly.herokuapp.com/api/apps`

```javascript
{
	"email": "Heather.Ridgill@gmail.com",
	"password": "password"
}
```

Example Output:
{
    "message": "You have now applied to be a KidsFlyConnection Staff Member!"
}



