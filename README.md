## Getting Started

### Setup:
```bash
  # Install dependencies
  yarn install 
  
  # Run the development server
  yarn dev
```
It will start a development server on [http://localhost:3000](http://localhost:3000) with hot reloading.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.


This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.


### Troubleshooting:

1. is trying to unpack in the same destination

```bash
  # Delete the yarn cache
  rm -fR /Users/xyz/Library/Caches/Yarn

```

- delete the `node_modules` folder and run `yarn install` again.
