const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/healthcare"
);

const resourcesSeed = [
  {
    catagory: "about",
    heading: "About Us",
    subtitle: "from the creator of GraphicKnowvel",
    body1:
      "We are a Philadelphia based company serving the needs of small businesses in need of a little cash.",
      body2:
      "View our values and mission statment to learn more.",
      rating: 4,
      date: new Date(Date.now())
  },
  {
    catagory: "howitWorks",
    heading: "What are your hours?",
    body1:
      "Each of our therapists has their own hours, please check their bio on the staff page for more information. The business office is open M-F 9am to 5pm. If you are experiencing a clinical emergency and cannot reach your therapist, please call the answering service at 757-671-3152 to be connected with the therapist on call.",
      rating: 2,
    date: new Date(Date.now())
  },
  {
    catagory: "privacypolicy",
    heading: "The Dead Zone",
    body1:
        "Please reproduce and share!",
      body2:
      "See terms of use",
      rating: 1,
            date: new Date(Date.now())
  },
  {
    catagory: "termsofuse",
    heading: "Terms of Use",
    body1:
      "Terms of use the sale of this product is not limited in any way.",
      body2:
      "No Copyright as of yet.",
      rating: 1,
      date: new Date(Date.now())
  },
  {
    catagory: "missionstatement",
    heading: "Mission Statement",
    body1:
      "Partnering with small businesses to help them grow by providing honest, transparent, and consultive funding solutions tailored to the individual needs of each business.",
      rating: 3,
      date: new Date(Date.now())
  },
  {
    catagory: "values",
    heading: "Core Values",
    body1:
      "Be Honest and Transparent, Understand Each Business's Unique Needs, Look Out For Client's Best Interest, Client Success Is our Sucess, and Believe In Each And Every Business We Fund.",
      rating: 4,
      date: new Date(Date.now())
  },
  {
    catagory: "faq",
    heading: "Does an application cost money?",
    body1:
      "No! It will always be free",
      rating: 3,
    date: new Date(Date.now())
  },
  {
    catagory: "teletherapy",
    heading: "In view of the present Coronavirus Pandemic, Churchland Psychological Center offers REMOTE THERAPY (“Teletherapy”) as an option to all of our patients. This option is covered by almost all insurance companies.",
    body1:"Teletherapy is an option we offer to all of our patients under certain circumstances. Certainly, at present, in 2020, the world is faced with the Coronavirus pandemic, requiring that we stay at home is much as possible, and therefore offering this service allows each patient to continue their therapy without leaving their home. Each therapist in the practice uses the medium that they are most comfortable with and which best suits the patient’s preferences. We can conduct sessions over the Internet where the patient and therapist can see each other and communicate much as they would in the office, allowing the patient to either use their computer, tablet, or smart phone to connect with the therapist. Other options include Facetime, Skype, Zoom, Doxy, and others. Some methods of connecting are more secure than others. For example, both Zoom and Doxy are fully HIPAA compliant, meaning the highest level of security is offered to prevent any possible access by anybody other than the patient and therapist talking with each other. Skype and FaceTime offer less security, but are still acceptable. In some cases, for example, if a patient does not have a computer or smart phone, we can simply have the session conducted by telephone, as this is now permitted under the current health crisis, when normally it is not a covered service. Thus, there are many options available for the therapist to connect with his or her patient. Government regulations have been eased to allow for as much remote therapy as possible",
    rating: 5,
    date: new Date(Date.now())
  }
];

db.Resources
  .remove({})
  .then(() => db.Resources.collection.insertMany(resourcesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });