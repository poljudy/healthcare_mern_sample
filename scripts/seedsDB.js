const mongoose = require("mongoose");
const db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/healthcare"
);
const staffSeed = [
  {
    name: "Michael S. Weissman",
    title: "PhD Clinical Director",
    specialties: 'Individual Adult Psychotherapy, Family, Marital, Psychological Testing',
    education: 'Princeton University, 1970. University of Massachusetts, 1974, PhD Past President, Tidewater Academy of Clinical Psychologists Past President, Virginia Academy of Clinical Psychologists Listed in National Register of  Health Care Providers in Psychology.',
    other: 'Past President, Tidewater Academy of Clinical Psychologists Past President, Virginia Academy of Clinical Psychologists Listed in National Register of  Health Care Providers in Psychology. Assistant Professor of Behavioral Science, adjunct faculty, Eastern Virginia Medical School',
    hours: 'Churchland and Norfolk offices.',
    img: '../../Images/mWeissman.jpg',
    date: new Date(Date.now()) 
},
{
    name: "Barbara B. Forbes",
    title: "MS Licensed Marriage and Family Therapist, Licensed Professional Counselor",
    specialties: 'Depression and anxiety; adult survivors of childhood sexual, physical, and emotional abuse; substance abuse; weight/overeating concerns; overspending behaviors; relationship “addictions,” (codependency). Helps couples understand how their individual histories impact the marital relationship. Provides counseling and support for couples considering separation and/or divorce. Work-related concerns, stress management, women’s issues, as well as issues related to loss and grief. From a military family herself, she provides mental health services to members of the military and their families. Provider with Military One Source, Coast Guard EAP, as well as most other insurances and EAPs.',
    education: 'Old Dominion University, MS, Psychology, 1976.',
    other: ' Works with: Adults, Couples, Families, Groups. In private practice at Churchland Psychological Center, Churchland office, since 1989.',
    hours: 'Churchland office',
    img: '../../Images/cpclogo2.png',
    date: new Date(Date.now())
},
{
    name: "Jody Alperin",
    title: "PsyD, Licensed Clinical Psychologist",
    specialties: 'Individual Psychotherapy with Adults, Couples and Marital Therapy, Family Therapy, Psychological Testing',
    education: 'Oberlin College, BA (1990)',
    other: 'Virginia Consortium for Professional Psychology, PsyD (1995)',
    img: '../../Images/jAlperin.jpg',
    date: new Date(Date.now())
  },
{
    name: "Thomas J. Scott",
    title: "MS, MSW, LCSW",
    specialties: 'Forty years of clinical experience with adult and adolescent individual and family therapy. Primarily a cognitive-behavioral therapist with the capacity to provide online services.',
    education: 'Accepts most insurances and employee assistance programs.',
    other: 'Churchland, Mon., Tue., 8 AM – 7 PM',
    hours: 'Great Bridge, Wed., 8 AM – 6 PM; Thu., 8 AM – 7 PM',
    img: '../../Images/cpclogo2.png',
    date: new Date(Date.now())
  },
{
    name: "Sara Litt",
    title: "LCSW, Licensed Clinical Social Worker",
    specialties: ' Individual and Family Therapy, Depression, Anxiety, Grief, Stress Management, Couples Counseling',
    education: 'University of Virginia, BA (1998) Columbia University, MSSW (2001)',
    other: 'Churchland Office, Tue., Thu., 9 AM – 5 PM.',
    hours: 'Norfolk Office, Mon., Wed. 8 AM – 1 PM.',
    date: new Date(Date.now()),
    img: '../../Images/cpclogo2.png'
  },
{
    name: "Catherine D. Smithson",
    title: "LCSW, Licensed Clinical Social Worker",
    specialties: 'Depression, Anxiety, Grief; Family, Marital and Couple Issues, Stress Management, Trauma Survivors, Experience with Gay and Lesbian Couples. Works primarily with adults and older teens',
    education: ' Worked in the mental health field since 1981 in inpatient facilities, outpatient community service and private practice.',
    other: 'Accepts most insurances and employee assistance programs.', 
    hours: 'Churchland, Thursdays and Fridays.',
    date: new Date(Date.now()),
    img: '../../Images/cpclogo2.png'
  },
{
    name: "Susan M. Asprey",
    title: "LCSW, CSAC",
    specialties: 'Substance Abuse, Multiple Addictions, PTSD, Stress Disorders, Anxiety. Provides individual, marital/couple, family and group therapy. Certified member National Certified Social Work Supervisors to provide supervision for graduates from master’s programs in social work for licensure.',
    education: 'Master of Social Work, Norfolk State University, 1995 Bachelor of Arts, Psychology,  Old Dominion University, 1984. Mental health provider since 1986. Acknowledged in Who’s Who for her expertise in the treatment of military families, personality disorders, and depressive disorders. Trained in dialectical behavior therapy for treatment of PTSD dual diagnosis and multiple addictions. Addresses multiple facts of life – mental, physical, psychological, and social. Provides treatment for adults and adolescents.',
    other: 'Member, National Association of Social Workers, Academy of Certified Social Workers, and Psi Chi.', 
    hours: 'Churchland; flexible hours per client need.',
    img: '../../Images/sAsprey.jpg',
    date: new Date(Date.now())
  }
]
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
db.Staff
  .remove({})
  .then(() => db.Staff.collection.insertMany(staffSeed))
  .then(data => {
    console.log(data.result.n + " records inserted into staff!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


db.Resources
  .remove({})
  .then(() => db.Resources.collection.insertMany(resourcesSeed))
  .then(data => {
    console.log(data.result.n + " records inserted into FAQ's!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });