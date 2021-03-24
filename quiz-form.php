<?php
	
	// В POST - имя input, в скобках() - input value => понятное админу значение
	$username = ($_POST['username']);
	$username = "<b>Имя пользователя: </b>" . $username;

	$userphone = ($_POST['userphone']);
	$userphone = "<b>Телефон пользователя: </b>" . $userphone;

	$business = ($_POST['businessarea']);
	$businessArray = array ('1' => 'услуги в бьюти-сфере', '2' => 'производство/продажа товаров', '3' => 'услуги по ремонту/строительству', '4' => 'медицинские услуги', '5' => 'коучинг/психология', '6' => 'онлайн-курсы', '7' => 'кафе/ресторан', '8' => 'другое');
	$business = "<b>Сфера бизнеса: </b>" . $businessArray[$business];

	$promotion = ($_POST['promotion']);
	$promotionArray = array ('1' => 'контекстная реклама', '2' => 'реклама у блогеров', '3' => 'таргет вк/инстаграм', '4' => 'другое');
	$promotion = "<b>Метод продвижения, который ранее использовался: </b>" . $promotionArray[$promotion];

	$budget = ($_POST['budget']);
	$budgetArray = array ('1' => 'До 10000 рублей', '2' => 'от 10000 до 15000 рублей', '3' => 'от 15000 рублей');
	$budget = "<b>Максимальный бюджет в месяц: </b>" . $budgetArray[$budget];
	
	$result = ($_POST['result']);
	$resultArray = array ('1' => 'узнаваемость бренда', '2' => 'увеличение продаж', '3' => 'Привлечение новых клиентов', '4' => 'другое');
	$result = "<b>Желаемый результат от рекламы в instagram: </b>" . $resultArray[$result];

	// собираем данные из формы
	$message = $username . "<br/>";
	$message .= $userphone . "<br/>";
	$message .= $business . "<br/>";
	$message .= $promotion . "<br/>";
	$message .= $budget . "<br/>";
	$message .= $result;
	
	// почта, на которую прийдет письмо
	$mail_to = "n.a.galinevskaya@gmail.com"; 
	// тема письма
	$subject = "Результат квиза";
	
	// заголовок письма
	$headers= "MIME-Version: 1.0\r\n";
	$headers .= "Content-type: text/html; charset=utf-8\r\n"; // кодировка письма

	
	// отправляем письмо 
	@mail($mail_to, $subject, $message, $headers);

	if (@mail) {
		header('Location: thanks.html ');
	} else {
		echo "При отправке сообщения возникли ошибки";
	}
		
?>

