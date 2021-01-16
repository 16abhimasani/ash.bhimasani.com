export default [
  {
    path: "/bitpay",
    label: "BitPay",
    children: [
      {
        path: "/bitpay/invoice",
        label: "Invoice",
        children: [
          {
            path: "/bitpay/invoice/select",
            label: "Select",
          },
          {
            path: "/bitpay/invoice/pay",
            label: "Pay",
          },
          {
            path: "/bitpay/invoice/receipt",
            label: "Receipt",
          },
          {
            path: "/bitpay/invoice/demos",
            label: "Demos",
          },
        ],
      },
      {
        path: "/bitpay/extension",
        label: "Extension",
        children: [
          {
            path: "/bitpay/extension/shop",
            label: "Shop",
          },
          {
            path: "/bitpay/extension/wallet",
            label: "Wallet",
          },
        ],
      },
      {
        path: "/bitpay/id",
        label: "Onboarding",
        children: [
          {
            path: "/bitpay/id/auth",
            label: "Auth",
          },
          {
            path: "/bitpay/id/verify",
            label: "Verify",
          },
          {
            path: "/bitpay/id/v2",
            label: "V2.0",
          },
        ],
      },
      {
        path: "/bitpay/directory",
        label: "Directory",
      },
      {
        path: "/bitpay/emails",
        label: "Emails",
      },
      {
        path: "/bitpay/site",
        label: "Website",
        // children: [
        //   {
        //     path: "/bitpay/site/wallet",
        //     label: "Mobile App",
        //   },
        //   {
        //     path: "/bitpay/site/team",
        //     label: "Careers",
        //   },
        // ],
      },
      {
        path: "/bitpay/support",
        label: "Help Desk",
      },
    ],
  },
];
