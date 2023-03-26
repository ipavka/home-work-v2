import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{ // стили для слайдера // пишет студент
        color: '#00CC22',
        height: 6,
        '& .MuiSlider-thumb': {
          height: 25,
          width: 25,
          backgroundColor: '#fff',
          border: '2px solid currentColor',
          '&:before': {
            borderRadius: '50%',
            border: '1px solid #00CC22',
            backgroundColor: '#00CC22',
            width: 6,
            height: 6,
            boxShadow: 'none',
          },
        },
        '& .MuiSlider-track': {
          backgroundColor: '#00CC22',
          border: '1px solid #00CC22'
        },
        '& .MuiSlider-rail': {
          backgroundColor: '#8B8B8B',
          border: '1px solid #8B8B8B'
        },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  )
}

export default SuperRange
