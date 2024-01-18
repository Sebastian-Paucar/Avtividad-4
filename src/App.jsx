import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Personal } from './personal';
function App() {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    email: '',
    phone: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const person = new Personal(formData.name, formData.age, formData.email, formData.phone);

    // Muestra los datos ingresados usando el método showData
    alert(person.showData());
  };
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
      <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
          </label>
          <label>
            Age:
            <input type="text" name="age" value={formData.age} onChange={handleInputChange} />
          </label>
          <label>
            Email:
            <input type="text" name="email" value={formData.email} onChange={handleInputChange} />
          </label>
          <label>
            Phone:
            <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} />
          </label>
          <button type="submit">Submit</button>
        </form>

      </div>
    </>


  )
}

export default App
