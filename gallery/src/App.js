import { useState } from 'react';
import { sculptureList } from './data.js';

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);
  console.log(index, "Hello");
  function handleNextClick() {
 
    if(index == sculptureList.length -1){
      setIndex(0);
    }else{
      setIndex(index + 1);
    }
    console.log(index);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  let sculpture = sculptureList[index];
  return (
    <div style={{width:'50%', margin:'0px auto', border:'1px solid #ccc', padding:'20px', textAlign:'center', marginTop:'5%', borderRadius:'20px'}}>
      <button onClick={handleNextClick}>
        Next
      </button>
      <h2>
        <i>{sculpture.name} </i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? 'Hide' : 'Show'} details
      </button>
      <br />
      {showMore && <p>{sculpture.description}</p>}
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      />
    </div>
  );
}
