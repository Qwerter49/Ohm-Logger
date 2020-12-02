import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'

export default function Login(props) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()
        login()
    }

    const handleCreateUser = (event) => {
        console.log(event.target)
    }
    
    const handleGuest = (event) => {
        event.preventDefault()
        setUsername("Guest")
        setPassword("Guest")
        login()
    }


    const login = () => {
        let user = {username, password}
        fetch('http://localhost:4000/login', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({user})
        })
        .then(response => response.json())
        .then(response => {
            const { payload, token } = response
            localStorage.setItem('token', token)
            // props.setSignedInUser(payload.username)
            props.history.push('/')
        })
    }

    return (
        <div className="login-card-container justify-content-sm-center row h-100 p-5">
                <Card className=" mx-5 my-auto" style={{width: '200rem'}}>
                <Card.Title text="primary" className="text-center mt-2">Ohm Logger</Card.Title>
                <Card.Subtitle className="text-center">Please Log In</Card.Subtitle>
                    <Form className="login-form mx-4" onSubmit={handleSubmit}>
                        <Form.Group controlId="formBasicUsername">
                            <Form.Label>Username: </Form.Label>
                            <Form.Control type="username" value={username} onChange={(event) => setUsername(event.target.value)} placeholder="Input Username"/>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password: </Form.Label>
                            <Form.Control type="password"  value={password} onChange={(event) => setPassword(event.target.value)} placeholder="Input Password"/>
                            </Form.Group>
                            <Form.Row className="justify-content-sm-between mb-2">
                                <Button variant="primary" as="input" type="submit" value="Login" />
                                <Button variant="secondary" onClick={handleGuest}>Continue as Guest</Button>
                                <Button onClick={handleCreateUser} variant="secondary"type="submit">Create Account</Button>
                            </Form.Row>
                    </Form>
                </Card>
        </div>
    )
}
