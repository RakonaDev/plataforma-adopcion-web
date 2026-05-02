import { IconType } from "react-icons";
import { BsPaypal } from "react-icons/bs";

export const paymentMethods: PaymentMethod[] = [
  {
    name: "Paypal",
    href: "https://www.paypal.com/paypalme/julyavelino",
    icon: BsPaypal,
  },
  {
    name: "July",
    account: "121312313123",
    imageMehtod: "" 
  }
]

export interface PaymentMethod {
  name: string;
  href?: string;
  account?: string
  icon?: IconType;
  imageMehtod?: string
}