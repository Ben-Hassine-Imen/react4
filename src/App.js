import './App.css';
import Profile from './profile/Profile';


function App() {
 
  const fullName='Imèn';
  const bio = 'chemistry';
  const profession='Quality Control Technician';
  const handleName = fullName =>{ alert(`Welcome to ${fullName} profile`);}

const styleObject={color:"red",textAlign:"center"}

  return (

    <div  className="profile" style={styleObject}>


<Profile handleName={handleName} fullName={fullName} bio={bio} profession={profession}> <img className="photo" src="/myphoto.jpg" alt="photo"/>
</Profile>

  </div>
  );
  }
  export default App;
