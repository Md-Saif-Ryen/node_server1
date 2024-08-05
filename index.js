const app = require('./app');

app.get("/", (req, res) => {
  res.send("Hello duniya, I am trying to learning something new");
});


app.listen(3000, ()=>{
    console.log("App is connect on 3000");
})