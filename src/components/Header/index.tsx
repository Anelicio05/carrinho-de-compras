import sexta from "../../assets/shopping-cart-1135-svgrepo-com.svg"
import '../Header/header.sass'

interface Props{
    sexta:number
}

function Header(V:Props){
    console.log(V.sexta)
    return(
        <header>
            <h2>Logo</h2>
            <div>
                <img className="sexta" src={sexta} alt="cariinho de compras" />
                <span>{V.sexta}</span>
            </div>
        </header>
    )
}

export default Header