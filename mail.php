<?php
$field_subject 	= $_POST['subject'];
$field_name 	= $_POST['name'];
$field_address 	= $_POST['address'];
$field_tel		= $_POST['tel'];
$field_address 	= $_POST['address'];
$field_email 	= $_POST['email'];
$field_message = $_POST['message'];

$mail_to = 'ishida@psid.co.jp';
$subject = $field_name.' 様からお問合わせを承りました。' ;
$body_message = 'お名前：'	.$field_name."\n";
$body_message .= 'E-mail：'	.$field_email."\n";
$body_message .= '住所：'	.$field_address."\n";
$body_message .= '電話番号：'.$field_tel."\n";
$body_message .= 'お問い合わせ内容：'."\n";
$body_message .= $field_message."\n";
$headers = 'From: '.$field_email."\r\n";
$headers .= 'Reply-To: '.$field_email."\r\n";
$mail_status = mail($mail_to, $subject, $body_message, $headers);

if ($mail_status) { ?>
    <script language="javascript" type="text/javascript">
        window.location = 'thanks.html#contact（※送信後に移動するページ）';
    </script>
<?php
}
else { ?>
    <script language="javascript" type="text/javascript">
        alert('メッセージ送信に失敗しました。こちらのメールアドレスへお問い合わせください。test@gmail.com（※自分のメールアドレス）');
        window.location = 'index.html（※送信失敗後に移動するページ）';
    </script>
<?php
}
?>
