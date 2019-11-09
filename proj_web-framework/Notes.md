# My Note

## Complied code issue when we manually set instance's value inside `constructor()`

More details on "179. Shortened Passthrough Methods" lesson.

We have to be careful when we manually set up the value of `this.xxx` inside `constructor()`. Instead, we should use the shorthand pattern, i.e. `constructor(public xxx: string) {}` as much as possible.

Example:

```typescript
export class Collection {
  events: { on: string; trigger: string }

  constructor() {
    this.events = { on: 'abc', trigger: 'xyz' }
  }

  on = this.events.on
}
```

will be complied to:

```javascript
var Collection = /** @class */ (function() {
  function Collection() {
    this.on = this.events.on
    this.events = { on: 'abc', trigger: 'xyz' }
  }
  return Collection
})()

export { Collection }
```
