let mongoose = require("mongoose")

let con = mongoose.connect("mongodb+srv://navamajabale05:QgpI6AgttsUbtfZ6@cluster0.agfl85z.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

if (con) {
    console.log("DB Connected");
} else if (mongoose.Error) {
    console.log(mongoose.Error);
}