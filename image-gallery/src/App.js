import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [list, setList] = useState([]);

  useEffect(() => {
    fetch('https://picsum.photos/v2/list')
      .then(res => res.json())
      .then(data => setList(data)); // ✅ Corrected here
  }, []);

  const deleteItem = (id) => {
    setList(list.filter((item) => item.id !== id));
  };

    function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for(let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


  return (
    <div className="App">
      {list.map((item, index) => (
        <div className='post-item' key={item.id} style={{borderColor: getRandomColor(), 
        backgroundColor: index % 2 === 0 ? '#f0f8ff' : '#ffe4e1', // Light Blue / Light Pink
        padding: '10px',
        borderRadius: '8px'
      }}>
          <div className='delete-icon' onClick={() => deleteItem(item.id)} title='Delete'>X</div>
          <p>{item.author} - {item.id}</p>
          <img src={item.download_url} alt={item.author} width="300" />
        </div>
      ))}
    </div>
  );
}

export default App;
