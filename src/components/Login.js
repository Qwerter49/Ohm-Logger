import React, { useState } from 'react'
import Card from 'react-bootstrap/Card'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import CardDeck from 'react-bootstrap/CardDeck'

export default function Login(props) {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    // const [token, setToken] = useState("")

    const handleSubmit = (event) => {
        let history = props.history
        event.preventDefault()
        // console.log(event.target)
        login({username, password, history})
    }

    const handleCreateUser = (event) => {
        console.log(event.target)
    }



    const login = ({username, password, history}) => {
        let user = {username, password}
        fetch('http://localhost:4000/login', {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({user})
        })
        .then(response => response.json())
        .then(jwt => {
            localStorage.setItem('token', jwt.token)
            // setToken(jwt.token)
            history.push('/')
        })
    }

    return (
        <CardDeck className="login-card-container justify-content-sm-center row h-100 p-5">
                <Card className=" mx-5 my-auto" >
                <Card.Title className="text-center mt-2">Meditation App!</Card.Title>
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
                                <Button variant="primary" type="submit">Login</Button>
                                <Button onClick={handleCreateUser} variant="secondary"type="submit">Create Account</Button>
                            </Form.Row>
                    </Form>
                </Card>
        </CardDeck>
    )
}
