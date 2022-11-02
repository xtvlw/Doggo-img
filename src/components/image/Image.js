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