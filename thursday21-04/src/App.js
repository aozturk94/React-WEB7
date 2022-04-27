import './App.css';

function App() {
  const people = ["Gülşah","Oğuzhan","Metahan","Abdullah","Ahmet","Arda"]
  return (
    <div>
      <h1>{people}</h1>
      <hr/>
      <h1>{people[0]}</h1>
      <h1>{people[1]}</h1>
      <h1>{people[2]}</h1>
      
      <h1>{people[3]}</h1>
      <h1>{people[4]}</h1>
      <h1>{people[5]}</h1>
      <hr/>

      <h1>*MAP Kullanımı*</h1>
      {people.map((person) => (
      <h1>{person}</h1>
      ))}
    </div>
  );
}

export default App;
