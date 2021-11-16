import Form from "react-bootstrap/Form";
import React from "react";

export default function RadioBtn() {
  return (
    <div class="container">
      <Form>
        <Form.Check
          type="switch"
          id="custom-switch"
          label="Seu site tem Rodapé de Informações?"
        />
      </Form>
    </div>
  );
}
