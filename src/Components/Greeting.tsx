import { useState } from 'react';

const Greeting = () => {
  const [changedText, setChangedText] = useState(false);

  const handleTextChange = () => {
    setChangedText(true);
  };

  return (
    <div>
      <h2>Hello world!</h2>
      {!changedText && <p>It's good to see you!</p>}
      {changedText && <p>Changed!</p>}
      <button onClick={handleTextChange}>Change Text!</button>
    </div>
  );
};

export default Greeting;
