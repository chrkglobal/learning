
import { useState } from 'react';
// import { Moviedetails } from './Components/data';
import { Comments } from './Components/data';
import './App.css';

function App() {
  const [data, setMoviedetail] = useState(Comments);

  const delete_movie = (index) => {
    setMoviedetail(data.filter(((v, i) => i !== index)));
  }

  function reset_movies() {
    setMoviedetail(Comments);
    // { console.log("Hi", Object.keys(data[0])) };

  }


  return (

    <div className="App">
      <button onClick={() => reset_movies()}>Reset Movies</button>
      <table border="1" width="100%">
        <tr>
          {data.length > 0 && Object.keys(data[0]).map((header, i) => (<th>{header}</th>))}
        </tr>
        {data.map((movie, i) => (
          <tr>
            <td>{movie.post_id}</td>
            <td>{movie.author}</td>
            <td>{movie.timestamp}</td>
            <td>{movie.content}</td>
            <td>{movie.likes}</td>
            <td>
              {movie.comments.length > 0 &&
                <table border={1} style={{ border: '1px solid #f00' }}>
                  <tr>
                    <th>comment_id</th>
                    <th>commenter</th>
                    <th>comment_text</th>
                  </tr>
                  {movie.comments.map((comment, j) => (
                    <tr>
                      <td> <p>{comment.comment_id}</p>  </td>
                      <td> <p>{comment.commenter}</p>  </td>
                      <td> <p>{comment.comment_text}</p>  </td>
                    </tr>

                  ))}
                </table>
              }
            </td>
            <td>{movie.rating}</td>
            <td>{movie.description}</td>
            <td><button onClick={() => delete_movie(i)}>Delete</button></td>
          </tr>

        ))}
      </table>
    </div>
  );
}

export default App;
