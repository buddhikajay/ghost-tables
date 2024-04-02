import { GridColDef } from '@mui/x-data-grid';

export const columns: GridColDef<(typeof rows)[number]>[] = [
  {
    field: 'brand',
    headerName: 'Brand',
    // width: 100,
    editable: true,
  },
  {
    field: 'model',
    headerName: 'Model',
    // width: 100,
    editable: true,
  },
  {
    field: 'type',
    headerName: 'Type',
    // width: 100,
    editable: true,
  },
  {
    field: 'capacity',
    headerName: 'Capacity (L)',
    // width: 100,
    editable: true,
  },
  {
    field: 'inputPower',
    headerName: 'Input Power (W)',
    // width: 125,
    editable: true,
  },
  {
    field: 'tankMaterial',
    headerName: 'Tank Material',
    width: 150,
    editable: true,
  },
  {
    field: 'tankRecovery',
    headerName: 'Recovery (min)',
    width: 100,
    editable: true,
  },
  {
    field: 'madeIn',
    headerName: 'Made In',
    width: 200,
    editable: true,
  },
  {
    field: 'reviewScore',
    headerName: 'Product Review Score',
    width: 150,
    editable: true,
  },
  {
    field: 'warranty',
    headerName: 'Warranty',
    width: 200,
    editable: true,
  },
  // {
  //   field: 'timeInMarket',
  //   headerName: 'Time in Market (Unit)',
  //   width: 180,
  //   editable: true,
  // },
  {
    field: 'refrigerant',
    headerName: 'Refrigerant',
    width: 100,
    editable: true,
  },
  {
    field: 'noiseLevel',
    headerName: 'Noise (dBA)',
    type: 'number',
    width: 100,
    editable: true,
  },
  {
    field: 'installCost',
    headerName: 'Approx Install Cost ($)',
    type: 'number',
    width: 180,
    editable: true,
  },
  {
    field: 'link',
    headerName: 'Link',
    width: 200,
    editable: true,
  },
];

export const rows = [
  { id: 1, brand: 'Reclaim', model: '', type: 'Split', capacity: '160/250/315/400', inputPower: '1000', tankMaterial: 'Glass / Stainless Steel', tankRecovery: '180 min', madeIn: 'Australia/Japan', reviewScore: '4.9 (from 78 reviews)', warranty: 'Heat Pump - 7/8 yrs, Tank - 10-15 yrs', timeInMarket: '2016', refrigerant: 'CO₂', noiseLevel: 37, installCost: '6,000', link: '' },
  { id: 2, brand: 'Apricus', model: 'Monoblock', type: 'Monoblock', capacity: '260', inputPower: '665', tankMaterial: 'Glass lined', tankRecovery: '240 min', madeIn: 'China', reviewScore: 'n/a', warranty: '6 years', timeInMarket: '2022', refrigerant: 'Propane', noiseLevel: 43, installCost: '4,000', link: '' },
  { id: 3, brand: 'Sanden', model: '', type: 'Split', capacity: '160/250/300/315', inputPower: '940', tankMaterial: 'Stainless steel', tankRecovery: '240 min', madeIn: 'Australia/Japan', reviewScore: '3.8 (from 119 reviews)', warranty: 'Heat Pump - 6 yrs, Tank - 10-15 yrs', timeInMarket: '2011', refrigerant: 'CO₂', noiseLevel: 37, installCost: '6,000', link: '' },
  { id: 4, brand: 'Thermann', model: 'Hybrid', type: 'Monoblock', capacity: '220 / 300', inputPower: '640', tankMaterial: 'Vitreous enamel', tankRecovery: '', madeIn: 'Made by Stiebel Eltron for Reece', reviewScore: '5 years', warranty: '', timeInMarket: '', refrigerant: 'R134A, GWP = 1,430', noiseLevel: '', installCost: '3,000/$3,800', link: '' },
  { id: 5, brand: 'Split', model: '', type: 'Split', capacity: '160/250/315/400', inputPower: '', tankMaterial: '', tankRecovery: '', madeIn: 'Tank - Australia, Compressor - Japan', reviewScore: '2.9 (from 15 reviews)', warranty: 'Heat Pump - 6 yrs, Tank - 10 yrs', timeInMarket: '', refrigerant: 'CO₂', noiseLevel: 45, installCost: '4,500', link: '' },
  { id: 6, brand: 'Hydrotherm', model: 'Dynamic X8', type: 'Monoblock', capacity: '260', inputPower: '700 - 900', tankMaterial: 'Vitreous enamel', tankRecovery: '270 min', madeIn: 'China', reviewScore: '4.7 (from 291 reviews)', warranty: '6 years', timeInMarket: '2011', refrigerant: 'Propane', noiseLevel: 43, installCost: '3,300', link: '' },
  { id: 7, brand: 'Aquatech', model: 'Rapid X6', type: 'Monoblock', capacity: '210', inputPower: '', tankMaterial: '', tankRecovery: '210 min', madeIn: '', reviewScore: '4.7 (from 450 reviews)', warranty: '5 years', timeInMarket: '2021', refrigerant: '', noiseLevel: '', installCost: '2,900', link: '' },
  { id: 8, brand: 'Ecogenica', model: 'R series', type: 'Split & Monoblock', capacity: '215/260/290', inputPower: '630/750/1020', tankMaterial: 'Vitreous enamel', tankRecovery: '200 min', madeIn: 'China', reviewScore: '4.2 (from 652 reviews)', warranty: 'Heat Pump - 5 yrs, Tank - 7 yrs', timeInMarket: '', refrigerant: 'Propane', noiseLevel: 50, installCost: '3,000', link: '' },
  { id: 9, brand: 'Quantum', model: '', type: 'Monoblock', capacity: '150/200/270/340', inputPower: '', tankMaterial: 'Vitreous enamel', tankRecovery: '', madeIn: 'China', reviewScore: '2.0 (from 4 reviews)', warranty: '5 years', timeInMarket: '', refrigerant: 'Propane', noiseLevel: 48, installCost: '4,000', link: '' },
  { id: 10, brand: 'Haier', model: 'Monoblock', type: 'Monoblock', capacity: '200/250', inputPower: '430', tankMaterial: 'Vitreous Enamel', tankRecovery: '300 min', madeIn: 'China', reviewScore: '', warranty: '7 years', timeInMarket: 'October 2023', refrigerant: 'Propane', noiseLevel: 43, installCost: '5,000', link: '' },
  { id: 11, brand: 'Rinnai', model: 'Enviroflo', type: 'Monoblock', capacity: '180/215/250/315', inputPower: '940', tankMaterial: '', tankRecovery: '', madeIn: 'Australia', reviewScore: '2.8 (from 6 reviews)', warranty: '7 years', timeInMarket: '', refrigerant: 'Propane', noiseLevel: 48, installCost: '3,200', link: '' },
  { id: 12, brand: 'Emerald', model: '', type: 'Monoblock', capacity: '220/270', inputPower: '440', tankMaterial: 'Vitreous Enamel', tankRecovery: '58 L/h', madeIn: 'China', reviewScore: '4.6 (from 42 reviews)', warranty: '5 years', timeInMarket: '2023', refrigerant: 'Propane', noiseLevel: 48, installCost: '3,500', link: '' },
  { id: 13, brand: 'iStore', model: '', type: 'Monoblock', capacity: '180/270', inputPower: '480/940W', tankMaterial: 'Vitreous enamel', tankRecovery: '60/89 L/h', madeIn: 'China', reviewScore: '4.8 (from 86 reviews)', warranty: '5 years', timeInMarket: '2017 / 2015', refrigerant: 'R134A, GWP = 1,430', noiseLevel: 47, installCost: '3,500', link: '' },
  { id: 14, brand: 'Stiebel Eltron', model: '', type: 'Monoblock', capacity: '220 / 302', inputPower: '640W', tankMaterial: 'Vitreous enamel', tankRecovery: '40 L/h', madeIn: 'Slovakia', reviewScore: '3.8 (from 79 reviews)', warranty: '5 years', timeInMarket: '2016', refrigerant: 'R134A, GWP = 1,430', noiseLevel: 47, installCost: '3,500', link: '' },
];
const heatPumps = `
Heat pumps are the most energy efficent way to heat water. They work by extracting heat from the air and transferring it to the water. They are more expensive to install than gas or electric systems, but they are cheaper to run. They are also more environmentally friendly than gas or electric systems. Traditional gas heating systems produce one Watt of heat for every Watt of energy consumed. Heat pumps produce three to five Watts of heat for every Watt of energy consumed. Heat pumps are also more reliable than gas or electric systems. They have fewer moving parts and require less maintenance. They are also quieter than gas or electric systems. Heat pumps are a good choice for people who want to reduce their carbon footprint and save money on their energy bills. They are also a good choice for people who want a reliable and quiet heating system. Heat pumps are available in a range of sizes and styles. They can be installed indoors or outdoors. They can be used to heat water for domestic or commercial use. They can be used to heat swimming pools or spas. They can be used to heat water for underfloor heating systems. They can be used to heat water for industrial processes. Heat pumps are a good choice for people who want to reduce their carbon footprint and save money on their energy bills. They are also a good choice for people who want a reliable and quiet heating system. Heat pumps are available in a range of sizes and styles. They can be installed indoors or outdoors. They can be used to heat water for domestic or commercial use. They can be used to heat swimming pools or spas. They can be used to heat water for underfloor heating systems. They can be used to heat water for industrial processes.
`