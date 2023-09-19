// ** Icon imports
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import themeConfig from 'src/configs/themeConfig'
import { AccountSettings, HumanGreetingProximity, Finance, DiamondStone, AccountBoxOutline, Diamond, AccountAlert, AccountAlertOutline, DiamondOutline, FaceManProfile, AccountBox, AccountEdit  } from 'mdi-material-ui'

const navigation = () => {
  return [
    {
      sectionTitle: 'Shree Durga Jewellers'
    },
    {
      title: 'Jewellery Collection',
      icon: DiamondStone,
      path: '/pages/Jewellery',
    },
    {
      title: 'Live Rates',
      icon: Finance,
      path: '/tables',
    },
    {
      title: 'About Us',
      icon: AlertCircleOutline,
      path: '/about-us'
    },
    {
      title: 'Contact Us',
      path: '/form-layouts',
      icon: AccountBoxOutline
    },
    {
      title: 'Careers',
      icon: HumanGreetingProximity,
      path: '/careers',
      openInNewTab: true
    },
    {
      sectionTitle: 'Personal Details'
    },
    {
      title: 'Profile',
      icon: AccountSettings,
      path: '/'
    },
    {
      title: 'Account Settings',
      icon: AccountEdit,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Admin Tools',
      disabled: true
    },
    {
      title: 'Live Rates',
      icon: Finance,
      path: '/admin/liverates',
      disabled: themeConfig.isAdmin ? true : false
    },
    {
      title: 'Jewellery',
      icon: DiamondStone,
      path: '/admin/jewellery',
      disabled: themeConfig.isAdmin ? true : false
    },
    {
      title: 'Other Updates',
      icon: AccountAlertOutline,
      path: '/admin/other-updates',
      disabled: themeConfig.isAdmin ? true : false
    },
  ]
}

export default navigation
