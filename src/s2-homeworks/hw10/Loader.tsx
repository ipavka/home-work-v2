import s from './Loader.module.css';
import React from 'react';

type SpinnerPropsType = {
  customMainStyle?: string;
};

export const Loader: React.FC<SpinnerPropsType> = ({ customMainStyle }) => {
  const finalMainStyle = `${s.loader} ${customMainStyle ? customMainStyle : ''}`;

  return (
    <div className={finalMainStyle}>
      <div className={s.container}>
        <div className={s.speedingWheel}></div>
      </div>
    </div>
  );
};
