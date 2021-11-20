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

npm install --save bootstrap

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
