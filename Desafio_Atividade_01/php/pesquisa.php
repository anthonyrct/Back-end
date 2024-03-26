<?php
require_once 'conectaBD.php';
// Conectar ao BD (com o PHP)
/*
echo '<pre>';
print_r($_POST);
echo '</pre>';
die();
*/

// Cria uma conexão
$conn = new mysqli($endereco, $usuario, $senha, $banco);

// Verifica a conexão
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

// Obtém o valor do campo de pesquisa
$query = $_GET['query'];

// Consulta SQL para buscar produtos no banco de dados
$sql = "SELECT * FROM produtos WHERE nome LIKE '%$query%'";
$result = $conn->query($sql);

// Prepara um array para armazenar os resultados da consulta
$products = array();

// Se houver resultados, adiciona-os ao array de produtos
if ($result->num_rows > 0) {
  while($row = $result->fetch_assoc()) {
    $products[] = $row;
  }
}

// Retorna os resultados como JSON
header('Content-Type: application/json');
echo json_encode($products);

// Fecha a conexão com o banco de dados
$conn->close();
?>