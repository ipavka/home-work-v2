import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
  return (
    <Slider
      sx={{ // стили для слайдера // пишет студент
        color: '#c47a0f',
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
    />
  )
}

export default SuperRange
