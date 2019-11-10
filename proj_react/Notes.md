# My Notes

## In TS, initialize `state` by class field and by using `constructor()` are difference!

More details on "260. Confusing Component State!"

Initialize `state` by using class field:

```tsx
class App extends React.Component<AppProps> {
  state = { counter: 0 }

  render() {
    return <div>Counter: {this.state.counter}</div>
  }
}
```

is NOT the same as using `constructor()`

```tsx
class App extends React.Component<AppProps> {
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
  }

  render() {
    return <div>Counter: {this.state.counter}</div>
  }
}
```

This is one thing that TypeScript is different from JavaScript. In JavaScript, both chunks of code above are the same.

In TypeScript, using class field means we create `state` variable on the instance of `App` and it will override `state` variable of `React.Component`'s instance.

On the other hand, using `constructor()` means we don't create `state` variable on `App`'s instance, we just edit the value of `state` variable which is `React.Component`'s instance variable.
