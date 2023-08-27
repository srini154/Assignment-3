const express = require("express");
const app = express();
var cors = require("cors");
app.use(cors());
app.use(express.json());
// const mongoose = require("mongoose");
const server = "127.0.0.1:27017";
const users = [];
const { MongoClient } = require("mongodb");

// var MongoClient = require("mongodb").MongoClient;
// var url = "mongodb://localhost:27017/Test";
// const dbConnection = async () => {
//   console.log("came in 1");
// MongoClient.connect(
//   url,
//   { useUnifiedTopology: true, useNewUrlParser: true },
//   async (err, db) => {
//     if (err) {
//       console.log({ err });
//       throw err;
//     }

//     var dbo = await db.db("Test");
//     console.log("MongoDB connected successfully");
//     db.close();
//   }
// );
// mongoose
//   .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => {
//     console.log("db connected");
//   });
// var db1 = mongoose.connect(`mongodb://0.0.0.0:27017/`, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
// console.log("db connected");
// const db = db.db("Test");
// db.on("error", console.error.bind(console, "MongoDB connection error:"));
// db.once("open", () => {
//   console.log("Connected to MongoDB");
// });
// db.collection("Users").find({}, function (err, result) {
//   if (err) throw err;
//   console.log(result);
//   db.close();
// });

// var MongoClient = require("mongodb").MongoClient;
// var url = "mongodb://0.0.0.0:27017/";
// console.log("mongoDb connected");
// MongoClient.connect(url, function (err, db) {
//   console.log("Db1 connected");
//   if (err) throw err;
//   console.log("Db connected");
//   var dbo = db.db("mydb");
//   dbo.collection("cUsers").findOne({}, function (err, result) {
//     if (err) throw err;
//     console.log(result.name);
//     db.close();
//   });
// });

const uri = "mongodb://0.0.0.0:27017/";
// const uri = "mongodb://localhost:27017/";
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function main() {
  try {
    await client.connect();
    console.log("Connected to the database");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}

main();

app.post("/login", async (req, res) => {
  const { email, password } = req.body;

  // console.log(`Login attempt for email: ${email}`);
  if (email && password) {
    try {
      const database = client.db("Test");
      const collection = database.collection("Users");

      const user = await collection.find({ email, password }).toArray();
      // console.log({ email, password });
      // console.log({ user });
      if (user && user.length > 0) {
        return res.send("success");
      } else {
        return res.send("Invalid");
      }
    } catch (error) {
      console.error("Error during login:", error);
      res.status(500).send("Error during login");
    }
  } else {
    res.send("email and password are mandatory");
  }
});
app.post("/forgot", async (req, res) => {
  let { email } = req.body;
  if (email) {
    const database = client.db("Test");
    const collection = database.collection("Users");
    let emailcheck = await collection.find({ email: email }).toArray();
    if (emailcheck.length > 0) {
      res.send("success");
    } else {
      res.send("Invalid email");
    }
  } else {
    res.send("email is mandatory");
  }
});

app.post("/register", async (req, res) => {
  const { name, email, password, cpassword, DOB } = req.body;

  // console.log(name, email, password, cpassword, DOB);

  const newUser = {
    name: name,
    email: email,
    password: password,
    cpassword: cpassword,
    DOB: DOB,
  };
  if (name && email && password && cpassword && DOB) {
    try {
      const database = client.db("Test");
      const collection = database.collection("Users");
      let emailcheck = await collection.find({ email: email }).toArray();
      // console.log(emailcheck);
      if (emailcheck.length > 0) {
        res.send("Email Already Exists");
      } else {
        const insertResult = await collection.insertOne(newUser);
        // console.log("Inserted new user:", insertResult.insertedId);

        res.status(200).send("User registered successfully");
      }
    } catch (error) {
      console.error("Error registering user:", error);
      res.status(500).send("Error registering user");
    }
  } else {
    res.send("all fields are mandatory");
  }
  // console.log({ newUser });

  // users.push(newUser);
});
app.get("/users", async (req, res) => {
  try {
    const database = client.db("Test");
    const collection = database.collection("Users");
    let users = await collection.find().toArray();

    res.json(users);
  } catch (error) {
    res.status(500).send("error occured while fetching users");
  }
});
app.listen(5000, () => console.log("Server running "));
