// ** MUI Imports
import Grid from '@mui/material/Grid'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Demo Components Imports
import FormLayoutsIcons from 'src/views/form-layouts/FormLayoutsIcons'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const FormLayouts = () => {
  return (
    <DatePickerWrapper>
      <Grid container spacing={12}>
        <Grid item xs={12} md={12}>
          <FormLayoutsIcons />
          <h1>You can also reach out to us at:</h1>
          <h3>
            <ul style={{listStyle: 'disc', alignContent: 'center'}}>
              <li>Phone: <a href="tel:PHONE_NUM" style={{color: 'whitesmoke'}}>+91 98271-92417 </a></li>
              <li>E-mail: <a href="mailto:shreedurgajewellersbhilai@gmail.com" style={{color: 'whitesmoke'}}>shreedurgajewellersbhilai@gmail.com</a></li>
              <li>WhatsApp: <a href="https://wa.me/+919827192417" target="_blank" style={{color: 'whitesmoke'}}></a>+91 98271-92417</li>
            </ul>
          </h3>
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default FormLayouts
