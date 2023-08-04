import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

const ItemSchema = new mongoose.Schema({
  AuthorName: String,
  BookTitle: String,
  Description: String,
});

const UserSchema = new mongoose.Schema({
  username: String,
  password: String,
});

const Item = mongoose.model("Item", ItemSchema);
const User = mongoose.model("User", UserSchema);

// Get Request
app.get("/getItems", (req, res) => {
  Item.find({})
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.get("/search/:key", (req, res) => {
  const search = req.params.key;
  Item.find({
    $or: [
      { BookTitle: { $regex: search, $options: "i" } },
      { AuthorName: { $regex: search, $options: "i" } },
      { Description: { $regex: search, $options: "i" } },
    ],
  })
    .then((result) => {
      if (result.length === 0) {
        res.status(404).send("No Result Found");
      } else res.status(200).send(result);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.get("/getItem/:id", (req, res) => {
  const bookId = req.params.id;
  Item.findById(bookId)
    .then((result) => {
      res.send(result);
    })
    .catch((err) => {
      res.status(500).send(err.message);
    });
});

app.post("/addDetails", (req, res) => {
  const Request = req.body;
  const entry = new Item(Request);
  entry.save().then((result) => {
    res.status(201).send();
  });
});

app.delete("/deleteBook/:id", function (req, res) {
  const bookId = req.params.id;
  Item.findByIdAndDelete(bookId)
    .then(() => {
      res.send("Book Deleted Successfully");
    })
    .catch((error) => {
      console.error("Error deleting book:", error);
      res.status(500).send();
    });
});

app.put("/updateBook/:id", function (req, res) {
  const bookId = req.params.id;
  const book = req.body;

  Item.updateOne({ _id: bookId }, book)
    .then(() => {
      res.send("Book Updated Successfully");
    })
    .catch((error) => {
      console.error("Error updating book:", error);
      res.status(500).send();
    });
});

app.post("/addUser", (req, res) => {
  const Request = req.body;
  const entry = new User(Request);
  entry.save().then((result) => {
    res.status(201).send();
  });
});

app.post("/validateUser", (req, res) => {
  const Request = req.body;
  User.findOne({ username: Request.username, password: Request.password }).then(
    (result) => {
      if (result) res.status(200).send(result);
      else res.status(500).send(result);
    }
  );
});

mongoose
  .connect(process.env.MONGO_URL, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log(`server running...${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
  });
