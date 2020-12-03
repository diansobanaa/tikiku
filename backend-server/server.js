import express from 'express';
// import dotenv from 'dotenv';
import config from './config';
// import mongoose from 'mongoose';
import bodyParser from 'body-parser';
// import userRoute from './routes/userRoute';
// import productRoute from './routes/productRoute';


// dotenv.config();

const app = express()


// app.get("/api/products/:id", (req, res) => {
// 	const productId = req.params.id;
// 	const product = data.products.find(x=>x._id == productId);

// 	if (product)
// 		res.send(product);
// 	else{
// 		res.status(404).send({msg: "product Not Found."});
// 	}

// }); // endpoint API


app.listen(5000, () => {
	console.log('server started at http://localhost:5000')
}) 
