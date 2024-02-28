 import { createContext } from "react";
   
 /*
    * Context API:
    * Uygulamada birden çok bileşenin ihtiyacı olan verileri tek bir merkezde yönetmeye yarar
    *  Verileri ve bunları değiştirmeye yarayan fonksiyonları tutar.
    * Ve bu değişkenleri uygulamadaki herhangi bir bileşene doğrudan aktarabilir.
    * merkezi state yönetim aracı 

  */

 //! Context yapısının temelini oluşturma
 export const BasketContext = createContext