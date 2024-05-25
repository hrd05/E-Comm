import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';


const AboutPage = () => {
    return (
        <Container className="my-5">
            <Row className="mb-4 bg-primary text-white p-3 rounded">
                <Col>
                    <h1>About Us</h1>
                    <p>Welcome to Groovenest!</p>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col md={6}>
                    <div className="bg-light p-3 rounded">
                        <h2>Our Story</h2>
                        <p>
                            Groovenest was founded by a group of friends who bonded over their shared love for vinyl records, live concerts, and band tees. We noticed that while there were plenty of places to buy music and apparel, few truly catered to the needs of dedicated fans. So, we set out to create a haven for music lovers where they could find not only the latest releases but also timeless classics and exclusive merchandise.
                        </p>
                    </div>
                </Col>
                <Col md={6}>
                    <div className="bg-secondary text-white p-3 rounded">
                        <h2>What We Offer</h2>
                        <ul>
                            <li><strong>Albums:</strong> From vinyl to CDs, we offer a wide range of genres including rock, jazz, hip-hop, electronic, and more. Whether you're looking for the latest release from your favorite artist or a rare pressing to complete your collection, we've got you covered.</li>
                            <li><strong>Apparel:</strong> Our collection of tees, hoodies, and accessories features designs from iconic bands, up-and-coming artists, and exclusive Groovenest creations. We believe in quality and comfort, ensuring you can wear your love for music proudly and stylishly.</li>
                            <li><strong>Merchandise:</strong> Beyond albums and apparel, we offer a variety of music-related items like posters, turntables, headphones, and collectibles. These carefully selected products reflect our commitment to enhancing your music experience.</li>
                        </ul>
                    </div>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col className="bg-info text-white p-3 rounded">
                    <h2>Why Groovenest?</h2>
                    <ul>
                        <li><strong>Curated Selection:</strong> We handpick every item in our store to ensure it meets our high standards for quality and authenticity.</li>
                        <li><strong>Exclusive Releases:</strong> Be the first to get your hands on limited edition albums and merchandise available only at Groovenest.</li>
                        <li><strong>Community Focused:</strong> We host events, album listening parties, and collaborate with artists to bring the music community together.</li>
                        <li><strong>Customer Satisfaction:</strong> Your experience matters to us. Our dedicated customer service team is here to help you with any inquiries and ensure you have a smooth shopping experience.</li>
                    </ul>
                </Col>
            </Row>
            <Row className="mb-4">
                <Col className="bg-dark text-white p-3 rounded">
                    <h2>Join the Groovenest Community</h2>
                    <p>
                        Music is more than just sound—it's a lifestyle, an identity, and a universal language that connects us all. At Groovenest, we're proud to be part of that connection. Follow us on social media, sign up for our newsletter, and join us in celebrating the music that moves us.
                    </p>
                    <Button variant="primary" href="newsletter_signup_link">Sign Up for Newsletter</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default AboutPage;
