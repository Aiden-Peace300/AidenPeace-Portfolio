import './Project.css';
import Carousel from './Carousel';

type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';

type ProjectProps = {
  photos: any;
  link: string | null;
  Title: string;
  projectDetails: string;
  flexDirection: FlexDirection | string; // Allow any string for flexibility
};

const Project: React.FC<ProjectProps> = ({
  photos,
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
      <Carousel images={photos} link={link} />
      <div>
        <a
          href={link ? link : undefined}
          target="_blank"
          rel="noopener noreferrer">
          <h2 className="title">{Title}</h2>
        </a>
        {detailsArray.map((paragraph, index) => (
          <p
            key={index}
            style={{
              color: 'white',
              fontSize: '1rem',
              // fontWeight: 'bold',
              marginBottom: '0.5rem',
              marginLeft: '1rem',
              marginRight: '1rem',
              // fontFamily: 'Andale Mono',
            }}>
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Project;
