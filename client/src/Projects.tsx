import './Projects.css';
import Project from './Project.tsx';

export default function Projects() {
  const projectData = {
    photo: '../images/filmCritic.png',
    link: 'http://filmcritic-dev.us-west-1.elasticbeanstalk.com/',
    title: 'FilmCritic',
    projectDetails: `
    Welcome to FilmCritic, where the magic of movies meets the warmth of community! I'm thrilled to showcase this project, a social media app designed for film enthusiasts seeking more than just recommendations. FilmCritic goes beyond the ordinary, leveraging the power of AI to enhance your cinematic journey.
    
    Crafted with a user-centric approach, the interface is a blend of React with TypeScript and Express, ensuring a seamless and engaging experience. Security is a top priority, with PostgreSQL providing robust data storage. JWT-based user authentication and error middleware have been seamlessly integrated to prioritize safety without compromising on user experience.
    
    FilmCritic is more than just a platform; it's a space for users to shape their movie experience. With a range of CRUD operations, you have the freedom to create and personalize profiles, curate watchlists, and share your thoughts through posts and user-generated content. Complete control over edits and deletions empowers users to tailor their FilmCritic journey.
    
    Excited to share this cinematic adventure with you! Explore the project on GitHub and join the FilmCritic community in celebrating the joy of movies together. 🎥🍿
    `,
  };

  return (
    <div>
      <h1>Projects</h1>
      <Project
        photo={projectData.photo}
        link={projectData.link}
        Title={projectData.title}
        projectDetails={projectData.projectDetails}
      />
    </div>
  );
}
