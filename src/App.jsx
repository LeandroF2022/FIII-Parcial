import { useState } from 'react';
import './App.css';

function App() {
  const [name, setName] = useState('');
  const [animal, setAnimal] = useState('');
  const [isValid, setIsValid] = useState(true);
  const [showAnimalCard, setShowAnimalCard] = useState(false);
  const [selectedAnimal, setSelectedAnimal] = useState('');
  const [selectedAnimalImage, setSelectedAnimalImage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChangeName = (event) => {
    const value = event.target.value;
    setName(value);
    setIsValid(value.length >= 3 && value.length <= 10);
  };

  const handleChangeAnimal = (event) => {
    const value = event.target.value.toLowerCase();
    setAnimal(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const animalImage = getAnimalImage(animal);
    if (animalImage) {
      setSelectedAnimal(animal);
      setSelectedAnimalImage(animalImage);
      setShowAnimalCard(true);
      resetForm();
      setErrorMessage('');
    } else {
      setErrorMessage(`El animal '${animal}' no se encuentra en la base de datos. Proba con otro`);
    }
  };

  const resetForm = () => {
    setName('');
    setAnimal('');
    setIsValid(true);
  };

  const getAnimalImage = (animal) => {
    switch (animal) {
      case 'gato':
        return 'https://fotografias.lasexta.com/clipping/cmsimages02/2019/01/25/DB41B993-B4C4-4E95-8B01-C445B8544E8E/104.jpg?crop=2771,2771,x692,y0&width=1200&height=1200&optimize=low&format=webply';
      case 'perro':
        return 'https://www.agrocalidad.gob.ec/wp-content/uploads/2020/08/perr.jpg';
      case 'pajaro':
        return 'https://www.aviariojp.org/wp-content/uploads/2020/04/aves-y-pajaros-que-hablan.jpg';
      case 'leon':
        return 'https://biblioteca.acropolis.org/wp-content/uploads/2017/02/simbolo-leon.jpg';
      case 'tigre':
        return 'https://www.ngenespanol.com/wp-content/uploads/2022/09/tigre-de-bengala-el-gran-felino-de-las-selvas-de-la-india.jpg';
      case 'jirafa':
        return 'https://upload.wikimedia.org/wikipedia/commons/4/4d/Giraffa_camelopardalis_reticulata_01.JPG';
      case 'oso':
        return 'https://upload.wikimedia.org/wikipedia/commons/f/f4/Brown_bear_%28Ursus_arctos%29%2C_Viiksimo%2C_Kainuu_region%2C_Finland%2C_16_June_2018_%2843094873292%29.jpg';
      default:
        return '';
    }
  };

  return (
    <div className="App">
      <h1>Ingresa los siguientes datos</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Tu Nombre:</label>
          <input
            type="text"
            value={name}
            onChange={handleChangeName}
          />
          {!isValid && (
            <p className="error">El nombre debe tener entre 3 y 10 letras</p>
          )}
        </div>
        <div>
          <label>Animal favorito:</label>
          <input
            type="text"
            value={animal}
            onChange={handleChangeAnimal}
          />
        </div>
        <button type="submit">Enviar</button>
      </form>
      {showAnimalCard && (
        <div className="animal-card">
          <img src={selectedAnimalImage} alt={selectedAnimal} />
          <p>Así que este es tu animal favorito 🤯 🤯</p>
        </div>
      )}
      {errorMessage && (
        <p className="error">{errorMessage}</p>
      )}
    </div>
  );
}

export default App;
