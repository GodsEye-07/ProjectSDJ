// ** Icon imports
import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
import themeConfig from 'src/configs/themeConfig'
import { AccountSettings, HumanGreetingProximity, Finance, DiamondStone, AccountBoxOutline, Diamond, AccountAlert, AccountAlertOutline, DiamondOutline, FaceManProfile, AccountBox, AccountEdit  } from 'mdi-material-ui'

const navigation = () => {
  return [
    {
      sectionTitle: 'Shree Durga Jewellers',
      disabled: !themeConfig.accountDataFilled
    },
    {
      title: 'Jewellery Collection',
      icon: DiamondStone,
      path: '/pages/Jewellery',
      disabled: !themeConfig.accountDataFilled
    },
    {
      title: 'Live Rates',
      icon: Finance,
      path: '/live-rates',
    },
    {
      title: 'About Us',
      icon: AlertCircleOutline,
      path: '/about-us',
    },
    {
      title: 'Contact Us',
      path: '/contact-us',
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
      path: '/userProfile'
    },
    {
      title: 'Account Settings',
      icon: AccountEdit,
      path: '/account-settings'
    },
    {
      sectionTitle: 'Admin Tools',
      disabled: !themeConfig.isAdmin
    },
    {
      title: 'Live Rates',
      icon: Finance,
      path: '/admin/liverates',
      disabled: !themeConfig.isAdmin 
    },
    {
      title: 'Jewellery',
      icon: DiamondStone,
      path: '/admin/jewellery',
      disabled: !themeConfig.isAdmin
    },
    {
      title: 'Other Updates',
      icon: AccountAlertOutline,
      path: '/admin/other-updates',
      disabled: !themeConfig.isAdmin
    },
  ]
}

export default navigation
