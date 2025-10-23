# Week 01 — MongoDB

This folder contains all the my code and exercises from **Week 1** of the PLP MERN Stack Specialization live sessions.  
The focus of this week is **MongoDB fundamentals** — connecting to a database, defining schemas with Mongoose, and performing CRUD operations.

---

## Topics Covered
- Introduction to MongoDB and Mongoose
- Database connection setup (`db.js`)
- Schema and model definitions (`/Models`)
- CRUD operations (Create, Read, Update, Delete)
- Data seeding using `seed.js`
- Using environment variables for MongoDB connection

---

## Folder Contents
```

week-01-mongodb/
├─ Models/          # Contains Mongoose schema and model definitions
├─ crud.js          # Example CRUD operation scripts
├─ db.js            # Database connection setup using Mongoose
├─ seed.js          # Script for inserting sample data
├─ package-lock.json
├─ package.json     # npm dependencies and metadata
├─ .env.example     # example content of env file, Secrets not included, obviously
└─ .gitignore

````

---

## How to Run
1. Clone the main repo (if you haven’t):
   ```bash
   git clone https://github.com/Fahd-O/PLP-MERN-Stack-Specialization.git
   cd PLP-MERN-Stack-Specialization/week-01-mongodb
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create a `.env` file in this folder and add your MongoDB connection string:

   ```
   MONGO_URI=mongodb://<username>:<password>@localhost:27017/<database_name>
   ```

4. Seed example data (optional):

   ```bash
   node seed.js
   ```

5. Run the CRUD example:

   ```bash
   node crud.js
   ```

6. If successful, you’ll see database actions logged in the terminal (inserted documents, query results, etc.).

---

## Notes

* This code is purely educational, written during and after live instructions.
* Error handling is minimal
* Ensure MongoDB is running locally or use a MongoDB Atlas cluster.
* Common issue: connection errors when `MONGO_URI` is missing or incorrect.

---

## Next Steps

Week 2 will introduce **Express.js** to build a RESTful API layer on top of the database operations learnt here.

---

## Author

**Abiola Fahad Ogunnaike**
- Email: [realabiolafahad@gmail.com](mailto:realabiolafahad@gmail.com)
- GitHub: [Fahd-O](https://github.com/Fahd-O)
