public class EjerciciosTemaNueve {

    public static void main(String[] args) {
        Cliente cliente1 = new Cliente();
        cliente1.setNombre("Armando");
        cliente1.setEdad(28);
        cliente1.setTelefono("310345743");
        cliente1.setCredito(true);
        System.out.println(cliente1.getNombre() + " " + cliente1.getEdad() + " " + cliente1.getTelefono() + " " +
                cliente1.isCredito());
        
        Trabajador trabajador1 = new Trabajador();
        trabajador1.setNombre("Laura");
        trabajador1.setEdad(25);
        trabajador1.setTelefono("315648382");
        trabajador1.setSalario(1750000);
        System.out.println(trabajador1.getNombre() + " " + trabajador1.getEdad() + " " +
                trabajador1.getTelefono() + " " + trabajador1.getSalario());
    }

    public static class Persona {

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

    public static class Cliente extends Persona {

        private boolean credito;

        public boolean isCredito() {
            return credito;
        }

        public void setCredito(boolean credito) {
            this.credito = credito;
        }
    }
    
    public static class Trabajador extends Persona {
        
        private int salario;

        public int getSalario() {
            return salario;
        }

        public void setSalario(int salario) {
            this.salario = salario;
        }
    }
}
