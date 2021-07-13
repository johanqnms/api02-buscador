import Header from "../components/Header";

//Componentes
const router = async () => {

    //Components
    const header = document.querySelector('.header');
    header.innerHTML = await Header();
}

export default router;