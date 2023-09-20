import React from 'react'
import GoogleMapReact from 'google-map-react'
import { Icon } from '@mui/material'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import Grid from '@mui/material/Grid'

// ** Styled Component
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** Demo Components Imports
import FormLayoutsIcons from 'src/views/form-layouts/FormLayoutsIcons'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const location = {
  address: 'Shree Durga Jewellers, Jawahar Market Camp-II Bhilai, Chhattisgarh 490020',
  lat: 21.210245805888775,
  lng: 81.37615383928048, 
}

const LocationPin = ({ text }) => (
  <div className="pin">
    <Icon icon={LocationOnIcon} className="pin-icon" />
    <p className="pin-text">{text}</p>
  </div>
)

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
              <li>WhatsApp: <a href="https://wa.me/+917909405550" target="_blank" style={{color: 'whitesmoke'}}></a>+91 98271-92417</li>
            </ul>
          </h3>
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyCIH-hFKADAJM9zmNECopBbwdFDjCFDDHw' }}
            defaultCenter={location}
            defaultZoom={100}
            >
          <LocationPin
            lat={location.lat}
            lng={location.lng}
            text={location.address}
          />
          </GoogleMapReact>
        </Grid>
      </Grid>
    </DatePickerWrapper>
  )
}

export default FormLayouts
