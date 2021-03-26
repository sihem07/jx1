import './App.css';
import './rd.css';

import imagesrc from './logo.svg'
function App() {
  return (
    <div className="App">
      <div style={{border:'solid 1px black', maxWidth:'100vw'}}>
      <h1 className="title red">Your name here</h1>
      <br/ >
<img src={imagesrc} />
<br/>
<img src="logo512.png" />
</div>
<video width="320" height="240" controls>

 <source src="myVideo.mp4" type="video/mp4" />

</video>

    </div>

 );
}

export default App;
