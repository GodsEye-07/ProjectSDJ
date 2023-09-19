const themeConfig = {
  // ** Layout Configs
  templateName: 'Shree Durga Jewellers' /* App Name */,
  mode: 'dark' /* light | dark */,
  contentWidth: 'boxed' /* full | boxed */,
  // ** Routing Configs
  routingLoader: true /* true | false */,
  // ** Navigation (Menu) Configs
  menuTextTruncate: true /* true | false */,
  navigationSize: 260 /* Number in PX(Pixels) /*! Note: This is for Vertical navigation menu only */,
  // ** Other Configs
  responsiveFontSizes: true /* true | false */,
  disableRipple: false, /* true | false */
  
  isAdmin: false,   
  isLoggedIn: false,

  //to be turned to false with checks
  accountDataFilled: true,


  //Account detail stored globally
  accountUserEmail: '',
  isUserNew: false,
  accountUsername: '',
  accountUserName: 'Test User',
  accountUserAddress: '',
  accountUserCompany: '',
  accountUserBio: '',
  accountUserAadharCardNumber: 0,
  accountUserPanCardNumber: 0,
  accountUserCountry: '',
  accountUserPhoneNumber: 0,
  accountUserLanguage: '',
  accountUserGender: '',
}

export default themeConfig
