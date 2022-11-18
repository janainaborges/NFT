import userIcon from "../../assets/svg/user.svg"
import boxIcon from "../../assets/svg/box.svg"
import walletIcon from "../../assets/svg/wallet.svg"
import paintingIcon from "../../assets/svg/painting.svg"

export function Numbers(){

    const data = [
        {id: 1, images: userIcon, number: "300", decription: "Users Active"},
        {id: 2, images: boxIcon, number: "52,5", decription: "Artworks"},
        {id: 3, images: paintingIcon, number: "17,5", decription: "Artists"},
        {id: 4, images: walletIcon, number: "35.58", decription: "ETH Spent"},
    ]
    return(
       <div style={{display: "flex", placeContent:"center"}}>
        {data.map((e) => (
            <ul key={e.id}>
                <li><img src={e.images} alt="" /></li>
                <li>{e.number}</li>
                <li>{e.decription}</li>
            </ul>
        ))}
       </div>
    )
}