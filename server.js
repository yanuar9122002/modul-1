// // // const express = require("express");
// // //  const http = require("http");
// // // const app = express();
// // // app.use((req, res, next) => { console.log("In the middleware"); next();
// // // });
// // // app.use((req, res, next) => { console.log("In another middleware");
// // // //	next();
// // // });
// // // const server = http.createServer(app);
// // // server.listen(5000);

// // // DYNAMICALLY RENDERING HTML
// // const express = require("./node_modules/express/lib/express");
// // const http = require("http");
// // const app = express();
// // app.use((req, res, next) => { console.log("In the middleware"); next();
// // });
// // app.use((req, res, next) => {
// //     console.log("In another middleware");
// //     res.send("<h1>Hello from express</h1>");
// // 	next();
// // });
// // const server = http.createServer(app);
// // server.listen(3000);

// // SERVER TO APP
// const express = require("./node_modules/express/lib/express"); const app = express();
// app.use((req, res, next) => { console.log("In the middleware"); next();
// });
// app.use((req, res, next) => { console.log("In another middleware"); res.send("<h1>Hello from express</h1>");
// //	next();
// });
// app.listen(5000);
