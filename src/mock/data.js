import uuidv1 from 'uuid/v1';

// HEAD DATA
export const headData = {
  title: 'Ilhyo Aiden Sung | Software Developer', // e.g: 'Name | Developer'
  lang: 'en', // e.g: en, es, fr, jp
  description: 'Welcome to my Portfolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Ilhyo Aiden Sung',
  subtitle: "I'm the Software Developer you need",
  cta: 'Hire me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    'Goal-oriented and hardworking Software Developer eager to contribute to team success with high level of experience working on multiple projects. Clear understanding of React/Redux. Motivated to learn and good in crisis and under pressure.',
  paragraphTwo: '',
  paragraphThree: '',
  resume: 'https://drive.google.com/file/d/1U2GJwOPf1UJcoD-ALNRbj18Z47MVoVKi/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv1(),
    img: 'project_Ecommerce.jpg',
    title: 'E-Commerce App',
    info:
      'React, Redux, JavaScript, CSS, SASS, Redux-Saga, React Hooks, Context API, GraphQL + Apollo, Mobile-responsive, PWA, Firebase-Authentication, Firebase-Firestore, Stripe payment, Heroku',
    info2: '',
    url: 'https://crown-clothing-aiden.herokuapp.com/',
    repo: 'https://github.com/aidensung/crown-clothing', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project_FaceRecognition.jpg',
    title: 'Face Recognition App',
    info:
      'React, Node.js, Express.js, JavaScript, RESTful API, Clarifai API, PostgreSQL, Postman, Heroku',
    info2: '',
    url: 'https://smart-brain-aiden.herokuapp.com/',
    repo: 'https://github.com/aidensung/smart-brain', // if no repo, the button will not show up
  },
  {
    id: uuidv1(),
    img: 'project_SearchMonster.jpg',
    title: 'Search Monster App',
    info: 'React',
    info2: '',
    url: 'https://aidensung.github.io/monsters-rolodex/',
    repo: 'https://github.com/aidensung/monsters-rolodex', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Email me',
  email: 'sih8189@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv1(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/aidensung/?locale=en_US',
    },
    {
      id: uuidv1(),
      name: 'github',
      url: 'https://github.com/aidensung',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
