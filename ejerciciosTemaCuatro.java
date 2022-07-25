public class ejerciciosTemaCuatro {
    
    public static void main(String[] args) {
        
        // Punto uno
         var numeroIf = 3;
         
         if (numeroIf >= 0){
             System.out.println("Este número es positivo");
         }
         else {
             System.out.println("Este número es negativo");
         }
         
         // Punto dos
         var numeroWhile = 0;
         
         while (numeroWhile < 3){
             System.out.println(numeroWhile);
             numeroWhile = numeroWhile + 1;
         }
         
         // Punto tres
         do {
             System.out.println(numeroWhile);
             numeroWhile = numeroWhile + 1;
         } while (numeroWhile < 3);
    
         // Punto cuatro
         for (var numeroFor = 0; numeroFor <=3; numeroFor = numeroFor + 1){
             System.out.println(numeroFor);
         }
         
         // Punto cinco
         var estacion  = "VERANO";
         switch (estacion){
             case "VERANO":
                 System.out.println("La estación es verano");
                 break;
            case "OTOÑO":
                 System.out.println("La estación es otoño");
                 break;
            case "INVIERNO":
                 System.out.println("La estación es invierno");
                 break;
            case "PRIMAVERA":
                 System.out.println("La estación es primavera");
                 break;
            default:
                System.out.println("Esa estación no existe");
                break;
         }
             
    }
}
