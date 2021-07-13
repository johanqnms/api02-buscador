import Header from "../components/Header";
import Nav from "../components/Nav";

//Componentes
const router = async () => {

    //Components
    const header = document.querySelector('.header');
    header.innerHTML = await Header();
    const nav = document.querySelector('.nav');
    nav.innerHTML = await Nav();
}

export default router;