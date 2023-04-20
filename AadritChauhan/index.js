const express = require("express");
const path = require("path");

const { MongoClient, ObjectId } = require("mongodb");
const { request } = require("http");
const { response } = require("express");


//Mongo config stuff
const dbUrl = "mongodb+srv://testdbuser:vzDNKmhFMig9wc6U@cluster0.bqwgbru.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(dbUrl);

//set up Express app
const app = express();
const port = process.env.PORT || 8888;

//define important folders
app.set("views", path.join(__dirname, "views"));
app.set('view engine', 'pug');

app.use(express.static(path.join(__dirname, "public"))); 

//convert form data to JSON for easier use
app.use(express.urlencoded({extended: true}));
app.use(express.json());


//set up server listening
app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
});

//PAGE ROUTES
app.get("/", async (request, response) => {
    studentData = await getStudentData();
    response.render("index", { title: "Home", student: studentData });
});


//FORM PROCESSING PATH
app.post("/submit", async (request, response)=>{
    //for a POST form, the data is retrieved through the body
    //request.body.<field_name>
    let formData = {
        name: request.body.name,
        studentId: request.body.number,
        email: request.body.email,
        groupSize: request.body.groupSize,
        flagOn: "On"
        
    };
    console.log("Data Added");
    await addStudent(formData);
    response.redirect("/submit");
});


//MONGO FUNCTIONS
/* Function to connect to DB and return the "testdb" database. */
async function connection() {
    await client.connect();
    db = client.db("Splitter");
    return db;
}
/* Function to select all documents from menuLinks. */
async function getStudentData() {
    db = await connection();
    var results = db.collection("groupSplit").find({});
    res = await results.toArray(); //convert to an array
    return res;
};

/*Function adding new data */

async function addStudent(formData) {
    console.log("Data Added");
    db = await connection();
    await db.collection("groupSplit").insertOne(formData);
    console.log("Data Added");
}
