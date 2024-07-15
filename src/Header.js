import React from 'react';
import { useHistory } from 'react-router-dom';

function Header() {

  const history = useHistory();
  const navToHome = () => {
    history.push('/');
  };

  return (
    <header className="header pt-10">
      <h1 onClick={navToHome}>Happy <span>Cat</span></h1>
    </header>
  );
}

export default Header;
