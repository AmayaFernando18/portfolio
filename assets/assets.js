import user_image from './amaya-image1.png';
import code_icon from './code-icon.png';
import code_icon_dark from './code-icon-dark.png';
import edu_icon from './edu-icon.png';
import edu_icon_dark from './edu-icon-dark.png';
import project_icon from './project-icon.png';
import project_icon_dark from './project-icon-dark.png';
import vscode from './vscode.png';
import firebase from './firebase.png';
import figma from './figma.png';
import git from './git.png';
import mongodb from './mongodb.png';
import right_arrow_white from './right-arrow-white.png';
import logo from './logo.png';
import mylogo from './mylogo.png';
import logo_dark from './logo_dark.png';
import mylogo_dark from './mylogo_dark.png';
import mail_icon from './mail_icon.png';
import mail_icon_dark from './mail_icon_dark.png';
import profile_img from './amaya-profile.png';
import download_icon from './download-icon.png';
import hand_icon from './hand-icon.png';
import header_bg_color from './header-bg-color.png';
import moon_icon from './moon_icon.png';
import sun_icon from './sun_icon.png';
import arrow_icon from './arrow-icon.png';
import arrow_icon_dark from './arrow-icon-dark.png';
import menu_black from './menu-black.png';
import menu_white from './menu-white.png';
import close_black from './close-black.png';
import close_white from './close-white.png';
import right_arrow from './right-arrow.png';
import send_icon from './send-icon.png';
import right_arrow_bold from './right-arrow-bold.png';
import right_arrow_bold_dark from './right-arrow-bold-dark.png';

export const assets = {
    user_image,
    code_icon,
    code_icon_dark,
    edu_icon,
    edu_icon_dark,
    project_icon,
    project_icon_dark,
    vscode,
    firebase,
    figma,
    git,
    mongodb,
    right_arrow_white,
    logo,
    mylogo,
    logo_dark,
    mylogo_dark,
    mail_icon,
    mail_icon_dark,
    profile_img,
    download_icon,
    hand_icon,
    header_bg_color,
    moon_icon,
    sun_icon,
    arrow_icon,
    arrow_icon_dark,
    menu_black,
    menu_white,
    close_black,
    close_white,
    right_arrow,
    send_icon,
    right_arrow_bold,
    right_arrow_bold_dark
};

export const workData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/work-1.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/work-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/work-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/work.png',
    },
]

export const serviceData = [
    { icon: assets.web_icon, title: 'Web design', description: 'Web development is the process of building, programming...', link: '' },
    { icon: assets.mobile_icon, title: 'Mobile app', description: 'Mobile app development involves creating software for mobile devices...', link: '' },
    { icon: assets.ui_icon, title: 'UI/UX design', description: 'UI/UX design focuses on creating a seamless user experience...', link: '' },
    { icon: assets.graphics_icon, title: 'Graphics design', description: 'Creative design solutions to enhance visual communication...', link: '' },
]

export const infoList = [
    { icon: assets.code_icon, iconDark: assets.code_icon_dark, title: 'Languages', description: 'HTML, CSS, JavaScript React Js, Next Js' },
    { icon: assets.edu_icon, iconDark: assets.edu_icon_dark, title: 'Education', description: 'B.Sc. (Hons) in Information Technology and Management.' },
    { icon: assets.project_icon, iconDark: assets.project_icon_dark, title: 'Projects', description: 'Built more than 5 projects' }
];

export const toolsData = [
    assets.vscode, assets.firebase, assets.mongodb, assets.figma, assets.git
];




export const skillsData = [
  {
    category: "Programming Languages",
    items: [
      { name: "C", icon: "devicon-c-plain colored" },
      { name: "C#", icon: "devicon-csharp-plain colored" },
      { name: "Java", icon: "devicon-java-plain colored" },
      { name: "PHP", icon: "devicon-php-plain colored" },
      { name: "JavaScript", icon: "devicon-javascript-plain colored" }
    ]
  },
  {
    category: "Web Development",
    items: [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" }, // updated
      { name: "Laravel", icon: "devicon-laravel-plain colored" },
      { name: "ASP.NET", icon: "devicon-dotnetcore-plain colored" }, // updated
      { name: "HTML", icon: "devicon-html5-plain colored" },
      { name: "CSS", icon: "devicon-css3-plain colored" },
      { name: "Tailwind", icon: "devicon-tailwindcss-plain colored" }
    ]
  },
  {
    category: "Database",
    items: [
      { name: "MySQL", icon: "devicon-mysql-plain colored" },
      { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" }
    ]
  },
  {
    category: "Design",
    items: [
      { name: "Figma", icon: "devicon-figma-plain colored" }, // updated
      { name: "Canva", icon: "devicon-canva-original colored" },
      { name: "GIMP", icon: "devicon-gimp-plain colored" }
    ]
  },
  {
    category: "Other",
    items: [
      { name: "Azure", icon: "devicon-azure-plain colored" },
      { name: "Git", icon: "devicon-git-plain colored" },
      { name: "Postman", icon: "devicon-postman-plain colored" }
    ]
  }
];


export const ProjectsData = [
    {
        title: 'Frontend project',
        description: 'Web Design',
        bgImage: '/Projects-1.png',
    },
    {
        title: 'Geo based app',
        description: 'Mobile App',
        bgImage: '/Projects-2.png',
    },
    {
        title: 'Photography site',
        description: 'Web Design',
        bgImage: '/Projects-3.png',
    },
    {
        title: 'UI/UX designing',
        description: 'UI/UX Design',
        bgImage: '/Projects-4.png',
    },
]


export const educationData = [
  {
    year: "2017",
    title: "GCE - Ordinary Level",
    school: "Holy Family Balika MV Marawila",
    result: "9A s",
  },
  {
    year: "2021",
    title: "GCE - Advanced Level",
    school: "Holy Family Balika MV Marawila",
    result: "Physical Science Stream | 3C s",
  },
  {
    year: "2022 - Present",
    title: "B.Sc. (Hons) in Information Technology & Management",
    school: "University of Moratuwa",
    result: "Currently pursuing (3rd Year Undergraduate)",
  },
];
