import { useEffect } from "react"
import Layout from "../../layout/Layout"
import useKiosco from "../../hooks/useKiosco"
import { formatearDinero } from "../../helpers"

export default function Total() {
    const { pedido, nombre, setNombre, colocarOrden, total } = useKiosco()

    const comprobarPedido = () => {
        return pedido.length === 0 || nombre === "" || nombre.length < 3
    }

    useEffect(() => {
        comprobarPedido()
    }, [pedido, nombre])

    return(
        <Layout pagina={"Total y Confirmar Pedido"}>
            <h1 className="text-4xl font-black">Total y Confirmar Pedido</h1>
            <p className="text-2xl my-10">Confirma tu Pedido a Contuniación</p>

            <form onSubmit={colocarOrden} >
                <div>
                    <label 
                        htmlFor="nombre"
                        className="block text-slate-800 font-bold text-xl"
                    >Nombre</label>

                    <input 
                        id="nombre"
                        type="text"
                        className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
                        value={nombre}
                        onChange={e => setNombre(e.target.value)}
                    />
                </div>

                <div className="mt-10">
                    <p className="text-2xl">Total a pagar {""} <span className="font-bold">{formatearDinero(total)}</span></p>
                </div>

                <div className="mt-5">
                    <input
                        type="submit"
                        className={`${comprobarPedido() ? "bg-indigo-100" : "bg-indigo-600 hover:bg-indigo-800" } w-full lg:w-auto px-5 py-2 rounded font-bold text-white text-center`}
                        value={"Confirmar Pedido"}
                        disabled={comprobarPedido()}
                    />
                </div>
            </form>
        </Layout>
    )
}