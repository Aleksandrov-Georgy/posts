// import React from 'react';
import { useNavigate } from 'react-router-dom';
import S from './error.module.scss';

const Error = () => {
  const navigate = useNavigate();

  return (
    <div className={S.root_content}>
      <div className={S.root_content_Box}>
        <h1>404</h1>
        <h3>OOOOPS</h3>
        <h3>Попробуйте перезагрузить страницу</h3>
        <button onClick={() => navigate('/')}>НА ГЛАВНУЮ</button>
      </div>
    </div>
  );
};

export default Error;
