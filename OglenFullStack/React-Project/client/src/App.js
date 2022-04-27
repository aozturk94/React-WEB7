import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [employees, setEmployess] = useState([])
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [username, setUsername] = useState("")
  const [image, setImage] = useState("")

  useEffect(() => {
    axios.get("http://localhost:3050/getEmployees").then((response) => {
      setEmployess(response.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [employees])


  const createEmployee = () => {
    axios.post("http://localhost:3050/createEmployee", {
      name: name,
      age: age,
      username: username,
      img: image
    }).then((res) => {
      alert("Employee Created");
    });
  };

  return (

    <div className="App">
      <div className="container bg-dark">
        <div className="row row-cols-1 row-cols-lg-2 row-cols-xl-4">
          {employees.map((employee) => (
            <div className="col-4 mb-4 mt-4">
              <div className="card radius-15 bg-success">
                <div className="card-body text-center ">
                  <div className="p-4 border radius-15 bg-white">
                    <img
                      src={
                        employee.img === "" ? "https://bootdey.com/img/Content/avatar/avatar7.png" : employee.img}
                      width={110}
                      height={110}
                      className="rounded-circle shadow"
                      alt=""
                    />
                    <h5 className="mb-0 mt-5">{employee.name}</h5>
                    <p className="mb-3">{employee.age}</p>
                    <div className="list-inline contacts-social mt-3 mb-3">
                      <input
                        className="list-inline-item text-white border-0"
                        type="text"
                        placeholder="Ad giriniz"
                      ></input>
                      <input
                        className="list-inline-item text-white border-0"
                        type="number"
                        placeholder="Yaş giriniz"
                      ></input>
                      <a
                        href="javascript:;"
                        className="list-inline-item bg-linkedin text-white border-0"
                      >
                        <i className="bx bxl-linkedin" />
                      </a>
                    </div>
                    <div className="d-grid">
                      <button
                        className="btn btn-outline-primary radius-15"
                        onClick={createEmployee}
                      >
                        Güncelleme
                      </button>
                      <button
                        className="btn btn-outline-primary radius-15 mt-3"
                        onClick={createEmployee}
                      >
                        Sil
                      </button>
                    </div>
                    <h5 className="mb-0 mt-3">{employee.username}</h5>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <input
          type="text"
          placeholder="İsim giriniz"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input
          type="number"
          placeholder="Yaş giriniz"
          onChange={(e) => setAge(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Kullanıcı giriniz"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input
          type="text"
          placeholder="Fotoğraf URL'si giriniz"
          onChange={(e) => setImage(e.target.value)}
        ></input>
        <br></br>
        <button onClick={createEmployee}>Kaydet</button>
      </div>
    </div>
  );
}
export default App;
