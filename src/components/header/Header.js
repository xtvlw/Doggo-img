import './header.css'

const Header = () => {
    return (
    <section>
        <h1>Doggo images</h1>
        <ul>
            <li onClick={() => {
                alert("I Like Doggos!")
            }}>Why?</li>
            <li><a target="blank" href='https://github.com/xtvlw/Doggo-img'>Get the code</a></li>
        </ul>
    </section>
    )
}

export default Header;