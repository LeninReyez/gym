import React, { useState } from 'react';

const Header = () => {
    const [greeting, setGreeting] = useState(
      'Hello World'
    );
   
    return (
      <header>
        <h1>{greeting}</h1>
        <input
          type="text"
          value={greeting}
          onChange={event => setGreeting(event.target.value)}
        />
      </header>
    );
  };

  export default Header;