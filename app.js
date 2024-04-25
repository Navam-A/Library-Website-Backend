let express = require("express");
require("./db");
let Blogs = require("./Modals/Blogs");
let Books = require("./Modals/Books");
let News = require("./Modals/News");
let bodyParser = require("body-parser");
let cors = require("cors");

let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());

app.get("/books", async (req, res) => {
  let results = await Books.find();
  res.send(results);
});

app.get("/blogs", async (req, res) => {
  let results = await Blogs.find();
  res.send(results);
});

app.get("/news", async (req, res) => {
  let results = await News.find();
  res.send(results);
});

app.get("/books/:id", async (req, res) => {
  let id = req.params.id;
  let results = await Books.findById({ _id: id });
  res.send(results);
});

app.get("/blogs/:id", async (req, res) => {
  let id = req.params.id;
  let results = await Blogs.findById({ _id: id });
  res.send(results);
});

app.get("/news/:id", async (req, res) => {
  let id = req.params.id;
  let results = await News.findById({ _id: id });
  res.send(results);
});

app.post("/books", async (req, res) => {
  let book = new Books(req.body);
  let result = await book.save();
  res.send(result);
});

app.post("/blogs", async (req, res) => {
  let blog = new Blogs(req.body);
  let result = await blog.save();
  res.send(result);
});

app.post("/news", async (req, res) => {
  let news = new News(req.body);
  let result = await news.save();
  res.send(result);
});

app.listen(3000, () => {
  console.log("Server started at port no 3000");
});
