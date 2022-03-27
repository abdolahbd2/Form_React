import '../App.css'


export function Profile(props) {


  

  const queryParams = new URLSearchParams(window.location.search)
  var ImageProfile='1.png'
  const Nom = queryParams.get("Nom")
  const Prenom = queryParams.get("Prenom")
  const email = queryParams.get("email")
  const Sex = queryParams.get("Sex")
  const Adresse = queryParams.get("Adresse")
  const DateNaissance = queryParams.get("DateNaissance")
  const Sport = queryParams.get("Sport")
  const Ecriture = queryParams.get("Ecriture")
  const Voyage = queryParams.get("Voyage")

  var loadFile = function(event) {
    var image = document.getElementById('output');
    image.src = URL.createObjectURL(event.target.files[0]);
    
    };

    var getImage = function() {
      var fileImage = document.getElementById('fileImage');
      fileImage.click()
      };
  
  
  var HOBBIES=[Sport,Ecriture,Voyage]
  var HOBBIES_Title
  var Hobbies=HOBBIES.map(i=>{if(i!=null){HOBBIES_Title='Hobbies';return(<li key={i} style={{listStyle: "none"}}>{i}</li>);}})
 
 

 

    //var Dispaly="text-center "+props.display
        return(
          <div className="card">
          <div className="card-header">
          <input type="file" id="fileImage" className="d-none" onChange={(e)=>loadFile(e)}/>
          <button onClick={()=>getImage()}>
            <img id="output"  src={ImageProfile} alt="ProfileImage" className="profile-img"/>
          </button>
          </div>
          <div className="card-body">
              <p className="name my-4 pt-4" style={{fontWeight:"bold",fontSize:"xx-large" }}>{Nom.toUpperCase()} <span style={{textTransform:'capitalize'}}>{Prenom}</span></p>
              <div >
              <p><span style={{fontWeight:"bold"}}>Email </span><br/>{email}</p>
              <p><span style={{fontWeight:"bold"}}>Sex </span><br/>{Sex}</p>
              <p><span style={{fontWeight:"bold"}}>Adresse </span><br/>{Adresse}</p>
              <p><span style={{fontWeight:"bold"}}>Date de Naissance </span><br/>{DateNaissance}</p>
              <p><span style={{fontWeight:"bold"}}>{HOBBIES_Title} </span>{Hobbies}</p>

              </div>
          </div>
          <div className="card-footer">
              <span>Pharmaceutical Institute</span>
          </div>
      </div>
        );
}