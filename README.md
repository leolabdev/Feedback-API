# Rest API for sending feedbacks

## Backend

## Start Project 

npm install 

npm run start, navigate to http://localhost:3000/

http://localhost:3000/docs is path to the swagger 

## Frontend
Next we can go the frontend folder and write same commands:

npm install 
npm run start, navigate to http://localhost:4200/


## Implementations/problems
Backend is almost fully implemented, frontend requires normal authorization system

### Backend 
Loging(JWT) is implemented , but at the moment works only at Backend side, so now by default it is disabled for testing frontend side.

For enabling jwt we need uncomment in src/feedback/feedback.controller.ts all @UseGuards(JwtAuthGuard):s 

After it we can test it via Postman:

1) Create new user,  Post http://localhost:3000/users/create with  {
 "username": "student",
 "password": "Koodaus1"
} 
2) Use this user for loging  Post http://localhost:3000/login with body  {
 "username": "student",
 "password": "Koodaus1"
} 
3) It will return us JWT, with which one we can handle now our feedbackes ( we should put the JWT to the @params Authorization / type: Bearer token)

### Frontend 

1) For post new feedback u have to  write existed username of some created user 





 
 
 


