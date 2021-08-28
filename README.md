# gatsby-styled-tailwind

#### This is a simple Gatsby starter to help you get started creating react components like styled components but with TailwindCSS.

Example:

```javascript
import React from "react";
import tw, { styled } from "twin.macro";

const Button = tw.button`
  p-3 max-w-max cursor-pointer text-lg font-semibold text-white bg-purple-800
  border-none rounded-lg shadow-md hover:bg-white hover:text-purple-700
`;

function HomePage() {
  return (
    <>
      <Button>Submit</Button>
    </>
  );
}
```

- **Gatsby** is a free and open source framework based on _React_ that helps developers build **blazing** fast websites and apps." ~[Gatsby](https://www.gatsbyjs.org/)

- **Tailwind CSS** is a utility-first CSS framework for rapidly building custom user interfaces." ~[Tailwind CSS](https://tailwindcss.com)

## Instalation

1. **Install the Gatsby CLI.**

   ```shell
   npm install -g gatsby-cli
   ```

2. **Init your project using this starter.**

   ```shell
   gatsby new prject-name https://github.com/f0lio/gatsby-styled-tailwind
   ```

3. **Run the dev server, and start editing!**

   ```shell
   npm run develop
   ```
