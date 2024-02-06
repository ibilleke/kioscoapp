import Image from "next/image"
import useKiosco from "../hooks/useKiosco"
import Categotria from "./Categorias"

export default function Sidebar() {
    const { categorias } = useKiosco()

    return(
        <>
            <Image width={300} height={100} src="/assets/img/logo.svg" alt="imagen logotipo"/>

            <nav className="mt-10">
                {categorias.map(categoria => (
                    <Categotria 
                        key={categoria.id}
                        categoria={categoria}
                    />
                ))}
            </nav>
        </>
    )
}