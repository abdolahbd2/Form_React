import { Input, Form, FormGroup, Label, Button, FormText, Card, Container } from "reactstrap";
import { useState } from "react";
import { Profile } from "./Profile";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { CardBody, CardHeader, Col, Row } from 'reactstrap';

const queryParams = new URLSearchParams(window.location.search)
console.log(queryParams)



export function FormComponent(params) {
  const [displayPart1, setdisplay1] = useState("d-fl");
  const [displayPart2, setdisplay2] = useState("d-none");
  const [emailStatus, setemailStatus] = useState(false);
  const [email, setemail] = useState("d-none");
  const [display, setdisplay] = useState('m-auto');
  const [ImgFile, setImgFile] = useState('');




  const Next = () => () => {
    if (emailStatus) {
      setdisplay1('d-none'); setdisplay2('d-block')
    }
    else {
      alert("Invalid Email")
    }
  }

  function EmailValidation(event) {
    setemailStatus(event.target.checkValidity())
    setemail(event.target.value)
    console.log(email + "  " + emailStatus)
  }

  function getEvent(event) {
    setImgFile(JSON.stringify(event.target.files[0]))
console.log(ImgFile)
  }

  return (

<div className="card" id='formCard'>
          <div className="card-header">
           Sign Up
         </div>
         <div className="card-body">
           <Container>


        <Form method="get" onSubmit={()=>{setdisplay("m-auto d-none")}} action="/profile" className={display} >
          <FormGroup className={displayPart1} >
            <FormGroup >
              <Label for="exampleEmail2">
                Nom
              </Label>
              <Input
                id="Nom"
                name="Nom"
                placeholder="with a placeholder"
                style={{width:'100%'}}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail4">
                Prenom
              </Label>
              <Input
                id="Prenom"
                name="Prenom"
                placeholder="with a placeholder"
              />
            </FormGroup>
            <FormGroup >
              <Label for="exampleEmail3">
                Email
              </Label>
              <Input
                id="email"
                name="email"
                placeholder="with a placeholder"
                type="email"
                onChange={data => EmailValidation(data)}
              />
            </FormGroup>

            <FormGroup>
              <Label for="examplePassword">
                Mot de passe
              </Label>
              <Input
                id="examplePassword"
                name="password"
                placeholder="password placeholder"
                type="password"
              />
            </FormGroup>

            <Button onClick={Next()}>
              Next
            </Button>
          </FormGroup>



          <FormGroup className={displayPart2} >
            <FormGroup>
              <Label for="exampleSelect">
                Sex
              </Label>
              <Input
                id="exampleSelect"
                name="Sex"
                type="select"
              >
                <option>
                  Féminin
                </option>
                <option>
                  Masculin
                </option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label for="exampleEmail">
                Adresse
              </Label>
              <Input
                id="exampleEmail"
                name="Adresse"
                placeholder="with a placeholder"
              />
            </FormGroup>

            <FormGroup>
              <Label for="exampleDate">
                Date de naissance
              </Label>
              <Input
                id="exampleDate"
                name="DateNaissance"
                placeholder="date placeholder"
                type="date"
              />
            </FormGroup>
            <FormGroup tag="fieldset">
              <Label >
                HOBBIES
              </Label>
              <FormGroup check >
                <Input type="checkbox" name="Sport" value={'Sport'} />
                <Label check>
                  Sport
                </Label>
              </FormGroup>
              <FormGroup check >
                <Input type="checkbox" name="Ecriture" value={'Ecriture'}/>
                <Label check>
                  Ecriture
                </Label>
              </FormGroup>
              <FormGroup check >
                <Input type="checkbox" name="Voyage" value={'Voyage'}/>
                <Label check>
                  Voyage
                </Label>
              </FormGroup>
            </FormGroup>
            <Button onClick={() => { setdisplay2('d-none'); setdisplay1('d-block') }}>
              Previous
            </Button>
            <Button type="submit"  className="mx-5">
              Submit
            </Button>
          </FormGroup>
        </Form>
      </Container>

</div>
</div>


  );

}