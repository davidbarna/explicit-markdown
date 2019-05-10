# Markdown Examples

## JSX code blocks

### Absolute dependency imports

> Source : [Atlaskit tabs components](https://atlaskit.atlassian.com/packages/core/tabs)

Use tabs to display multiple panels within a single window.

#### Usage

```jsx
import React from 'react';
import Tabs from '@atlaskit/tabs';

const tabs = [
  { label: 'Tab 1', content: <section>One</section> },
  { label: 'Tab 2', content: <section>Two</section> },
  { label: 'Tab 3', content: <section>Three</section> },
  { label: 'Tab 4', content: <section>Four</section> },
];

export default () => (
  <Tabs
    tabs={tabs}
    onSelect={(tab, index) => console.log('Selected Tab', index + 1)}
  />
);
```

## HTML code blocks

### HTML with inherited imports

> Source : [Github's &lt;markdown-toolbar&gt; element](https://github.com/github/markdown-toolbar-element/blob/master/README.md)

Markdown formatting buttons for text inputs.

#### Usage

```js
import '@github/markdown-toolbar-element';
```

```html
<markdown-toolbar for="textarea_id">
  <md-bold>bold</md-bold>
  <md-header>header</md-header>
  <md-italic>italic</md-italic>
  <md-quote>quote</md-quote>
  <md-code>code</md-code>
  <md-link>link</md-link>
  <md-unordered-list>unordered-list</md-unordered-list>
  <md-ordered-list>ordered-list</md-ordered-list>
  <md-task-list>task-list</md-task-list>
  <md-mention>mention</md-mention>
  <md-ref>ref</md-ref>
</markdown-toolbar>
<textarea id="textarea_id"></textarea>
```

#### Browser support

Browsers without native [custom element support][support] require a [polyfill][].

[support]: https://caniuse.com/#feat=custom-elementsv1
[polyfill]: https://github.com/webcomponents/

```js
import '@webcomponents/custom-elements';
```

## Syntax change for copy

### JS code with require converted to imports

> Source : [remark-shortcodes](https://github.com/djm/remark-shortcodes#usage)

```js
var unified = require('unified');
var parse = require('remark-parse');
var shortcodes = require('remark-shortcodes');

var markdown = 'Example paragraph\n\n{{> MailchimpForm id="chfk2" <}}';

var tree = unified()
  .use(parse)
  // Plugin inserted below, with custom options for start/end blocks.
  .use(shortcodes, { startBlock: '{{>', endBlock: '<}}' })
  // Turn off position output for legibility below.
  .data('settings', { position: false })
  .parse(markdown);

console.dir(tree, { depth: null });
```
