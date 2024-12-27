import Card from 'react-bootstrap/Card';
import { IoMdTrophy } from "react-icons/io";
import { FaStar } from "react-icons/fa";
import { FaCrown } from "react-icons/fa6";

function Achievements() {
    return(
        <div className="container my-5">
            <h3 className="text-center">Achievements</h3>
<div className='row pt-3'>
    <div className='col-md-4 '>
    <Card className='pb-4 shadow-sm'>
      <Card.Body className='text-center'>
        <Card.Title><IoMdTrophy className='text-warning logos'/></Card.Title>
        <h4>5 Ballon d'Or</h4>
        <Card.Text>
        Awarded for his outstanding football career.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </div>
    <div className='col-md-4'>
    <Card className='pb-4 shadow-sm'>
      <Card.Body className='text-center'>
      <Card.Title><FaStar className="logos text-primary"/></Card.Title>
        <h4>UEFA Champions League</h4>
        <Card.Text>
        Won 5 UEFA Champions League titles.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className='col-md-4'>
    <Card className="pb-4 shadow-sm">
      <Card.Body className="text-center">
      <Card.Title><FaCrown className="logos text-success" /></Card.Title>
        <h4>European Champion</h4>
        <Card.Text>
        Led Portugal to victory in Euro 2016.
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
</div>
        </div>
    )   
}
export default Achievements;