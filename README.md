<h1 class="hide">Bx</h1>


## Media Object

```html
<bx-media>
  <img src="//placehold.it/128"/>
  <h3>Media Object</h3>
  <p>Put whatever you want here</p>
</bx-media>
```

```html
<bx-media right="true">
  <img src="//placehold.it/128"/>
  <h3>Media Object</h3>
  <p>Put whatever you want here</p>
</bx-media>
```

```html
<bx-media center="true">
  <img src="//placehold.it/128"/>
  <h3 class="m0">Centered Media Object</h3>
  <p class="m0">Basically the flag object</p>
</bx-media>
```

**Attributes**
- right
- center

## Message

```html
<bx-message>Flash Message</bx-message>
<bx-message theme="info">Info Message</bx-message>
<bx-message theme="success">Success Message</bx-message>
<bx-message theme="warning">Warning Message</bx-message>
<bx-message theme="error">Error Message</bx-message>
<bx-message theme="dark" dismiss="true">Dark Message</bx-message>
```

**Attributes**
- theme
- dismiss

## Badge

```html
<h3>Hamburger <bx-badge>Default</bx-badge></h3>
<h3>Hamburger <bx-badge theme="info">Info</bx-badge></h3>
<h3>Hamburger <bx-badge theme="success">Success</bx-badge></h3>
<h3>Hamburger <bx-badge theme="warning">Warning</bx-badge></h3>
<h3>Hamburger <bx-badge theme="error">Error</bx-badge></h3>
<h3>Hamburger <bx-badge theme="dark">Dark</bx-badge></h3>
```

## Button
```html
<button is="bx-button">Button</button>
<button is="bx-button" color="blue">Blue Button</button>
<button is="bx-button" color="red">Red Button</button>
<button is="bx-button" color="blue" toggle="true">Toggle Button</button>
```

## Radio Button

```html
<template is="auto-binding">
  <bx-radio-button name="radio-button" model="{{ value }}" value="red">Red</bx-radio-button>
  <bx-radio-button name="radio-button" model="{{ value }}" value="green">Green</bx-radio-button>
  <bx-radio-button name="radio-button" model="{{ value }}" value="blue">Blue</bx-radio-button>
  <code class="ml2">value: {{ value }}</code>
</template>
```

## Button Group

```html
<bx-button-group>
  <button is="bx-button">Red</button>
  <button is="bx-button">Green</button>
  <button is="bx-button">Blue</button>
</bx-button-group>
```

## Radio Group

```html
<template is="auto-binding">
  <bx-radio-group name="radio-buttons" model="{{ data }}'" class="mr2 mb2">
    <bx-radio-button name="radio-buttons" model="{{ data }}" value="red">Red</bx-radio-button>
    <bx-radio-button name="radio-buttons" model="{{ data }}" value="green">Green</bx-radio-button>
    <bx-radio-button name="radio-buttons" model="{{ data }}" value="blue">Blue</bx-radio-button>
  </bx-radio-group>
  <code>value: {{ data }}</code>
</template>
```

## Nav Item

```html
<a is="bx-nav-item" href="#nav-item">Nav Item</a>
```

## Menu

```html
<bx-menu>
  <a is="bx-nav-item" href="#nav-item">Nav Item</a>
  <a is="bx-nav-item" href="#nav-item">Nav Item</a>
  <a is="bx-nav-item" href="#nav-item">Nav Item</a>
  <a is="bx-nav-item" href="#nav-item">Nav Item</a>
</bx-menu>
```

## Nav

```html
<bx-nav>
  <a is="bx-nav-item" href="#nav-item">Nav Item</a>
  <a is="bx-nav-item" href="#nav-item">Nav Item</a>
  <a is="bx-nav-item" href="#nav-item">Nav Item</a>
</bx-nav>
```

```html
<bx-nav theme="info">
  <a is="bx-nav-item" href="#nav-item">Nav Item</a>
  <a is="bx-nav-item" href="#nav-item">Nav Item</a>
  <a is="bx-nav-item" href="#nav-item">Nav Item</a>
</bx-nav>
```

## Column & Row

```html
<bx-row>
  <bx-column width="4"><div class="p2 border rounded">bx-column 4</div></bx-column>
  <bx-column width="4"><div class="p2 border rounded">bx-column 4</div></bx-column>
  <bx-column width="4"><div class="p2 border rounded">bx-column 4</div></bx-column>
</bx-row>
```

## Flex

```html
<bx-flex wrap="true" class="mxn2">
  <div class="col col-4 px2"> <div class="p2 border rounded">bx-flex</div> </div>
  <div class="col col-4 px2"> <div class="p2 border rounded">bx-flex</div> </div>
  <div class="col col-4 px2"> <div class="p2 border rounded">bx-flex</div> </div>
</bx-flex>
```

## Panel 

```html
<bx-panel state="info" class="mb2">
  <header>bx-panel</header>
  <img src="//placekitten.com/256" />
  <p>Just a default panel</p>
  <footer>Footer</footer>
</bx-panel>
<bx-panel>
  <h1>Panel with no header or footer</h1>
  <p>Just a default panel</p>
</bx-panel>
```

## Card

```html
<bx-card class="mr2">
  <img src="//placehold.it/256"/>
  <h3 class="m0">Card</h3>
  <p class="m0">Default card</p>
</bx-card>
<bx-card state="info">
  <img src="//placehold.it/256"/>
  <h3 class="m0">Info Card</h3>
  <p class="m0">Info card</p>
</bx-card>
```

## Dropdown

```html
<bx-dropdown>
  <button is="bx-button">Dropdown</button>
  <bx-menu>
    <a is="bx-nav-item" href="#dropdown">Action</a>
    <a is="bx-nav-item" href="#dropdown">Action</a>
    <a is="bx-nav-item" href="#dropdown">Action</a>
    <a is="bx-nav-item" href="#dropdown">Action</a>
  </bx-menu>
</bx-dropdown>
```

## Pagination

```html
<bx-pagination>
  <a is="bx-nav-item">Previous</a>
  <a is="bx-nav-item">1</a>
  <a is="bx-nav-item" active="true">2</a>
  <a is="bx-nav-item">3</a>
  <a is="bx-nav-item">Next</a>
</bx-pagination>
```

<!--

## Layout
- [x] Media Object (center)
- [x] Flex (wrap, center)
- [x] Row
- [x] Column
- [ ] Banner

## App
- [x] Color States
- [x] Badge
- [x] Message
- [x] Panel
- [x] Card
- [x] Dropdown (test with core-dropdown)
- [ ] Modal
- [/] Pagination
- [x] Nav
- [ ] Navbar
- [x] Menu
- [ ] Tabs

## Forms
- [x] Button
- [x] Nav Item
- [/] Button Group
- [x] Radio Button
- [/] Radio Group
- [ ] Range
- [ ] Progress
- [ ] Stepper
- [ ] Star Rating
- [ ] Likert

## Social
- [ ] User card
- [ ] Stats
- [ ] Like Button
- [ ] Follow Button

## Music
- [ ] Trigger Pad
- [ ] Waveform
- [ ] Pad Row
- [ ] Knob

-->
