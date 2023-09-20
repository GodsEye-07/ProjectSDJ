// ** MUI Imports
import Card from '@mui/material/Card'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'
import CardContent from '@mui/material/CardContent'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const AboutUs = () => {
  return (
    <div>
      <Card>
      <Carousel responsive={responsive}>
        <CardMedia sx={{ height: '600px' }} image='/images/cards/background-user.png' />
        <CardMedia sx={{ height: '600px' }} image='/images/cards/watch-on-hand.jpg' />
        <CardMedia sx={{ height: '600px' }} image='/images/cards/glass-house.png' />
      </Carousel>
      {/* <CardMedia sx={{ height: '500px' }} image='/images/cards/glass-house.png' /> */}
      <CardHeader title='SHREE DURGA JEWELLERS'/>
      <CardContent>
        <Typography variant='body2' sx={{ marginBottom: 3.25 }}>
          <h1>About the Shop:</h1>
          <h3>
              Shee Durga Jewellers is one of the leading business in Gold, Silver and Diamond Jewellery.
              <b/>
              Established in the year 1968, Shree Durga Jewellers, was started in Power House Camp-II, Bhilai by Mr. Mahavir Prasad Verma.
              With over 55+ years in the business the organisation has established a strong foothold in the Industry.
              Our Moto of believing in customer satisfaction while maintaining the highest quality of the product comes to the utmost importance to them.
          </h3>
        </Typography>
        <Typography variant='body2' sx={{ marginBottom: 3.25 }}>
          <h1>Product and Services offered:</h1>
          <h3>
            We are known for our precious stone collection, fashionable and latest and the most trending jewellery designs, fancy jewellery, Immitation jewellery, Kundan Jewellery, Silver Utensils, etc.
            <br/>
            We are also the leader in South Indian jewellery based in Chhattisgarh region and apart from the ready made jewellery, we also provides the service of custom making jewellery in either Gold or Silver with high precision and maintaining the highest quality.
            <br/>
            Every jewellery either from the collection or custom made is ensured to be with a HallMark, HUID marked and with proper certificates and bills accordingly.
            <br/>
            The staff at the establishment are courteous and prompt at providing any assistance. They are also readily available to answer any queries or questions you may have.
          </h3>
        </Typography>
        <Typography variant='body2' sx={{ marginBottom: 3.25 }}>
          <h1>Working Hours:</h1>
          <h3>
            <ul style={{listStyle: 'disc', alignContent: 'center'}}>
              <li>Monday: 12:00PM - 7:00PM</li>
              <li>Tuesday: 10:00AM - 9:30PM</li>
              <li>Wednesday: 10:00AM - 9:30PM</li>
              <li>Thursday: 10:00AM - 9:30PM</li>
              <li>Friday: 10:00AM - 9:30PM</li>
              <li>Saturday: 10:00AM - 9:30PM</li>
              <li>Sunday: 10:00AM - 9:30PM</li>
            </ul>
          </h3>
        </Typography>

        <Typography variant='body2' sx={{ marginBottom: 3.25 }}>
          <h1>Accepted mode of payments:</h1>
          <h3>
            <ul style={{listStyle: 'disc', alignContent: 'center'}}>
              <li>Cash</li>
              <li>Bank Transfers / RTGS</li>
              <li>Cheques</li>
              <li>Credit Card / Debit Card</li>
              <li>UPI / Other contactless mode of payments</li>
            </ul>
          </h3>
        </Typography>
      </CardContent>
    </Card>
    </div>
  )
}

export default AboutUs