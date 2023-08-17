import React from 'react';
import loader from '../assets/Loading.gif';
import './loading.css';

const Loading = () => {
  return (
    <div className="loading-container">
      <img className="animatedLoading-gif" src={loader} width={15} />
      <div className="loading-text">Meera GPT is thinking...</div>
    </div>
  );
};

export default Loading;
