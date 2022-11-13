import { instructions } from "./constants";

export const formConfig = [
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
      minLength: 1,
    },
  },
  {
    type: "text",
    label: "Your Age",
    name: "age",
    buttonText: "Never too old to volunteer!",
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
    buttonText: "To keep in touch!",
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
    type: "radio",
    label: "Which region do you live in?",
    name: "region",
    buttonText: "Cool!",
    options: {
      choices: ["North", "South", "East", "West", "Central"],
    },
    validation: {
      required: true,
    },
  },
  {
    type: "checkbox",
    label: "Areas of Volunteering Interest",
    name: "Interests",
    buttonText: "Fantastic!",
    options: {
      choices: ["Elderly", "Community", "Environment", "Children"],
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
    buttonText: "You are ready to go!",
    options: {
      attrs: {
        placeholder: "One word to describe yourself...",
      },
    },
    validation: {
      required: true,
    },
  },

];
