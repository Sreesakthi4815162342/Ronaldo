import Button from 'react-bootstrap/Button';

function Home(){
    return (
        <div className='home'>
            <h1 className="fw-lighter">Cristiano Ronaldo</h1>
            <p className="fw-lighter fs-5">Football Legend | Record-Breaker | Global Icon</p>
            <Button variant="primary">Learn More</Button>
        </div>
    );
}

export default Home;