# React Scrollfade

React Scrollfade is a React component designed to dynamically fade out the bottom of a scrollable element based on the scrollbars position.

![demo](./scroll_fade_example.png)

## Fork of a fork
This repository is forked from a fork created by [WajuAbolarin](https://github.com/WajuAbolarin/react-scrollfade), who introduced the height prop. The original repository is [benestudio/react-scrollfade](https://github.com/benestudio/react-scrollfade) and it's licensed under the MIT license. This fork is also kept under the MIT license and it's maintained by me. I'm not the original author of this library, I just needed to update it to the latest React version and I'm keeping it up to date.

If you are looking for the original repository, please go to [benestudio/react-scrollfade](htthttps://github.com/benestudio/react-scrollfade) instead. I'm  maintaining this fork for my own projects, but I'm happy to accept pull requests and issues if you want to contribute.

I'm planning to add some more features to this library, like the ability to customize the fade intensity. If you have any suggestions, please open an issue.

This package is also available on npm as [@korhox/react-scrollfade](https://www.npmjs.com/package/@korhox/react-scrollfade).

## Installation

You can install the library using npm:

```sh
npm install @korhox/react-scrollfade
```

## How to use it

It works with zero configuration needed. Just include it as a direct child of the scrollable element.
The fade makes the bottom of the element transparent, so the color of the fade is determined by what is under it.

```jsx
import React from 'react';
import ScrollFade from '@korhox/react-scrollfade';

export const Example = () => (
    <div
        style={{
            width: 200,
            height: 100,
            overflowY: 'auto',
            background: 'red',
        }}
    >
        <ScrollFade />
        Dolor amet eu occaecat excepteur do adipisicing cillum duis. Est ullamco ullamco sit ea irure consequat id do ex
        enim consectetur nisi duis elit. Qui mollit magna exercitation est sit.
    </div>
);
```

### Custom Height

You can also set a different height for the fade

```jsx
import React from 'react';
import ScrollFade from '@korhox/react-scrollfade';

export const ExampleWithCustomHeight = () => (
    <div
        style={{
            width: 200,
            height: 100,
            overflowY: 'auto',
            background: 'red',
        }}
    >
        <ScrollFade height={30} />
        Dolor amet eu occaecat excepteur do adipisicing cillum duis. Est ullamco ullamco sit ea irure consequat id do ex
        enim consectetur nisi duis elit. Qui mollit magna exercitation est sit.
    </div>
);
```

### Browser Support

See browser compatibilities in the [caniuse.com article](https://caniuse.com/?search=mask).

### Examples

There are interactive examples.

`npm run examples` starts an instance where you can look at them.

## Contribution

We welcome contributions in the form of pull requests.
The examples also serve as a development server.

If you have any issues, questions or suggestions please open a new Issue.
