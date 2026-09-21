import airhub from "../assets/airhub.png";
import airhubNew from "../assets/case-studies/airhub/2.png";
import airhubOld from "../assets/case-studies/airhub/airhub1v.png";
import angeleye from "../assets/angeleyenew.jpg"
import artsphere from "../assets/artsphere.jpg";
import care from "../assets/care.png";
import lamore from "../assets/lamore.png";
import lamoreAtmosphere from "../assets/case-studies/lamore/atmosphere.png";
import lamoreHomeDesktop from "../assets/case-studies/lamore/home-desktop.png";
import lamoreHomeMobile from "../assets/case-studies/lamore/home-mobile.png";
import lamoreLocation from "../assets/case-studies/lamore/location.png";
import lamoreLocationMobile from "../assets/case-studies/lamore/location-mobile.png";
import lamoreMenuDesktop from "../assets/case-studies/lamore/menu-desktop.png";
import lamoreMenuMobile from "../assets/case-studies/lamore/menu-mobile.png";
import lamoreReserve from "../assets/case-studies/lamore/reserve.png";
import lamoreReserveMobile from "../assets/case-studies/lamore/reserve-mobile.png";
import lamoreTestimonials from "../assets/case-studies/lamore/testimonials.png";
import legacyContact from "../assets/case-studies/angeleye/legacy-contact.png";
import legacyGallery from "../assets/case-studies/angeleye/legacy-gallery.png";
import legacyHome from "../assets/case-studies/angeleye/legacy-home.png";
import legacyPricing from "../assets/case-studies/angeleye/legacy-pricing.png";
import newContact from "../assets/case-studies/angeleye/new-contact.png";
import newGallery from "../assets/case-studies/angeleye/new-gallery.png";
import newHome from "../assets/case-studies/angeleye/new-home.png";
import newPricing from "../assets/case-studies/angeleye/new-pricing.png";
import oye from "../assets/oye.png";
import player from "../assets/player.jpg";
import portfolio from "../assets/portfolio.jpg";
import thrive from "../assets/thrivepr.jpg";
import trifit from "../assets/trifitpr.jpg";
import tutor from "../assets/capture.jpg";

// export const HERO_CONTENT = `I'm a creative Full stack developer, known for my adaptability and keen eye for detail. With a wealth of experiences from living in various countries, with a solid foundation in coding and an extensive background in photography, I bring my work with a unique perspective, enriching it with diverse viewpoints and fostering cross-cultural collaboration. I succeed in confronting challenges head-on, frequently opting for unconventional paths to problem-solving. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;
export const HERO_CONTENT = `I'm a creative Full-stack Developer and UX/UI Designer, known for my adaptability and keen eye for detail. My work spans the full product cycle - research, wireframes and interface decisions through to shipped, production code - treating design and engineering as one continuous process rather than a handoff between them. With a wealth of experience living in various countries, a solid foundation in coding, and an extensive background in photography, I bring a unique perspective to every project, enriching it with diverse viewpoints and cross-cultural collaboration. I succeed in confronting challenges head-on, frequently opting for unconventional paths to problem-solving. My goal is to design and build solutions that drive business growth and deliver exceptional user experiences.`;
// export const ABOUT_TEXT = `I'm a dedicated and versatile Full stack developer with a passion for crafting efficient and user-friendly web applications. My journey into web development was sparked by a profound curiosity for understanding how things work, and it has since blossomed into a fulfilling career where I continuously seek to learn and adapt to new challenges. Embracing a wide array of technologies, including but not limited to React, Next.js, Node.js, Express.js, MySQL and MongoDB, I thrive in collaborative environments, leveraging my problem-solving skills to deliver high-quality solutions. Outside of coding, I enjoy my family, reading books, training for triathlon races and contributing to open-source projects.`;
export const ABOUT_TEXT = `I'm a dedicated Full-stack Developer and UX/UI Designer with a passion for crafting efficient, user-friendly web applications from the first sketch to the shipped product. My journey into web development was sparked by a profound curiosity for understanding how things work, and it has since grown into a practice where design decisions and technical ones inform each other rather than happening in isolation - I research, design and build, so nothing gets lost in translation between them. I work across React, Next.js, Phyton, Ruby on Rails and I thrive in collaborative environments, leveraging both an eye for interface and a problem-solving mindset to deliver high-quality solutions. Outside of coding, I enjoy my family, reading books, training for triathlon races, and contributing to open-source projects.`;
export const EXPERIENCES = [
    {
        role: "Software Engineer",
        company: "Code The Dream",
    },
    {
        role: "Owner/Photographer",
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
        technologies: [
            "React.js",
            "Ruby on Rails",
            "TailwindCSS",
            "PostgreSQL",
        ],
        web: "https://app.oyetext.org/",
        front: "https://github.com/CodeTheDream/oyetext-backend",
        back: "https://github.com/CodeTheDream/oyetext-backend",
    },
    {
        title: "L'AMORE Restaurant",
        image: lamore,
        description:
            "A fully responsive restaurant landing page offering a seamless dining experience built from scratch for personal project.",
        technologies: ["React.js", "TailwindCSS"],
        web: "https://lamore-alpha.vercel.app//",
        front: "https://github.com/oxangyal/restaurant-landing",
        back: "https://github.com/oxangyal/restaurant-landing",
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
        title: "Care Connect",
        image: care,
        description:
            "A full-stack web application designed to streamline volunteer recruitment. The platform features secure user authentication, enables direct email communication between volunteers and organizations, and provides an interactive form-based dashboard to manage active connections.",
        technologies: [
            "React.js",
            "Ruby on Rails",
            "PostgreSQL",
            "TailwindCSS",
        ],
        web: "https://drive.google.com/file/d/1EqqC4ubPirfEq-2iks95pOabDM89hEan/view",
        front: "https://github.com/Code-the-Dream-School/herring-team1/tree/dev/front-end",
        back: "https://github.com/oxangyal/herring-team1",
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

export const ANGELEYE_CASE_STUDY = {
    title: "AngelEye Photography",
    subtitle:
        "Rebuilding a hand-sliced 2002 photography site as a responsive Next.js product",
    role: "Sole designer & developer - research, UX, UI, fullstack",
    timeline: "Original site 2002–2016 · Redesign 2024",
    client: "AngelEye Photography (my own studio)",

    overview:
        "I built the first version of this site in the early 2000s: every page was done in Photoshop, cut, and glued back together with HTML tables and JavaScript rollovers. It served the business for years, but it was a fixed-size picture of a website, text lived inside images, nothing reflowed, and there was no way to inquire or to view a private gallery. The redesign rebuilds the same business around three jobs: look at the work, understand the pricing, and book a date.",

    problems: [
        {
            title: "Built for one screen size",
            desc: "The layout was a fixed canvas designed for an 800×600 monitor. On a phone it is a pinch-and-scroll photograph of a webpage; on a modern display it floats in the middle with wide empty margins.",
        },
        {
            title: "Text baked into pixels",
            desc: "Headings, navigation and even the pricing paragraph were rendered as images. Nothing could be selected, searched, translated or read by a screen reader, and nothing scaled with the browser's font size.",
        },
        {
            title: "Browsing cost too many clicks",
            desc: "Reaching one wedding photo meant category to sub-category to thumbnail index to full page reload. Each step was a separate hand-made page, so adding a shoot meant editing HTML by hand.",
        },
        {
            title: "No way to start a booking",
            desc: "Contact was a phone number and an email address. Every inquiry arrived without a date, a location or a duration, so the first reply was always a list of questions.",
        },
        {
            title: "No private space for clients",
            desc: '"Client images" existed as a menu item, but delivery happened over email and discs. Couples had nowhere to return to after the wedding.',
        },
    ],

    goals: [
        "Work on phones first, and hold up on large, high-density displays.",
        "Let the photographs be the interface - chrome quiet, images loud.",
        'Turn "contact me" into a structured booking request with event details.',
        "Give past clients a private, password-protected gallery.",
        "Keep the calm, film-like mood of the original brand while dropping the sepia clip art.",
    ],

    stack: {
        legacy: [
            "Photoshop slices",
            "Static HTML",
            "Table layout",
            "JavaScript rollovers",
            "Image maps",
            "Image-based type",
            "Fixed 800×600",
        ],
        redesign: [
            "Next.js",
            "React",
            "Tailwind CSS",
            "next/image",
            "Responsive grid",
            "Auth-gated client gallery",
            "Structured inquiry form",
        ],
    },

    approach: [
        {
            title: "Audited the old site page by page",
            desc: "Listed every page, link and image of the 2000 build, then sorted them into keep, rewrite and drop. Philosophy, Pricing and Contact survived as content; the category splash page and thumbnail index pages disappeared into one gallery.",
        },
        {
            title: "Rewrote the navigation as real links",
            desc: "Seven image-map hotspots became a single persistent header - Home, Gallery, Exhibitions, Pricing, Contact, Client gallery - with real text, keyboard focus and a visible current state.",
        },
        {
            title: "Designed one gallery system instead of six pages",
            desc: "A masonry grid with progressive loading replaces the getting ready / ceremony / details / dance page set. Adding a shoot is now data, not a new HTML file.",
        },
        {
            title: "Made the inquiry do the interview",
            desc: "The contact form asks for date, time, duration and location up front, so the first email back can be an actual answer instead of a questionnaire.",
        },
        {
            title: "Built a gated client gallery",
            desc: "Email and password sign-in gives each couple a permanent place to view their photographs, separate from the public portfolio.",
        },
        {
            title: "Kept the scope honest",
            desc: "Weddings carry the business, so the wedding gallery was rebuilt first. Portraits and Fine Art still run on the legacy content and are the next migration, a deliberate staged rollout, not an oversight.",
        },
    ],

    userJourney: {
        legacy: [
            { id: 1, label: "Splash page" },
            { id: 2, label: "Pick a category image" },
            { id: 3, label: "Sub-category menu" },
            { id: 4, label: "Thumbnail index" },
            { id: 5, label: "Single photo page" },
            { id: 6, label: "Back, back, back" },
            { id: 7, label: "Phone or email" },
        ],
        redesign: [
            { id: 1, label: "Home" },
            { id: 2, label: "Gallery" },
            { id: 3, label: "Load more in place" },
            { id: 4, label: "Pricing" },
            { id: 5, label: "Booking request" },
            { id: 6, label: "Client gallery login" },
        ],
    },

    screenshots: [
        {
            id: "home",
            aspect: "Entry point",
            note: "A decorative splash with image-based links becomes a full-bleed photograph with a readable statement and a working header.",
            legacy: {
                src: legacyHome,
                alt: "2006 AngelEye home page: three sepia thumbnails labelled Weddings, Portraits, Fine Arts",
                caption: "2006 - category splash, fixed width",
            },
            redesign: {
                src: newHome,
                alt: "Redesigned AngelEye home page with a full-width photograph and navigation bar",
                caption: "Now - full-bleed hero, persistent nav",
            },
        },
        {
            id: "gallery",
            aspect: "Browsing the work",
            note: "Four levels of navigation collapse into one scrollable grid that loads more on demand.",
            legacy: {
                src: legacyGallery,
                alt: "2006 gallery page with a small thumbnail grid and text links per wedding moment",
                caption: "2006 - thumbnail index per sub-category",
            },
            redesign: {
                src: newGallery,
                alt: "Redesigned masonry gallery of wedding photographs with a Load More button",
                caption: "Now - masonry grid, progressive loading",
            },
        },
        {
            id: "pricing",
            aspect: "Pricing",
            note: "The same paragraph, but as live text with real links into Contact instead of a picture of a paragraph.",
            legacy: {
                src: legacyPricing,
                alt: "2006 pricing page with handwriting-style text rendered as an image",
                caption: "2006 - text as an image",
            },
            redesign: {
                src: newPricing,
                alt: "Redesigned pricing page with selectable text and links to the contact page",
                caption: "Now - selectable, linked, responsive",
            },
        },
        {
            id: "contact",
            aspect: "Getting in touch",
            note: "A phone number becomes a request that already contains the date, duration and location.",
            legacy: {
                src: legacyContact,
                alt: "2006 contact page listing a telephone number and email address",
                caption: "2006 - phone and email only",
            },
            redesign: {
                src: newContact,
                alt: "Redesigned contact form with name, phone, email and event date, time, duration and location fields",
                caption: "Now - structured booking request",
            },
        },
    ],

    comparisonPoints: [
        {
            id: 1,
            aspect: "Layout",
            legacy: "Fixed canvas built for an 800×600 monitor; identical on every device.",
            redesign:
                "Fluid responsive layout from small phones up to large, high-density displays.",
        },
        {
            id: 2,
            aspect: "Typography",
            legacy: "Handwriting typefaces flattened into images; no selection, no scaling, no search.",
            redesign:
                "Live web type with a set scale, selectable and readable at any zoom level.",
        },
        {
            id: 3,
            aspect: "Navigation",
            legacy: "Image maps and rollovers, different on every page, no focus states.",
            redesign:
                "One persistent header with real links, visible focus and a current-page state.",
        },
        {
            id: 4,
            aspect: "Browsing depth",
            legacy: "Four to five page loads between the home page and a single photograph.",
            redesign:
                "One grid, loaded in place; the photograph is the first thing you see.",
        },
        {
            id: 5,
            aspect: "Images",
            legacy: "Hand-exported JPEGs at one fixed size, uncompressed, all loaded at once.",
            redesign: "Responsive, lazy-loaded images sized to the viewport.",
        },
        {
            id: 6,
            aspect: "Inquiry",
            legacy: "A phone number and an email address; every lead arrived with no event details.",
            redesign:
                "A form that captures date, time, duration, location and message before the first reply.",
        },
        {
            id: 7,
            aspect: "Client delivery",
            legacy: "A link with the photos, shared with the couple, no password required to open it.",
            redesign:
                "Password-protected client gallery tied to the couple's account.",
        },
        {
            id: 8,
            aspect: "Maintenance",
            legacy: "Every new shoot meant new slices and a new hand-written HTML page.",
            redesign:
                "Gallery content is data; adding a shoot no longer means writing markup.",
        },
        {
            id: 9,
            aspect: "Brand",
            legacy: "Sepia wash, clip-art florals, drop shadows on everything.",
            redesign:
                "Dark neutral ground and a single gold logotype so colour comes only from the photographs.",
        },
    ],

    outcomes: [
        "The whole site is usable on a phone, which the original could not be at any size.",
        "Every piece of copy is now real text - searchable, translatable and readable by assistive technology.",
        "Reaching a wedding photograph takes one click instead of four page loads.",
        "Inquiries arrive with the event details attached, so the first reply can quote instead of ask.",
        "Client photos now sit behind a login instead of an open link.",
    ],

    nextSteps: [
        "Migrate the Portraits and Fine Art galleries onto the same gallery system.",
        "Add favourites and downloads inside the client gallery.",
        "Write alt text for the full archive and finish the per-page metadata.",
        "Measure the redesign properly - Lighthouse, inquiry completion rate, mobile share of traffic.",
    ],

    reflection:
        "The hardest part was not the code. It was accepting that a layout I had drawn pixel by pixel in Photoshop was the thing standing in the way, the design was a picture, and a picture cannot respond, cannot be read aloud and cannot be edited by anyone but its author. Rebuilding it as a system meant giving up total control of every pixel in exchange for a site that adapts to whoever opens it.",
};

//------------LAMORE_CASE_STUDY----------------------------------

export const LAMORE_CASE_STUDY = {
    title: "L'Amore Restaurant",
    subtitle:
        "Turning a two-week take-home assignment into a mobile-first site people actually book from",
    role: "Sole designer & developer - research, UX, UI, frontend",
    timeline: "2-week take-home assignment · 2026",
    client: "Personal project, it was originally a technical assignment for a developer interview",
    liveUrl: "https://lamore-alpha.vercel.app/",
    repoUrl: "https://github.com/oxangyal/restaurant-landing",

    overview:
        "This started as a take-home assignment while interviewing for a developer role. The brief was narrow: a digital business card for a restaurant, show the menu with prices, let people book a table, nothing more. Mobile was called out as the priority. I used the four weeks to also test what a brief like that usually leaves out.",

    brief: {
        required: [
            "Table reservation form",
            "Menu with prices",
            "Mobile-first layout",
        ],
        added: [
            "Testimonials with a featured review",
            "An atmosphere / interior gallery",
            "An interactive map for location",
            "A Reserve CTA available from every screen",
        ],
    },

    research:
        "I’m part of a book club where picking a meeting spot every few weeks is always a negotiation - eight people, all with different budgets, dietary needs, and vibe preferences. Before writing a single line of code, I asked three members what actually drives their decision when booking a new place. Their answers boiled down to three things: clear menu pricing without having to call, a feel for the physical atmosphere, and social proof from other diners. The original brief didn't cover any of this. Adding the gallery and reviews wasn't about adding extra features, it was about answering what people actually needed to know. ",

    approach: [
        {
            title: "Made the CTA impossible to lose",
            desc: "The Reserve button stays visible on every screen, on both desktop and mobile, so booking shouldn't require scrolling back to find it.",
        },
        {
            title: "Split the menu into tabs",
            desc: "Starters, Main Course, Salads, Desserts, Drinks as tabs instead of one long scroll, lets someone jump straight to what they came to check, like dietary options or price range.",
        },
        {
            title: "Gave the space a face",
            desc: "An interior gallery (dining hall, private lounge, patio) answers the question the brief didn't ask: what does this place actually look like, especially for anyone considering it for a group.",
        },
        {
            title: "Added social proof without clutter",
            desc: "A testimonials carousel with one featured review keeps trust signals visible without turning the homepage into a wall of quotes.",
        },
        {
            title: "Built mobile first, not mobile-adapted",
            desc: "Navigation collapses into a burger menu, the Reserve CTA stays pinned, and the gallery becomes swipeable, it was designed for a phone first, then scaled up.",
        },
        {
            title: "Made location a decision, not a lookup",
            desc: "An embedded, interactive map with an 'Open in Maps' shortcut instead of a static address line.",
        },
    ],

    screenshots: [
        {
            id: "home",
            aspect: "Landing page",
            note: "The mobile version collapses navigation into a burger menu and moves the Reserve CTA to a pinned bottom button — always one tap away.",
            desktop: {
                src: lamoreHomeDesktop,
                alt: "L'Amore desktop landing page with a full-width hero image and top navigation",
                caption: "Desktop - full-width hero, top nav",
            },
            mobile: {
                src: lamoreHomeMobile,
                alt: "L'Amore mobile landing page with a burger menu and a pinned Reserve a Table button",
                caption: "Mobile - burger nav, pinned Reserve CTA",
            },
        },
        {
            id: "menu",
            aspect: "Menu",
            note: "Same tabbed structure on both, but mobile stacks dishes in a single column so prices and descriptions stay legible without zooming.",
            desktop: {
                src: lamoreMenuDesktop,
                alt: "L'Amore desktop menu page with a two-column grid of dishes under tabs",
                caption: "Desktop - two-column grid",
            },
            mobile: {
                src: lamoreMenuMobile,
                alt: "L'Amore mobile menu page with dishes stacked in a single column",
                caption: "Mobile - single column, thumb-scrollable",
            },
        },
        {
            id: "location",
            aspect: "Location",
            note: "An embedded, interactive map with a one-tap 'Open in Maps' link instead of a static address — works the same way on both, but matters most on mobile, right before someone leaves for the restaurant.",
            desktop: {
                src: lamoreLocation,
                alt: "L'Amore desktop location page with an embedded map and address",
                caption: "Desktop - embedded map, address, hours",
            },
            mobile: {
                src: lamoreLocationMobile,
                alt: "L'Amore mobile location page with an embedded map and Open in Maps button",
                caption: "Mobile - one-tap Open in Maps",
            },
        },
        {
            id: "reserve",
            aspect: "Reserve",
            note: "The same reservation fields on both, but the mobile form is the one that matters - it's reachable from a pinned CTA on every screen.",
            desktop: {
                src: lamoreReserve,
                alt: "L'Amore desktop reservation form",
                caption: "Desktop - full reservation form",
            },
            mobile: {
                src: lamoreReserveMobile,
                alt: "L'Amore mobile reservation form",
                caption: "Mobile - reachable from a pinned CTA",
            },
        },
    ],

    highlights: [
        {
            title: "Atmosphere gallery",
            image: lamoreAtmosphere,
            desc: "Swipeable interior shots (dining hall, private lounge, patio) - added after research showed people want to see the space before booking, especially for groups.",
        },
        {
            title: "Testimonials",
            image: lamoreTestimonials,
            desc: "A carousel with one featured, starred review up front - social proof without a wall of quotes.",
        },
    ],

    outcomes: [
        "Answers the three things someone actually needs before booking somewhere new: what's on the menu, what it looks like, and whether others vouch for it.",
        "The Reserve CTA is reachable in one tap from any screen, on any device.",
        "Mobile isn't a shrunk-down desktop - navigation, CTA placement and the gallery were designed for a phone first.",
        "Delivered inside the 4-week assignment window while going beyond its minimum scope.",
    ],

    reflection:
        "The brief asked for a business card. What people actually needed before booking somewhere new was three answers: what's on the menu, what does it look like, and can I trust it. That gap between technically meeting a spec and actually answering the person's question is the one I keep checking for in every brief since.",
};

//----------- AIRHUB_CASE_STUDY----------------------------------------

export const AIRHUB_CASE_STUDY = {
    title: "AIRHub",
    subtitle:
        "From a single-purpose Intro reviewer to a multi-course platform, leading the home page redesign and rebrand from inside the dev team",
    role: "Joined as a developer, then led the redesign of the home page and rebrand - research, UX, UI, implementation",
    timeline: "aroud 6 months · Code the Dream",
    client: "Code the Dream",
    liveUrl: "https://ai-review.codethedream.org/",
    repoUrl: "https://github.com/CodeTheDream/ai-assignment-review",

    overview:
        "AIRHub started as AI Reviewer, a single-page app built to review one thing: Intro-course assignments. CTD's program already spanned multiple tracks - Python, React, Ruby on Rails, Node courses, but the tool itself only worked for Intro, and there was no way for staff to add a course, adjust it, see how students and mentors were using it, or act on feedback. I joined the project as a developer, and as the platform grew to support every track plus student, mentor and admin roles, I ended up leading the redesign and rebrand of the home page: new navigation, new information architecture, a new name, and a updated logo.",

    problems: [
        {
            title: "Feedback was barely visible",
            desc: "The AI's review sat at the bottom of the page, below the fold, the one thing the student actually came for was the easiest thing to miss.",
        },
        {
            title: "Chat took the prime spot for a secondary feature",
            desc: "A chat panel sat in the most visible position, on the right side, for something used far less often than the feedback itself.",
        },
        {
            title: "File selection was an afterthought",
            desc: "Choosing which file to review happened in a tiny window squeezed in above the feedback - easy to miss, harder to use once a submission had more than a couple of files.",
        },
        {
            title: "The structure only worked for one course",
            desc: "CTD already ran multiple tracks - Python, React, Ruby on Rails, Node courses, but the tool was wired to review only Intro assignments. There was no admin layer to manage courses, or see how students and mentors were actually using it, every addition meant rebuilding the page, not configuring it.",
        },
        ,
    ],

    approach: [
        {
            title: "Added top navigation built to scale by course",
            desc: "A course selector at the top reveals a lesson dropdown underneath it, adding a new course track is a data change, not a new page.",
        },
        {
            title: "Gave feedback the space it deserved",
            desc: "Moved chat out of the right panel and made that space the Feedback view - larger, readable, and the first thing in view instead of the last.",
        },
        {
            title: "Moved chat into the left navigation",
            desc: "Chat still exists, but as a secondary tool in the sidebar instead of competing with feedback for the most visible spot on the page.",
        },
        {
            title: "Made file selection visible",
            desc: "Moved it out of the cramped strip above feedback and into a clear, dedicated spot on the left, usable even when a submission has several files.",
        },
        {
            title: "Built the sidebar to hold admin tools as they're added",
            desc: "Chat, Cohorts, Students, Prework Analyzer, Feedback Testing and Langfuse all live in the same left navigation, a pattern that scales as more admin features get added, not a one-off list.",
        },
        {
            title: "Built room for mentor and student roles",
            desc: "The platform outgrew being a single reviewing tool - mentors need to review submissions and track cohorts, students need to take quizzes and see their own progress. The new navigation gives each its own space instead of forcing everyone through the same single view.",
        },
        {
            title: "Moved Help next to where people actually get stuck",
            desc: "The Help toggle moved from the bottom of the page to sit right next to the lesson selector and assignment link input, the exact spot where questions about the assignment come up, instead of a fixed nav position unrelated to the task.",
        },
        {
            title: "Kept it desktop-only on purpose",
            desc: "Reviewing code and reading detailed AI feedback isn't something people do well on a phone. The layout is responsive across desktop and laptop widths, but there's no phone-optimized version,  that would solve a problem nobody actually has here.",
        },
        {
            title: "Led the rebrand from AI Reviewer to AIRHub",
            desc: "The old name described one feature; the product had become a hub for multiple courses and admin, mentor and students tools. Renamed it and redesigned the logo to match.",
        },
    ],

    screenshots: {
        before: {
            src: airhubOld,
            alt: "The original AI Reviewer single-page app, showing feedback at the bottom of the page and a chat panel on the right",
            caption: "Before - AI Reviewer",
        },
        after: {
            src: airhubNew,
            alt: "The redesigned AIRHub app, showing top course navigation, a left sidebar with tools, and a readable feedback panel",
            caption: "Now - AIRHub",
        },
    },

    comparisonPoints: [
        {
            id: 1,
            aspect: "Course structure",
            legacy: "Built for one course (Intro); no way to add Python, React, Ruby on Rails or Node courses without redesigning the page.",
            redesign:
                "Top navigation with a course dropdown that reveals lessons, new courses are a data change.",
        },
        {
            id: 2,
            aspect: "Feedback",
            legacy: "Sat below the fold at the bottom of the page - easy to miss.",
            redesign: "Its own readable panel, visible without scrolling.",
        },
        {
            id: 3,
            aspect: "Chat",
            legacy: "Occupied the most visible spot, on the right side.",
            redesign: "Moved into the left navigation as a secondary tool.",
        },
        {
            id: 5,
            aspect: "File selection",
            legacy: "A tiny window squeezed in above feedback.",
            redesign: "A clear, dedicated area on the left.",
        },
        {
            id: 6,
            aspect: "Admin tools",
            legacy: "No dedicated space; not part of the original design.",
            redesign:
                "Cohorts, Students, Prework Analyzer, Feedback Testing and Langfuse in a scalable sidebar.",
        },
        {
            id: 7,
            aspect: "Help",
            legacy: "A toggle at the bottom of the page, disconnected from the task.",
            redesign:
                "Placed next to the lesson selector and assignment input, right where questions actually come up.",
        },
        {
            id: 8,
            aspect: "Branding",
            legacy: '"AI Reviewer" - described one feature.',
            redesign:
                '"AIRHub", with a new logo - describes what it actually became.',
        },
        {
            id: 9,
            aspect: "Roles",
            legacy: "One view for everyone; no distinction between student, mentor and admin.",
            redesign:
                "Three scoped roles: students submit assignments, get AI feedback and take quizzes; mentors review submissions and see stats for their own students; admins manage courses and lessons, use the Prework Analyzer, Feedback Testing and Langfuse, see statistics for all students, create AI-generated quizzes.",
        },
    ],

    outcomes: [
        "The same navigation pattern now supports Python, React, Ruby on Rails, Node and Intro tracks without a page redesign per course.",
        "Feedback is visible without hunting for it.",
        "Admin tools have a consistent home that scales as more get added.",
        "The rename and new logo reflect what the product does now, not what it did at launch.",
    ],

    nextSteps: [
        "A Prompt Editor is built but intentionally scoped out of this case study for now.",
    ],

    reflection:
        "I joined this project to write code, not to redesign it. The task became a full redesign because the product had outgrown its layout, not because anyone asked for a visual refresh. That's a different kind of design work than starting from a blank page - every decision had to work for people already using the tool, while making room for courses and features that didn't exist yet when the original was built.",
};
// ---------------------------------------------------------------

export const CONTACT = {
    address: "Greater Boston Area",
    phoneNo: "(339) 970 0970",
    email: "oxana@angeleye.net",
};
