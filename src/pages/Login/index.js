import { useState } from 'react';
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { redirect, useNavigate } from 'react-router-dom';

function LoginPage({ isAuthenticated, setIsAuthenticated }) {
    const navigate = useNavigate()
    const [form, setForm] = useState({
        "username": "",
        "password": ""
    })
    function handleChange(e) {
        setForm({ ...form, [e.target.name]: e.target.value })
    }

    async function handleSubmit(e) {
        e.preventDefault();
        console.log("datos", form)
        try {
            const results = await axios.post("http://localhost:8000/api/token/", form)
            toast.success("Bienvenido Mijin", { icon: '👏', })
            localStorage.setItem("refresh", results.data.refresh)
            localStorage.setItem("access", results.data.access)
            setIsAuthenticated(true)
            navigate("/")
        } catch (error) {
            toast.error(`Usuario y/o contraseña incorrecta \n\n ${error.response.data.detail}`)
        }



    }
    return (
        <>
            <h2>Ingresar</h2>
            <Container>
                <Toaster
                    position="top-center"
                    reverseOrder={false}
                />
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Usuario</Form.Label>
                        <Form.Control type="text" name="username" value={form.username} onChange={handleChange} placeholder="Enter email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control type="password" name="password" value={form.password} onChange={handleChange} placeholder="Password" />
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </>)
}

export default LoginPage;