
import './App.css';
import profileImage from './img/minions.jpg'

function App() {
  return (
    <div className="App">
      <h1>My React App</h1>
      <h2>Author: Barak</h2>
      <img src={profileImage} alt={"prifile-image"}/>
    </div>
  );
}

export default App;
