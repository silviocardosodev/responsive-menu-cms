import messageIcon from "./../assets/icons/message-solid-full.svg"
import cartIcon from "./../assets/icons/cart-shopping-solid-full.svg"
import truckIcon from "./../assets/icons/truck-fast-solid-full.svg"
import userIcon from "./../assets/icons/circle-user-solid-full.svg"

export const headerLinks = [
  {
    label: "Atendimento",
    icon: messageIcon,
    url: "#",
    showOnMobile: false
  },
  {
    label: "Acompanhar Pedido",
    icon: truckIcon,
    url: "#",
    showOnMobile: false
  },
  {
    label: "Minha Conta",
    icon: userIcon,
    url: "#",
    showOnMobile: true
  },
  {
    label: "",
    icon: cartIcon,
    url: "#",
    showOnMobile: true
  }
]