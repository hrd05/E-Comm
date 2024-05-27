import { Card, Container, Button } from "react-bootstrap";
import ConcertTable from "./ConcertTable";

const Home = () => {
    return (
        <Container className="mt-3 d-flex flex-column align-items-center">
            <h2 style={{ fontFamily: 'cursive' }} className="mt-4"> Tours</h2>
            <ConcertTable />
        </Container>
    )
}

export default Home;