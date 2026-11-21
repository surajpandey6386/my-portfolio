export const profile = {
  name: 'Suraj Pandey', title: 'MERN Stack Developer',
  tagline: 'Building modern, scalable and user-friendly web applications.',
  location: 'Lucknow, Uttar Pradesh, India',
  email: 'surajpandey638652@gmail.com', phone: '+91 6386528176',
  github: 'https://github.com/surajpandey6386',
  linkedin: 'https://linkedin.com/in/surajpandey-29b11635a',
}
export const nav = ['Home','About','Skills','Experience','Projects','Education','Contact']
export const about = [
  'I am a BCA graduate with a strong interest in Full-Stack Web Development and Software Engineering. I have hands-on experience building and deploying full-stack applications using the MERN stack.',
  'I enjoy developing responsive web applications, designing REST APIs, integrating authentication and payment systems, and working with databases.',
  'I also have a strong foundation in Java, SQL, and Data Structures & Algorithms, and I keep improving my programming and problem-solving skills.',
]
export const skills = {
  'Programming languages': ['JavaScript','Java','Python','SQL','HTML','CSS'],
  'Frameworks and libraries': ['React.js','Node.js','Express.js'],
  'Databases': ['MongoDB','SQL'],
  'Tools and platforms': ['Git','GitHub','Postman','Vercel','MS Office'],
  'Core computer science': ['Data Structures & Algorithms','DBMS','Operating Systems','Object-Oriented Programming','Computer Networks','REST APIs'],
}
export const experience = {
  role: 'MERN Stack Development Intern', company: 'TDL Limited', year: '2025',
  dates: '12 Jun 2025 – 12 Jul 2025', issuer: 'Techdock Labs',
  cert: { title: 'Internship Certificate', org: 'Techdock Labs', year: 'Jul 2025', image: '/certificates/internship.jpg' },
  points: [
    'Completed a 1-month MERN Stack web development training and internship, working on the DealHut project.',
    'Built and maintained full-stack web features using React.js, Node.js, Express.js, and MongoDB.',
    'Developed and tested RESTful APIs using Postman.',
    'Used Git and GitHub for version control and collaboration.',
  ],
}
// Add github link, and logo (e.g. '/cinebook-logo.png' placed in /public). Buttons only render when a link exists.
// Buttons only render when a link exists.


export const projects = [
  {
    number: "01",
    title: "CineBook",
    category: "MOVIE TICKET BOOKING",
    subtitle: "Movie Ticket Booking Platform",
    desc: "A full-stack movie booking platform where users can discover movies, watch trailers, select seats and book tickets with secure online payments.",
    image: "/projects/cinebook-banner.png",
    imageFit: "cover",

    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "TMDB API",
      "Clerk",
      "Inngest",
      "Razorpay",
      "Vercel"
    ],

    features: [
      "Movie discovery, trailers and cast details via TMDB API",
      "Interactive show and seat selection",
      "Online payment integration",
      "Admin panel for movies, shows and bookings",
      "Secure authentication with Clerk",
      "Background workflows with Inngest"
    ],

    demo: "https://cinebook-frontend-puce.vercel.app/",
    github: ""
  },

  {
    number: "02",
    title: "DealHut",
    category: "E-COMMERCE DEVELOPMENT",
    subtitle: "Full-Stack E-Commerce Platform",
    desc: "A full-featured e-commerce application providing a seamless shopping experience with product management, authentication, shopping cart and an admin dashboard.",
    image: "/projects/dealhut-logo.png",
    imageFit: "contain",

    stack: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
      "Razorpay",
      "Vercel"
    ],

    features: [
      "Product browsing and search",
      "Shopping cart and payment integration",
      "Secure user authentication",
      "Order history and profile management",
      "Admin dashboard for products and orders"
    ],

    demo: "https://dealhut-client.vercel.app/",
    github: ""
  }
]


export const education = [
  { title: 'Bachelor of Computer Applications (BCA)', place: ' University of Lucknow', when: 'Aug 2023 – Aug 2026', score: '77% · CGPA 8' },
  { title: 'Class 12 – Science', place: 'S.V.M. Inter College', when: '2022 – 2023', score: '79%' },
  { title: 'Class 10', place: 'S.V.M. Inter College', when: '2020 – 2021', score: '86%' },
]

export const roles = ['MERN Stack Developer','Full-Stack Web Developer','React.js Developer']
// Set pending:false (and update year) once a certificate is received.
export const certifications = [
  {
    title: 'JavaScript Programming',
    org: 'Scaler Topics',
    year: 'Nov 2024',
    image: '/certificates/javascript.jpg'
  },
  {
    title: 'Python Programming',
    org: 'Scaler Topics',
    year: 'Sep 2024',
    image: '/certificates/python.jpg'
  },
  {
    title: 'Introduction to SQL',
    org: 'Simplilearn SkillUp',
    year: 'Nov 2026',
    image: '/certificates/sql.png',
    pending: false,
    issuedOn: '21 November 2026',
    certificateCode: '11060945',
    description:
      'Successfully completed the Introduction to SQL online course offered by Simplilearn SkillUp on 21 November 2026. Demonstrated initiative and commitment to deepening technical skills and advancing professional knowledge.'
  }
]
export const achievements = [
  { title: 'Code Hackathon: Finalist', org: 'The Study Hall College', year: 'Sep 2025', image: '/certificates/hackathon.jpg' },
  { title: 'Internet of Things Workshop', org: 'Softflew Technologies & Training Institute', year: 'Oct 2025', image: '/certificates/iot.jpg' },
]
// Bump automatically by `npm run resume -- <file.pdf>`
export const resumeVersion = '1'
export const resumeHref = `/resume.pdf?v=${resumeVersion}`

