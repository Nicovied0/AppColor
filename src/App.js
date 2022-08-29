
import './App.css';
import toast, { Toaster } from 'react-hot-toast';
const notify = () => toast('Presiona Double click para mostrar menu!');

function App() {



  return (
    <div className="App" id='background'>

      <Toaster
        toastOptions={{
          className: '',
          style: {
            background: 'gray',
            border: '1px solid white',
            padding: '16px',
            color: '#fff',
          },
        }} />
        <h2>Seleccione su color de fondo</h2>
        <input type='color' id="colorPiker"></input>
      <br />
      <button onClick={notify}>Ocultar menu</button>
     <script src='Color.js'/>
    </div>
  );
}

export default App;
