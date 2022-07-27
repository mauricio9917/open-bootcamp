public class EjerciciosTemaOcho {
  
    public static void main(String[] args) {
        Persona persona1 = new Persona();
        persona1.setEdad(35);
        persona1.setNombre("Armando");
        persona1.setTelefono("3104567847");
        System.out.println(persona1.getNombre() + "" + persona1.getEdad() + "" + persona1.getTelefono());
    }
    
    public static class Persona{
        private int edad;
        private String nombre;
        private String telefono;

        public int getEdad() {
            return edad;
        }

        public void setEdad(int edad) {
            this.edad = edad;
        }

        public String getNombre() {
            return nombre;
        }

        public void setNombre(String nombre) {
            this.nombre = nombre;
        }

        public String getTelefono() {
            return telefono;
        }

        public void setTelefono(String telefono) {
            this.telefono = telefono;
        }
    }
}
