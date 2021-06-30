import emoji from 'react-easy-emoji';

// import googlelogo from './assets/img/icons/common/google.svg'
import github from './assets/img/icons/common/github.svg'
import Neptune from './assets/img/icons/common/logoNeptune.png'
import newHorizn from './assets/img/icons/common/newHorizn.svg'


export const greetings = {
    "name": "Kayode Ipentan",
    "title": "Hi , I'm Kayode",
    "description": "A Highly motivated, creative, passionate Front-End Web Developer having an experience of building Web applications with JavaScript / Reactjs / Nodejs / ExpressJs / Php  and some other cool libraries and frameworks, with a flair of creating elegant solutions in the least amount of time.",
    // "resumeLink": "https://cv.hanzla.ga"
}

export const openSource = {
  githubUserName: 'kayode-ik',
};

export const contact = {
  contact : '07037671754',
}

export const socialLinks = {
    "facebook": "https://www.facebook.com/ipentan kayode",
    "instagram": "https://www.instagram.com/kayode.ip",
    "twitter": "https://twitter.com/aanu_kayode",
    "github": "https://github.com/kayode-ik",
    "linkedin": "https://www.linkedin.com/in/ipentan-kayode-06b380a8/"
}

export const skillsSection = {
    title: 'What I do',
    subTitle: 'FRONT-END DEVELOPER WHO WANTS TO DEVELOP DIGITAL EXPERIENCES WITH A STRONG FOCUS ON  DELIVERING EXCEPTIONAL USER EXPERIENCE',
    skills: [
      emoji(
        '⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications'
      ),
      emoji('⚡ Optimize application for maximum speed and scalability'),
      emoji(
        '⚡ Integration of third party services such as Firebase/ AWS '
      ),
    ],
    
    softwareSkills: [
      {
        skillName: 'html-5',
        fontAwesomeClassname: 'vscode-icons:file-type-html',
      },
      {
        skillName: 'css3',
        fontAwesomeClassname: 'vscode-icons:file-type-css',
      },
      {
        skillName: 'sass',
        fontAwesomeClassname: 'logos:sass',
      },
      {
        skillName: 'JavaScript',
        fontAwesomeClassname: 'logos:javascript',
      },
      {
        skillName: 'TypeScript',
        fontAwesomeClassname: 'logos:typescript-icon',
      },
      {
        skillName: 'reactjs',
        fontAwesomeClassname: 'vscode-icons:file-type-reactjs',
      },
      {
        skillName: 'nodejs',
        fontAwesomeClassname: 'logos:nodejs-icon',
      },
      // {
      //   skillName: 'flutter',
      //   fontAwesomeClassname: 'logos:flutter',
      // },
      // {
      //   skillName: 'swift',
      //   fontAwesomeClassname: 'vscode-icons:file-type-swift',
      // },
      {
        skillName: 'npm',
        fontAwesomeClassname: 'vscode-icons:file-type-npm',
      },
      {
        skillName: 'sql-database',
        fontAwesomeClassname: 'vscode-icons:file-type-sql',
      },
      {
        skillName: 'mongoDB',
        fontAwesomeClassname: 'vscode-icons:file-type-mongo',
      },
      {
        skillName: 'aws',
        fontAwesomeClassname: 'logos:aws',
      },
      {
        skillName: 'firebase',
        fontAwesomeClassname: 'logos:firebase',
      },
      {
        skillName: 'python',
        fontAwesomeClassname: 'logos:python',
      },
      {
        skillName: 'git',
        fontAwesomeClassname: 'logos:git-icon',
      },
      {
        skillName: 'docker',
        fontAwesomeClassname: 'logos:docker-icon',
      },
    ],
}


export const SkillBars = [
    {
      Stack: 'Frontend/Design', //Insert stack or technology you have experience in
      progressPercentage: '90', //Insert relative proficiency in percentage
    },
    {
      Stack: 'Backend',
      progressPercentage: '70',
    },
    {
      Stack: 'UI/UX',
      progressPercentage: '50',
    },
  ]

// export const educationInfo = [
//     {
//       schoolName: 'Harvard University',
//       subHeader: 'Master of Science in Computer Science',
//       duration: 'September 2017 - April 2019',
//       desc: 'Participated in the research of XXX and published 3 papers.',
//       descBullets: [
//         'Lorem ipsum dolor sit amet, consectetur adipdfgiscing elit',
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//       ],
//     },
//     {
//       schoolName: 'Harvard',
//       subHeader: 'Master of Science in Computer Science',
//       duration: 'September 2017 - April 2019',
//       desc: 'Participated in the research of XXX and published 3 papers.',
//       descBullets: [
//         'Lorem ipsum dolor sit amet, consectetfgur adipiscing elit',
//         'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
//       ],
//     },
//     {
//       schoolName: 'Stanford University',
//       subHeader: 'Bachelor of Science in Computer Science',
//       duration: 'September 2013 - April 2017',
//       desc:
//         'Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...',
//       descBullets: ['Lorem ipsum dolorfdg sit amet, consectetur adipiscing elit'],
//     },
// ]

export const experience = [
  {
    role: 'Software Engineer',
    company: 'Neptune',
    companylogo: Neptune,
    date: 'June 2018 – Present',
    desc:
      'Creating web services and APIs endpoint along with consuming on websites.',
    descBullets: [
      'Testing of Web services on soapUI and Postman and NIBBs services.',
      'Engagement in Development of Web Applications and designing of the user interface.',
    ],
  },
  {
    role: 'Front-End Freelancer Developer',
    company: 'Github',
    companylogo: github,
    date: 'Jan 2017 – Present',
    desc:
      'Developing and implementing front-end architecture to support user interface concepts.',
      descBullets: [
        'Creating standardized and co-operate websites with Html, Css, JavaScript and Php.',
        'Developing and implementing highly responsive user interface components using react concepts.',
      ],

  },
  {
    role: 'Software Engineer Intern',
    company: 'New Horizon',
    companylogo: newHorizn,
    date: 'Jul 2019 – Aug 2019',
    desc:
      'Building wireframes and prototypes which was used to create a functional and responsive digital framework. I was also Planning site designs, functionality and navigation, along with audience funnels and data captures',
  },
]

export const projects = [
  {
    name: "Domarket",
    desc: "At Domarket, we believe Shopping should be fun. On our site, people can get to not only buy and sell but also get entertained by checking out our Explore page where we have various posts covering different categories.",
    link: {
      name: "View",
      url: "https://domarket.com.ng/"
    }
  },
  {
    name: "Ariyike Hair",
    desc: "Ariyike hair is a trusted professional hair business vendor, with the aim of supplying affordable yet exquisite and luxurious hair for every woman",
    link: {
      name: "View",
      url: "https://ariyikehair.com/"
    }
  },
  {
    name: "AjScanAf",
    desc: "AJ-Scanaf Global Resources Limited is a company specialized in Sales of Both Nigerian and Foreign used Machinery and a wide variety of Spare parts related to the servicing and/or operations of these heavy equipment.",
    link: {
      name: "View",
      url: "https://ajscanaf.com/"
    }
  },

  {
    name: "LinkedIn Clone / Redux / StyledComponent / ReactJs",
    desc: "Web Application, Mobile view in progress",
    link: {
      name: "View",
      url: "https://linkedin-cloneyt-react.web.app/"
    }
  },

  {
    name: "Instagram Clone / Firebase / ReactJs",
    desc: "Web Application, Mobile view in progress",
    link: {
      name: "View",
      url: "https://instagram-clone-react-2f669.web.app/"
    }
  },


  {
    name: "Twitter Clone / Firebase / ReactJs",
    desc: "Web Application, Mobile view in progress",
    link: {
      name: "View",
      url: "https://github.com/kayode-ik/twitter-clone"
    }
  },

  {
    name: "Amazon Clone / Firebase / ReactJs",
    desc: "Web Application, Mobile view in progress",
    link: {
      name: "View",
      url: "https://clone-ed42f.web.app/"
    },
  }
]