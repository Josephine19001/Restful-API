const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

const texts = require("./api/texts");
const users = require("./api/users");

const newUser = {
	user4: {
		name: "user4",
		message: "I am user4",
		id: 4,
	},
};
const newText = {
	text4: {
		name: "text4",
		message: "I am text4",
		id: 4,
	},
};

//Controller for users

//List all users
app.get("/users", (req, res) => {
	console.log("List All: \n" + JSON.stringify(users, null, 4));
	res.status(200).end("List of all Users: \n" + JSON.stringify(users, null, 4));
});
// Create a new users
app.post("/users", function (req, res) {
	console.log("New user:\n" + JSON.stringify(users));
	res.end("Post Successfully: \n" + JSON.stringify(newUser));
});
//Get by id
app.get("/users/:id", (req, res) => {
	var user = users["user" + req.params.id];
	console.log("Find by id: \n" + JSON.stringify(user, null, 4));
	res.end("Find a user by id:\n" + JSON.stringify(user, null, 4));
});

//Update user
app.put("/users/:id", (req, res) => {
	var id = parseInt(req.params.id);
	var updatedUser = req.body;
	if (users["user" + id] != null) {
		users["user" + id] = updatedUser;
		console.log("Update Successfully, users: \n" + JSON.stringify(users));
		res.end("Update Successfully! \n" + JSON.stringify(users));
	} else {
		res.end("Nothing was updated:\n:" + JSON.stringify(updatedUser));
	}
});
//delete user
app.delete("/users/:id", function (req, res) {
	var deleteUser = users["user" + parseInt(req.params.id)];
	delete users["text" + req.params.id];
	console.log("After deletion, user list:\n" + JSON.stringify(users));
	res.end("Deleted user: \n" + JSON.stringify(deleteUser));
});

//Controller for text
//List all text
app.get("/texts", (req, res) => {
	console.log("List All: \n" + JSON.stringify(texts, null, 4));
	res.status(200).end("List of all Texts: \n" + JSON.stringify(texts, null, 4));
});
// Create a new text
app.post("/texts", function (req, res) {
	console.log("New Text:\n" + JSON.stringify(texts));
	res.end("Post Successfully: \n" + JSON.stringify(newText));
});
//Get by id
app.get("/texts/:id", (req, res) => {
	var text = texts["text" + req.params.id];
	console.log("Find by id: \n" + JSON.stringify(text, null, 4));
	res.end("Find a Text:\n" + JSON.stringify(text, null, 4));
});

//Update text
app.put("/texts/:id", (req, res) => {
	var id = parseInt(req.params.id);
	var updatedText = req.body;
	if (texts["text" + id] != null) {
		texts["text" + id] = updatedText;
		console.log("Update Successfully, texts: \n" + JSON.stringify(texts));
		res.end("Update Successfully! \n" + JSON.stringify(texts));
	} else {
		res.end("Nothing was updated:\n:" + JSON.stringify(updatedText));
	}
});
//delete text
app.delete("/texts/:id", function (req, res) {
	var deleteText = texts["text" + parseInt(req.params.id)];
	delete texts["text" + req.params.id];
	console.log("After deletion, text list:\n" + JSON.stringify(texts));
	res.end("Deleted text: \n" + JSON.stringify(deleteText));
});

//listening to server
const server = app.listen(3000, () => {
	const host = server.address().address;
	const port = server.address().port;
	console.log("Server is running on http://%s:%s", host, port);
});
