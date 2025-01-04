import express from 'express';

const app = express();
const port = 3000;

app.get("/", (req, res) => {
    console.log(req.rawHeaders);
    res.send('<h1>Hello World!</h1>');
});

app.get("/about", (req,res) => {
    res.send("<h5>About Page</h5>");
});

app.get("/contact", (req, res) => {
    res.send("<h5>Contact Page</h5>");
})

app.listen(3000, () => {
    console.log(`Server is running on port: ${port}.`);
});