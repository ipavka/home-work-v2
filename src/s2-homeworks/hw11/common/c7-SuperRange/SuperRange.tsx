import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{
        color: '#00CC22',
        width: 250,
        height: 4,
        '& .MuiSlider-thumb': {
          height: 18,
          width: 18,
          backgroundColor: '#fff',
          border: '1px solid currentColor',
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
