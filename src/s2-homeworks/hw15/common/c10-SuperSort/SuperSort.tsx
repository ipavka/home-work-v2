import React from 'react';
import upIcon from './images/sort-up.svg';
import downIcon from './images/sort-down.svg';
import noneIcon from './images/sort.svg';

// добавить в проект иконки и импортировать
// const downIcon = '[\\/]';
// const upIcon = '[/\\]';
// const noneIcon = '[--]';

export type SuperSortPropsType = {
  id?: string;
  sort: string;
  value: string;
  onChange: (newSort: string) => void;
};

export const pureChange = (sort: string, down: string, up: string) => {
  // // проходит тесты
  // if (sort[0] === down[0] && sort[1] !== down[1]) {
  //   return down;
  // } else if (sort[0] === '0') {
  //   return '';
  // } else if (sort[0] === '1') {
  //   return up;
  // } else return down;

  if (!sort) {
    console.log('1_return');
    return down;
  } else if (sort === down) {
    console.log('2_return');
    return up;
  } else if (sort === up) {
    console.log('3_return');
    return '';
  } else {
    console.log('4_return');
    return down;
  }

  // if (sort[0] === down[0] && sort[1] !== down[1]) {
  //   console.log('1_return');
  //   return down;
  // } else if (sort[0] === '0') {
  //   console.log('2_return');
  //   return '';
  // } else if (sort[0] === '1') {
  //   console.log('3_return');
  //   return up;
  // } else {
  //   console.log('4_return');
  //   return down;
  // }

  // // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
  // return up; // исправить
};

const SuperSort: React.FC<SuperSortPropsType> = ({ sort, value, onChange, id = 'hw15' }) => {
  const up = '0' + value;
  const down = '1' + value;

  const onChangeCallback = () => {
    console.log({ sort }, { down }, { up });
    onChange(pureChange(sort, down, up));
  };

  const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon;

  return (
    <span id={id + '-sort-' + value} onClick={onChangeCallback}>
      <img id={id + '-icon-' + sort} src={icon} alt="sort-logo" />
    </span>
  );
};

export default SuperSort;
