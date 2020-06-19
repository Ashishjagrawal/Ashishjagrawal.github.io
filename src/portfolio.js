
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Your Summary And Greeting Section */
  username: "Ashish Jagrawal",
  title: "Hi all, I'm Ashish",
  subTitle: emoji("A passionate Software Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."),
  resumeLink: ""
};

// Your Social Media Link

const socialMediaLinks = {

  github: "https://github.com/ashishjagrawal",
  linkedin: "https://www.linkedin.com/in/ashishkjagrawal/",
  gmail: "akjagrawal@gmail.com",
  facebook: "https://www.facebook.com/ashishjagrawal0",
  instagram: "https://www.instagram.com/theashishjagrawal"
  
};

// Your Skills Section

const skillsSection = {
  title: "What i do",
  subTitle: "I am a Full Stack Developer with good sense of design",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Building powerfull Backend and Database for your applications."),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks")
  ],

/* Make Sure You include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "git",
      fontAwesomeClassname: "fab fa-git"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "Firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design",  //Insert stack or technology you have experience in
      progressPercentage: "90%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "82%"
    },
    {
      Stack: "Programming",
      progressPercentage: "70%"
    }
  ]
};



/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "ashishjagrawal", 
  showGithubProfile :"true" 
};


// Some Big Projects You have worked with your company

const bigProjects = {
  title: "Projects",
  // subtitle: "These are some of my hobby projects and projects that I have made for startups",
  subtitle: "Comming Soon...",
  projects: [
    {
      image: ".\assets\images\advertocean.png",
      link: "https://advertocean.com/"
    }
  ]
};


// Blogs Section

const blogSection = {

  title: "Blogs",
  subtitle: "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "https://medium.com/@akjagrawal24/why-learning-code-is-important-48877780a9f7",
      title: "Why learn to code is important and recommanded to everyone.",
      description: "This Medium blog explains the future of automation and importence of coding skill in future."
    },
    
  ]
};



const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+917690892950",
  email_address: "akjagrawal24@gmail.com"
};

//Twitter Section

const twitterDetails = {

  userName : "jagrawalashish"//Replace "twitter" with your twitter username without @
  
};
export { greeting, socialMediaLinks, skillsSection, techStack, openSource, bigProjects, blogSection, contactInfo , twitterDetails};
