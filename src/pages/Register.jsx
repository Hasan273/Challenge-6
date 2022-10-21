import React, { useState, useEffect } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import GoogleLogin from "../components/GoogleLogin";

const Register = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [token, setToken] = useState(null);

  useEffect(() => {
    const getToken = localStorage.getItem("token");
    setToken(getToken);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name === "") {
      alert("name is required");
      return;
    }
    if (email === "") {
      alert("Email is required");
      return;
    }
    if (password === "") {
      alert("Password is required");
      return;
    }
    if (name !=="" && email !== "" && password !== "") {
      const data = {
        name,
        email,
        password,
      };
      try {
        const result = await axios.post(
          `${process.env.REACT_APP_AUTH_API}/api/v1/auth/register`,
          data
        );
        if (result.data.token) {
          // Set token from backend to local storage
          // {"data": { "token": "ini token" }}
          localStorage.setItem("token", result.data.token);
          setToken(result.data.token);
        }
      } catch (error) {
        // If there are any error it will show the error message from backend
        // { "message": "Password salah" }
        alert(error.response.data.message);
      }
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <div>
      <header className="App-header">
        <Container className="container2">
        
          <Row>
            <Col>
            <div className="app-wrapper">
              {!token ? (
                <>
                  <GoogleLogin
                    setToken={setToken}
                    label="Register with Google"
                  />

                  <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Name</Form.Label>
                      <Form.Control
                        type="name"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Email address</Form.Label>
                      <Form.Control
                        type="email"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                      <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                      </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Password</Form.Label>
                      <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </Form.Group>

                    <div className="d-grid gap-2">
                      <Button variant="primary" size="lg" type="submit">
                        Submit
                      </Button>
                    </div>
                  </Form>
                </>
              ) : (
                <div className="d-grid gap-2">
                  <Button variant="danger" size="lg" onClick={handleLogout}>
                    Logout
                  </Button>
                </div>
              )}
              </div>
            </Col>
          </Row>
        </Container>
      </header>
    </div>
  );
};

export default Register;
