
import { toast } from "react-toastify";

export function emitAlert(isInitial = false) {
    toast.warn("Esta página foi desenvolvida exclusivamente para fins de estudo e demonstração de portfólio. As informações aqui apresentadas são fictícias e não representam uma oferta real de serviços ou produtos.", {
        position: isInitial ? "top-center" : "top-right",
        autoClose: isInitial ? false : 4000,
        className: "alert-message"
    });
}
