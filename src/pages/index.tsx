import React from 'react';
import { Page } from 'zmp-ui';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FunctionComponent = () => {
  const navigate = useNavigate();

  const redirectToIndex = () => {
    navigate('/public/index.html');
  };

  return (
    <Page className="page">
      App test
      <button onClick={redirectToIndex}>alo</button>
    </Page>
  );
};

export default HomePage;
