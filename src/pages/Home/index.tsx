import { BoxFooter } from "../../components/BoxFooter";
import { Navbar } from "../../components/Navbar/inde";
import { Numbers } from "../../components/Numbers";
import { Overline } from "../../components/Overline";

export function Home(){
    return(
        <>
        <Navbar/>
        <Overline/>
        <Numbers />
        <BoxFooter/>
        </>
    )
}