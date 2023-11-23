import './Project.css';

type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

type ProjectProps = {
  photo: string;
  link: string;
  Title: string;
  projectDetails: string;
  flexDirection: FlexDirection | string; // Allow any string for flexibility
};

const Project: React.FC<ProjectProps> = ({
  photo,
  link,
  Title,
  projectDetails,
  flexDirection,
}) => {
  // Validating the flexDirection value
  const validatedFlexDirection: FlexDirection = [
    'row',
    'column',
    'row-reverse',
    'column-reverse',
  ].includes(flexDirection as FlexDirection)
    ? (flexDirection as FlexDirection)
    : 'row';

  const detailsArray = projectDetails.split('\n');

  return (
    <div style={{ display: 'flex', flexDirection: validatedFlexDirection }}>
      <a href={link} target="_blank" rel="noopener noreferrer">
        <img className="img" src={photo} alt="Project" />
      </a>
      <div style={{ marginLeft: '1rem' }}>
        <a href={link} target="_blank" rel="noopener noreferrer">
          <h2 className="title">{Title}</h2>
        </a>
        {detailsArray.map((paragraph, index) => (
          <p
            key={index}
            style={{
              color: 'white',
              fontSize: '.9rem',
              fontWeight: 'bold',
              marginBottom: '0.5rem',
              marginLeft: '1rem',
              marginRight: '1rem',
            }}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Project;
