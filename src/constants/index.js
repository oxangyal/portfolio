import airhub from "../assets/airhub.png";
import angeleye from "../assets/angeleyenew.jpg"
import artsphere from "../assets/artsphere.jpg";
import oye from "../assets/oye.png";
import player from "../assets/player.jpg";
import portfolio from "../assets/portfolio.jpg";
import thrive from "../assets/thrivepr.jpg";
import trifit from "../assets/trifitpr.jpg";
import tutor from "../assets/capture.jpg";

export const HERO_CONTENT = `I'm a creative Full stack developer, known for my adaptability and keen eye for detail. With a wealth of experiences from living in various countries, with a solid foundation in coding and an extensive background in photography, I bring my work with a unique perspective, enriching it with diverse viewpoints and fostering cross-cultural collaboration. I succeed in confronting challenges head-on, frequently opting for unconventional paths to problem-solving. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I'm a dedicated and versatile Full stack developer with a passion for crafting efficient and user-friendly web applications. My journey into web development was sparked by a profound curiosity for understanding how things work, and it has since blossomed into a fulfilling career where I continuously seek to learn and adapt to new challenges. Embracing a wide array of technologies, including but not limited to React, Next.js, Node.js, Express.js, MySQL and MongoDB, I thrive in collaborative environments, leveraging my problem-solving skills to deliver high-quality solutions. Outside of coding, I enjoy my family, reading books, training for triathlon races and contributing to open-source projects.`;

export const EXPERIENCES = [
    {
        role: "Software Engineer",
        company: "Code The Dream",
    },
    {
        role: "Web Developer",
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
        title: "AIRHub",
        image: airhub,
        description:
            "A full-stack educational platform built for Code the Dream that delivers AI-powered code review and feedback on student assignments. Features include courses and lessons management, quiz builder, student progress tracking, and an admin dashboard — enabling mentors to automate homework evaluation and focus human review where it matters most. Students can take AI-generated quizzes and track their performance. Integrated Langfuse for monitoring and continuously improving AI response quality, accuracy, and helpfulness.",
        technologies: ["Next.js", "MUI", "MongoDB", "Langfuse"],
        web: "https://ai-review.codethedream.org/",
        front: "https://github.com/CodeTheDream/ai-assignment-review",
        back: "https://github.com/CodeTheDream/ai-assignment-review",
    },

    {
        title: "OYE",
        image: oye,
        description:
            "An application-to-person (A2P) messaging platform built for nonprofit organizations to communicate with their customers via SMS and MMS. Features include broadcast and individual messaging, contact management with groups and tags, message templates with quick-reply dropdowns, CSV export, and cost estimation — offering a straightforward, mobile-friendly alternative to bloated CMS systems at a lower overall cost.",
        technologies: ["React.js", "Ruby on Rails", "TailwindCSS", "PostgreSQL"],
        web: "https://app.oyetext.org/",
        front: "https://github.com/CodeTheDream/oyetext-backend",
        back: "https://github.com/CodeTheDream/oyetext-backend",
    },
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
            "TailwindCSS",
            "Node.js",
            "MongoDB",
            "Express.js",
        ],
        web: "https://tri-fit.vercel.app/",
        front: "https://github.com/oxangyal/tri-fit-front",
        back: "https://github.com/oxangyal/tri-fit-back",
    },
    {
        title: "AngelEye Photography",
        image: angeleye,
        description:
            "Wedding/family photography and fine art website, event online booking, clients access to the personal gallery.",
        technologies: ["Next.js", "TailwindCSS"],
        web: "https://angeleye.net/new",
        front: "",
        back: "",
    },
    {
        title: "Art Sphere",
        image: artsphere,
        description:
            "Full-stack E-commerce platform empowering a gallery owner to showcase and sell the unique creations of talented artists. Key features include a gallery managed by the owner and seamless, secure transactions powered by Stripe.",
        technologies: ["Ruby on Rails", "Tailwind CSS", "SQLite"],
        back: "https://github.com/oxangyal/ArtSphere",
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
];

export const CONTACT = {
    address: "Greater Boston Area",
    phoneNo: "(339) 970 0970",
    email: "oxana@angeleye.net",
};
