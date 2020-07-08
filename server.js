const express = require('express');
const connectDB = require('./config/db');
const path = require('path');
// force redirect to https
const app = express();
require("dotenv").config();
// env = process.env.NODE_ENV || 'development';


// var forceSsl = function (req, res, next) {
//    if (req.headers['x-forwarded-proto'] !== 'https') {
//        return res.redirect(['https://', req.get('Host'), req.url].join(''));
//       }
//    return next();
// };

// app.configure(function () {

//    if (env === 'production') {
//        app.use(forceSsl);
//    }
//   })
// const bodyParser = require('body-parser')
// const cors = require('cors');
// const Stripe = require("stripe")
// const stripe = require('stripe')("sk_test_51GzAYhLa9svkYtX6yP1zLzMwcqdhnUu5eIWHXiuITsIhjL9AuvwSfnnWsLEl3JtyMhS825WgzWSH0zKy7iZJldq200zshRBjkb");
// const uuid = require("uuid/v4");
// const postCharge = require('./stripe')
// const router = express.Router()
// const stripe = require('stripe')('sk_test_51GzAYhLa9svkYtX6yP1zLzMwcqdhnUu5eIWHXiuITsIhjL9AuvwSfnnWsLEl3JtyMhS825WgzWSH0zKy7iZJldq200zshRBjkb');
// router.post('/stripe/charge', postCharge)

// const Stripe = require("stripe")
// const stripe = require('stripe')('sk_test_51Gz5xTHeS1LR0EpisMcbsZNukINqcnSxQQZdVrjHaypqCT8GkKUqc0YrzLhlCUTCixee8lVw8iD09Z0vvTb0x5DQ00T0CmRt0C');


// Connect Database
connectDB();

// Init Middleware

app.use(express.json({ extended: false }));
  if(process.env.NODE_ENV === 'production') {
  app.get('*',function(req,res,next){
    if(req.headers['x-forwarded-proto']!='https')
      res.redirect('https://counselinghr.com/'+req.url)
    else
      next() /* Continue to other routes if we're not redirecting */
  })
  }
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());

// app.use('*', function(req, res, next) {
//   //replace localhost:8080 to the ip address:port of your server
//   res.header("Access-Control-Allow-Origin", process.env.PORT||"http://localhost:5000");
//   res.header("Access-Control-Allow-Headers", "X-Requested-With");
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   res.header('Access-Control-Allow-Credentials', true);
//   next(); 
//   });

//   app.options('*', cors());

// // app.use(cors());
//       app.get('/', (req, res) => {
//         res.send({
//           message: 'Ping from Checkout Server',
//           timestamp: new Date().toISOString(),
//           env: process.env.NODE_ENV,
//         });
//       })

// app.post('/payment/session-initiate', async (req, res) => {
//   const {
//     clientReferenceId,
//     customerEmail,
//     lineItem,
//     successUrl,
//     cancelUrl,
//   } = req.body;
// console.log(req.body)
// // console.log(req.headers)
//   // const stripe = Stripe('sk_test_xNW92P513GLaZ66DZDbkqYKJ004ahKjPlw');
//   const stripe = Stripe(process.env.STRIPE_SECRET_KEY||'sk_test_51GzAYhLa9svkYtX6yP1zLzMwcqdhnUu5eIWHXiuITsIhjL9AuvwSfnnWsLEl3JtyMhS825WgzWSH0zKy7iZJldq200zshRBjkb');

//   let session;

//   try {
//     session = await stripe.checkout.sessions.create({
//       client_reference_id: clientReferenceId,
//       customer_email: customerEmail,
//       payment_method_types: ['card'],
//       line_items: [lineItem],
//       payment_intent_data: {
//         description: `${lineItem.name} ${lineItem.description}`,
//       },
//       success_url: successUrl,
//       cancel_url: cancelUrl,
//     });
//     console.log("working")
//     return res.status(200).send(session);
//   } catch (error) {
//     res.status(500).send({ error });
//   }

// });
// app.post('/payment/session-complete', async (req, res) => {
//   const stripe = Stripe(process.env.STRIPE_SECRET_KEY);

//   let event;

//   try {
//     event = stripe.webhooks.constructEvent(
//       req.rawBody,
//       req.headers['stripe-signature'],
//       process.env.STRIPE_PUBLISHABLE_KEY||'pk_test_51GzAYhLa9svkYtX65IZk9PLqaCPKJpeBnpxlzRS2pa20GKgGfD67qiy7mobxoVOWzE7QCXItINbVHI90ejT7c5SP00OwifBMgo'
//     );
//   } catch (error) {
//     return res.status(400).send(`Webhook Error: ${error.message}`);
//   }

//   if (event.type === 'checkout.session.completed') {
//     const session = event.data.object;

//     try {
//       // complete your customer's order
//       // e.g. save the purchased product into your database
//       // take the clientReferenceId to map your customer to a product
//     } catch (error) {
//       return res.status(404).send({ error, session });
//     }
//   }

//   return res.status(200).send({ received: true });
// });

// Define Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));
app.use('/api/contacts', require('./routes/contacts'));
app.use('/api/resources', require('./routes/resources'));
app.use('/api/staff', require('./routes/staff'));
// app.use('/stripe', require('./routes/stripe'));
// app.use('/api/stripe', require('./routes/stripe'));
// Serve static assets in production
if (process.env.NODE_ENV === 'production') {
  // Set static folder
  app.use(express.static('client/build'));

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  );
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
