import { instructions } from "./constants";

export const formConfig = [
  // {
  //   type: "information",
  //   label: "",
  //   name: "info",
  //   text: instructions,
  //   buttonText: "Apply here",
  //   options: {
  //     attrs: {},
  //   },
  //   validation: {
  //     required: false,
  //   },
  // },
  // STATEMENT
  {
    type: "text",
    label: "Please enter your name",
    name: "nameInput",
    buttonText: "Next...",
    options: {
      attrs: {
        placeholder: "Your Name",
      },
    },
    validation: {
      required: true,
      minLength: 5,
    },
  },
  {
    type: "text",
    label: "Your Email",
    name: "email",
    // buttonText: "Let's do this!",
    options: {
      attrs: {
        placeholder: "Your Email",
      },
    },
    validation: {
      required: true,
      email: true,
    },
  },
  {
    type: "text",
    label: "Your Age",
    name: "age",
    buttonText: "Done!",
    options: {
      attrs: {
        placeholder: "Age",
      },
    },
    validation: {
      required: true,
      numeric: true,
      minLength: 1,
    },
  },
  {
    type: "text",
    label: "Your phone number",
    name: "phone",
    buttonText: "Done!",
    options: {
      attrs: {
        placeholder: "Your Contact",
      },
    },
    validation: {
      required: true,
      numeric: true,
      minLength: 8,
    },
  },
  {
    type: "checkbox",
    label: "Areas of Volunteering Interest",
    name: "superpowers",
    buttonText: "Okay, cool!",
    options: {
      choices: ["Elderly", "Kids", "Climate", "Digital", "Community", "Others"],
    },
    validation: {
      required: true,
      minLength: 1,
    },
  },
  {
    type: "text",
    label: "Describe yourself in one word!",
    name: "oneWord",
    buttonText: "Next...",
    options: {
      attrs: {
        placeholder: "One word to describe yourself...",
      },
    },
    validation: {
      required: true,
      
    },
  },



  
  // {
  //   type: "information",
  //   label: "",
  //   name: "info",
  //   text: `...being a real-life superhero is not about physical strength, but about <strong>mental strength</strong>.`,
  //   buttonText: "Cool, let's do this!",
  //   options: {
  //     attrs: {},
  //   },
  //   validation: {
  //     required: false,
  //   },
  // },
  // {
  //   type: "radio",
  //   label: "Have you identified your superpowers?",
  //   name: "hasSuperpower",
  //   // buttonText: "What's next",
  //   options: {
  //     choices: ["Yes", "No", "Maybe"],
  //   },
  //   validation: {
  //     required: true,
  //   },
  // },
  // {
  //   type: "checkbox",
  //   label: "Select applicable superpowers.",
  //   name: "superpowers",
  //   buttonText: "Okay, cool!",
  //   options: {
  //     choices: [
  //       "Creativity",
  //       "Analytical",
  //       "Logical",
  //       "Strategic",
  //       "Problem solver",
  //     ],
  //   },
  //   validation: {
  //     required: true,
  //     minLength: 2,
  //   },
  // },
  // {
  //   type: "textarea",
  //   label: "Tell us a little bit about your kryptonite.",
  //   name: "weakness",
  //   buttonText: "Next...",
  //   options: {
  //     attrs: {
  //       placeholder: "Write here...",
  //     },
  //   },
  //   validation: {
  //     required: false,
  //   },
  // },

  // {
  //   type: "text",
  //   label: "Have you thought of your superhero name?",
  //   name: "superheroName",
  //   buttonText: "What do we call you?",
  //   options: {
  //     attrs: {
  //       placeholder: "Superhero name",
  //     },
  //   },
  //   validation: {
  //     required: false,
  //     minLength: 5,
  //   },
  // },
  // {
  //   type: "information",
  //   label: "",
  //   name: "info",
  //   text: `If you are the right fit for being a superhero, tell us how can we reach you?`,
  //   buttonText: "Sure...",
  //   options: {
  //     attrs: {},
  //   },
  //   validation: {
  //     required: false,
  //   },
  // },
  

];
