import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function Login() {
  return (
    <div className="custom-container m-auto">
      <div className="p-5 gap-2 align-items-center flex-column d-flex justify-content-center container d-flex p-2 bg-light border bg-custom">
        <Form className="gap-2 align-items-center flex-column d-flex justify-content-center container">
          <h4>Login</h4>
          <Form.Group controlId="formBasicEmailLogin">
            <Form.Control
              className=""
              required
              value=""
              type="email"
              placeholder="Digite seu email"
            />
            <Form.Control
              required
              value=""
              type="password"
              minLength="8"
              placeholder="Senha"
            />
          </Form.Group>

          <Button className="btn btn-success " type="submit">
            enviar
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;
