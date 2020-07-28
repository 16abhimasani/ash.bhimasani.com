export default [
  {
    path: "/bitpay",
    label: "BitPay",
    children: [
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
        label: "ID",
        children: [
          {
            path: "/bitpay/id/auth",
            label: "Authentication",
          },
          {
            path: "/bitpay/id/verify",
            label: "Verification",
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
      // {
      //   path: "/bitpay/support",
      //   label: "Help Desk",
      // },
    ],
  },
];
