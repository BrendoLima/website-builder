import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
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
                    <option value="1">Currículo online</option>
                    <option value="2">Album de Fotos</option>
                    <option value="3">E-commerce</option>
                    <option value="4">Blog</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group as={Col}>
                  <Form.Label>
                    <h6>Palhetas de Cores</h6>
                  </Form.Label>
                  <Form.Select aria-label="Default select example">
                    <option value="1">Black and White (Padrão)</option>
                    <option value="2">Blue (Ocean)</option>
                    <option value="3">Pink</option>
                    <option value="4">Orange and Yellow</option>
                    <option value="5">Rose and Red</option>
                  </Form.Select>
                </Form.Group>
              </Row>
            </Form>
          </Accordion.Body>
        </Accordion.Item>
        {/*                      */}
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h5>Tema e Palheta de Cores</h5>
          </Accordion.Header>
          <Accordion.Body>
            <div>Corpo do texto</div>
          </Accordion.Body>
        </Accordion.Item>
        {/*                      */}
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h5>Tema e Palheta de Cores</h5>
          </Accordion.Header>
          <Accordion.Body>
            <div>Corpo do texto</div>
          </Accordion.Body>
        </Accordion.Item>
        {/*                      */}
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h5>Tema e Palheta de Cores</h5>
          </Accordion.Header>
          <Accordion.Body>
            <div>Corpo do texto</div>
          </Accordion.Body>
        </Accordion.Item>
        {/*                      */}
      </Accordion>
    </div>
  );
}

export default App;
