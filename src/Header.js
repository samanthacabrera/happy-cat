import React from 'react';
import { useNavigate } from 'react-router-dom';

function Header() {

  const navigate = useNavigate();
  const handleNavToHome = () => {
    navigate('/');
  }

  return (
    <header className="header pt-10">
      <h1 onClick={handleNavToHome}>Happy <span>Cat</span></h1>
    </header>
  );
}

export default Header;
