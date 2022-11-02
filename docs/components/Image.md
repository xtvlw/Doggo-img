# Image component
the component is below

```js
import { useState } from "react"
import "./image.css"

const Image = () => {
	const [imageLink, setImageLink] = useState('')
	
	const getRandImg = async () => {
		let apiUrl = "https://dog.ceo/api/breeds/image/random"
		let loadApi = await fetch(apiUrl).then(res => res.json())
		setImageLink(loadApi.message)
	}
	return (
		<div className="user_interactions">
			<div className="image_part">
				<img src={imageLink} alt="Doggo Image" />
			</div>
			<button onClick={getRandImg} g>
				Random Dog
			</button>
		</div>
	)
}
export default Image;
```

---
# step by step

## importing `useState()` 
this is important, because we will use reactive component

```js
import { useState } from "react"
```

## importing the style for the component

```js
import "./image.css"
```

## creating the component
creating the component and calling it `Image`
```js
const Image = () => {
```

## Reactive variable
we need this type because of the reactive part for the image, that will change all the time.

```js
/*
"imageLink" is where the link will be | initial value: ''
"setImageLink" is a function to change the value of the variable
*/
const [imageLink, setImageLink] = useState('')
```

## Function to get the link from web
this is an asynchronous function, because we will get values from web.

```js
const getRandImg = async () => {

	// apiUrl is the api url to fetch
	let apiUrl = "https://dog.ceo/api/breeds/image/random"
	
	/*
	"loadApi" is a variable that will return the image link (the random one)
	for that it needs to wait until done, that's why the "await".
	Then we fetch into the API URL and get the full value
	of the ".then()" method is just to set the response value to JSON format
	*/
	let loadApi = await fetch(apiUrl).then(res => res.json())
	
	// then we set the value to the reactive variable (imageLink) using it' function
	setImageLink(loadApi.message)
}
```

## JSX part
we return the JSX.
With a `img` that changes its value reactively, and the `button` tag that's call the `getRandImg` function to change the image

```js
return (
	<div className="user_interactions">
		<div className="image_part">
			{// "img" tag with the "src" set to a reactive variable }
			<img src={imageLink} alt="Doggo Image" />
		</div>
		{// button that call's the function to change the image src }
		<button onClick={getRandImg} g>
			Random Dog
		</button>
	</div>
)
```

## exporting the component
in react, we need to export all the components to use it

```js
export default Image;
```
