import '../CardsPdosuto/cards.sass'

interface Props{
    titulo: string;
    src: string;
    preco: string;
    bntText: string
}

function CardsProduto({src, preco, bntText, titulo}: Props) {
    function enviar(event: React.MouseEvent<HTMLButtonElement>){
        const btn = event.target as HTMLButtonElement
        const listaintem = btn.parentElement
        console.log(listaintem)
    }
    return (
        <li>
            <h3>{titulo}</h3>
            <img src={src} alt={titulo} />
            <p>R${preco}</p>
            <button onClick={enviar}>{bntText}</button>
        </li>
    )
}

export default CardsProduto