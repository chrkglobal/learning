import { useState } from 'react';

export default function FeedbackForm() {
  const [name, setName] = useState('');

  function handleClick() {
    const userName = prompt('What is your name?');
    setName(userName);
    alert(`Hello, ${userName}!`);
  }

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}