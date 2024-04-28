import player from "../assets/player.jpg";
import portfolio from "../assets/portfolio.jpg";
import thrive from "../assets/thrivepr.jpg";
import trifit from "../assets/trifitpr.jpg";
import tutor from "../assets/capture.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 3 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 3 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy my family, reading books, train for triathlon races, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
    {
        role: "Full Stack Developer",
        company: "Code The Dream",
    },
    {
        role: "Web Developer/Photographer",
        company: "AngelEye Photography",
    },
    {
        role: "Digital Image Specialist",
        company: "Blueport Commerce",
    },
    {
        role: "Graphic Designer",
        company: "Manasian",
    },
    {
        role: "Web Developer",
        company: "AutoPartsConnect",
    },
];

export const PROJECTS = [
    {
        title: "GetYourTutor",
        image: tutor,
        description:
            "A service platform facilitating the connection between parents seeking K-12 tutors and tutors available for online learning. Authenticated parents can connect with tutors via email and manage connections for their children through a connection form.",
        technologies: [
            "React.js",
            "TypeScript",
            "ChakraUI",
            "Node.js",
            "MongoDB",
            "Express.js",
        ],
        web: "https://getyourtutor.vercel.app/",
        front: "https://github.com/oxangyal/ffprac-team2-front",
        back: "https://github.com/oxangyal/GetYourTutor",
    },
    {
        title: "TriFit",
        image: trifit,
        description:
            "A personal full-stack application designed for people engaged in triathlon training. The platform feature is an integrated calendar to track upcoming races and allows users to customize their workouts. Users can efficiently manage their training schedules and stay informed about upcoming events. ",
        technologies: [
            "React.js",
            "Tailwind",
            "Node.js",
            "MongoDB",
            "Express.js",
        ],
        web: "https://tri-fit.vercel.app/",
        front: "https://github.com/oxangyal/tri-fit-front",
        back: "https://github.com/oxangyal/tri-fit-back",
    },
    {
        title: "Thrive Out Loud",
        image: thrive,
        description:
            "A mentorship platform platform facilitates meaningful connections between mentees and mentors within the LGBTQ+ community. Key features include scheduling online sessions via a calendar and providing dashboards for both mentees and mentors to view their schedules.",
        technologies: ["CSS", "AntDesign", "Next.js", "Firebase"],
        web: "https://thriveoutloud.vercel.app/",
        front: "https://github.com/Sean-s-Legacy/thrive-out-loud",
        back: "https://firebase.google.com/",
    },
    {
        title: "PlayerBuddy",
        image: player,
        description:
            "A full-stack application where authenticated users can find nearby pickleball games by zip code. Whether traveling, visiting family, or simply looking to stay active, users can easily locate games or create their own for socializing and fitness.",
        technologies: ["React.js", "MUI", "Node.js", "MongoDB", "Express.js"],
        web: "https://playerbuddy.vercel.app/",
        front: "https://github.com/Code-the-Dream-School/ee-prac-team1-front/",
        back: "https://github.com/Code-the-Dream-School/ee-prac-team1-back/tree/main",
    },
    {
        title: "Portfolio",
        image: portfolio,
        description:
            "My initial portfolio showcases my journey as a front-end developer, crafted with HTML, CSS, and JavaScript. It features a collection of projects highlighting my skills and creativity in web development.",
        technologies: ["HTML", "CSS", "JavaScript"],
        web: "https://angeleyeportfolio.netlify.app/",
        front: "",
        back: "",
    },
    {
        title: "AngelEye Photography",
        image: portfolio,
        description: "Wedding/family photography and fine art website",
        technologies: [
            "Next.js",
            "Tailwind",
            "Node.js",
            "MongoDB",
            "Express.js",
        ],
        web: "https://angeleyeportfolio.netlify.app/",
        front: "",
        back: "",
    },
];

export const CONTACT = {
    address: "Greater Boston Area",
    phoneNo: "+1 339 970 0970",
    email: "oxana@angeleye.net",
};
