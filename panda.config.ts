import { defineConfig } from "@pandacss/dev"
 
export default defineConfig({
 // Whether to use css reset
 preflight: true,
 
 // Where to look for your css declarations
 include: ["./src/**/*.{js,jsx,ts,tsx}"],
 
 // Files to exclude
 exclude: [],
 
 // The output directory for your css system
 outdir: "styled-system",

 //Enable JSX syntax
 jsxFramework: 'react',

 //Change generated typescript definitions to be more strict for property having a token or utility.
 strictTokens: true,

 //Change generated typescript definitions to be more strict for built-in CSS properties to only allow valid CSS values.
 strictPropertyValues : true
})