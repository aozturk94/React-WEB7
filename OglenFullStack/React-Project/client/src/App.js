import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [employees, setEmployess] = useState([])
  const [name, setName] = useState("")
  const [age, setAge] = useState(0)
  const [username, setUsername] = useState("")
  const [image, setImage] = useState("")
  const [newName, setNewName] = useState("")
  const [newAge, setNewAge] = useState(0)

  useEffect(() => {
    axios.get("http://localhost:3050/getEmployees").then((response) => {
      setEmployess(response.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [employees]);


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
  const updateEmployee = (id) =>{
    axios.put("http://localhost:3050/updateEmployee", {
      id: id,
      newName: newName,
      newAge: newAge
    }).then((res)=>{
      alert("Employee Updated");
    });
  };

  const deleteEmployee = (id) => {
    axios.delete(`http://localhost:3050/deleteEmployee/${id}`);
  };

  return (

    <div className="App">
      <div className="container bg-dark">
        <div className="row">
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
                        className="list-inline-item text-black border-0"
                        type="text"
                        placeholder="Ad giriniz"
                        onChange={(e)=>setNewName(e.target.value)}
                      ></input>
                      <input
                        className="list-inline-item text-black border-0"
                        type="number"
                        placeholder="Yaş giriniz"
                        onChange={(e) => setNewAge(e.target.value)}
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
                        onClick={() => {updateEmployee(employee._id)}}
                      >
                        Güncelleme
                      </button>
                      <button
                        className="btn btn-outline-primary radius-15 mt-3"
                        onClick={()=>{
                          deleteEmployee(employee._id);
                        }}
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

        <div className='d-flex justify-content-center flex-column align-items-center m-3 bg-dark'>
        
        <h2 className='text-white mb-3'>CREATE AN EMPLOYEE</h2>
        <input className='mb-3'
          type="text"
          placeholder="İsim giriniz"
          onChange={(e) => setName(e.target.value)}
        ></input>
        <input className='mb-3'
          type="number"
          placeholder="Yaş giriniz"
          onChange={(e) => setAge(e.target.value)}
        ></input>
        <input className='mb-3'
          type="text"
          placeholder="Kullanıcı giriniz"
          onChange={(e) => setUsername(e.target.value)}
        ></input>
        <input className='mb-3'
          type="text"
          placeholder="Fotoğraf URL'si giriniz"
          onChange={(e) => setImage(e.target.value)}
        ></input>
        <br></br>
        <button className="btn btn-primary mb-3" onClick={createEmployee}>Kaydet</button>
      </div>
    </div>
      </div>
      
  );
}
export default App;
