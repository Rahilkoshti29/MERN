# MERN CRUD Practice Skeleton

Matches the exam folder structure: config / controller / model / routes / app.js / .env

## How to use
1. Run `npm install` to install express, mongoose, dotenv, nodemon.
2. Make sure MongoDB is running locally (or update `MONGO_URI` in `.env` for Atlas).
3. Fill in the TODOs in this order — this is the same order you'll follow in the exam:
   - `model/indexModel.js` → define schema fields + export model
   - `config/dbconfig.js` → mongoose.connect() logic
   - `controller/indexController.js` → the 5 CRUD functions
   - `routes/indexRoute.js` → wire up routes to controller functions
   - `app.js` → import & call `connectDB()`
4. Run `npm run dev` and test all 5 endpoints in Postman/Thunder Client:
   - POST /students
   - GET /students
   - GET /students/:id
   - PUT /students/:id
   - DELETE /students/:id

Swap "Student" for whatever entity your paper asks (Book, Employee, Patient, Event, Room) —
just rename fields in the schema and controller messages; the pattern stays identical.
