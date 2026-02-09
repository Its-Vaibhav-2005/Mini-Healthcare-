const Express = require("express");
const Cors = require("cors");
const BodyParser = require("body-parser");

const App = Express();

App.use(Cors());
App.use(BodyParser.json());

App.get("/", (Request, Response) => {
    Response.json({ message: "Backend is running" });
});

App.listen(3110, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
