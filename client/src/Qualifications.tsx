// Qualifications.tsx
import './Qualifications.css';
import Project from './Project.tsx';
import Pdf from '../Documents/LearningFuze_Certificate_of_Completion.pdf';

export default function About() {
  const LFZ = {
    photos: [
      '../images/LFZ/LearningFuze_Group_Picture.jpg',
      '../images/LFZ/LearningFuze_Certificate_of_Completion.png',
      '../images/LFZ/LFZ_hackathon.png',
    ],
    link: 'https://learningfuze.com/',
    title: 'Learning Fuze',
    projectDetails: `
    Welcome to FilmCritic, where the magic of movies meets the warmth of community! I'm thrilled to showcase this project, a social media app designed for film enthusiasts seeking more than just recommendations. FilmCritic goes beyond the ordinary, leveraging the power of AI to enhance your cinematic journey.
    
    Crafted with a user-centric approach, the interface is a blend of React with TypeScript and Express, ensuring a seamless and engaging experience. Security is a top priority, with PostgreSQL providing robust data storage. JWT-based user authentication and error middleware have been seamlessly integrated to prioritize safety without compromising on user experience.
    
    FilmCritic is more than just a platform; it's a space for users to shape their movie experience. With a range of CRUD operations, you have the freedom to create and personalize profiles, curate watchlists, and share your thoughts through posts and user-generated content. Complete control over edits and deletions empowers users to tailor their FilmCritic journey.
    
    Excited to share this cinematic adventure with you! Explore the project on GitHub and join the FilmCritic community in celebrating the joy of movies together. 🎥🍿
    `,
    flexDirection: 'row',
  };

  const saddlebackCollege = {
    photos: [
      '../images/saddlebackCollege/computerScience.png',
      '../images/saddlebackCollege/NPWEE_TEAM21.png',
      '../images/saddlebackCollege/IMG_0704.jpg',
      '../images/saddlebackCollege/IMG_0705.jpg',
      '../images/saddlebackCollege/MCA_TEAM40.png',
      '../images/saddlebackCollege/pictureOfMe.jpg',
    ],
    link: 'https://www.saddleback.edu/',
    title: 'Saddleback College',
    projectDetails: `
    Welcome to FilmCritic, where the magic of movies meets the warmth of community! I'm thrilled to showcase this project, a social media app designed for film enthusiasts seeking more than just recommendations. FilmCritic goes beyond the ordinary, leveraging the power of AI to enhance your cinematic journey.
    
    Crafted with a user-centric approach, the interface is a blend of React with TypeScript and Express, ensuring a seamless and engaging experience. Security is a top priority, with PostgreSQL providing robust data storage. JWT-based user authentication and error middleware have been seamlessly integrated to prioritize safety without compromising on user experience.
    
    FilmCritic is more than just a platform; it's a space for users to shape their movie experience. With a range of CRUD operations, you have the freedom to create and personalize profiles, curate watchlists, and share your thoughts through posts and user-generated content. Complete control over edits and deletions empowers users to tailor their FilmCritic journey.
    
    Excited to share this cinematic adventure with you! Explore the project on GitHub and join the FilmCritic community in celebrating the joy of movies together. 🎥🍿
    `,
    flexDirection: 'row',
  };

  return (
    <div className="qualifications">
      <h1>Qualifications</h1>
      <div className="qualifications-container">
        <div className="project">
          <Project
            photos={saddlebackCollege.photos}
            link={saddlebackCollege.link}
            Title={saddlebackCollege.title}
            projectDetails={saddlebackCollege.projectDetails}
            flexDirection={'column'}
          />
        </div>
        <div className="vertical-line"></div>
        <div className="project">
          <Project
            photos={LFZ.photos}
            link={LFZ.link}
            Title={LFZ.title}
            projectDetails={LFZ.projectDetails}
            flexDirection={'column'}
          />
          <a
            className="resume"
            href={Pdf}
            target="_blank"
            rel="noopener noreferrer">
            <button className="resume-button">View Certification</button>
          </a>
        </div>
      </div>
    </div>
  );
}
