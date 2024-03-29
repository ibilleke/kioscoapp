import Image from "next/image"
import { formatearDinero } from "../helpers"
import useKiosco from "../hooks/useKiosco"

export default function Producto({producto}) {
    const { handleSetProducto, handleChangeModal } = useKiosco()
    const { imagen, nombre, precio} = producto
    
    return(
        <div className="border p-3">
            <Image src={`/assets/img/${imagen}.jpg`} alt={`Imagen Platillo ${nombre}`} width={400} height={500} />

            <div className="p-5">
                <h3 className="text-2xl font-bold">{nombre}</h3>
                
                <p className="mt-5 font-black text-4xl text-amber-500">{formatearDinero(precio)}</p>

                <button
                    type="button"
                    className="bg-indigo-600 hover:bg-indigo-800 text-white w-full mt-5 p-3 font-bold"
                    onClick={() => {
                        handleChangeModal()
                        handleSetProducto(producto)
                    }}
                >Agregar</button>
            </div>
        </div>
    )
}