const express = require("express");
 
const app = express();
 
app.set("view engine", "ejs");
 
const users = [{
        userId: "1",
        userName: "John Smith",
        userPost: "Manager",
        userSalary:34,
    },
    {
        userId: "2",
        userName: "Rack Wilson",
        userPost: "Assistant Manager",
        userSalary:300
    },
];
 
app.use(express.json());       
app.use(express.urlencoded({extended: true})); 
 
app.get("/", function (req, res) {
    res.render("index", {
        data: users,
    });
});
 
app.post("/", (req, res) => {
    const inputuserId = users.length + 1;
    const inputuserName = req.body.userName;
    const inputuserPost = req.body.userPost;
    const inputuserSalary  = req.body.userSalary;
 
    users.push({
        userId: inputuserId,
        userName: inputuserName,
        userPost: inputuserPost,
        userSalary: inputuserSalary
    });
 
    res.render("index", {
        data: users,
    });
});
 
app.post("/delete", (req, res) => {
    var requesteduserId = req.body.userId;
    var j = 0;
    users.forEach((user) => {
        j = j + 1;
        if (user.userId === requesteduserId) {
            users.splice(j - 1, 1);
        }
    });
    res.render("index", {
        data: users,
    });
});
 
app.post("/update", (req, res) => {
    const requestedUserId = req.body.userId;
    const inputUserPost = req.body.userPost;
    const inputUserSalary = req.body.userSalary;

    users.forEach((user) => {
        if (user.userId === requestedUserId) {
            user.userPost = inputUserPost;
            user.userSalary = inputUserSalary;
        }
    });

    res.render("index", {
        data: users,
    });
});

 
app.listen(3000, (req, res) => {
    console.log("App is running on port 3000");
});
