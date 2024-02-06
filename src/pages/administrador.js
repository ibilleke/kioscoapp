import useSWR from "swr"
import axios from "axios"
import AdministradorLayout from "../../layout/AdministradorLayout"
import Orden from "../../components/orden"

export default function Administrador() {
    const fetcher = () => axios("/api/ordenes").then(datos => datos.data)
    const { data, error, isLoading } = useSWR('/api/ordenes', fetcher, {refreshInterval: 100})
    console.log(data)

    return (
            <AdministradorLayout pagina={"Administrador"}>
                <h1 className="text-4xl font-black">Panel de Administración</h1>
                <p className="text-2xl my-10">Administrador de Ordenes</p>
                
                {data && data.length
                    ? data.map(orden =>
                        <Orden
                            key={orden.id}
                            orden={orden}
                        />) 
                    : <p>No hay Ordenes Pendientes</p>
                }
            </AdministradorLayout>
    ) 
}