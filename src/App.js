
import './App.css';
import profileImage from './img/minions.jpg'

function App() {
  return (
    <div className="App">
      <h1>Going to bed early today</h1>
      <h2>Author: Yael and Barak</h2>
      <img src={profileImage} alt={"prifile-image"}/>
    </div>
  );
}

export default App;
