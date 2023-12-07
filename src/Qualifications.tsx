import './Qualifications.css';
import Project from './Project.tsx';
import Pdf from './documents/LearningFuze_Certificate_of_Completion.pdf';
import CSDegree from './documents/computerScience.pdf';
import NasaProposal from './documents/Final PDR Draft.pdf';
import NasaAwards from './documents/NASA AWARDS.pdf';

import LFZPhoto1 from './images/LFZ/LearningFuze_Group_Picture.jpg';
import LFZPhoto2 from './images/LFZ/LearningFuze_Certificate_of_Completion.png';
import LFZPhoto3 from './images/LFZ/LFZ_hackathon.png';

import SaddlebackPhoto1 from './images/saddlebackCollege/computerScience.png';
import SaddlebackPhoto2 from './images/saddlebackCollege/pictureOfMe.jpg';
import SaddlebackPhoto3 from './images/saddlebackCollege/Nasa MCA.png';
import SaddlebackPhoto4 from './images/saddlebackCollege/MCA_TEAM40.png';
import SaddlebackPhoto5 from './images/saddlebackCollege/IMG_0705.jpg';
import SaddlebackPhoto6 from './images/saddlebackCollege/Nasa NPWEE.png';
import SaddlebackPhoto7 from './images/saddlebackCollege/NPWEE_TEAM21.png';
import SaddlebackPhoto8 from './images/saddlebackCollege/IMG_0704.jpg';

export default function Qualifications() {
  const LFZ = {
    photos: [
      LFZPhoto1,
      LFZPhoto2,
      LFZPhoto3,
    ],
    link: 'https://learningfuze.com/',
    title: 'Learning Fuze',
    projectDetails: `

    Embarking on the next phase of my coding journey, I eagerly enrolled in LearningFuze, the #1 coding bootcamp in Southern California, right after graduating from Saddleback. Over a dynamic 14-week Accelerated Web Development Program, I dedicated more than 800 hours to immersive, hands-on programming in a simulated, agile work environment that closely mirrored real-world scenarios. Collaborating with fellow developers in three intense hackathons, we harnessed our collective creativity and technical prowess to bring diverse applications to life, honing not just our coding skills but also our ability to thrive under pressure.

    LearningFuze immersed me in the expansive world of full-stack development, where I mastered an array of cutting-edge technologies such as JavaScript, HTML, CSS, TypeScript, React, Node, and Express. The program's intensity, demanding daily commitments of 10-12 hours, not only fueled my passion but also equipped me with practical skills and a comprehensive understanding of the development process, preparing me for the challenges of the ever-evolving tech landscape.
    
    During my enriching LearningFuze tenure, I successfully brought two impactful projects to fruition. FilmCritic, a groundbreaking social media app powered by AI, not only showcased my proficiency in React with TypeScript and Express but also highlighted my expertise in leveraging PostgreSQL for robust data storage and implementing JWT-based user authentication. This allowed users seamless control over their profiles, watchlists, posts, and user-generated content, solidifying my grasp on the intricacies of CRUD operations in a production environment.
    
    In parallel, the development of KeyWord Relief showcased my innovation in crafting an application that employed AI to assist users in finding that elusive word. The integration of asynchronous data retrieval from a REST API and the utilization of OpenAI for personalized information demonstrated my commitment to delivering unique solutions. Through the implementation of JavaScript event listeners and custom functions, I ensured seamless page transitions and personalized vocabulary list creation, enriching the overall user experience.
    
    LearningFuze transformed me, equipping me with technical prowess and confidence for complex challenges. It sharpened my skills, instilling a collaborative spirit and an insatiable curiosity. My commitment to excellence in the dynamic web development field is unwavering.
    `,
    flexDirection: 'row',
  };

  const saddlebackCollege = {
    photos: [
      SaddlebackPhoto1,
      SaddlebackPhoto2,
      SaddlebackPhoto3,
      SaddlebackPhoto4,
      SaddlebackPhoto5,
      SaddlebackPhoto6,
      SaddlebackPhoto7,
      SaddlebackPhoto8,
    ],
    link: 'https://www.saddleback.edu/',
    title: 'Saddleback College',
    projectDetails: `
    Embarking on my educational adventure in August 2019, I proudly graduated in 2023 with an Associate of Science in Computer Science from Saddleback College. The road to success was challenging but incredibly rewarding, and I wouldn't have had it any other way.

    Balancing a full-time job as an Inventory Control Specialist at Kris Tech Wire and later as a ROE Manager at Rebel off Road, I learned the art of time management and perseverance. This unique blend of work and study allowed me to apply theoretical knowledge from the classroom to real-world situations, enriching my educational experience.
    
    What set my Saddleback journey apart was my active involvement in NASA undergraduate programs, where I served as a Lead System Engineer and Scientist in the NASA NPWEE. This role involved spearheading the NASA Proposal Writing and Evaluation Experience Academy, where I honed crucial skills in effective communication, proposal crafting, and proposal evaluation. It was an incredible honor to contribute to NASA's mission and collaborate with diverse teams.
    
    Additionally, I took on the role of Lead Engineer in the NASA L’SPACE Mission Concept Academy, where I earned badges in Siemens NX CAD, Organizational Charts, Budgeting, Requirements, Functional Analysis, and Heat Transfer. As the Lead Software Engineer, I played a pivotal role in creating a Preliminary Design Review for a mission aimed at exploring cost-effective methods to extract drinkable water from beneath the moon's crust. Overseeing the risks and requirements of engineering and computer science subsystems was both challenging and immensely gratifying.
    
    Amidst these enriching experiences, I delved into coursework covering essential topics such as Data Structures, Discrete Math, Python, Java, Calculus 2, and more. These courses not only deepened my understanding of computer science but also equipped me with the skills needed to thrive in a dynamic and evolving field.
    
    Though my Saddleback College journey took a bit longer than planned, the invaluable experiences, practical skills gained, and the network I built have laid a solid foundation for my future endeavors. I am proud to carry the lessons learned and the knowledge acquired into the next chapter of my professional and academic life. Saddleback College has been more than an institution of learning for me; it's been a platform for growth, exploration, and success.
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
          <div className="pfd-links">
            <a
              className="resume"
              href={CSDegree}
              target="_blank"
              rel="noopener noreferrer">
              <button className="resume-button">View CS Degree</button>
            </a>
            <a
              className="resume"
              href={NasaProposal}
              target="_blank"
              rel="noopener noreferrer">
              <button className="resume-button">View NASA Propsal</button>
            </a>
            <a
              className="resume"
              href={NasaAwards}
              target="_blank"
              rel="noopener noreferrer">
              <button className="resume-button">View NASA Awards</button>
            </a>
          </div>
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
          <div className="pfd-links">
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
    </div>
  );
}
