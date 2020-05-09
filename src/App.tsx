import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, RouteComponentProps } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import "bootstrap/dist/css/bootstrap.min.css";

function Index() {
  return (
    <Fragment>
      <Container>
        <h2>Home</h2>
      </Container>
    </Fragment>
  );
}


type TProductParams = {id:string};
const Product: React.FC<RouteComponentProps<TProductParams>> = ({
  match,
  history,
}) => {
  console.log(match);
  console.log(history);
  return (
    <Fragment>
      <Container>
        <h4>This is a page for product with ID: {match.params.id} </h4>
        <LinkToButton linkTo="/" />
      </Container>
    </Fragment>
  );
};

type TLinkToButtonParams = {linkTo:string};
const LinkToButton: React.FC<TLinkToButtonParams> = ({linkTo}) => {
  const x = "warning";
  return (
    <Fragment>
      <Button variant={x} size="sm" href={linkTo}>
        Go Home
      </Button>
    </Fragment>
  );
}

const NavBarComponent = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">React-Bootstrap</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/products/1">First Product</Nav.Link>
          <Nav.Link href="/products/2">Second Product</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

const App = () => {
  return (
    <Router>
      <div>
        {/* Default */}
        <Container>
          <NavBarComponent />
          <Route path="/" exact component={Index} />
          <Route path="/products/:id" component={Product} />
        </Container>
      </div>
    </Router>
  );
};

export default App;
