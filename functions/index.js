const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const stripe = require('stripe')('sk_test_51HQ861Gaj7wVKoCgzsXeLTWxNEF5R1Z8N3d33iKYFs8qE16gS7wyIdYAtvE9tuwimAv9acoh8n4lZQIcpAO9FKKl00KqaYQ1Dx')

//API

// - App config
const app = express();

// - Middlewares
app.use(cors({origin: true}));
app.use(express.json());

// - API routes
app.get('/', (request, response) => response.status(200).send("hello world"));

app.post('/payments/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received !!!!!! >>>>>>>>>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd"
    });

    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
})
// - Listen command
exports.api = functions.https.onRequest(app);

//Example endpoint
//http://localhost:5001/clone-dfd68/us-central1/api