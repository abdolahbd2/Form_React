import { Input, Form, FormGroup, Label, Button, Col, Container } from "reactstrap";
import {useState } from "react";
import '../App.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight, faCalendarAlt, faCheck, faEnvelope, faKey, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons'
import { faUser as faUser1 } from '@fortawesome/free-regular-svg-icons/faUser'
import { faUser as faUser2 } from "@fortawesome/free-solid-svg-icons/faUser";

//const queryParams = new URLSearchParams(window.location.search)




export function FormComponent(params) {
  const [displayPart1, setdisplay1] = useState("d-fl");
  const [displayPart2, setdisplay2] = useState("d-none");
  const [emailStatusvalid, setemailStatusvalid] = useState(false);
  const [emailStatusinvalid, setemailStatusinvalid] = useState(false);
  const [emailicon, setemailicon] = useState(<FontAwesomeIcon icon={faEnvelope} />);
  const [NomStatusvalid, setNomStatusvalid] = useState(false);
  const [NomStatusinvalid, setNomStatusinvalid] = useState(false);
  const [Nomicon, setNomicon] = useState(<FontAwesomeIcon icon={faUser1} />);
  const [PrenomStatusvalid, setPrenomStatusvalid] = useState(false);
  const [PrenomStatusinvalid, setPrenomStatusinvalid] = useState(false);
  const [Prenomicon, setPrenomicon] = useState(<FontAwesomeIcon icon={faUser2} />);
  const [PasswordStatusvalid, setPasswordStatusvalid] = useState(false);
  const [PasswordStatusinvalid, setPasswordStatusinvalid] = useState(false);
  const [Passwordicon, setPasswordicon] = useState(<FontAwesomeIcon icon={faKey} />);
  const [SexStatusvalid, setSexStatusvalid] = useState(false);
  const [SexStatusinvalid, setSexStatusinvalid] = useState(false);
  const [AdressStatusvalid, setAdressStatusvalid] = useState(false);
  const [AdressStatusinvalid, setAdressStatusinvalid] = useState(false);
  const [Adressicon, setAdressicon] = useState(<FontAwesomeIcon icon={faMapMarkerAlt} />);
  const [DateStatusvalid, setDateStatusvalid] = useState(false);
  const [DateStatusinvalid, setDateStatusinvalid] = useState(false);
  const [Dateicon, setDateicon] = useState(<FontAwesomeIcon icon={faCalendarAlt} />);
  const [display, setdisplay] = useState('m-auto');
  //const [ImgFile, setImgFile] = useState('');


  const Next = () => () => {
    if (!NomStatusvalid) {
      setNomStatusinvalid(true)
      setNomStatusvalid(false)
      setNomicon(<></>)
    }
    if (!PrenomStatusvalid) {
      setPrenomStatusinvalid(true)
      setPrenomStatusvalid(false)
      setPrenomicon(<></>)
    }
    if (!emailStatusvalid) {
      setemailStatusinvalid(true)
      setemailStatusvalid(false)
      setemailicon(<></>)
    }
    if (!PasswordStatusvalid) {
      setPasswordStatusinvalid(true)
      setPasswordStatusvalid(false)
      setPasswordicon(<></>)
    }
    if (!SexStatusvalid) {
      setSexStatusinvalid(true)
      setSexStatusvalid(false)
      setemailicon(<></>)
    }
    if (emailStatusvalid && NomStatusvalid && PrenomStatusvalid && PasswordStatusvalid && SexStatusvalid) {
      setdisplay1('d-none'); setdisplay2('d-block')
    }

  }


  const validationButton = () => () => {
    if (!AdressStatusvalid) {
      setAdressStatusinvalid(true)
      setAdressStatusvalid(false)
      setAdressicon(<></>)
    }
    if (!DateStatusvalid) {
      setDateStatusinvalid(true)
      setDateStatusvalid(false)
      setDateicon(<></>)
    }
    if (AdressStatusvalid && DateStatusvalid) {
      var SubmitButton = document.getElementById('submitButton');
      SubmitButton.click()
    }

  }

  function EmailValidation(event) {
    var emailInput = document.getElementById('email');

    if (emailInput.value.length === 0) {
      setemailStatusinvalid(false)
      setemailStatusvalid(false)
      setemailicon(<FontAwesomeIcon icon={faEnvelope} />);
      return (true)
    }
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(event.target.value)) {
      setemailicon(<></>)
      setemailStatusinvalid(false)
      setemailStatusvalid(true)
      return (true)
    }
    setemailicon(<></>)
    setemailStatusinvalid(true)
    setemailStatusvalid(false)
    return (false)
  }


  function NomValidation(event) {
    var NomInput = document.getElementById('Nom');
    if (NomInput.value.length === 0) {
      setNomStatusinvalid(false)
      setNomStatusvalid(false)
      setNomicon(<FontAwesomeIcon icon={faUser1} />);
      return (true)
    }
    if (/^(?!.*  )(?=.*[\w-])[\w -]{2,40}$/.test(event.target.value)) {
      setNomicon(<></>)
      setNomStatusinvalid(false)
      setNomStatusvalid(true)
      return (true)
    }
    setNomicon(<></>)
    setNomStatusinvalid(true)
    setNomStatusvalid(false)
    return (false)
  }

  function PrenomValidation(event) {
    var PrenomInput = document.getElementById('Prenom');

    if (PrenomInput.value.length === 0) {
      setPrenomStatusinvalid(false)
      setPrenomStatusvalid(false)
      setPrenomicon(<FontAwesomeIcon icon={faUser2} />);
      return (true)
    }
    if (/^(?!.*  )(?=.*[\w-])[\w -]{2,40}$/.test(event.target.value)) {
      setPrenomicon(<></>)
      setPrenomStatusinvalid(false)
      setPrenomStatusvalid(true)
      return (true)
    }
    setPrenomicon(<></>)
    setPrenomStatusinvalid(true)
    setPrenomStatusvalid(false)
    return (false)
  }

  function PasswordValidation(event) {
    var PasswordInput = document.getElementById('Password');

    if (PasswordInput.value.length === 0) {
      setPasswordStatusinvalid(false)
      setPasswordStatusvalid(false)
      setPasswordicon(<FontAwesomeIcon icon={faKey} />);
      return (true)
    }
    if (/^(?!.*  )(?=.*[\w-])[\w -]{2,40}$/.test(event.target.value)) {
      setPasswordicon(<></>)
      setPasswordStatusinvalid(false)
      setPasswordStatusvalid(true)
      return (true)
    }
    setPasswordicon(<></>)
    setPasswordStatusinvalid(true)
    setPasswordStatusvalid(false)
    return (false)
  }

  function SexValidation(event) {
    var SexInput = document.getElementById('Sex');

    setSexStatusinvalid(false)
    setSexStatusvalid(true)

    if (SexInput.value.length === 0) {
      setSexStatusinvalid(false)
      setSexStatusvalid(false)
      return (true)
    }

    return (false)
  }


  function AdressValidation(event) {
    var AdressInput = document.getElementById('Adress');
    if (AdressInput.value.length === 0) {
      setAdressStatusinvalid(false)
      setAdressStatusvalid(false)
      setAdressicon(<FontAwesomeIcon icon={faMapMarkerAlt} />);
      return (true)
    }
    if (/^(?!.*  )(?=.*[\w-])[\w -]{2,40}$/.test(event.target.value)) {
      setAdressicon(<></>)
      setAdressStatusinvalid(false)
      setAdressStatusvalid(true)
      return (true)
    }
    setAdressicon(<></>)
    setAdressStatusinvalid(true)
    setAdressStatusvalid(false)
    return (false)
  }

  function DateValidation(a) {
    var dateInput = document.getElementById('date');
    if (dateInput.value.length === 0) {
      setDateStatusinvalid(false)
      setDateStatusvalid(false)
      setDateicon(<FontAwesomeIcon icon={faCalendarAlt} />);
      return (true)
    }
    if (/^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(a.target.value)) {
      //DD/MM/YYYY
      setDateicon(<></>)
      setDateStatusinvalid(false)
      setDateStatusvalid(true)
      return (true)
    }
    setDateicon(<></>)
    setDateStatusinvalid(true)
    setDateStatusvalid(false)
    return (false)
  }



  // function getEvent(event) {
  //   setImgFile(JSON.stringify(event.target.files[0]))
  // }

  return (

    <div className="card " id='formCard'>

      <div className="card-header" >
        Inscription
      </div>
      <div className="card-body">
        <Container>
          <Form method="get" onSubmit={() => { setdisplay("m-auto d-none") }} action="/profile" className={display} >
            <FormGroup className={displayPart1}  >
              <FormGroup className='my-3' >

                <div className="position-relative">
                  <Input
                    id="Nom"
                    name="Nom"
                    type="text"
                    placeholder="Nom"
                    onChange={data => NomValidation(data)}
                    invalid={NomStatusinvalid}
                    valid={NomStatusvalid} />

                  <span style={{ position: "absolute", right: "8px", top: '5px' }}  >{Nomicon}</span>
                </div>
              </FormGroup>



              <FormGroup className='my-3'>
                <div className="position-relative">
                  <Input
                    id="Prenom"
                    name="Prenom"
                    type="text"
                    placeholder="Prénom"
                    onChange={data => PrenomValidation(data)}
                    invalid={PrenomStatusinvalid}
                    valid={PrenomStatusvalid} />
                  <span style={{ position: "absolute", right: "8px", top: '5px' }}  >{Prenomicon}</span>
                </div>
              </FormGroup>


              <FormGroup className='my-3'>
                <Input
                  id="Sex"
                  name="Sex"
                  type="select"
                  onChange={data => SexValidation(data)}
                  invalid={SexStatusinvalid}
                  valid={SexStatusvalid}
                >
                  <option hidden value="" defaultValue={'disabled'} >Sex</option>
                  <option>
                    Féminin
                  </option>
                  <option>
                    Masculin
                  </option>
                </Input>

              </FormGroup>
              <FormGroup className='mb-4' style={{ margin: '25px 0' }}>
                <div className="position-relative">

                  <Input
                    id="email"
                    name="email"
                    placeholder="Email"
                    type="text"
                    onChange={data => EmailValidation(data)}
                    invalid={emailStatusinvalid}
                    valid={emailStatusvalid}
                  />

                  <span style={{ position: "absolute", right: "8px", top: '5px' }}>{emailicon}</span>

                </div>
              </FormGroup>

              <FormGroup className='my-3' >
                <div className="position-relative">

                  <Input
                    id="Password"
                    name="password"
                    placeholder="Mot de passe"
                    type="password"
                    onChange={data => PasswordValidation(data)}
                    invalid={PasswordStatusinvalid}
                    valid={PasswordStatusvalid}
                  />
                  <span style={{ position: "absolute", right: "8px", top: '5px' }}  >{Passwordicon}</span>
                </div>
              </FormGroup>

              <Button color="primary" onClick={Next()} style={{ position: 'absolute', top: '5px', right: '5px' }}>
                <FontAwesomeIcon icon={faArrowRight} />
              </Button>
            </FormGroup>



            <FormGroup className={displayPart2} >
              <FormGroup className="my-3">
                <div className="position-relative">

                  <Input
                    id="Adress"
                    name="Adresse"
                    placeholder="Adresse"
                    type="textarea"
                    onChange={data => AdressValidation(data)}
                    invalid={AdressStatusinvalid}
                    valid={AdressStatusvalid}
                  />
                  <span style={{ position: "absolute", right: "8px", top: '5px' }}  >{Adressicon}</span>
                </div>
              </FormGroup>
              <FormGroup className="my-4">
                <div className="position-relative">
                  <Input
                    id="date"
                    name="DateNaissance"
                    placeholder="Date de naissance"
                    type="text"
                    onChange={data => DateValidation(data)}
                    invalid={DateStatusinvalid}
                    valid={DateStatusvalid}
                  />
                  <span style={{ position: "absolute", right: "8px", top: '5px' }}  >{Dateicon}</span>
                </div>
              </FormGroup>

              <FormGroup className="mt-4"style={{height:'30px'}} >
                <Col>
                  <Label style={{ fontWeight: "bold" }}>
                    Hobbies
                  </Label>
                </Col>

                <FormGroup check inline>
                  <Input type="checkbox" name="Sport" value={'Sport'} />
                  <Label check style={{ fontSize: '17px' }} >
                    Sport
                  </Label>
                </FormGroup >
                <FormGroup check inline>
                  <Input type="checkbox" name="Ecriture" value={'Ecriture'} />
                  <Label check style={{ fontSize: '17px' }}>
                    Ecriture
                  </Label>
                </FormGroup>
                <FormGroup check inline>
                  <Input type="checkbox" name="Voyage" value={'Voyage'} />
                  <Label check style={{ fontSize: '17px' }}>
                    Voyage
                  </Label>
                </FormGroup>
              </FormGroup>
              <Button onClick={() => { setdisplay2('d-none'); setdisplay1('d-block') }} style={{ position: 'absolute', top: '5px', left: '5px' }}>
                <FontAwesomeIcon icon={faArrowLeft} />
              </Button>
              <Button id="validationButton" onClick={(validationButton())} color="success" style={{ position: 'absolute', top: '5px', right: '5px' }}>
                <FontAwesomeIcon icon={faCheck} />
              </Button>
              <Button id="submitButton" color="danger" type="submit" style={{border: 'none',background:'none'}}>
              </Button>
            </FormGroup>
          </Form>
        </Container>

      </div>
    </div>


  );

}