import React, {useState} from 'react'
import s from './HW11.module.css'
import s2 from '../../s1-main/App.module.css'
import {restoreState} from '../hw06/localStorage/localStorage'
import SuperRange from './common/c7-SuperRange/SuperRange'

/*
* 1 - передать значения в оба слайдера
* 2 - дописать типы и логику функции change
* 3 - сделать стили в соответствии с дизайном
* */

const minDistance = 10;

function HW11() {
  // for autotests // не менять // можно подсунуть в локалСторэдж нужные числа, чтоб увидеть как они отображаются
  const [value1, setValue1] = useState(restoreState<number>('hw11-value1', 0))
  const [value2, setValue2] = useState(restoreState<number>('hw11-value2', 100))

  const change = (event: Event, value: number | number[]) => {
    // if (!Array.isArray(newValue)) {
    //   setValue1(newValue);
    //   return;
    // }
    //
    // if (newValue[1] - newValue[0] < minDistance) {
    //   if (activeThumb === 0) {
    //     const clamped = Math.min(newValue[0], 100 - minDistance);
    //     setValue1(clamped);
    //     setValue2(clamped + minDistance);
    //   } else {
    //     const clamped = Math.max(newValue[1], minDistance);
    //     setValue2(clamped - minDistance);
    //     setValue1(clamped);
    //   }
    // } else {
    //   setValue1(newValue[0] as number);
    //   setValue2(newValue[1] as number);
    // }

    if (Array.isArray(value)) {
      setValue1(value[0]);
      setValue2(value[1]);
    } else {
      setValue1(value);
    }
    // пишет студент // если пришёл массив - сохранить значения в оба useState, иначе в первый
  }

  return (
    <div id={'hw11'}>
      <div className={s2.hwTitle}>Homework #11</div>

      <div className={s2.hw}>
        <div className={s.container}>
          <div className={s.wrapper}>
            <span id={'hw11-value'} className={s.number}>{value1}</span>
            <SuperRange
              id={'hw11-single-slider'}
              value={value1}
              onChange={change}
              // valueLabelDisplay="auto"
              // сделать так чтоб value1 изменялось // пишет студент

            />
          </div>
          <div className={s.wrapper}>
            <span id={'hw11-value-1'} className={s.number}>{value1}</span>
            <SuperRange
              id={'hw11-double-slider'}
              value={[value1, value2]}
              onChange={change}
              // getAriaLabel={() => 'double-slider'}
              // valueLabelDisplay="auto"
              // сделать так чтоб value1/2 изменялось // пишет студент

            />
            <span id={'hw11-value-2'} className={s.number}>{value2}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HW11
