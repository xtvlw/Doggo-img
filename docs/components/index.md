# The index component
the main one

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import App from './components/app/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
	root.render(
		<React.StrictMode>
			<App />
		</React.StrictMode>
);
reportWebVitals();
```

---

# step by step
## importing react necessities
this just import all the things react needs to run

```js
import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
```

## import component
we need to import the `App` component to set all the application
### App doc
- [[App]]

```js
import App from './components/app/App';
```

## Root component
this is important to say to react the part of the application will change with react, in thes case all the app.

```js
const root = ReactDOM.createRoot(document.getElementById('root'));
```

### Setting the root component to render the app
this load the app component into our application

```js
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
```

## Getting reposts
this is usefully for user experience.
It collects data from the application.

```js
reportWebVitals();
```