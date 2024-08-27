import { useParams } from "react-router-dom";
import photo1 from '../assets/images/Linux.svg';
import photo2 from '../assets/images/Art.svg';
import photo3 from '../assets/images/Web.svg';
import photo4 from '../assets/images/HR.svg';
import photo5 from '../assets/images/Pr.svg';
import photo6 from '../assets/images/Blender.svg';
import photo7 from '../assets/images/Game.svg';
import photo8 from '../assets/images/Projects.svg';
import photo9 from '../assets/images/flutter.png';
import photo10 from '../assets/images/CCC.svg';


const data = [
    {
        name: "Linux Committee",
        desc: " A place for all Linux enthusiasts. We are a group of enthusiastic Linux users who are dedicated to providing a comprehensive guide to the Linux Shell, from beginner to advanced levels. Our goal is to teach people how to efficiently use the shell, as well as how to become familiar with Git and provide information on various networking concepts and cyber security.",
        photo: photo1
    },
    {
        name: "UX&Designs Committee",
        desc: " Hey there, Welcome to the UX & Designs Committee - the coolest design team in town! We're a bunch of creative minds that live and breathe UI/UX design. We're the ones who design user interface (UI) that not only look good but also feel good. We make sure that your experience on websites and apps is smooth ,friendly, and enjoyable. We conduct user research, create wireframes, and prototype designs with the user in mind. But we don't stop there! We work closely with other committees to make sure the final product is not only aesthetically pleasing but also implementable and meets business objectives.But that's not all we do, there's more! We're also the masterminds behind all the eye-catchy posters, banners, T-shirt designs, IDs, and social media posts you see. And we don't use just any old tools; we're all about that open-source life, using tools like penpot to bring our masterpieces to life.",
        photo: photo2
    },
    {
        name: "Web Committee",
        desc: " A Place for Web Rockstars. In Web Committee we focus on both the front end & the back end of websites & web applications. We operate using modern technlogies and methodologies and that what sets us apart. ",
        photo: photo3
    },
    {
        name: "HR Committee",
        desc: "Excellent decision makers. Our main responsibilities are interviewing people aspiring to be in our community, making sure they fit for their roles. A HR member joins each committee to make sure that everything is going according to plan, Teaching new comers how to give an interview, have responsibility and be excellent decision makers. ",
        photo: photo4
    },
    {
        name: "PR Committee",
        desc: " Represents the community and Enhance the member's soft skills through: • Improving presentation skills by learning different presenting techniques.  • Responsible for TOT sessions for technical committees before any workshop.  • Responsible for representing the community on the social media by learning content writing.  • Responsible for logistics and organizing events and workshops.",
        photo: photo5
    },
    {
        name: "Blender Committee",
        desc: " Imagine your own world. Our main objective is to create wholesome 3D artworks through the use of open-source 3D computer graphics software. We strive to achieve perfection in choosing the appropriate textures and colors to ensure that our creations are visually appealing. Additionally, we aim to enhance our skills in creating simple animations that bring our 3D models to life. With a focus on Blender software, we hope to take on increasingly challenging projects and continue to hone our abilities in this exciting field.",
        photo: photo6
    },
    {
        name: "Game Committee",
        desc: "Bringing imagination to interactivity. in the game committee, we try to learn and teach game design, game programming, game art, and game sound design using Godot Game Engine as a tool. also, we try to develop 2D and 3D games using what we have learned. ",
        photo: photo7
    },
    {
        name: "Science & Tech Committee",
        desc: "Explore the core of Computer science while mastering various Technologies, witness the power of software development and learn how to build powerful software at science and tech Committe by collaborating on open source team projects and sharing your knowledge with your colleagues.",
        photo: photo8
    },
    {
        name: "Flutter Committee",
        desc: "Write once, run anywhere. That's who we are, we write code once and this code can be run in Android , IOS , Web and Desktop using flutter. Flutter is an open source framework by Google for building beautiful, natively compiled, multi-platform applications from a single codebase.",
        photo: photo9
    },
    {
        name: "Content Creation committee",
        desc: "What if your inner thoughts and scenarios became a real thing ? Here in Content Creation Committee made for a group of special minds producing a creative ideas ... So what we do? We Photograph & Direct Video scenes for Specific ideas. Editing & Montaging the videos to be ready to the light & Adding Sound Effects on it, making it more Awesome. Making Voice Over ,Added to Videos voice that explain the Video Idea. Finally Writing Scripts for Videos & Make your own Scenarios real with us. and here in CC Committee, We make sure for you to be Creative, inspired & getting out ideas for inspiring others ",
        photo: photo10
    },
    

]



const Committe = () => {
    const {committeeName}  = useParams();

    const commite = data.find(committe => committe.name === committeeName)

    if (!commite) {
        return <h1 style={{
            color: "red",fontSize: "3rem", fontFamily: "abcB", alignItems: "center", justifyContent: "center", display: "flex", textAlign: "center", marginTop: "30vh"}}>Committee not found</h1>;
    }
    return (
        <div style={{ color: "gray", display: "flex", gap: "2rem" , paddingTop: "5rem"}}>

            <div style={{paddingTop: "2rem"}}>

                <h1 style={{padding: "0.5rem",}}>{commite.name}</h1>
                <p style={{padding: "0.5rem", letterSpacing: "1px", wordSpacing: "3px"}}>{commite.desc}</p>    
            </div>
            <img style={{ maxWidth: "40rem", maxHeight: "28rem" }} src={commite.photo} alt={commite.name} />
        </div>
    )
    
}

export default Committe