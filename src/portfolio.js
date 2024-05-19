/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Rudro25",
  title: "Hi all, I'm Rudro Debnath",
  subTitle: emoji(
    "Software Engineer @AppsCode Ltd. | Go | Docker | kubernetes | Tester @CoderVai | ICPC 21,22,23 Regionalist | Guardian, LeetCode(2178) | Expert, CodeForces(1882) | 5★ Codechef(2043) | Cyan, AtCoder(1241) | Setter & tester @CodeForces @Codechef @Toph."
  ),
  resumeLink:
    "https://drive.google.com/file/d/112VnOVuhnK21cMkjaiZCymTBfJhlX9pp/view?usp=drive_link", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/Rudro-25",
  linkedin: "https://www.linkedin.com/in/rudro25/",
  gmail: "rudro.cse5.bu@gmail.com",
  discord: "https://discord.com/users/619598076721496075",
  facebook: "https://www.facebook.com/rudro.debnath.399/",
  medium: "https://medium.com/@rudro25",
  stackoverflow: "https://stackoverflow.com/users/19840400/rudro25",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
    emoji(
      "⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
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
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Barishal University",
      logo: require("./assets/images/bu_logo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "January 2018 - April 2024",
      desc: "CGPA: 3.58",
      // desc: "Barisal, Bangldesh",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Khulna Public College",
      logo: require("./assets/images/kpc.jpeg"),
      subHeader: "Higher Secondary",
      duration: "June 2015 - June 2017",
      desc: "GPA: 4.50",
      // desc: "Khulna, Bangldesh",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Shovna Biraj Moyee High School",
      logo: require("./assets/images/sbmhs.jpg"),
      subHeader: "Secondary",
      duration: "Jan 2010 - Jan 2015",
      //desc: "GPA: 4.50",
      // desc: "Khulna, Bangldesh",
      descBullets: [
        "JSC - GPA: 5.00 (Got Talentpool Schoolarship) ",
        "SSC - GPA: 5.00 (Got General Schoolarship) ",
      ]
    },
    {
      schoolName: "Shovna Tarun Shongho Primary School",
      logo: require("./assets/images/school.jpg"),
      subHeader: "Primary",
      duration: "Jan 2005 - Jan 2010",
      desc: "GPA: 5.00 (Got General Schoolarship)",
      // desc: "Khulna, Bangldesh",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "30%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "85%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "AppsCode Ltd.",
      companylogo: require("./assets/images/appscode.png"),
      date: "April 2024 – Present",
      footerLink: [
        {
          name: "AppsCode Ltd.",
          url: "https://appscode.com/"
        },
      ],
      desc: "Go, Docker, Kubernetes",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      role: "Tester and Content-Creator",
      company: "CoderVai",
      companylogo: require("./assets/images/codervai.png"),
      date: "June 2023 – Present",
      footerLink: [
        {
          name: "Codevai",
          url: "https://cp.codervai.com/"
        },
      ]
      //desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "General Secretary and Mentor",
      company: "Programming Club",
      //desc: "Intra University Programming Contest",
      companylogo: require("./assets/images/bupc.jpeg"),
      date: "2022 - 2023",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
      role: "Problem Setter & Tester (Onsite and Preliminary)",
      company: "7th-DRMC International Tech Carnival 2024",
      companylogo: require("./assets/images/ditc.jpg"),
      date: "10th May, 2024",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, liqua.",
      footerLink: [
        {
          name: "Preliminary",
          url: "https://toph.co/c/7th-drmc-international-tech-carnival-2024"
        },
        {
          name: "Onsite",
          url: "https://toph.co/contests/training/kldhdrk"
        },
      ]
    },
    {
      role: "Problem Setter & Tester",
      company: "BUPC & bdapps",
      desc: "Divisional Programming Contest sponsored by bdapps",
      companylogo: require("./assets/images/bdapps.png"),
      date: "10th May, 2024",
      footerLink: [
        {
          name: "Onsite",
          url: "https://toph.co/c/7th-drmc-international-tech-carnival-2024"
        },
      ]
    },
    {
      role: "Problem Setter & Tester",
      company: "Programming Club",
      desc: "Intra University Programming Contest",
      companylogo: require("./assets/images/bupc.jpeg"),
      date: "2022 - 2023",
      footerLink: [
        {
          name: "Onsite",
          url: "https://www.hackerrank.com/contests/intra-department-programming-contest-2021-cse-university-of-barisal/challenges"
        },
      ]  
    },
    {
      role: "Problem Setter (GYM)",
      company: "CodeForces",
      companylogo: require("./assets/images/cf.png"),
      date: "Part-time",
      desc: "I arranged a GYM Contest under the co-ordination of 'Secondthread' Sir. Which contest participants was around 3k.",
      footerLink: [
        {
          name: "GYM-1k Live Participants",
          url: "https://codeforces.com/gym/102942"
        },
        {
          name: "ProblemList",
          url: "https://github.com/Rudro-25/Problem-Setting-and-Testing-Rudro25/blob/main/Setting.md"
        },
      ]  
    },
    {
      role: "Top-50 Contributer",
      company: "CodeForces",
      companylogo: require("./assets/images/contributor.png"),
      //date: "Part-time",
      desc: "I was active contributor of CF on 2021. My highest contribution was 120+.",
      footerLink: [
        {
          name: "CF Contributor list",
          url: "https://codeforces.com/top-contributed"
        },
      ]  
    },
    {
      role: "Problem Setter",
      company: "CodeChef",
      companylogo: require("./assets/images/codechef.png"),
      date: "Part-time",
      desc: "I Setted 3 problems on 3 different official contest. Also tested many contests.",
      footerLink: [
        {
          name: "ProblemList",
          url: "https://github.com/Rudro-25/Problem-Setting-and-Testing-Rudro25/blob/main/Setting.md"
        },
      ]  
    }
  ]
};

//Thesis
const thesis = {
  title: emoji("Undergrad Thesis 🏆 "),
  subtitle:
    "It's my under grad thesis under supervison MD. Erfan Sir",

  achievementsCards: [
    {
      title: "Undergrad Thesis",
      subtitle:
        "Title: Code Similarity check using graph neural network with edit distance algorithm",
      image: require("./assets/images/research.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Link",
          url: "https://github.com/Rudro-25/-Similarity-on-Programming-Languages"
        },
      ]
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [

    //IUPC1
    {
      title: "BUET IUPC 2022",
      subtitle:
        "Postion: 15th (Team_Robust)",
      image: require("./assets/images/buet_iupc_22.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://github.com/Rudro-25/Achivement-Rudro25-/tree/main/Cirtificate"
        },
        {
          name: "Standing",
          url: "https://toph.co/c/buet-inter-university-2022/standings"
        },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "SUST IUPC 2024",
      subtitle:
        "Postion: 17th (BU_FrozzenHorse)",
      image: require("./assets/images/sust_iupc_24.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://github.com/Rudro-25/Achivement-Rudro25-/tree/main/Cirtificate"
        },
        {
          name: "Standing",
          url: "https://toph.co/c/inter-university-sust-cse-carnival-2024/standings"
        },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Cou IUPC 2024",
      subtitle:
        "Postion: 21th (CodeHoppers)",
      image: require("./assets/images/cou_iupc_23.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://github.com/Rudro-25/Achivement-Rudro25-/tree/main/Cirtificate"
        },
        {
          name: "Standing",
          url: "https://toph.co/c/cou-bracnet-inter-university-2023/standings"
        },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },

    //ICPC-NCPC
    {
      title: "ICPC 2021",
      subtitle:
        "Postion: 73th (CodeHoppers)",
      image: require("./assets/images/icpc_21.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://github.com/Rudro-25/Achivement-Rudro25-/tree/main/Cirtificate"
        },
        {
          name: "ICPC ID",
          url: "https://icpc.global/ICPCID/AUMFCT84JORC"
        },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "ICPC 2022",
      subtitle:
        "Postion: 60th (CodeHoppers)",
      image: require("./assets/images/icpc_22.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://github.com/Rudro-25/Achivement-Rudro25-/tree/main/Cirtificate"
        },
        {
          name: "ICPC ID",
          url: "https://icpc.global/ICPCID/AUMFCT84JORC"
        },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "ICPC 2023",
      subtitle:
        "Postion: 64th (CodeHoppers)",
      image: require("./assets/images/icpc_23.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://github.com/Rudro-25/Achivement-Rudro25-/tree/main/Cirtificate"
        },
        {
          name: "ICPC ID",
          url: "https://icpc.global/ICPCID/AUMFCT84JORC"
        },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "NCPC 2023",
      subtitle:
        "Postion: 127th (BU_NullPointers)",
      image: require("./assets/images/ncpc_23.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://github.com/Rudro-25/Achivement-Rudro25-/tree/main/Cirtificate"
        },
        {
          name: "Standing",
          url: "https://bapsoj.org/contests/ncpc-onsite-2023-hosted-by-ju/standings"
        },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },


    //Hackhathon
    {
      title: "Code Samurai 2024",
      subtitle:
        "Finalist: Top-46th (Team_Date_Expired)",
      image: require("./assets/images/code_samurai_24.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://github.com/Rudro-25/Achivement-Rudro25-/tree/main/Cirtificate"
        },
        {
          name: "Code",
          url: "https://github.com/Rudro-25/Code_Samurai_2024"
        },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "BUET Hackathon 2022 (Devops)",
      subtitle:
        "Finalist: Top-15th (BU_TrojanHorse)",
      image: require("./assets/images/buet_hack_22.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://github.com/Rudro-25/Achivement-Rudro25-/tree/main/Cirtificate"
        },
        {
          name: "Standing",
          url: "https://toph.co/c/buet-inter-university-2022/standings"
        },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },

    //IUPC2
    {
      title: "BUET IUPC 2023",
      subtitle:
        "Postion: 46th (CodeHoppers)",
      image: require("./assets/images/buet_iupc_23.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://github.com/Rudro-25/Achivement-Rudro25-/tree/main/Cirtificate"
        },
        {
          name: "Standing",
          url: "https://toph.co/c/buet-inter-university-2023/standings"
        },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "SUST IUPC 2023",
      subtitle:
        "Postion: 71th (CodeHoppers)",
      image: require("./assets/images/sust_iupc_23.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://github.com/Rudro-25/Achivement-Rudro25-/tree/main/Cirtificate"
        },
        {
          name: "Standing",
          url: "https://toph.co/c/sust-inter-university-2023/standings"
        },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },

    //CTF
    {
      title: "MIST LeetCon CTF 2023",
      subtitle:
        "Postion: 64th (TrojanHorse)",
      image: require("./assets/images/ctf.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://github.com/Rudro-25/Achivement-Rudro25-/tree/main/Cirtificate"
        },
        // {
        //   name: "Standing",
        //   url: "https://toph.co/c/sust-inter-university-2023/standings"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "BUET CTF 2023",
      subtitle:
        "Postion: 80th",
      image: require("./assets/images/ctf2.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://github.com/Rudro-25/Achivement-Rudro25-/tree/main/Cirtificate"
        },
        // {
        //   name: "Standing",
        //   url: "https://toph.co/c/sust-inter-university-2023/standings"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    //Divisional & Intra
    {
      title: "BUITS PC 2023",
      subtitle:
        "Postion: Runners Up",
      image: require("./assets/images/buits_div_23.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://github.com/Rudro-25/Achivement-Rudro25-/tree/main/Cirtificate"
        },
        {
          name: "Standing",
          url: "https://codeforces.com/gym/473885/standings"
        },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "PSTU Divisional PC 2023",
      subtitle:
        "Postion: 4th",
      image: require("./assets/images/pstu_23.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://github.com/Rudro-25/Achivement-Rudro25-/tree/main/Cirtificate"
        },
        {
          name: "Standing",
          url: "-"
        },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Intra University PC 2022",
      subtitle:
        "Postion: Second Runners Up",
      image: require("./assets/images/intra_1.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://github.com/Rudro-25/Achivement-Rudro25-/tree/main/Cirtificate"
        },
        {
          name: "Standing",
          url: "-"
        },
      ]
    },
    {
      title: "Intra University PC 2023",
      subtitle:
        "Postion: Second Runners Up",
      image: require("./assets/images/intra_dept_23.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://github.com/Rudro-25/Achivement-Rudro25-/tree/main/Cirtificate"
        },
        {
          name: "Standing",
          url: "-"
        },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },

    //Others
    {
      title: "Game & Job Festival Quiz 2023",
      subtitle:
        "Postion: 2nd",
      image: require("./assets/images/quiz.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://github.com/Rudro-25/Achivement-Rudro25-/tree/main/Cirtificate"
        },
        // {
        //   name: "Standing",
        //   url: "https://toph.co/c/sust-inter-university-2023/standings"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },

    //Company
    {
      title: "SELISE Coding Challenge, 2022",
      subtitle:
        "Postion: 34th",
      image: require("./assets/images/selise_23.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://github.com/Rudro-25/Achivement-Rudro25-/tree/main/Cirtificate"
        },
        {
          name: "Standing",
          url: "https://toph.co/c/selise-coding-challenge-2023"
        },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "SRBD CODE CONTEST, 2022 - Round_2",
      subtitle:
        "Postion: 56th",
      image: require("./assets/images/srbd_23.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://github.com/Rudro-25/Achivement-Rudro25-/tree/main/Cirtificate"
        },
        {
          name: "Standing",
          url: "https://www.hackerrank.com/contests/srbd-code-contest-2022-round-2-retake/leaderboard/6"
        },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Google KickStart - Round F",
      subtitle:
        "Best Postion: 715th (Over 10k participants)",
      image: require("./assets/images/kickstart.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://github.com/Rudro-25/Achivement-Rudro25-/tree/main/Cirtificate"
        },
        {
          name: "Standing",
          url: "https://clist.by/coder/Rudro25/?search=resource:codingcompetitions.withgoogle.com5"
        },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Google Code Jam",
      subtitle:
        "Best Postion: 304th (Over 10k Participants)",
      image: require("./assets/images/codejam.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://github.com/Rudro-25/Achivement-Rudro25-/tree/main/Cirtificate"
        },
        {
          name: "Standing",
          url: "https://clist.by/coder/Rudro25/?search=resource:codingcompetitions.withgoogle.com"
        },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "FaceBook HackerCup 2023",
      subtitle:
        "Postion: 969th (Round - 2)",
      image: require("./assets/images/fb.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://github.com/Rudro-25/Achivement-Rudro25-/tree/main/Cirtificate"
        },
        {
          name: "Standing",
          url: "https://www.facebook.com/codingcompetitions/hacker-cup/2023/round-2/scoreboard?start=950"
        },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "CodeChef SnackDown 2021",
      subtitle:
        "Postion: 521th (Pre-Elimination Round))",
      image: require("./assets/images/snackdown.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://github.com/Rudro-25/Achivement-Rudro25-/tree/main/Cirtificate"
        },
        {
          name: "Standing",
          url: "https://www.codechef.com/rankings/SNCKPE21?itemsPerPage=100&order=asc&page=1&search=Rudro25&sortBy=rank"
        },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "CodeGoda 2022, 2023",
      subtitle:
        "Postion: Honorable Mention",
      image: require("./assets/images/codegoda.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://unstop.com/certificate-preview/c975fd5e-3334-4311-8b2d-645bd8f61ff2"
        },
        // {
        //   name: "Standing",
        //   url: "https://www.facebook.com/codingcompetitions/hacker-cup/2023/round-2/scoreboard?start=950"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "UGV, Barisal",
      subtitle:
        "Postion: 4th",
      image: require("./assets/images/ugv_21.jpeg"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://unstop.com/certificate-preview/c975fd5e-3334-4311-8b2d-645bd8f61ff2"
        },
      ]
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

//Problem Solving

const problemSolving = {
  title: emoji("Problem Solving Activities 🏆 "),
  subtitle:
    "My Competitive Programming Journey",

  achievementsCards: [

    //Online
    {
      title: "CodeForces - Expert (1882)",
      subtitle:
        "Solved More than 3k Problems.",
      image: require("./assets/images/cf.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Rudro25",
          url: "https://codeforces.com/profile/Rudro25"
        },
        // {
        //   name: "Standing",
        //   url: "https://toph.co/c/sust-inter-university-2023/standings"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "CodeForces2 - Expert (1848)",
      subtitle:
        "Solved More than 500 Problems.",
      image: require("./assets/images/cf.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "RD_TheCoder",
          url: "https://codeforces.com/profile/RD_TheCoder"
        },
      ]
    },
    {
      title: "LC - Guardian (2189) - Top 1%",
      subtitle:
        "Solved More than 3k Problems.",
      image: require("./assets/images/lc.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "rudro25",
          url: "https://leetcode.com/u/rudro25/"
        },
      ]
    },
    {
      title: "CodeChef - 5* (2043)",
      subtitle:
        "Solved More than 3k Problems.",
      image: require("./assets/images/codechef.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "rudro25",
          url: "https://www.codechef.com/users/rudro25"
        },
      ]
    },
    {
      title: "AtCoder - Max (1241)",
      subtitle:
        "Solved More than 3k Problems.",
      image: require("./assets/images/atcoder.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "rudro25",
          url: "https://atcoder.jp/users/rudro25"
        },
      ]
    },
    {
      title: "Toph - Max (1627)",
      subtitle:
        "Solved More than 3k Problems.",
      image: require("./assets/images/toph.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "rudro25",
          url: "https://toph.co/u/rudro255"
        },
      ]
    },
    {
      title: "HackerEarth (1729)",
      subtitle:
        "Best Rank: 53 (August Circuits '22)",
      image: require("./assets/images/hackerearth.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Rudro25",
          url: "https://www.hackerearth.com/@Rudro_25"
        },
      ]
    },
    {
      title: "LC Tshirt",
      subtitle:
        "It's a symbol of long consistency !!",
      image: require("./assets/images/lc_tshirt.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: []
    },
    {
      title: "HackerCup Tshirt",
      subtitle:
        "Top 2000 participants of Round 2 got this prize",
      image: require("./assets/images/fb_tshirt.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: []
    },
    {
      title: "Codechef Tshirt",
      subtitle:
        "It's a symbol of long consistency !!",
      image: require("./assets/images/cc_tshirt.jpg"),
      imageAlt: "Google Code-In Logo",
      footerLink: []
    },
    {
      title: "Kotlin Tshirt",
      subtitle:
        "Got the prize from Kotlin Hero Episod 10.",
      image: require("./assets/images/kotlin.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
       {
        name: "Link",
        url: "https://codeforces.com/blog/entry/123478",
       },
      ]
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "false", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "-"
  ],
  display: true // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+880 1741960830",
  email_address: "rudro.cse5.bu@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  achievementSection,
  problemSolving,
  openSource,
  bigProjects,
  thesis,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
