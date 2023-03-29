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

  if (sort[0] === down[0] && sort[1] !== down[1]) {
    return up;
  } else if (sort[0] === '0') {
    return down; // ''
  } else if (sort[0] === '1') {
    return '';
  } else return up;

  // // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
  // return up; // исправить
};

const SuperSort: React.FC<SuperSortPropsType> = ({ sort, value, onChange, id = 'hw15' }) => {
  const up = '0' + value;
  const down = '1' + value;

  const onChangeCallback = () => {
    // console.log({ sort }, { down }, { up });
    onChange(pureChange(sort, down, up));
  };

  const icon = sort === down ? downIcon : sort === up ? upIcon : noneIcon;

  return (
    <span id={id + '-sort-' + value} onClick={onChangeCallback}>
      {/*сделать иконку*/}
      <img id={id + '-icon-' + sort} src={icon} />
      {/*{icon} /!*а это убрать*!/*/}
    </span>
  );
};

export default SuperSort;
