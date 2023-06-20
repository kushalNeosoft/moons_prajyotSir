import {duration} from 'moment';
import React from 'react';
import {Text, View} from 'react-native';

export const demoData = [
  {
    price: 827.67,
    changes: '+3.65(+0.44%)',
    portfolio: true,
    stockfrom: 'NSE',
    value: 5000,
    plus: '[+77.06%]',
    minus: '',
  },
  {
    stockName: 'WIPRO',
    price: 977.7,
    changes: '+2.65(+0.54%)',
    portfolio: false,
    title: 'Vol.Gainer',
    stockfrom: 'NSE',
  },
  {
    stockName: 'HDFCBANK',
    price: 767.7,
    changes: '+5.67(+0.50%)',
    portfolio: false,
    title: 'Vol.Gainer',
    stockfrom: 'NSE',
  },
  {
    stockName: 'TCS',
    price: 890.5,
    changes: '+2.69(+0.55%)',
    portfolio: true,
    stockfrom: 'NSE',
    value: 1200,
    plus: '[+77.06%]',
    minus: '',
  },
  {
    stockName: 'SBIN',
    price: 890.89,
    changes: '+2.69(+0.55%)',
    portfolio: true,
    stockfrom: 'NSE',
    value: 1800,
    plus: '[+77.06%]',
    minus: '',
  },
  {
    stockName: 'BSE',
    price: 890.79,
    changes: '+2.69(+0.55%)',
    portfolio: true,
    stockfrom: 'NSE',
    value: 300,
    plus: '[+77.06%]',
    minus: '',
  },
  {
    stockName: 'SBIN',
    price: 1098.59,
    changes: '+4.69(+0.75%)',
    portfolio: true,
    stockfrom: 'NSE',
    value: 400,
    plus: '',
    minus: '[-12.90%]',
  },
  {
    stockName: 'NTPC',
    price: 655.52,
    changes: '+1.69(+0.35%)',
    portfolio: false,
    title: 'Vol.Gainer',
    stockfrom: 'NSE',
  },
  {
    stockName: 'INFY',
    price: 789.5,
    changes: '+1.69(+0.35%)',
    portfolio: false,
    title: 'Vol.Gainer',
    stockfrom: 'NSE',
  },
  {
    stockName: 'RELIANCE',
    price: 890.5,
    changes: '+5.69(+0.45%)',
    portfolio: false,
    title: 'Pr.Loser',
    stockfrom: 'NSE',
  },
  {
    stockName: 'BAJAJ',
    price: 870.5,
    changes: '+4.69(+0.55%)',
    portfolio: true,
    stockfrom: 'NSE',
    value: 500,
    plus: '',
    minus: '[-10.90%]',
  },
  {
    stockName: 'TATA',
    price: 560.5,
    changes: '+7.69(+0.90%)',
    portfolio: true,
    stockfrom: 'NSE',
    value: 800,
    plus: '',
    minus: '[-14.70%]',
  },

  {
    stockName: 'INDUSLAND',
    price: 878.5,
    changes: '+1.69(+0.20%)',
    portfolio: false,
    title: 'Pr.Loser',
    stockfrom: 'NSE',
  },
  {
    stockName: 'ICICIBANK',
    price: 678.5,
    changes: '+4.69(+0.50%)',
    portfolio: false,
    title: 'Pr.Loser',
    stockfrom: 'NSE',
  },
  {
    stockName: 'SBI',
    price: 678.5,
    changes: '+4.89(+0.5%)',
    portfolio: false,
    title: 'Pr.Loser',
    stockfrom: 'NSE',
  },
  {
    stockName: 'AXIS',
    price: 767.5,
    changes: '+2.60(+0.30%)',
    portfolio: false,
    title: 'Pr.Loser',
    stockfrom: 'NSE',
  },
  {
    stockName: 'TCS',
    stockfrom: 'NSE',
    date: '25 MAY',
    tag: 'FUT',
    price: '3229.35',
    changes: '0.00(0.00)',
  },
  {
    stockName: 'TCS',
    stockfrom: 'NSE',
    date: '25 MAY',
    future: '3200.00CE',
    tag: 'FUT',
    price: '61.70',
    changes: '0.00(0.00)',
  },
];

export const courselDemodata = [
  {
    title: 'Open',
    value: '1213.45',
  },
  {
    title: 'Close',
    value: '1207.35',
  },
  {
    title: 'Daily Price Range',
    value: '1101.60-',
    valuetwo: '1346.40',
  },
];

export const progressData = [
  {
    title: 'Today (Low-High)',
    price: '1383.30',
    pricetwo: '1411.05',
  },
  {
    title: '52 Week (Low-High)',
    price: '1185.30',
    pricetwo: '1672.60',
  },
];

export const endDemodata = [
  {
    title: 'Avg Trading Price',
    value: '1394.82',
  },
  {
    title: 'Value',
    value: '120797392.35',
  },
  {
    title: 'Volume',
    value: '9844356',
  },
  {
    title: 'Last Traded Time',
    value: '15:29:59',
  },
  {
    title: 'Last Updated Time',
    value: '15:11:17',
  },
];

export const newDemodata = [
  {
    title: 'Avg Trading Price',
    value: '1394.82',
  },
  {
    title: 'Value',
    value: '120797392.35',
  },
  {
    title: 'Volume',
    value: '9844356',
  },
];

export const newsecondDemodata = [
  {
    title: 'Last Traded Qty',
    value: '23',
  },
  {
    title: 'Last Traded Time',
    value: '15:29:59',
  },
  {
    title: 'Last Updated Time',
    value: '15:11:17',
  },
];

export const marketdata = [
  {
    title: 'Market Cap',
    value: '30',
  },
];

export const eventdata = [
  {
    title: 'Board Meeting',
    data: {
      date: [
        {
          day: '09 Nov',
          year: "'21",
          duration: '',
          Gm: '',
          Gmvalue: '',
          percentage: '',
          Final: '',
          Fdate: '',
          Dividend_Type: '',

          Recorded_Date: '',

          Recorded_Date_value: "05 Aug '22",

          Announcement: 'Announcement Date',
          Announcement_date: "29 Apr '22",

          Ex_Date: 'Ex Date ',
          Ex_Datevalue: "03 Aug '22",

          Amount: 'Amount',
          Avalue: '60',
        },
        {
          day: '10 Nov',
          year: "'21",
          duration: '',
          Gm: '',
          Gmvalue: '',
          percentage: '',
          Final: '',
          Fdate: '',
          Dividend_Type: '',

          Recorded_Date: '',

          Recorded_Date_value: "05 Aug '22",

          Announcement: 'Announcement Date',
          Announcement_date: "29 Apr '22",

          Ex_Date: 'Ex Date ',
          Ex_Datevalue: "03 Aug '22",

          Amount: 'Amount',
          Avalue: '60',
        },
        {
          day: '11 Nov',
          year: "'21",
          duration: '',
          Gm: '',
          Gmvalue: '',
          percentage: '',
          Final: '',
          Fdate: '',
          Dividend_Type: '',

          Recorded_Date: '',

          Recorded_Date_value: "05 Aug '22",

          Announcement: 'Announcement Date',
          Announcement_date: "29 Apr '22",

          Ex_Date: 'Ex Date ',
          Ex_Datevalue: "03 Aug '22",

          Amount: 'Amount',
          Avalue: '60',
        },
        {
          day: '12 Nov',
          year: "'21",
          duration: '',
          Gm: '',
          Gmvalue: '',
          percentage: '',
          Final: '',
          Fdate: '',
          Dividend_Type: '',

          Recorded_Date: '',

          Recorded_Date_value: "05 Aug '22",

          Announcement: 'Announcement Date',
          Announcement_date: "29 Apr '22",

          Ex_Date: 'Ex Date ',
          Ex_Datevalue: "03 Aug '22",

          Amount: 'Amount',
          Avalue: '60',
        },
        {
          day: '13 Nov',
          year: "'21",
          duration: '',
          Gm: '',
          Gmvalue: '',
          percentage: '',
          Final: '',
          Fdate: '',
          Dividend_Type: '',

          Recorded_Date: '',

          Recorded_Date_value: "05 Aug '22",

          Announcement: 'Announcement Date',
          Announcement_date: "29 Apr '22",

          Ex_Date: 'Ex Date ',
          Ex_Datevalue: "03 Aug '22",

          Amount: 'Amount',
          Avalue: '60',
        },
      ],
    },
  },
  {
    title: 'Book Closure',
    data: {
      date: [
        {
          day: '09 Nov',
          year: "'21",
          duration: "15 Jun '23-26 Jun '23",
          Gm: '',
          Gmvalue: '',
          percentage: '',
          Final: '',
          Fdate: '',
          Dividend_Type: '',

          Recorded_Date: '',

          Recorded_Date_value: "05 Aug '22",

          Announcement: 'Announcement Date',
          Announcement_date: "29 Apr '22",

          Ex_Date: 'Ex Date ',
          Ex_Datevalue: "03 Aug '22",

          Amount: 'Amount',
          Avalue: '60',
        },
        {
          day: '06 Nov',
          year: "'21",
          duration: '',
          Gm: '',
          Gmvalue: '',
          percentage: '',
          Final: '',
          Fdate: '',
          Dividend_Type: '',

          Recorded_Date: '',

          Recorded_Date_value: "05 Aug '22",

          Announcement: 'Announcement Date',
          Announcement_date: "29 Apr '22",

          Ex_Date: 'Ex Date ',
          Ex_Datevalue: "03 Aug '22",

          Amount: 'Amount',
          Avalue: '60',
        },
      ],
    },
  },
  {
    title: 'AGM',
    data: {
      date: [
        {
          day: '09 Nov',
          year: "'21",
          duration: "15 Jun '23-26 Jun '23",
          Gm: 'GM Date',
          Gmvalue: "26 Jun '23",
          percentage: '1800%',
          Final: '',
          Fdate: '',
          Dividend_Type: '',

          Recorded_Date: '',

          Recorded_Date_value: "05 Aug '22",

          Announcement: 'Announcement Date',
          Announcement_date: "29 Apr '22",

          Ex_Date: 'Ex Date ',
          Ex_Datevalue: "03 Aug '22",

          Amount: 'Amount',
          Avalue: '60',
        },
      ],
    },
  },
  {
    title: 'EGM',
    data: {
      date: [
        {
          day: '09 Nov',
          year: "'21",
          duration: '',
          Gm: 'GM Date',
          Gmvalue: "26 Jun '23",
          percentage: '',
          Final: '',
          Fdate: '',
          Dividend_Type: '',

          Recorded_Date: '',

          Recorded_Date_value: "05 Aug '22",

          Announcement: 'Announcement Date',
          Announcement_date: "29 Apr '22",

          Ex_Date: 'Ex Date ',
          Ex_Datevalue: "03 Aug '22",

          Amount: 'Amount',
          Avalue: '60',
        },
        {
          day: '18 Nov',
          year: "'21",
          duration: '',
          Gm: 'GM Date',
          Gmvalue: "26 Jun '23",
          percentage: '',
          Final: '',
          Fdate: '',
          Dividend_Type: '',

          Recorded_Date: '',

          Recorded_Date_value: "05 Aug '22",

          Announcement: 'Announcement Date',
          Announcement_date: "29 Apr '22",

          Ex_Date: 'Ex Date ',
          Ex_Datevalue: "03 Aug '22",

          Amount: 'Amount',
          Avalue: '60',
        },
        {
          day: '12 Nov',
          year: "'21",
          duration: '',
          Gm: 'GM Date',
          Gmvalue: "26 Jun '23",
          percentage: '',
          Final: '',
          Fdate: '',
          Dividend_Type: '',

          Recorded_Date: '',

          Recorded_Date_value: "05 Aug '22",

          Announcement: 'Announcement Date',
          Announcement_date: "29 Apr '22",

          Ex_Date: 'Ex Date ',
          Ex_Datevalue: "03 Aug '22",

          Amount: 'Amount',
          Avalue: '60',
        },
      ],
    },
  },
  {
    title: 'Split',
    data: {
      date: [
        {
          day: '09 Nov',
          year: "'21",
          duration: '',
          Gm: '',
          Gmvalue: '',
          percentage: '',
          Final: '',
          Fdate: '',
          Dividend_Type: '',

          Recorded_Date: '',

          Recorded_Date_value: "05 Aug '22",

          Announcement: 'Announcement Date',
          Announcement_date: "29 Apr '22",

          Ex_Date: 'Ex Date ',
          Ex_Datevalue: "03 Aug '22",

          Amount: 'Amount',
          Avalue: '60',
        },
      ],
    },
  },
  {
    title: 'Dividend',
    data: {
      date: [
        {
          day: '18 Nov',
          year: "'21",
          duration: '',
          Gm: '',
          Gmvalue: '',
          percentage: '1800%',
          Final: 'Final',
          Fdate: "26 Jun '23",
          Dividend_Type: 'Dividend_Type',

          Recorded_Date: '',

          Recorded_Date_value: "05 Aug '22",

          Announcement: 'Announcement Date',
          Announcement_date: "29 Apr '22",

          Ex_Date: 'Ex Date ',
          Ex_Datevalue: "03 Aug '22",

          Amount: 'Amount',
          Avalue: '60',
        },
        {
          day: '13 Nov',
          year: "'21",
          duration: '',
          Gm: '',
          Gmvalue: '',
          percentage: '200%',
          Final: 'Final',
          Fdate: "6 Jun '22",
          Dividend_Type: 'Dividend_Type',

          Recorded_Date: '',

          Recorded_Date_value: "05 Aug '22",

          Announcement: 'Announcement Date',
          Announcement_date: "29 Apr '22",

          Ex_Date: 'Ex Date ',
          Ex_Datevalue: "03 Aug '22",

          Amount: 'Amount',
          Avalue: '60',
        },
      ],
    },
  },
  {
    title: 'Buy Back',
    data: {
      date: [
        {
          day: '19 Nov',
          year: "'21",
          duration: '',
          Gm: '',
          Gmvalue: '',
          percentage: '',
          Final: '',
          Fdate: '',
          Dividend_Type: '',
          Tender_Offer: 'Tender Offer',

          Recorded_Date: 'Recorded Date',

          Recorded_Date_value: "05 Aug '22",

          Announcement: 'Announcement Date',
          Announcement_date: "29 Apr '22",

          Ex_Date: 'Ex Date ',
          Ex_Datevalue: "03 Aug '22",

          Amount: 'Amount',
          Avalue: '60',
        },
      ],
    },
  },
  {
    title: 'Rights',
    data: {
      date: [
        {
          day: '20 Nov',
          year: "'21",
          duration: '',
          Gm: '',
          Gmvalue: '',
          percentage: '',
          Final: '',
          Fdate: '',
          Dividend_Type: '',

          Recorded_Date: '',

          Recorded_Date_value: "05 Aug '22",

          Announcement: 'Announcement Date',
          Announcement_date: "29 Apr '22",

          Ex_Date: 'Ex Date ',
          Ex_Datevalue: "03 Aug '22",

          Amount: 'Amount',
          Avalue: '60',
        },
      ],
    },
  },
];

export interface Itemtrade {
  title: string;
  date: string;
  value: string;
  change: string;
  cevalue: string;
  Broken: string;
  ptive: string;
  id: string;
}
export const tradeData: Itemtrade[] = [
  {
    title: 'TRADE',
    date: '25MAY2023',
    value: '1612.36',
    change: '-0.36%',
    cevalue: '1610.00 CE',
    Broken: 'S1 Broken',
    ptive: 'false',
    id: '1',
  },
  {
    title: 'TRADE',
    date: '25MAY2023',
    value: '1612.36',
    change: '-0.36%',
    cevalue: '1610.00 CE',
    Broken: 'S1 Broken',
    ptive: 'false',
    id: '2',
  },
  {
    title: 'TRADE',
    date: '25MAY2023',
    value: '1612.36',
    change: '23.36%',
    cevalue: '1610.00 PE',
    Broken: 'S1 Broken',
    ptive: 'true',
    id: '3',
  },
  {
    title: 'TRADE',
    date: '25MAY2023',
    value: '1612.36',
    change: '27.36%',
    cevalue: '1610.00 CE',
    Broken: 'S1 Broken',
    ptive: 'true',
    id: '4',
  },
  {
    title: 'TRADE',
    date: '25MAY2023',
    value: '1612.36',
    change: '9.36%',
    cevalue: '1610.00 PE',
    Broken: 'S1 Broken',
    ptive: 'true',
    id: '5',
  },
  {
    title: 'TRADE',
    date: '25MAY2023',
    value: '1612.36',
    change: '-0.36%',
    cevalue: '1610.00 PE',
    Broken: 'S1 Broken',
    ptive: 'false',
    id: '6',
  },
];

export const CompanyData = [
  {
    title: 'Code',
    Value: '11536',
  },
  {
    title: 'Instrument',
    Value: 'EQUITY',
  },
  {
    title: 'ISIN',
    Value: 'INSAKASI91029',
  },
];

export const SecurityDetail = [
  {
    title: 'Market Lot',
    Value: '1',
  },
  {
    title: 'Price Tick (Rs.)',
    Value: '0.05',
  },
  {
    title: 'Issued Capital',
    Value: '3,65,90,51,373.00',
  },
  {
    title: 'Face Value',
    Value: '1.00',
  },
  {
    title: 'Qty Freeze',
    Value: '0.08%',
  },
  {
    title: 'Margin %',
    Value: '12.50%',
  },
  {
    title: 'Ex. Multiplier',
    Value: '1',
  },
  {
    title: 'Pre Open',
    Value: 'yes',
  },
  {
    title: 'Special Pre Open',
    Value: 'No',
  },
  {
    title: 'Call Auction',
    Value: 'No',
  },
  {
    title: 'GSM Category',
    Value: 'No',
  },
];

export const Bookclosure = [
  {
    title: 'Date',
    Value: '17JUN2022 23JUN2022',
  },
  {
    title: 'Ex.Date',
    Value: '15JUN2022',
  },
  {
    title: 'Purpose',
    Value: 'AGM Dividend AGM/DIV - RS 125 PER SH',
  },
];

export const Management = [
  {
    title: 'Rajiv Chandan',

    value: 'Company Seo.& Compli. Officer',
  },

  {
    title: 'R Mukundan',

    value: 'Managing Director & CEO',
  },

  {
    title: 'Vibha Paul Rishi',

    value: 'Independent Director',
  },
  {
    title: 'S Padmanabhan',

    value: 'Director',
  },

  {
    title: 'Ratan N Tatan',

    value: 'Chairman Emeritus',
  },

  {
    title: 'Padmini Khare Kaicker',

    value: 'Independent Director',
  },
];
export const Mutualdata = [
  {
    title: 'ICIC Pur NiftyInfrastructure',
    price:'20.29627%',
    date:'as on 31 MAY 23'
  },

  {
    title: 'Nippon India  ETF Nifty',
    price:'20.29%',
    date:'as on 31 MAY 23'


  },

  {
    title: 'ICIC Pur NiftyInfrastructure',
    price:'40.29%',
    date:'as on 31 MAY 23'


  },
  {
    title: 'ICIC Pur NiftyInfrastructure',
    price:'11.27%',
    date:'as on 31 MAY 23'


  },

  {
    title: 'Nippon India  ETF Nifty',
    price:'11.29627%',
    date:'as on 31 MAY 23'


  },

  {
    title: 'Nippon India  ETF Nifty',
    price:'12.29627%',
    date:'as on 31 MAY 23'


  },
];

export const Puttdata = [
  {
    title: 'Price',
    data: [
      {x: '3140', earnings: 1000, expenditure: 13000},
      {x: '3160', earnings: 17506, expenditure: 10000},
      {x: '3180', earnings: 14250, expenditure: 8000},
      {x: '3200', earnings: 19000, expenditure: 12000},
      {x: '3220', earnings: 19000, expenditure: 12000},
      {x: '3240', earnings: 19000, expenditure: 12000},
      {x: '3260', earnings: 19000, expenditure: 12000},
      {x: '3280', earnings: 19000, expenditure: 12000},
      {x: '3300', earnings: 19000, expenditure: 12000},
      {x: '3320', earnings: 19000, expenditure: 12000},
    ],
  },
  {
    title: 'Volume',
    data: [
      {x: '3140', earnings: 10, expenditure: 13},
      {x: '3160', earnings: 17, expenditure: 1},
      {x: '3180', earnings: 14, expenditure: 8},
      {x: '3200', earnings: 19, expenditure: 12},
      {x: '3220', earnings: 19, expenditure: 12},
      {x: '3240', earnings: 19, expenditure: 12},
      {x: '3260', earnings: 19, expenditure: 12},
      {x: '3280', earnings: 19, expenditure: 12},
      {x: '3300', earnings: 19, expenditure: 12},
      {x: '3320', earnings: 19, expenditure: 12},
    ],
  },
  {
    title: 'OI',
    data: [
      {x: '3140', earnings: 20, expenditure: 33},
      {x: '3160', earnings: 27, expenditure: 2},
      {x: '3180', earnings: 24, expenditure: 2},
      {x: '3200', earnings: 29, expenditure: 22},
      {x: '3220', earnings: 29, expenditure: 22},
      {x: '3240', earnings: 29, expenditure: 22},
      {x: '3260', earnings: 29, expenditure: 22},
      {x: '3280', earnings: 29, expenditure: 22},
      {x: '3300', earnings: 29, expenditure: 22},
      {x: '3320', earnings: 29, expenditure: 22},
    ],
  },
  {
    title: 'IV',
    data: [
      {x: '3140', earnings: 10, expenditure: 13},
      {x: '3160', earnings: 17, expenditure: 1},
      {x: '3180', earnings: 14, expenditure: 8},
      {x: '3200', earnings: 19, expenditure: 12},
      {x: '3220', earnings: 19, expenditure: 12},
      {x: '3240', earnings: 19, expenditure: 12},
      {x: '3260', earnings: 19, expenditure: 12},
      {x: '3280', earnings: 19, expenditure: 12},
      {x: '3300', earnings: 19, expenditure: 12},
      {x: '3320', earnings: 19, expenditure: 12},
    ],
  },
];

export const Financialdata = [
  {
    title: 'Standalone',
    data: [
      {tabvalue: 'EPS (Rs.)', t2: '100.290', t3: '83.380'},
      {tabvalue: 'P/E', t2: '29.350', t3: '26.280'},
      {tabvalue: 'PEG', t2: '1447', t3: '0.808'},
      {tabvalue: 'Dividend Yeild (%)', t2: '0.300', t3: '0.304'},
      {tabvalue: 'Current Ratio', t2: '0.700', t3: '0.500'},
      {tabvalue: 'Debt to Equity Ratio', t2: '0.700', t3: '0.500'},
      {tabvalue: 'EBITDA Growth (%)', t2: '24.511', t3: '5.505'},
      {tabvalue: 'PAT Growth (%)', t2: '26.249', t3: '34.752'},
      {tabvalue: 'NET Sales Growth (%)', t2: '33.293', t3: '-27.934'},
      {tabvalue: 'Quick Ratio', t2: '0.780', t3: '1.059'},
    ],
  },
  {
    title: 'Consolidated',
    data: [
      {tabvalue: 'EPS', t2: '100.290', t3: '83.380'},
      {tabvalue: 'P/E', t2: '29.350', t3: '26.280'},
      {tabvalue: 'PEG', t2: '1447', t3: '0.808'},
      {tabvalue: 'Dividend Yeild', t2: '0.300', t3: '0.304'},
      {tabvalue: 'Current Ratio', t2: '0.700', t3: '0.500'},
      {tabvalue: 'Debt to Equity Ratio', t2: '0.700', t3: '0.500'},
      {tabvalue: 'EBITDA Growth', t2: '24.511', t3: '5.505'},
      {tabvalue: 'PAT Growth', t2: '26.249', t3: '34.752'},
      {tabvalue: 'NET Sales Growth', t2: '33.293', t3: '-27.934'},
      {tabvalue: 'Quick Ratio', t2: '0.780', t3: '1.059'},
    ],
  },
];

export const Annualdata = [
  {
    title: 'Profit & Loss',
    data: [
      {tabvalue: 'EPS (Rs.)', t2: '100.290', t3: '83.380'},
      {tabvalue: 'P/E', t2: '29.350', t3: '26.280'},
      {tabvalue: 'PEG', t2: '1447', t3: '0.808'},
      {tabvalue: 'Dividend Yeild (%)', t2: '0.300', t3: '0.304'},
      {tabvalue: 'Current Ratio', t2: '0.700', t3: '0.500'},
      {tabvalue: 'Debt to Equity Ratio', t2: '0.700', t3: '0.500'},
      {tabvalue: 'EBITDA Growth (%)', t2: '24.511', t3: '5.505'},
      {tabvalue: 'PAT Growth (%)', t2: '26.249', t3: '34.752'},
      {tabvalue: 'NET Sales Growth (%)', t2: '33.293', t3: '-27.934'},
      {tabvalue: 'Quick Ratio', t2: '0.780', t3: '1.059'},
    ],
  },
  {
    title: 'Balance Sheet',
    data: [
      {tabvalue: 'EPS', t2: '100.290', t3: '83.380'},
      {tabvalue: 'P/E', t2: '29.350', t3: '26.280'},
      {tabvalue: 'PEG', t2: '1447', t3: '0.808'},
      {tabvalue: 'Dividend Yeild', t2: '0.300', t3: '0.304'},
      {tabvalue: 'Current Ratio', t2: '0.700', t3: '0.500'},
      {tabvalue: 'Debt to Equity Ratio', t2: '0.700', t3: '0.500'},
      {tabvalue: 'EBITDA Growth', t2: '24.511', t3: '5.505'},
      {tabvalue: 'PAT Growth', t2: '26.249', t3: '34.752'},
      {tabvalue: 'NET Sales Growth', t2: '33.293', t3: '-27.934'},
      {tabvalue: 'Quick Ratio', t2: '0.780', t3: '1.059'},
    ],
  },
  {
    title: 'Results',
    data: [
      {tabvalue: 'EPS', t2: '100.290', t3: '83.380'},
      {tabvalue: 'P/E', t2: '29.350', t3: '26.280'},
      {tabvalue: 'PEG', t2: '1447', t3: '0.808'},
      {tabvalue: 'Dividend Yeild', t2: '0.300', t3: '0.304'},
      {tabvalue: 'Current Ratio', t2: '0.700', t3: '0.500'},
      {tabvalue: 'Debt to Equity Ratio', t2: '0.700', t3: '0.500'},
      {tabvalue: 'EBITDA Growth', t2: '24.511', t3: '5.505'},
      {tabvalue: 'PAT Growth', t2: '26.249', t3: '34.752'},
      {tabvalue: 'NET Sales Growth', t2: '33.293', t3: '-27.934'},
      {tabvalue: 'Quick Ratio', t2: '0.780', t3: '1.059'},
    ],
  },
];

export const annualmodaldata=[
  {
    title:'Standalone',
  },
  {
    title:'Consolidate',
  },
]

export const OIdata = [
  {
    title: '16 Min',
    data: [
      {time: '03:16 PM', t1: 'SB', t2: 'LU', t3: 'NC'},
      {time: '03:16 PM', t1: 'NC', t2: 'SB', t3: 'MC'},
      {time: '03:16 PM', t1: 'SB', t2: 'NC', t3: 'SB'},
      {time: '03:16 PM', t1: 'NC', t2: 'LU', t3: 'NC'},
    ],
  },
  {
    title: '30 Min',
    data: [
      {time: '03:16 PM', t1: 'SB', t2: 'NC', t3: 'MC'},
      {time: '03:16 PM', t1: 'LU', t2: 'SB', t3: 'NC'},
      {time: '03:16 PM', t1: 'SB', t2: 'NC', t3: 'NC'},
      {time: '03:16 PM', t1: 'SB', t2: 'NC', t3: 'LU'},
    ],
  },
  {
    title: '60 Min',
    data: [
      {time: '03:16 PM', t1: 'SB', t2: 'KU', t3: 'MU'},
      {time: '03:16 PM', t1: 'MS', t2: 'LU', t3: 'NC'},
      {time: '03:16 PM', t1: 'CL', t2: 'SD', t3: 'TU'},
      {time: '03:16 PM', t1: 'DL', t2: 'FW', t3: 'RE'},
    ],
  },
];

export const colordata = [
  {
    title: 'Call',
    color: '#464983',
  },
  {
    title: 'Put',
    color: '#6FA9E2',
  },
];
export const colortrenddata = [
  {
    title: 'Net Revenue',
    color: '#6FA9E2',
  },
  {
    title: 'EBITDA Margin %',
    color: '#464983',
  },
];

export const colordatatwo = [
  {
    title: 'Total Volume',
    color: '#464983',
  },
  {
    title: 'Delivery',
    color: '#6FA9E2',
  },
];

export const Piedatatwo = [
  {
    title: 'Promoter',
    color: '#81CBFF',
  },
  {
    title: 'FII',
    color: '#464983',
  },
  {
    title: 'MF',
    color: '#5F88C3',
  },
  {
    title: 'Other',
    color: '#6FA9E2',
  },
];
// Fundamentals
export const trenddata = [
  {
    title: 'New Revenue',
    data: [
      {x: `MAR\n2020`, earnings: 4},
      {x: `SEP\n2023`, earnings: 12},
      {x: `ARP\n2024`, earnings: 14},
      {x: `JAN\n2021`, earnings: 15},
      {x: `SEP\n2022`, earnings: 11},
      {x: `MAR\n2023`, earnings: 2},
    ],
  },
  {
    title: 'EBIT',
    data: [
      {x: `MAR\n2020`, earnings: 6},
      {x: `SEP\n2023`, earnings: 11},
      {x: `ARP\n2024`, earnings: 14},
      {x: `JAN\n2021`, earnings: 10},
      {x: `SEP\n2022`, earnings: 13},
      {x: `MAR\n2023`, earnings: 1},
    ],
  },
  {
    title: 'EBITDA',
    data: [
      {x: `MAR\n2020`, earnings: 10},
      {x: `SEP\n2023`, earnings: 13},
      {x: `ARP\n2024`, earnings: 4},
      {x: `JAN\n2021`, earnings: 6},
      {x: `SEP\n2022`, earnings: 9},
      {x: `MAR\n2023`, earnings: 8},
    ],
  },
  {
    title: 'Net Profit',
    data: [
      {x: `MAR\n2020`, earnings: 10},
      {x: `SEP\n2023`, earnings: 11},
      {x: `ARP\n2024`, earnings: 14},
      {x: `JAN\n2021`, earnings: 7},
      {x: `SEP\n2022`, earnings: 1},
      {x: `MAR\n2023`, earnings: 4},
    ],
  },
];

export const Contactdata = [
  {
    title: 'Register Address',
    data: [
      {
        addvalue: 'Nirmal Building.9th Floor Nariman Point,Mumbai,400021',
        telephone: '',
        fax: '',
        email: 'csg-unit@tsrdarshaw.com',
        RegName: '',
        author: '',
        website: 'www.tsdarhaw.com',
      },
    ],
  },
  {
    title: 'Head Office',
    data: [
      {
        addvalue: 'Invest Building.9th Floor Nariman Point,Mumbai,400021',
        telephone: '91-22-67893283',
        fax: '91-22-67893283',
        email: 'csg-unit@tsrdarshaw.com',
        RegName: '',
        author: '',
        website: 'www.tsdarhaw.com',
      },
    ],
  },
  {
    title: 'Registrar',
    data: [
      {
        RegName: 'Life Intime India Pvt Ltd',
        addvalue: 'Zone Building.9th Floor Nariman Point,Mumbai,400021',
        telephone: '91-22-67893283',
        fax: '91-22-67893283',
        email: 'csg-unit@tsrdarshaw.com',
        website: 'www.tsdarhaw.com',
        author: 'S R Batliboi & Associcates LLp',
      },
    ],
  },
];

export const Newsdata = [
  {
    headLine: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    bottomline: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    newsdate: '26 May',
    time: '09.44 Am',
  },
  {
    headLine: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    bottomline: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    newsdate: '26 May',
    time: '09.44 Am',
  },
  {
    headLine: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    bottomline: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    newsdate: '26 May',
    time: '09.44 Am',
  },
  {
    headLine: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    bottomline: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    newsdate: '26 May',
    time: '09.44 Am',
  },
  {
    headLine: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    bottomline: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    newsdate: '26 May',
    time: '09.44 Am',
  },
  {
    headLine: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    bottomline: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    newsdate: '26 May',
    time: '09.44 Am',
  },
  {
    headLine: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    bottomline: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. ',
    newsdate: '26 May',
    time: '09.44 Am',
  },
];

export const Listingdata = [
  {
    title: 'NSE Symbol',
    value: 'TATACHEM',
  },
  {
    title: 'BSE Symbol',
    value: '500770',
  },
  {
    title: 'BSE Group',
    value: 'A',
  },
  {
    title: 'ISIN',
    value: 'INE092A01019',
  },
  {
    title: 'ISIN',
    value: 'INE092A01019',
  },
  {
    title: 'Listed On',
    value: 'BSE MSEINSE',
  },
  {
    title: 'Sector',
    value: 'Chemicals',
  },
];

export const s1datar1 = [
  {
    s: 'S1',
    values1: '0.0000',
    r: 'R1',
    valuer1: '0.0000',
  },
  {
    s: 'S2',
    values1: '0.0000',
    r: 'R2',
    valuer1: '0.0000',
  },
  {
    s: 'S3',
    values1: '0.0000',
    r: 'R3',
    valuer1: '0.0000',
  },
  {
    s: 'S4',
    values1: '0.0000',
    r: 'R4',
    valuer1: '0.0000',
  },
];

export const PartofIndices = [
  {
    title: 'BSE600',
  },
  {
    title: 'CNX600',
  },
  {
    title: 'BSESMALLCA',
  },
  {
    title: 'CNXMIDCAP',
  },
  {
    title: 'CNX200',
  },
  {
    title: 'CNXCOMMODI',
  },
  {
    title: 'BSEALLCAP',
  },
  {
    title: 'BSEMETERIA',
  },
  {
    title: 'MID 160',
  },
  {
    title: 'LM1250',
  },
  {
    title: 'MSL400',
  },
  {
    title: 'NFTYLM250',
  },
  {
    title: 'NFTYMC150',
  },
  {
    title: 'NF500M5025',
  },
];

export const fundmodaldata = [
  {
    title: 'Total NAV',

    value: '38.35',
  },
  {
    title: 'Market value',
    value: '7.78',
  },
  {
    title: 'Shares',
    value: '31518',
  },
];
export const companymodaldata = [
  {
    title: 'Year',

    value: '2023',
  },
  {
    title: 'Qualification',
    value: 'MCom LLB FCS PG on IPR',
  },
  {
    title: 'Remuneration',
    value: 'MCom LLB FCS PG',
  },
];

export const UserData = [
  {
    id: '1',
    year: '2016',
    userGain: '80000',
    userLost: '823',
  },
  {
    id: ' 2',
    year: '2017',
    userGain: '45677',
    userLost: '345',
  },
  {
    id: '3',
    year: '2018',
    userGain: '78888',
    userLost: 555,
  },
  {
    id: '4',
    year: '2019',
    userGain: '90000',
    userLost: '4555',
  },
  {
    id: '5',
    year: '2020',
    userGain: '4300',
    userLost: '234',
  },
];

export const MovingAveragesdata = [
  {
    days: '15 Days',
    valueone: '23456',
    valuetwo: '64826',
  },
  {
    days: '20 Days',
    valueone: '23456',
    valuetwo: '64826',
  },
  {
    days: '30 Days',
    valueone: '23456',
    valuetwo: '64826',
  },
  {
    days: '50 Days',
    valueone: '23456',
    valuetwo: '64826',
  },
  {
    days: '100 Days',
    valueone: '23456',
    valuetwo: '64826',
  },
  {
    days: '150 Days',
    valueone: '23456',
    valuetwo: '64826',
  },
  {
    days: '200 Days',
    valueone: '23456',
    valuetwo: '64826',
  },
];
