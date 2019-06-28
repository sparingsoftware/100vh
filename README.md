# 100vh

[![MIT license](https://img.shields.io/badge/license-MIT-green.svg)](https://github.com/SparingSoftware/nuxt-sparing-center/blob/master/LICENSE)
[![Downloads number](https://img.shields.io/npm/dt/@sparing-software/100vh.svg)](https://www.npmjs.com/package/@sparing-software/100vh)
[![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

Lightweight JS package for easy overcoming the problem with 100vh on mobile devices :iphone:

## How does it work?
It creates the CSS variable called `--vh` at the `<html>` tag, which is changed only on orientation change and stays still during scroll. This will prevent the page "jumping" on scroll, which leads to bad user experience.<br>
##### Important note:
This will work only on mobile devices, on desktop the value changes together with the viewport. That means that it can be used on any resolution and there is no need for additional css media queries.

## Installation
Install package in your project 
```bash
npm i @sparing-software/100vh
```

## Initialization
Import the package and run the init function at the page start.<br>
(for Nuxt.js/Vue app it can be initialized in plugins, if you're using other technology – init the script above all the other code)

```js
import vh from '@sparing-software/100vh'

vh.init()
```

## Example
```css
.section {
  height: var(--vh);
}
```

## Contributing
Want to help improve this plugin? Great!  
Project is open-source so fork repo and join us!

## License
MIT License © [Sparing Interactive](https://github.com/SparingSoftware)
