import Carrousel from "./components/Carrousel.jsx";
import Accordion from "react-bootstrap/Accordion";
import RadioBtn from "./components/RadioBtn.jsx";
import Exampled from "./components/Exampled.jsx";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import React from "react";

export default function App() {
  return (
    <div class="container">
      <br></br>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h5>Tema e Palheta de Cores</h5>
          </Accordion.Header>
          <Accordion.Body>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col}>
                  <Form.Label>
                    <h6>Temas</h6>
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option disabled selected>
                      Escolha o tema do seu Site
                    </option>
                    <option value="1">Currículo online</option>
                    <option value="2">Album de Fotos</option>
                    <option value="3">E-commerce</option>
                    <option value="4">Blog</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>
                    <h6>Palheta de Cores</h6>
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option disabled selected>
                      Selecione a palheta de cores do seu site
                    </option>
                    <option value="1">Black and White (Padrão)</option>
                    <option value="2">Orange and Yellow</option>
                    <option value="3">Rose and Red</option>
                    <option value="4">Blue (Ocean)</option>
                  </Form.Select>
                </Form.Group>
              </Row>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
        {/*                      */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h5>Barra de Navegação</h5>
          </Accordion.Header>
          <Accordion.Body>
            <Form>
              <Form>
                <Form.Check
                  type="switch"
                  id="custom-switch"
                  label="Seu site possui Barra de Navegação"
                />
              </Form>
              <br></br>
              <div key={`inline-radio`} className="mb-3">
                {["1", "2", "3"].map((index) => (
                  <Form.Check
                    label={
                      index === "1" ? index + " Marcação" : index + " Marcações"
                    }
                    id={`inline-radio-${index}`}
                    type={"radio"}
                    name="group1"
                    inline
                  />
                ))}
              </div>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
        {/*                      */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h5>Rodapé de Informações</h5>
          </Accordion.Header>
          <Accordion.Body>
            <RadioBtn></RadioBtn>
            <Exampled></Exampled>
          </Accordion.Body>
        </Accordion.Item>
        {/*                      */}
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h5>Conteudo do Site</h5>
          </Accordion.Header>
          <Accordion.Body>
            <Carrousel></Carrousel>
          </Accordion.Body>
        </Accordion.Item>
        {/*                      */}
      </Accordion>
    </div>
  );
}
