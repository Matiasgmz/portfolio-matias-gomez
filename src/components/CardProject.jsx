import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CarrouselCardProjet from './CarrouselCardProjet';


export default function CardProject({ image, title, description, link }) {

  return (
    <Card className='rounded-0 m-2'>
      <CarrouselCardProjet image={image} />
      <Card.Body>
        <Card.Title className='text-center my-4'>{title}</Card.Title>
        <Card.Text className='descriptionCard'>
          {description}
        </Card.Text>
        <div className='text-center'>
          <Button href={link} target='_blank' variant="secondary">Voir le site</Button>
        </div>
      </Card.Body>
    </Card>
  )
}