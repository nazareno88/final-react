
import procesador from "../assets/images/procesador.png"
import CartWidget from "./CartWidget"
import ContainerLink from "./ContainerLink"

const NavBar = () => {
    return (
    <>
    <div className="nav-container">
        <div className="nav-items">
            
                <div className="nav-links">
                <h3>Hardworld</h3>
                <img src={procesador} alt="logo" />
                  <ContainerLink inicio={"Inicio"} componentes={"Componentes"} perisfericos={"Perisfericos"} accesorios={"Accesorios"} nosotros={"Nosotros"}/>
                </div>

               <div className="nav-search">
                <input type="search" placeholder="Buscar..."/>
                <button className="btn btn-primary">Buscar</button>
               </div>

                <CartWidget />

        </div>
    </div>
    </>
    )
}
export default NavBar