export const hero = {
  mainText: "This is the main text!",
  subText:
    "Lorem ipsum dolor amet vinyl tote bag raclette, food truck copper mug roof party wolf. Tumeric authentic pug butcher green juice quinoa intelligentsia sustainable letterpress yr chillwave yuccie whatever.",
  media:
    "https://images.unsplash.com/photo-1559163263-e31c2a5e1895?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
  action: {
    name: "Do Something!",
    link: "#"
  },
  video: false
};

export const stepper = {
  activeStep: 2,
  steps: [
    {
      label: "Site Details",
      links: [
        {
          fieldName: "Name",
          value: "Coding Is For Losers"
        },
        {
          fieldName: "Domain",
          link: "codingisforlosers.com",
          value: ""
        }
      ]
    },
    {
      label: "Select Accounts",
      links: [
        {
          fieldName: "Google Analytics",
          value: "CIFL"
        },
        {
          fieldName: "Google Search Console",
          link: "https://codingisforlosers.com/",
          value: ""
        },
        {
          fieldName: "Deepcrawl",
          value: "Account included in QR Subscription"
        },
        {
          fieldName: "SEMRush",
          value: "Account included in QR Subscription"
        }
      ]
    },
    {
      label: "Select BigQuery Project",
      links: [
        {
          fieldName: "BigQuery Project ID",
          value: "Account included in QR Subscription"
        }
      ]
    },
    {
      label: "Confirm setup",
      links: [
        {
          fieldName: "Confirm",
          link: "confirmationlink.com"
        }
      ]
    }
  ]
};

export const recipeDetail = {
  authenticated: false,
  links: [
    { link: "/recipes/detail/1", auth: false, name: "Learn More" },
    { link: "/recipes/detail/1", auth: true, name: "Learn More" },
    { link: "/sites/setup", auth: false, name: "Get Started" },
    { link: "/sites/setup", auth: true, name: "Add Site" }
  ],
  name: "Recipe Detail Title",
  video: "http://techslides.com/demos/samples/sample.mp4",
  descriptionLong:
    "Thundercats wolf fashion axe austin brunch raw denim authentic freegan farm-to-table. Meditation yuccie snackwave selfies. Occupy paleo wayfarers try-hard humblebrag viral edison bulb tbh vice.",
  pricePerMonth: 15
};

export const cta = {
  mainText: "BUNDLE AND SAVE!",
  subText: `Chia squid mumblecore tumeric mustache, kogi scenester 90's authentic mixtape shabby chic tacos bicycle rights.`,
  action: {
    name: "Get Started!",
    link: "#"
  }
};
