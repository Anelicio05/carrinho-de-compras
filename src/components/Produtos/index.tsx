import CardsProduto from '../CardsPdosuto'
import '../Produtos/produtos.sass'


function Produtos() {

    return (
        <div id='produtos'>
            <ul>
                <CardsProduto
                     titulo='Tênis Preto'
                     src="https://static.netshoes.com.br/produtos/tenis-adidas-runfalcon-20-masculino/26/3ZP-0573-026/3ZP-0573-026_zoom1.jpg?ts=1626193145&ims=544x"
                     preco="250,00"
                     bntText="Comprar"
                />
                 <CardsProduto
                     titulo='Tênis laranja'
                     src="https://d2tgkknf0jkrgw.cloudfront.net/Custom/Content/Products/42/23/42236_nike-dm8968-800-zoom-fly-5-total-orangedm8968-712465_m5_638028024118462642.png"
                     preco="550,00"
                     bntText="Comprar"
                />
                 <CardsProduto
                     titulo='Tênis nike zoom'
                     src="https://sportland.fi/media/catalog/product/cache/9e32c470f79bf98a7a5a5a75b8eb1c40/D/M/DM8974_601_b494.jpg"
                     preco="850,00"
                     bntText="Comprar"
                />
            </ul>
        </div>
    )
}

export default Produtos