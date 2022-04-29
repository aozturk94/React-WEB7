import { useEffect, useState } from 'react';
import axios from 'axios'
import './App.css';

function App() {
  const [books, setBooks] = useState([])
  const [isbn, setIsbn] = useState(0)
  const [name, setName] = useState("")
  const [author, setAuthor] = useState("")
  const [publisher, setPublisher] = useState("")
  const [image, setImage] = useState("")
  const [publishdate, setPublishdate] = useState(0)
  const [numberofpage, setNumberofpage] = useState(0)
  const [newName, setNewName] = useState("")
  const [newAge, setNewAge] = useState(0)

  useEffect(() => {
    axios.get("http://localhost:3053/getBooks").then((response) => {
      setBooks(response.data)
    }).catch((err) => {
      console.log(err)
    })
  }, [books]);


  return (

    <div className="App">
      <h1> A List of Books</h1>
      {books.map((book) => (
        <div id="large-th">
          <div className="container">
            <br />
            <div className="choose">
              <a href="#list-th">
                <i className="fa fa-th-list" aria-hidden="true" />
              </a>
              <a href="#large-th">
                <i className="fa fa-th-large" aria-hidden="true" />
              </a>
            </div>
            <div id="list-th">
              <div className="book read">
                <div className="cover">
                  <img src="https://s-media-cache-ak0.pinimg.com/564x/f9/8e/2d/f98e2d661445620266c0855d418aab71.jpg" />
                </div>
                <div className="description">
                  <p className="title">
                    {book.name}
                    <br />
                    <span className="author">{book.author}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>

  );
};
export default App;
