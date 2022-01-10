// // const fs = require("fs");
// // const reqHandle = (req, res) => { const url = req.url;
// // const method = req.method; if (url === "/") {
// // res.write("<html>"); res.write("<head><title>Server</title></head>"); res.write(
// // '<body><form action="/message" method="POST"><input type="text" name="message" value=""></form></body>'
// // );
// // res.write("</html>"); return res.end();
// // }
// // if (url === "/message" && method === "POST") { const body = [];
// // req.on("data", (chunk) => { console.log(chunk); body.push(chunk);
// // });
// // req.on("end", () => {
// // const parseBody = Buffer.concat(body).toString(); const message = parseBody.split("=")[1]; fs.writeFileSync("testing.txt", message);
// // });
// // res.statusCode = 302; res.setHeader("Location", "/"); return res.end();
// // }
// // res.setHeader("Content-Type", "text/html"); res.write("<html>");
// // res.write("<head><title>Server Page second</title></head>"); res.write("<body><h2>Welcome to the Internet</h2></body>"); res.write("</html>");
// // res.end();
// // };
// // exports.handle = reqHandle;

// const express = require("./node_modules/express/lib/express");
// const router = express.Router();
// router.get("/", (req, res, next) => { res.send("<h1>Hello there</h1>");
// });
// module.exports = router;


// routes.product.js
// const express = require("express");
// const router = express.Router();
// router.get("/add-product", (_req, res) => { res.send(
// `<form action="/product/add-product" method="POST">
// <input type="text" name="title">
// <button type="submit">Create Product</button>
// </form>`
// );
// });
// router.post("/add-product", (req, res) => { console.log(req.body);
// res.redirect("/");
// });
// module.exports = router;

// routes.shop
// const express = require("express");
// const router = express.Router();
// router.get("/", (_req, res) => { res.send("<h1>Hello there</h1>");
// });
// module.exports = router;

