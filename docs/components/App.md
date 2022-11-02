# The `App` component

```js
import Image from '../image/Image'
import Header from '../header/Header'

const App = () => {
	return (
		<div className="App">
			<Header />
			<Image />
		</div>
	);
}
export default App;
```

---

# step by step

## importing components
in this app we need to import 2 components, the `Header` and the `Image`
### docs for the components
- [[Header]]
- [[Image]]

```js
import Image from '../image/Image'
import Header from '../header/Header'
```

## The JSX part
it's React, it's built in components
we just "call" the `Image` and the `Header` component into this one.
The 2 component stay inside a `div`
```js
const App = () => {
	return (
		<div className="App">
			<Header />
			<Image />
		</div>
	);
}
```

## exporting the component
to use it in react, we need to export the component

```js
export default App;
```