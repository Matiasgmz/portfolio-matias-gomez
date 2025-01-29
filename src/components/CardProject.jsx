import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Badge from 'react-bootstrap/Badge';
import CarrouselCardProjet from './CarrouselCardProjet';


export default function CardProject({ image, title, description, link, techno }) {

  const arrayTechno = Object.values(techno);

  return (
    <Card className='m-2 cardProject'>
      <CarrouselCardProjet image={image} />
      <Card.Body>
        <Card.Title className='text-center my-4'>{title}</Card.Title>
        <p className='text-center'>
          {arrayTechno.map((techno, index) => (
            <Badge key={index} bg="primary" className='me-1'>{techno}</Badge>
          ))}
        </p>
        <Card.Text className='descriptionCard'>
          {description}
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted text-center">
        <Button href={link} target='_blank' variant="secondary">Voir le site</Button>
      </Card.Footer>
    </Card>
  )
}