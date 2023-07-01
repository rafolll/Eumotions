<?php
// Obtén los valores enviados desde el formulario
$nombre= $_POST["nombre"];
$email= $_POST['email'];
$mensaje= $_POST['mensaje'];

// Establece la conexión con la base de datos PostgreSQL
$host = "localhost";
$database = "basedatos";
$user = "postgres";
$password = "secret";


$connection=pg_connect("host=$host  dbname=$database user=$user password=$password");

//verificar conexion

if (!$connection) {
    die("Error al conectar a la base de datos.");
}

// consulta para insertar datos en sql
$query = "INSERT INTO formulario (nombre, email, mensaje) VALUES ('$nombre', '$email', '$mensaje')";

//ejecuta consulta
$result = pg_query($connection, $query);

//verifica consulta exitosa
if (!$result) {
    echo "Error al ejecutar la consulta.";
} else {
    header("Location:../index.html");
    
}

// cerrar conexion 
pg_close($connection);
?>
