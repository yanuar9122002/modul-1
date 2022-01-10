// // // // // // // // // // // // const http = require("http");
// // // // // // // // // // // // const server = http.createServer((req, res) => { console.log(req);
// // // // // // // // // // // // });
// // // // // // // // // // // // server.listen(3000);

// // // // // // // // // // // const http = require("http");
// // // // // // // // // // // const server = http.createServer((req, res) => { console.log(req);
// // // // // // // // // // // process.exit();
// // // // // // // // // // // });
// // // // // // // // // // // server.listen(3000);

// // // // // // // // // // Sending Respone

// // // // // // // // // // const http = require("http");
// // // // // // // // // // const server = http.createServer((req, res) => { console.log(req.url, req.method, req.headers);
// // // // // // // // // // // process.exit();
// // // // // // // // // // res.setHeader("Content-Type", "text/html"); res.write("<html>");
// // // // // // // // // //     res.write("<head><title>My First Page</title></head>"); res.write("<body><h1>P Wr.Wb</h1></body>");
// // // // // // // // // //     res.write("</html>");
// // // // // // // // // // res.end();
// // // // // // // // // // });
// // // // // // // // // // server.listen(3000);

// // // // // // // // // // ROUTING
// // // // // // // // // const http = require("http");
// // // // // // // // // const server = http.createServer((req, res) => { const url = req.url;
// // // // // // // // // if (url === "/") {
// // // // // // // // // res.setHeader("Content-Type", "text/html"); res.write("<html>"); res.write("<head><title>Server</title></head>"); res.write(
// // // // // // // // // '<body><form action="/message" method="POST"><input type="text" value=""></form></body>'
// // // // // // // // // );
// // // // // // // // // res.write("</html>"); return res.end();
// // // // // // // // // } else if (url === "/secondserver") { res.setHeader("Content-Type", "text/html"); res.write("<html>");
// // // // // // // // // res.write("<head><title>Server Page second</title></head>"); res.write("<body><h2>Welcome to the Internet</h2></body>"); res.write("</html>");
// // // // // // // // // res.end();
// // // // // // // // // }
// // // // // // // // // res.setHeader("Content-Type", "text/html"); res.write("<html>");
// // // // // // // // // res.write("<head><title>Server Page second</title></head>"); res.write("<body><h2>Welcome to the Internet</h2></body>"); res.write("</html>");
// // // // // // // // // res.end();
// // // // // // // // // });
// // // // // // // // // server.listen(3000);

// // // // // // // // // REDIRECTING
// // // // // // // // const http = require("http");
// // // // // // // // const fs = require("fs");
// // // // // // // // const server = http.createServer((req, res) => { const url = req.url;
// // // // // // // // const method = req.method; if (url === "/") {
// // // // // // // // res.setHeader("Content-Type", "text/html"); res.write("<html>"); res.write("<head><title>Server</title></head>"); res.write(
// // // // // // // // '<body><form action="/message" method="POST"><input type="text" value=""></form></body>'
// // // // // // // // );
// // // // // // // // res.write("</html>");
// // // // // // // // return res.end();
// // // // // // // // }
// // // // // // // //     if (url === "/message" &&  method === "POST")
// // // // // // // // {
// // // // // // // //     fs.writeFileSync("testing.txt", "YOLO WORLD"); res.statusCode = 302; res.setHeader("Location", "/");
// // // // // // // // return res.end();
// // // // // // // // }
// // // // // // // // res.setHeader("Content-Type", "text/html"); res.write("<html>");
// // // // // // // // res.write("<head><title>Server Page second</title></head>"); res.write("<body><h2>Welcome to the Internet</h2></body>"); res.write("</html>");
// // // // // // // // res.end();
// // // // // // // // });
// // // // // // // // server.listen(3000);

// // // // // // // // PARSING
// // // // // // // const http = require("http");
// // // // // // // const fs = require("fs");
// // // // // // // const server = http.createServer((req, res) => { const url = req.url;
// // // // // // //     if (url === "/")
// // // // // // //     {
// // // // // // //     res.write("<html>");
// // // // // // //     res.write("<head><title>Server</title></head>");
// // // // // // //     res.write('<body><form action="/message" method=" POST "><input type="text"  value=""> </form> </body>');
// // // // // // //     res.write("</html>");
// // // // // // //     return res.end();
// // // // // // // }
// // // // // // //     if (url === "/message" && method === "POST") { const body = [];
// // // // // // // req.on("data", (chunk) => { console.log(chunk); body.push(chunk);
// // // // // // // });
// // // // // // // req.on("end", () => {
// // // // // // // const parseBody = Buffer.concat(body).toString(); const message = parseBody.split("=")[1]; fs.writeFileSync("testing.txt", message);
// // // // // // // });
// // // // // // // res.statusCode = 302;
// // // // // // // res.setHeader("Location", "/"); return res.end();
// // // // // // // }
// // // // // // // res.setHeader("Content-Type", "text/html"); res.write("<html>");
// // // // // // // res.write("<head><title>Server Page second</title></head>"); res.write("<body><h2>Welcome to the Internet</h2></body>"); res.write("</html>");
// // // // // // // res.end();
// // // // // // // });
// // // // // // // server.listen(3000);

// // // // // // // ROUTING
// // // // // // const http = require("http");
// // // // // // const routes = require("./routes.js");
// // // // // // const server = http.createServer(routes.handle);
// // // // // // server.listen(3000);


// // // // // // Express Server
// // // const express = require("./node_modules/express/lib/express");
// // // const http = require("http");
// // // const app = express();
// // // const server = http.createServer(app); server.listen(3000);

// // const express = require("./node_modules/express/lib/express");
// // const http = require("http");
// // const app = express();
// // const server = http.createServer(app); server.listen(5000);

// // FILTERING

// const express = require("./node_modules/express/lib/express");
// const bodyParser = require("body-parser");
// const shopRoutes = require("./routes");
// const productRoutes = require("./routes");
// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use("/product", productRoutes); app.use(shopRoutes);
// app.listen(5000);


// app filtering
// const express = require("express");
// const bodyParser = require("body-parser");
// const shopRoutes = require("./routes/shop.routes.js");
// const productRoutes = require("./routes/product.routes.js");
// const app = express();
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use("/product", productRoutes); app.use(shopRoutes);
// app.listen(5000);

