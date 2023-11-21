import bodyParser from "body-parser";
import express from "express";
import userRoute from "./routes/userRoute.js";
import productRoute from "./routes/productRoute.js";
import cartRoute from "./routes/cartRoute.js";
import orderRoute from "./routes/orderRoute.js";
import cors from "cors";
const app = express();

app.use(bodyParser.json());
<<<<<<< HEAD
=======

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "https://phenomenal-buttercream-167cdb.netlify.app");
//   res.setHeader("Access-Control-Allow-Methods", "POST, GET, PUT");
//   res.setHeader("Access-Control-Allow-Headers", "Content-Type");
//   next();
// })

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'https://phenomenal-buttercream-167cdb.netlify.app');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
//   next();
// });

>>>>>>> 0968a67b78701fd651fcb44e31ef87fc40448d98
app.use("/api/user", userRoute);
app.use("/api/product", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`server listen on port ${PORT}`);
});
