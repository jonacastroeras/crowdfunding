import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {db} from "../../config/firebase"
import {collection, getDocs} from "firebase/firestore";

const list = [
    {
        "title": "Mi primera casa",
        "img": "https://blogs.iadb.org/salud/wp-content/uploads/sites/15/2015/12/Cinco-razones-por-las-que-casi-la-mitad-de-las-personas-que-viven-en-situaci%C3%B3n-de-pobreza-extrema-no-reciben-transferencias-monetarias.jpg",
        "description": "Some quick example text to build on the card title and make up the home"
    },
    {
        "title": "Mi segunda casa",
        "img": "https://lanacion.com.ec/wp-content/uploads/2021/02/El-estilo-de-vida-poco-saludable-en-las-personas-mas-pobres.jpg",
        "description": "Some quick example text to build on the card title and make up the home"
    },
    {
        "title": "Mi tercera casa",
        "img": "https://blogs.iadb.org/salud/wp-content/uploads/sites/15/2015/12/Cinco-razones-por-las-que-casi-la-mitad-de-las-personas-que-viven-en-situaci%C3%B3n-de-pobreza-extrema-no-reciben-transferencias-monetarias.jpg",
        "description": "Some quick example text to build on the card title and make up the home"
    },
]

function HomePage() {
    const [storiesList, setStoriesList] = useState([])
    useEffect(() => {
        async function fetchPost() {

            await getDocs(collection(db, "histories"))
                .then((querySnapshot) => {
                    console.log(querySnapshot.docs)
                    const newData = querySnapshot.docs
                        .map((doc) => ({...doc.data(), id: doc.id}));
                    setStoriesList(newData);
                    console.log(newData);
                })

        }

        fetchPost()
    }, [])
    return (
        <Container>
            <Row>
                {storiesList.map((element, index) => {
                    return (

                        <Col key={index}>
                            <Card style={{width: '18rem'}}>
                                <Card.Img variant="top"
                                          src={element.image}/>
                                <Card.Body>
                                    <Card.Title>{element.title}</Card.Title>
                                    <Card.Text>
                                        {element.description}
                                    </Card.Text>
                                    <Link to={"/detail"}><Button variant="primary">Detalle</Button></Link>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                })}
            </Row>
        </Container>

    )
}

export default HomePage;