
import React, { forwardRef } from 'react'
import { FormControl, InputLabel, Input, Stack } from '@mui/material'
import TextField, { TextFieldProps } from '@mui/material/TextField'
import { alpha, styled } from '@mui/material/styles'
import InputBase from '@mui/material/InputBase'
import Box from '@mui/material/Box'
import { OutlinedInputProps } from '@mui/material/OutlinedInput'

const FancyButton = React.forwardRef<HTMLButtonElement>((props, ref) => (
    <button type="button" ref={ref} className="FancyButton">
        {props.children}
    </button>
))

const TextInputField = styled((props: TextFieldProps) => (
    <TextField
        InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
        {...props}
    />
))(({ theme }) => ({
    '& .MuiFilledInput-root': {
        border: '1px solid #e2e2e1',
        overflow: 'hidden',
        borderRadius: 2,
        // backgroundColor: theme.palette.mode === 'light' ? '#fcfcfb' : '#2b2b2b',
        backgroundColor: 'white',
        transition: theme.transitions.create([
            'border-color',
            'background-color',
            'box-shadow',
        ]),
        '&:hover': {
            backgroundColor: 'transparent',
        },
        '&.Mui-focused': {
            backgroundColor: 'transparent',
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 1px`,
            border: '1px solid rgba(0, 0, 0, 0.3)'
        },
        '&.Mui-error': {
            backgroundColor: 'transparent',
            boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 1px`,
            border: '1px solid #FF2400'
        }
    }
}))



export default TextInputField