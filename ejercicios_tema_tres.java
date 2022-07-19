public class EjerciciosTemaTres {

    public static void main(String[] args) {
        int suma = sumar(3,2,1);
        System.out.println(suma);
        
        Coche miCoche = new Coche();
        miCoche.agregarPuertas();
        miCoche.agregarPuertas();
        miCoche.agregarPuertas();
        System.out.println(miCoche.puertas);
        
    }
    
    public static int sumar(int a, int b, int c){
        return a+b+c;
    } 
}

class Coche {
    public int puertas = 0;
    
    public void agregarPuertas(){
        this.puertas++;
    }
}
