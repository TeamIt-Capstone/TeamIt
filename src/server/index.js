const path = require('path')
const express = require('express')
const stripe = require('stripe')('YOUR_SECRET_KEY_FROM_STRIPE_DASHBOARD')
const cors = require('cors')

const app = express()
app.use(cors())

app.post('/api/payments/mobile/create', async (req, res) => {
    const total = req.query.total;
    const token = req.query.token;

    console.log(`Payment Request Recieved for the amount : ${total} >>> token: ${token}`)

    stripe.charges.create({
        amount: total,
        currency: 'inr',
        source: token
    }).then(charge => {
        res.status(200).send(charge);
    }).catch(e => console.log(e));

})

app.listen(4000);
