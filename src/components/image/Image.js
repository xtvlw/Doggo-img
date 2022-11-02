import { useState } from "react"


const Image = () => {
    const [imageLink, setImageLink] = useState('')

    const getRandImg = async () => {
        let apiUrl = "https://dog.ceo/api/breeds/image/random"
        let loadApi = await fetch(apiUrl).then(res => res.json())
        setImageLink(loadApi.message)
    }

    return (
        <div className="user_interactions">
            <img src={imageLink} alt="Doggo Image"/>
            <button onClick={getRandImg}g>
                Random Dog
            </button>
        </div>
    )
}

export default Image;