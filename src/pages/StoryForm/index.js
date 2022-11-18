import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import { useNavigate } from "react-router-dom"
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../config/firebase"
import axios from 'axios';

function StoryForm() {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        name: "",
        price: "",
        description: "",
        image: ""
    })
    useEffect(() => {

    })

    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault()
        console.log("this is my submit")
        try {
            console.log(form)
            const result = await axios.post("http://localhost:8000/api/v1/Project/", form, {
                auth: {
                    username: "jacastro12",
                    password: "joalcaerJACE"
                }
            })
            // const docRef = await addDoc(collection(db, "histories"),
            //     form,
            // );
            // console.log("Document written with ID: ", docRef.id);
            navigate("/")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Titulo</Form.Label>
                    <Form.Control type="text" name="name" value={form.name} onChange={handleChange}
                        placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Descripcion</Form.Label>
                    <Form.Control type="text" name="description" placeholder="Descripcion" value={form.description}
                        onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="text" name="image" placeholder="Imagen" value={form.image}
                        onChange={handleChange} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default StoryForm;