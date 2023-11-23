import './Project.css';

type ProjectProps = {
  photo: string;
  link: string;
  Title: string;
  projectDetails: string;
};

const Project: React.FC<ProjectProps> = ({
  photo,
  link,
  Title,
  projectDetails,
}) => {
  return (
    <div className="project-container">
      <a href={link} target="_blank">
        <img className="img" src={photo} alt="Project" />
      </a>
      <div style={{ marginLeft: '1rem' }}>
        <h2 style={{ color: 'white', fontSize: '3rem' }}>{Title}</h2>
        <p style={{ color: 'white', fontSize: '.7rem', fontWeight: 'bold' }}>
          {projectDetails}
        </p>
      </div>
    </div>
  );
};

export default Project;
