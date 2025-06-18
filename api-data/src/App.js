import React, { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

   useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => {
        
        if (!response.ok) {
          throw new Error('Network response was not OK');
        }
        return response.json();

      })
      .then((data) => setPosts(data.users))
      .catch((error) => console.error('Fetch error:', error));
     
  }, []);

 

  
  return (
        
    <>{console.log("User at 0 :", posts.at(0))}
    
    <div className="App">
      <h1>API Data Display</h1>
       <div>
      {posts.map((usr) => (
        
        <div key={usr.id} style={{ marginBottom: '20px' }}>
          <ul style={{textAlign:'left'}}>
          <li><h3>{usr.id}</h3><h3>{usr.firstName}</h3></li>
           
          <img src={usr.image} style={{width:'10%', height:'10%'}} />
         
          </ul>
        </div>
        
      ))}
    </div>
    </div>
</>

  );
}

export default App;
