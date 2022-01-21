# 🗂 NextJs Boilerplate

![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

This repository is a boilerplate based on NextJS. using TypeScript by default, and Recoil for global state management. Also, for styling, I'm using Scss.

### How to use?
```
$ git clone https://github.com/0xBono/beautiful-nextjs-boilerplate.git
```


__File Structure__
   - __@types__
     - [svg.d.ts](@types/svg.d.ts)
   - [LICENSE](LICENSE)
   - [README.md](README.md)
   - [jest.config.js](jest.config.js)
   - [list.md](list.md)
   - [next\-env.d.ts](next-env.d.ts)
   - [next.config.js](next.config.js)
   - [node\_modules](node_modules)
   - [package.json](package.json)
   - __public__
     - [favicon.ico](public/favicon.ico)
   - __src__
     - __api__
       - [README.md](src/api/README.md)
     - __components__
       - __Layouts__
         - __GNBLayout__
           - [GNBLayout.module.scss](src/components/Layouts/GNBLayout/GNBLayout.module.scss)
           - [GNBLayout.tsx](src/components/Layouts/GNBLayout/GNBLayout.tsx)
           - [index.ts](src/components/Layouts/GNBLayout/index.ts)
         - [index.ts](src/components/Layouts/index.ts)
     - __containers__
       - [README.md](src/containers/README.md)
     - __hooks__
       - [README.md](src/hooks/README.md)
     - __pages__
       - [404.tsx](src/pages/404.tsx)
       - [\_app.tsx](src/pages/_app.tsx)
       - [\_document.tsx](src/pages/_document.tsx)
       - [index.tsx](src/pages/index.tsx)
     - __styles__
       - [global.scss](src/styles/global.scss)
       - __lib__
         - [reset.scss](src/styles/lib/reset.scss)
         - [variables.scss](src/styles/lib/variables.scss)
     - __utils__
       - [index.ts](src/utils/index.ts)
       - [makeGetKey.ts](src/utils/makeGetKey.ts)
   - [stylelint.config.js](stylelint.config.js)
   - [tsconfig.json](tsconfig.json)
   - [yarn.lock](yarn.lock)
