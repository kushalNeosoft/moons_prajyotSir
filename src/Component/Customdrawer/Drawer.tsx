export interface IUser {

    name: string,
    index: string,
    drawerType: string,
    navigateTo: string
}

export const Drawer = [   
    {
        name: 'Slider',
        index: ' 1',
        drawerType: 'Slide',
        navigateTo: 'P'

    },
    {
        name: 'Profile',
        index: ' 1',
        drawerType: 'info',
        navigateTo: 'P'

    },
    {
        name: 'Funds',
        index: '2,',
        drawerType: 'Funds',
        navigateTo: 'P'
    },
    {
        name: 'Recommendations & Alerts',
        index: '3,',
        navigateTo: 'Settings'
    },
    {
        name: 'Message',
        index: '4,',
        navigateTo: 'P'
    },
    {
        name: 'Calculators',
        index: '5,',
        navigateTo: 'P'
    },
    {
        name: 'Need Help',
        index: '6,',
        drawerType: 'Need Help',
        navigateTo: 'P'
    },
    {
        name: 'Links',
        index: '7,',
        navigateTo: 'P'
    },
    {
        name: 'Reports',
        index: '8,',
        navigateTo: 'P'
    },
    {
        name: 'Backoffice',
        index: '9,',
        navigateTo: 'P'
    },
    {
        name: 'Settings',
        index: '10',
        drawerType: 'Settings',
        navigateTo: 'Settings'
    },
    {
        name: 'Log Out',
        index: '11',
        navigateTo: 'P'
    },
    {
        name: 'Rate Us',
        index: '12',
        navigateTo: 'P'
    },
    {
        name: 'e-Kyc Frame',
        index: '13',
        navigateTo: 'P'
    },
    {
        name: 'e-Kyc InApp',
        index: '14',
        navigateTo: 'P'
    },
    {
        name: 'e-Kyc System',
        index: '15',
        drawerType: 'e-Kyc',
        navigateTo: 'P'
    },
]