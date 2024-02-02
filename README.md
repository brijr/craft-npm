# Install Craft Design System

```bash
npm install craft-ds@latest
```

> Craft Design System is a collection of Layout Components to be used with NextJS, Tailwind, and Shadcn to make the building of websites and layouts much faster.

For examples of Craft UI, check out [components.bridger.to](https://components.bridger.to), [craft.9d8.dev](https://craft.9d8.dev), or this [Repository](https://github.com/9d8dev/craft-examples).

## Getting Setup

### Create NextJS App With Tailwind

```bash
npx create-next-app@latest my-app --typescript --tailwind --eslint
```

## Install Dependencies

```bash
# Install Dependencies
npm install
npm install -D react-wrap-balancer
npm install -D @tailwindcss/typography
npm install -D next-themes
```

### Install Shadcn/ui

[Follow these instructions for installation on a NextJS app](https://ui.shadcn.com/docs/installation/next)

### Update `tailwind.config.ts`

Replace the standard shadcn/ui `tailwind.config` to include the [Tailwind Typography](https://tailwindcss.com/docs/typography-plugin) plugin

```ts
import { fontFamily } from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
module.exports = {
 // Shadcn `tailwind.config.js`
 plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')] // add this!
};
```
