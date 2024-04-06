/** @type {import('tailwindcss').Config} */
export default {
   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
   theme: {
      extend: {
         fontFamily: {
            poppins: '"Poppins", sans-serif;',
         },
         backgroundColor: {
            dark02: "#403F3F",
            dark03: "#706F6F",
         },
         textColor: {
            dark02: "#403F3F",
            dark03: "#706F6F",
         },
      },
   },
   plugins: [require("daisyui")],
};
