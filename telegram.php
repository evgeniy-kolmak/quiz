<?php
$title = '<b>design.webhuman.ru</b>';
$typeDesign = $_POST['type-design'];
$budget = $_POST['budget'];
$difficultyLevel = $_POST['type-level'];
$typeSite = $_POST['type-site'];
$name = $_POST['user_name'];
$phone = $_POST['user_phone'];
$comment = $_POST['user_comment'];
$token = "5006130607:AAEa6S-01f4GgL-TOymchCQgfQsFI10y2UM";
$chat_id = "-715944511";
$arr = array(
  'Заявка ' => $title ,
  'Имя пользователя:' => $name,
  'Телефон: ' => $phone,
  'Деятельность сайта' => $typeDesign,
  'Дотупный бюджет' => "{$budget}$",
  'Сложность проекта' => $difficultyLevel,
  'Модель' => $typeSite,
  'Коментарий пользователя ' => $comment,
);

foreach($arr as $key => $value) {
  $txt .= "<b>".$key."</b> ".$value."%0A";
};

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}","r");
if ($sendToTelegram) {
  header('Location: success.html');
} else {
  echo "Error";
}
?>