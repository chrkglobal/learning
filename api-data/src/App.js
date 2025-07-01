import React, { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [dataurl, setdataurl] = useState('https://dummyjson.com/users');

  function search(){
    setdataurl('https://dummyjson.com/users/1')
    loadFromUrl();
  }

  function loadFromUrl(){
    fetch(dataurl)
      .then((response) => {

        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();

      })
      .then((data) => setPosts(data.users))
      .catch((error) => console.error('Fetch error:', error));

  }

  useEffect(() => {
    // fetch(dataurl)
    //   .then((response) => {

    //     if (!response.ok) {
    //       throw new Error('Network response was not OK');
    //     }
    //     return response.json();

    //   })
    //   .then((data) => setPosts(data.users))
    //   .catch((error) => console.error('Fetch error:', error));
loadFromUrl();
  }, []);




  return (

    <>
      {/* {console.log("User at 0 :", posts.at(0))} */}

      <div className="App">
        <h1>API Data Display

          <input type='button' value="Search" onClick={search} />
        </h1>
        <div>
          {posts.map((usr) => (

            <div key={usr.id}>
              <div style={{border:'1px solid #ccc',backgroundColor:'#f7f7f7', borderRadius:'15px', width:'23%', margin:'0.5%', display:"inline-block", float:'left'}}>
                <ul style={{ textAlign: 'left' }}>
                  <img src={usr.image} style={{ width: '20%', height: '20%' }} />
                  <li><h3>{usr.id}</h3><h3>{usr.firstName} - {usr.maidenName} - {usr.lastName} <br /> Age - {usr.age}</h3></li>
                  <li><h3>{usr.address.address}</h3><h3>{usr.address.city} - {usr.address.state} - {usr.address.stateCodes} - {usr.age}</h3></li>

                  

                </ul>
              </div>
            </div>

          ))}
        </div>
      </div>
    </>

  );
}

export default App;
