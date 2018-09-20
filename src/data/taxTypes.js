const taxTypes = [
  {
    name: 'Overall Rank',
    id: 'total',
    hex: '#007BC3',
    description: '',
  },
  {
    name: 'Corporate Taxes',
    id: 'corporate',
    hex: '#009688',
    description:
      'The corporate tax component measures impacts of states’ major taxes on business activities, both corporate income and gross receipts taxes.',
  },
  {
    name: 'Individual Taxes',
    id: 'individual',
    hex: '#4DAF4E',
    description:
      'The individual income tax component of the Index measures the impact of state and local taxes that fall on pass-through businesses.',
  },
  {
    name: 'Sales Taxes',
    id: 'sales',
    hex: '#FEC111',
    description:
      'The sales tax component measures the impact of both sales and excise taxes, particularly when they fall upon business inputs.',
  },
  {
    name: 'Property Taxes',
    id: 'propertyTax',
    hex: '#EF4438',
    description:
      'The property tax component measures impacts of real and personal property, inventory, estate, inheritance, and other wealth taxes.',
  },
  {
    name: 'Unemp. Insur. Taxes',
    id: 'unemployment',
    hex: '#903F98',
    description:
      'The unemployment insurance tax component measures the impact of state UI tax attributes, from schedules to charging methods, on businesses.',
  },
];

export default taxTypes;
