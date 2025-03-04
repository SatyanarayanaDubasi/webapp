const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send(`<h1>Welcome to My Custom Domain</h1><p>This site is hosted on Azure App Service.</p>`);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
