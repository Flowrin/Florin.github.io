/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from 'react-easy-emoji';

const greeting = {
  /* Your Summary And Greeting Section */
  username: 'Florin Lilea',
  title: "Hi I'm Florin",
  subTitle: emoji(
    'A passionate Web Developer 🚀 having experience in building Web  applications with JavaScript / Reactjs / Nodejs  and some other cool libraries and frameworks.'
  ),
  resumeLink:
    'https://drive.google.com/file/d/1x0QFG7zOY4jcP3S-wS5zIjD8jH1Q37DE/view?usp=sharing',
};

// Your Social Media Link

const socialMediaLinks = {
  github: 'https://github.com/Flowrin',
  linkedin: 'https://www.linkedin.com/in/florinlilea94/',
  gmail: 'florin.lilea94@gmail.com',

  // Instagram and Twitter are also supported in the links!
};

// Your Skills Section

const skillsSection = {
  title: 'What i do',
  subTitle: 'CRAZY  DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK',
  skills: [
    emoji(
      '⚡ Develop highly interactive Front end / Back end applications for your web '
    ),
    emoji('⚡ Single Page Applications using MERN stack'),
    emoji(
      '⚡ Integration of third party services such as  AWS '
    ),
  ],

  /* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: 'html-5',
      fontAwesomeClassname: 'fab fa-html5',
    },
    {
      skillName: 'css3',
      fontAwesomeClassname: 'fab fa-css3-alt',
    },

    {
      skillName: 'less',
      fontAwesomeClassname: 'fab fa-less',
    },
    {
      skillName: 'JavaScript',
      fontAwesomeClassname: 'fab fa-js',
    },
    {
      skillName: 'React.js',
      fontAwesomeClassname: 'fab fa-react',
    },
    {
      skillName: 'Node.js',
      fontAwesomeClassname: 'fab fa-node',
    },

    {
      skillName: 'npm',
      fontAwesomeClassname: 'fab fa-npm',
    },
    {
      skillName: 'MongoDB',
      fontAwesomeClassname: 'fas fa-database',
    },

    {
      skillName: 'docker',
      fontAwesomeClassname: 'fab fa-docker',
    },
  ],
};



const educationInfo = {
  viewEducation: true, 
  schools: [
    {
      schoolName: 'University College Lillebaelt',
      logo: require('./assets/images/uclLogo.png'),
      subHeader: 'Bachelor in Computer Science ',
      duration: 'September 2014 - July 2018',
      desc: 'Took courses about Software Engineering, Algorithms and Data Structures, Systems and Networks, Programming Languages and Compilers. ',
      descBullets: [
       
       
      ],
    },

  ],
};



const techStack = {
  viewSkillBars: true, 
  experience: [
    {
      Stack: 'Frontend/Design', 
      progressPercentage: '65%', 
    },
    {
      Stack: 'Backend',
      progressPercentage: '75%',
    },

  ],
};

// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: 'Web Developer ',
      company: 'Beautycos A/S Odense ',
      companylogo: require('./assets/images/beautycos.jpg'),
      date: 'December 2017 – November 2018',
      desc:
        '	Created a single web page type application using  Less, React.js, Redux , Node.js, Express, Mongo DB. ',
      descBullets: [
        '	Responsible to Style, look and feel of the web page with Less that extends CSS with dynamic behavior such as variable, mixing, operations and functions.',
        '	Have worked on AWS to integrate the server side and client-side code.',
        '	Used React flux to polish the data and for single directional flow.',
        '	Used Object Oriented Programming concepts to develop UI components that could be reused across the Web Application.',
        '	Used Node.JS to structure and to build RESTful webservices.',
        '	Continuous Integration/Continuous Delivery frameworks architecture, implementation and maintenance.',
        '	Used Mocha for the Unit testing of the project.',
        '	Applied optimization techniques to reduce page size and load times to enhance user experience.',
        '	Maintain and configure MongoDB instances.',
        '	Deploying and maintaining production environment using AWS EC2 instances and ECS with Docker.',
        '	Implement best practices for Rest API integration framework/model.',
        
      ],
    },
 
  ],
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: 'flowrin', // Change to your github username to view your profile in Contact Section.
  showGithubProfile: 'true', // Set true or false to show Contact profile using Github, defaults to false
};

// Some Big Projects You have worked with your company

const bigProjects = {
  title: 'Big Projects',
  subtitle: 'SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH',
  projects: [
    {
      image: require('./assets/images/saayaHealthLogo.webp'),
      link: 'http://saayahealth.com/',
    },
    {
      image: require('./assets/images/nextuLogo.webp'),
      link: 'http://nextu.se/',
    },
  ],
};

// Your Achievement Section Include Your Certification Talks and More

const achievementSection = {
  title: emoji('Achievements And Certifications 🏆 '),
  subtitle:
    'Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !',

  achievementsCards: [
    {
      title: 'Google Code-In Finalist',
      subtitle:
        'First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.',
      image: require('./assets/images/codeInLogo.webp'),
      footerLink: [
        {
          name: 'Certification',
          url:
            'https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing',
        },
        {
          name: 'Award Letter',
          url:
            'https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing',
        },
        {
          name: 'Google Code-in Blog',
          url:
            'https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html',
        },
      ],
    },
    {
      title: 'Google Assistant Action',
      subtitle:
        'Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.',
      image: require('./assets/images/googleAssistantLogo.webp'),
      footerLink: [
        {
          name: 'View Google Assistant Action',
          url:
            'https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en',
        },
      ],
    },

    {
      title: 'PWA Web App Developer',
      subtitle: 'Completed Certifcation from SMIT for PWA Web App Development',
      image: require('./assets/images/pwaLogo.webp'),
      footerLink: [
        { name: 'Certification', url: '' },
        {
          name: 'Final Project',
          url: 'https://pakistan-olx-1.firebaseapp.com/',
        },
      ],
    },
  ],
};

// Blogs Section

const blogSection = {
  title: 'Blogs',
  subtitle:
    'With Love for Developing cool stuff, I love to write and teach others what I have learnt.',

  blogs: [
    {
      url:
        'https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae',
      title: 'Win a Google Assistant Tshirt and $200 in Google Cloud Credits',
      description:
        'Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?',
    },
    {
      url: 'https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e',
      title: 'Why REACT is The Best?',
      description:
        'React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies.',
    },
  ],
};

// Talks Sections

const talkSection = {
  title: 'TALKS',
  subtitle: emoji(
    'I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅'
  ),

  talks: [
    {
      title: 'Build Actions For Google Assistant',
      subtitle: 'Codelab at GDG DevFest Karachi 2019',
      slides_url: 'https://bit.ly/saadpasta-slides',
      event_url: 'https://www.facebook.com/events/2339906106275053/',
    },
  ],
};



const podcastSection = {
  title: emoji('Podcast 🎙️'),
  subtitle: 'I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY',

  // Please Provide with Your Podcast embeded Link
  podcast: [
    'https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo',
  ],
};

const contactInfo = {
  title: emoji('Contact Me ☎️'),
  subtitle:
    'Discuss a project or just want to say hi? My Inbox is open for all.',
  number: '+45 22570868',
  email_address: 'florin.lilea94@gmail.com',
};

//Twitter Section

const twitterDetails = {
  userName: 'twitter', //Replace "twitter" with your twitter username without @
};
export {
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
};
