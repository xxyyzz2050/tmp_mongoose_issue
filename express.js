var app = new require("express")();
app.get("/", function(req, res) {
  const mongoose = require("mongoose");
  mongoose
    .connect(
      "mongodb+srv://xxyyzz2050:Xx159753%2540%2540@cluster-test-kuwit.gcp.mongodb.net/test?retryWrites=true&w=majority"
    )
    .then(db => console.log(db))
    .catch(e => console.error(e))
    .then(() => res.send({ x: "aa" }));
});

app.listen(4200, function() {
  console.log("started");
});
