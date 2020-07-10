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
    rating: 100,
    therapist: true,
    date: new Date(Date.now()) 
},
{
    name: "Barbara B. Forbes",
    title: "MS, LMFT, LPC",
    specialties: 'Depression and anxiety; adult survivors of childhood sexual, physical, and emotional abuse; substance abuse; weight/overeating concerns; overspending behaviors; relationship “addictions,” (codependency). Helps couples understand how their individual histories impact the marital relationship. Provides counseling and support for couples considering separation and/or divorce. Work-related concerns, stress management, women’s issues, as well as issues related to loss and grief. From a military family herself, she provides mental health services to members of the military and their families. Provider with Military One Source, Coast Guard EAP, as well as most other insurances and EAPs.',
    education: 'Old Dominion University, MS, Psychology, 1976.',
    other: ' Works with: Adults, Couples, Families, Groups. In private practice at Churchland Psychological Center, Churchland office, since 1989.',
    hours: 'Churchland office',
    img: '../../Images/bForbes.jpg',
    rating: 99,
    therapist: true,
    date: new Date(Date.now())
},
{
    name: "Jody Alperin",
    title: "PsyD, Licensed Clinical Psychologist",
    specialties: 'Individual Psychotherapy with Adults, Couples and Marital Therapy, Family Therapy, Psychological Testing',
    education: 'Oberlin College, BA (1990)',
    other: 'Virginia Consortium for Professional Psychology, PsyD (1995)',
    img: '../../Images/jAlperin2.jpg',
    rating: 98,
    therapist: true,
    date: new Date(Date.now())
  },
{
    name: "Thomas J. Scott",
    title: "MS, MSW, LCSW",
    specialties: 'Forty years of clinical experience with adult and adolescent individual and family therapy. Primarily a cognitive-behavioral therapist with the capacity to provide online services.',
    education: 'Accepts most insurances and employee assistance programs.',
    other: 'Churchland, Mon., Tue., 8 AM – 7 PM',
    hours: 'Great Bridge, Wed., 8 AM – 6 PM; Thu., 8 AM – 7 PM',
    img: '../../Images/tScott.png',
    rating: 97,
    therapist: true,
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
    therapist: true,
    rating: 96,
    img: '../../Images/sLitt2.jpg'
  },
{
    name: "Catherine D. Smithson",
    title: "LCSW, Licensed Clinical Social Worker",
    specialties: 'Depression, Anxiety, Grief; Family, Marital and Couple Issues, Stress Management, Trauma Survivors, Experience with Gay and Lesbian Couples. Works primarily with adults and older teens',
    education: ' Worked in the mental health field since 1981 in inpatient facilities, outpatient community service and private practice.',
    other: 'Accepts most insurances and employee assistance programs.', 
    hours: 'Churchland, Thursdays and Fridays.',
    date: new Date(Date.now()),
    therapist: true,
    rating: 95,
    img: '../../Images/cSmithson.png'
  },
{
    name: "Susan M. Asprey",
    title: "LCSW, CSAC",
    specialties: 'Substance Abuse, Multiple Addictions, PTSD, Stress Disorders, Anxiety. Provides individual, marital/couple, family and group therapy. Certified member National Certified Social Work Supervisors to provide supervision for graduates from master’s programs in social work for licensure.',
    education: 'Master of Social Work, Norfolk State University, 1995 Bachelor of Arts, Psychology,  Old Dominion University, 1984. Mental health provider since 1986. Acknowledged in Who’s Who for her expertise in the treatment of military families, personality disorders, and depressive disorders. Trained in dialectical behavior therapy for treatment of PTSD dual diagnosis and multiple addictions. Addresses multiple facts of life – mental, physical, psychological, and social. Provides treatment for adults and adolescents.',
    other: 'Member, National Association of Social Workers, Academy of Certified Social Workers, and Psi Chi.', 
    hours: 'Churchland; flexible hours per client need.',
    rating: 94,
    therapist: true,
    img: '../../Images/sAsprey.jpg',
    date: new Date(Date.now())
  },
  {
    name: "Frank Gripka",
    title: "PhD Licensed Clinical Psychologist, practicing since 1973",
    specialties: ' Individual therapy with adults and adolescents,Marital Therapy, Depression, Phobias, Stress, Sexual Abuse, Co-Dependency, Weight Issues.',
    education: 'Southern Illinois University, PhD',
    img: '../../Images/fGripka.jpg',
    rating: 94,
    therapist: true,
    date: new Date(Date.now())
  },
  {
    name: "Cheryl Cox",
    title: "Licensed Marriage and Family Therapist",
    specialties: 'Individual, Couples, and Family Therapy. Credentialed as Registered Play Therapist – Supervisor Paneled provider with most major insurance companies.',
    hours: 'Norfolk office',
    img: '../../Images/cCox.jpg',
    rating: 93,
    date: new Date(Date.now())
  },
  {
    name: "Muriel M. Ricker",
    title: "Licensed Marriage and Family Therapist",
    specialties: '20 years work with children of divorce. Provides Co-Parenting for divorcing parents to help them learn skills as they raise their children in separate homes.',
    education: 'Villanova University, MS in Counseling; Philadelphia Child Guidance Clinic, post-graduate work in Marriage and Family Therapy',
    other: 'Her recently published book, When the Walls Come Tumbling Down, guides families through the divorce process. Marital Therapy. Treats children and female adolescents experiencing high anxiety and developmental problems. Proficient in using Cognitive-Behavioral Therapy with patients suffering from anxiety and depression.', 
    img: '../../Images/mRicker.jpg',
    therapist: true,
    rating: 92,
    date: new Date(Date.now())
  },
  {
    name: "Paul F Dell",
    title: "PhD, ABPP",
    specialties: 'Treatment of posttraumatic and dissociative disorders; Consultation/Supervision for therapists learning to diagnose and treat dissociative identity disorder',
    education: 'Pennsylvania State University, BS, 1970; University of Texas, PhD, 1977; University of Texas Medical Branch, Fellowship in Family Therapy, 1978',
    other: 'National Register of Health Service Psychologists, Member; International Society for the Study of Trauma and Dissociation, Past President; Author: 2 books and 75 articles.', 
    hours: 'Norfolk office',
    therapist: true,
    img: '../../Images/pDell.jpg',
    rating: 91,
    date: new Date(Date.now())
  },
  {
    name: "Denise Keeley",
    title: "LCSW",
    specialties: 'Individual and family therapy for adult and young adults. I am a clinical social worker with a medical background. I provide psychotherapy for those with depression, anxiety and medical illnesses. I have experience working with transgender clients including providing psychotherapy, providing written documentation for those seeking referrals to medical doctors for hormone therapy and for those pursuing surgical transition.',
    education: 'Norfolk State University; Old Dominion University; Member of National Association of Social Workers',
    hours: 'Day and evening appointments available as well as Saturday appointments',
    therapist: true,
    img: '../../Images/keeleydenise.jpg',
    rating: 90,
    date: new Date(Date.now())
  },
  {
    name: "Michael Sullivan",
    title: "Ph.D.",
    specialties: 'trauma, anxiety and depression, chronic pain',
    education: 'University of Oregon, Ph.D., M.A. Boston College, B.A.',
    other: 'License: State of Virginia licensed clinical psychologist I bring years of wide-ranging experience to work with my clients. I have worked in inpatient and outpatient settings with a variety of clients over the years. I have been a consultant and workshop presenter. I have taught college-level courses and I am a published author. My private practice focuses on therapy with adultsand couples. I believe every client and his or her situation is unique. I do not believe in a one-size-fits-all approach to therapy. I use EMDR, cognitive-behavioral, solution-oriented, or other approaches as they fit clients’ needs. I also use plain old common sense and humor in liberal doses. I consider therapy a joint effort, a partnership, a “We’re working on this together” experience.', 
    img: '../../Images/mSullivan.jpg',
    rating: 89,
    therapist: true,
    date: new Date(Date.now())
  },
  {
    name: "Raleigh Phillips",
    title: "PhD",
    specialties: 'Psychological Testing and Individual Therapy.',
    education: 'Dr. Raleigh Phillips attended Davidson College majoring in Psychology and Sociology.  After traveling in Europe and Asia for a year, he returned to work with inner city adolescents while studying Special Education, M.Ed. at the University of Georgia.  Doctoral Studies in Clinical Psychology followed at The Illinois School of Professional Psychology, earning a Psy. D., learning with professors from Northwestern and The University of Chicago. He has been in practice for 29 years with Riverpoint Psychiatric Associates in Norfolk..  Dr. Phillips is very happy to join his former “professor” and colleague, Dr. Michael Weissman, Ph. D. at Churchland Psychological Center.',
    hours: 'Norfolk office; Monday through Thursday, 8:00 AM to 4 PM',
    img: '../../Images/rPhillips.jpg',
    therapist: true,
    rating: 88,
    date: new Date(Date.now())
  },
  {
    name: "Lindsey Pace",
    title: "LCSW",
    specialties: 'I’m Lindsey Pace and I’m a Licensed Clinical Social Worker.  I would consider it an honor and privilege to be on your mental health team. I received my Bachelor’s Degree in Psychology from Stamford University in 2005 and my Master’s Degree in Social Work from the University of Alabama in 2007. I primarily work with adults and couples in the areas of grief and loss, anxiety and depression, life transitions (new parents, empty-nesters, career change, etc.), caregiver burnout, and relationship issues',
    education: 'My goal is to provide a warm, caring, and non-judgmental atmosphere where clients and I work in partnership to pursue positive growth and lifelong change. My approach to treatment is based primarily in cognitive behavioral therapy, however, I draw from a variety of schools of therapy according to what works best for each client. I don’t believe we can do this life well and fulfill our full potential without taking some time to examine our thought life and emotional health. I’ve experienced firsthand the gifts of therapy and I love nothing more than seeing others gain freedom, peace and connection through counseling and mental health care. improve their lives through counseling and mental health care.',
    hours: 'Churchland office; Tuesday evenings, with additional days and times to be announced.',
    img: '../../Images/lPace.png',
    therapist: true,
    rating: 87,
    date: new Date(Date.now())
  },
  {
    name: "Rebecca Buck",
    title: " LCSW",
    specialties: 'Rebecca has 11 years of experience providing therapeutic services to children, adolescents, and adults in an individual, group, or family capacity.  I have provided services in inpatient, outpatient, and teletherapy settings in private practices and community services settings',
    hours: 'Churchland and telehealth; flexible hours per client need.',
    img: '../../Images/rBuck.png',
    rating: 86,
    therapist: true,
    date: new Date(Date.now())
  },
  {
    name: "Jennifer Hart",
    title: "LCSW",
    specialties: 'Treatment Orientation: Coaching, Cognitive Behavioral (CBT), Solution Focused Brief therapy (SFBT)',
    education: 'Hi, I’m Jennifer Hart, LCSW. Throughout my career I have had the opportunity to work in both inpatient and outpatient settings. I also have a medical social work background so I understand the importance of managing both our physical and mental health. For the most part, I have experience working with adolescents and adults. My goal is to help you better understand yourself and to provide you with the tools necessary to cope with life struggles. The most important thing I am reminded of everyday as a helping professional is that we were not meant to be alone. I want to help build on your strengths using a person-centered approach through the therapeutic process.',
    img: '../../Images/jHart.jpg',
    therapist: true,
    rating: 85,
    date: new Date(Date.now())
  },
  {
    name: "Michelle Johnson",
    title: "LCSW, CSAC, CTS, MAC, CADC",
    specialties: 'Adult survivors of neglect, sexual, physical, and emotional abuse. Trauma/PTSD; Adult Children of Alcoholics (ACA); Substance Abuse/Co-Occurring; Complex comorbidity/dual diagnoses: depression and anxiety; mood disorders; post foster care issues. Licensed to practice independently as a clinical social worker and psychotherapist in the state of Virginia.  Certified Trauma Specialist.  Master of Addictions Counselor. Certified Substance Abuse Counselor.  Certified Alcohol and Drug Counselor.',
  education: 'Graduate degree (MSW) in Clinical Social Work from Norfolk State University in Norfolk, VA.  Undergraduate degree (BSW) in Social Work from Norfolk State University. Experience: Throughout the past 20 years I have worked providing services in mental health, substance abuse, psychoeducation, public awareness, training, and guest speaking to a wide spectrum of communities addressing substance abuse- and mental health-related issues',
  other: ' I practice primarily in Cognitive Behavioral Therapy and Trauma-Focus Model/Family Systems Theory; however, also drawing from a variety of schools of therapy.  Psychodynamic, Narrative Therapy, Psychoeducation/Group therapy, Supportive Therapy, and Brief Therapy in the context of applying Critical Thinking (CT) Skills to the planned change process.  ', 
  hours: 'Adults 18+; Young adults exiting the foster care system; and some adolescents under special circumstances.',
    img: '../../Images/mJohnson.png',
    therapist: true,
    rating: 84,
    date: new Date(Date.now())
  },
  {
    name: "Crystal Harris",
    title: "LCSW",
    specialties: 'Social Work',
    therapist: true,
    img: '../../Images/cHarris.jpg',
    rating: 83,
    date: new Date(Date.now())
  },
  {
  name: "Julie VanGosen",
  title: "Office Manager",
  rating: 82,
  therapist: false,
  img: '../../Images/jVanGosen.jpg',
  date: new Date(Date.now())
},
{
  name: "Janet Meyers",
  title: "Assistant Office Manager",
  rating: 81,
  therapist: false,
  img: '../../Images/jMyers.jpg',
  date: new Date(Date.now())
},
{
  name: "Courtney Owens",
  title: "Receptionist",
  // specialties: '',
  // education: '',
  // other: '', 
  // hours: '',
  therapist: false,
  rating: 80,
  img: '../../Images/cOwens.jpg',
  date: new Date(Date.now())
},

]
// {
//   name: "",
//   title: "",
//   specialties: '',
//   education: '',
//   other: '', 
//   hours: '',
// rating: 79,
//   img: '../../Images/sAsprey.jpg',
//   date: new Date(Date.now())
// },
const resourcesSeed = [
  // {
  //   catagory: "about",
  //   heading: "About Us",
  //   subtitle: "from the creator of GraphicKnowvel",
  //   body1:
  //     "We are a Philadelphia based company serving the needs of small businesses in need of a little cash.",
  //     body2:
  //     "View our values and mission statment to learn more.",
  //     rating: 4,
  //     date: new Date(Date.now())
  // },
  // {
  //   catagory: "howitWorks",
  //   heading: "What are your hours?",
  //   body1:
  //     "Each of our therapists has their own hours, please check their bio on the staff page for more information. The business office is open M-F 9am to 5pm. If you are experiencing a clinical emergency and cannot reach your therapist, please call the answering service at 757-671-3152 to be connected with the therapist on call.",
  //     rating: 2,
  //   date: new Date(Date.now())
  // },
  // {
  //   catagory: "privacypolicy",
  //   heading: "The Dead Zone",
  //   body1:
  //       "Please reproduce and share!",
  //     body2:
  //     "See terms of use",
  //     rating: 1,
  //           date: new Date(Date.now())
  // },
  // {
  //   catagory: "termsofuse",
  //   heading: "Terms of Use",
  //   body1:
  //     "Terms of use the sale of this product is not limited in any way.",
  //     body2:
  //     "No Copyright as of yet.",
  //     rating: 1,
  //     date: new Date(Date.now())
  // },
  // {
  //   catagory: "missionstatement",
  //   heading: "Mission Statement",
  //   body1:
  //     "Partnering with small businesses to help them grow by providing honest, transparent, and consultive funding solutions tailored to the individual needs of each business.",
  //     rating: 3,
  //     date: new Date(Date.now())
  // },
  // {
  //   catagory: "values",
  //   heading: "Core Values",
  //   body1:
  //     "Be Honest and Transparent, Understand Each Client's Unique Needs, Look Out For Client's Best Interest, Client Success Is our Sucess, and Believe In Each And Every patient.",
  //     rating: 4,
  //     date: new Date(Date.now())
  // },
  // {
  //   catagory: "faq",
  //   heading: "Does an application cost money?",
  //   body1:
  //     "No! It will always be free",
  //     rating: 3,
  //   date: new Date(Date.now())
  // },
  {
    catagory: "schedule",
    heading: "How do I schedule an appointment?",
    body1:
      "Please call the main business office at 757-483-3404 and our office staff will take your information and help match you to the appropriate therapist. All of our therapists manage their own schedules, so the therapist will contact you directly to schedule your first appointment.",
      rating: 4,
      display: true,
    date: new Date(Date.now())
  },
  {
    catagory: "insurance",
    heading: "What insurance do you accept?",
    body1:
      "We accept most insurance plans including Anthem Blue Cross Blue Shield, Tricare, Optima, and United Behavioral among many others.",
      rating: 3,
      display: true,
    date: new Date(Date.now())
  },
  {
    catagory: "howmuch",
    heading: "How much will I have to pay for therapy?",
    body1:
      "Most of our clients use insurance to cover the cost of therapy, and the cost will vary depending on your particular plan. You can contact your insurance company to inquire about your benefits, copayments, and deductible",
      rating: 2,
      display: true,
    date: new Date(Date.now())
  },
    {
    catagory: "medicine",
    heading: "Can you prescribe medication for my depression or anxiety?",
    body1:
      "No, we don’t have a psychiatrist on staff and do not offer this service. If your therapist feels that medication might be warranted then an appropriate referral will be made.",
      rating: 1,
      display: true,
    date: new Date(Date.now())
  },
  {
    catagory: "teletherapy",
    heading: "In view of the present Coronavirus Pandemic, Churchland Psychological Center offers REMOTE THERAPY (“Teletherapy”) as an option to all of our patients. This option is covered by almost all insurance companies.",
    body1:"Teletherapy is an option we offer to all of our patients under certain circumstances. Certainly, at present, in 2020, the world is faced with the Coronavirus pandemic, requiring that we stay at home is much as possible, and therefore offering this service allows each patient to continue their therapy without leaving their home. Each therapist in the practice uses the medium that they are most comfortable with and which best suits the patient’s preferences. We can conduct sessions over the Internet where the patient and therapist can see each other and communicate much as they would in the office, allowing the patient to either use their computer, tablet, or smart phone to connect with the therapist. Other options include Facetime, Skype, Zoom, Doxy, and others. Some methods of connecting are more secure than others. For example, both Zoom and Doxy are fully HIPAA compliant, meaning the highest level of security is offered to prevent any possible access by anybody other than the patient and therapist talking with each other. Skype and FaceTime offer less security, but are still acceptable. In some cases, for example, if a patient does not have a computer or smart phone, we can simply have the session conducted by telephone, as this is now permitted under the current health crisis, when normally it is not a covered service. Thus, there are many options available for the therapist to connect with his or her patient. Government regulations have been eased to allow for as much remote therapy as possible",
    rating: 5,
    display: true,
    date: new Date(Date.now())
  },
  {
    catagory: "editform",
    heading: "Form Submition",
    display: false,
    body1:  "Please click on the appropriate link below and the forms will be sent to you within one business day."
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