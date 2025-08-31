import express from "express";

// Fix Edit, not able to create new name for edit of post
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static("public"));
let reviews = [];



app.get("/", (req, res) =>{
    res.render("index.ejs");
})

app.get("/upost", (req, res) =>{
    res.render("upost.ejs");
})

app.get("/myreviews", (req, res) => {
    res.render("myreviews.ejs", {reviews});
})
app.post("/upost", (req, res) => {
  const { postTitle, review, bookName, genre, userName } = req.body; // <-- yourName
  const formattedDate = new Date().toLocaleDateString("en-US");
  const id = Date.now().toString(); // unique enough for this app

  const newReview = { id, postTitle, review, bookName, genre, userName, formattedDate };
  reviews.push(newReview);

  res.render("myreviews.ejs", { reviews });
});

app.get("/reviews", (req, res) => {
  res.render("reviews.ejs", { reviews });
});

app.get("/edit", (req, res) => {
  const { id } = req.query;
  const review = reviews.find(r => r.id === id);
  if (!review) return res.status(404).send("Review not found");
  res.render("edit.ejs", { review });
});


app.post("/reviews/update", (req, res) => {
  const { id, postTitle, review, bookName, genre, userName } = req.body;
  const idx = reviews.findIndex(r => r.id === id);
  if (idx === -1) return res.status(404).send("Review not found");

  reviews[idx] = { ...reviews[idx], postTitle, review, bookName, genre, userName };
  res.redirect("/reviews");
});

app.listen(port, () =>{
    console.log(`Listening on localhost:${port}`);
});

