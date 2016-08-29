```json
{
  currentUser: {
    id: 1,
    username: "eddyStark01",
    contributions: [
      {
        id: 32,
        entrepreneur: "Jon Snow",
        amount: 3000,
        end_date: "09/22/2017",
        status: "Awaiting Disbursment"
      },
      {
        id: 22,
        entrepreneur: "Arya Stark",
        amount: 2300,
        end_date: "08/12/2016",
        status: "Paid in Full"
      },
      {
        id: 10,
        entrepreneur: "King Robert",
        amount: 30000,
        end_date: "09/35/2016",
        status: "Delinquent"
      },
      ...
    ]
  },
  messages: [
    {
      id: 1,
      type: "Error",
      title: null,
      message: "Contribution amount must be present.",
      timeout: null
    },
    {
      id: 2,
      type: "Notification",
      title: null,
      message: "You're Awesome",
      timeout: "1472451646697"
    }
  ],
  loans: [
    {
      id: 44,
      entrepreneur: {
        id: 23
        name: "Jon Snow",
        picture: "img/src.jpg",
      },
      description: "This loan helps to outfit Jon’s brothers on the wall and keep the Others from invading the north and turning everyone into their undead servents.",
      amount: 200000,
      contributed: 80000
    },
  ],
  loan: {
    id: 44,
    entrepreneur: {
      id: 23
      name: "Jon Snow",
      picture: "img/src.jpg",
      about: "Jon Snow is the bastard son of Eddard Stark...",
      location: "Castle Black, The Gift"
    },
    description: "This loan helps to outfit Jon’s brothers on the wall and keep the Others from invading the north and turning everyone into their undead servents.",
    location: Castle Black, The Gift,
    amount: 200000,
    contributed: 80000,
    length: 896,
    repayment: 28,
    risk: 1
  },
  checkout: {
    contributions: [
      loan: {
        id: 44,
        entrepreneur: {
          id: 23
          name: "Jon Snow",
          picture: "img/src.jpg",
        },
        amount: 200000,
        contributed: 80000
      },
      amount: 2500
    ],
    donation: 1000,
    billingInfo: {
      cardName: "Eddard Stark",
      cardNumber: "4444444444444444",
      ccv: "335",
      zipCode: "88732"
    },
    stripeToken: null
  }
}
```
