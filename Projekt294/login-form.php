<?php
/**
 * File: login-form.php
 * Description: Displays the user login formular
 *
 * Contains:
 * - HTML formular for user login
 * - Input validation
 * - Formular submission to login.php
 *
 * @author Marianne Stieber
 * @date 2025-12-14
 */
?>
<?php $page_name = "login-form.php"; ?>
<?php include "view/header.php"; ?>

<h1>Anmelden</h1>
<h3>Bitte geben Sie Ihren Benutzernamen und Ihr Passwort ein:</h3>

<!--form-fields & sign-in-button-->
<form id="login-form">
    <input type="text" id="username">
    <input type="password" id="password">
    <button>Anmelden</button>
</form>

<script src="controller/login-form-controller.js"></script>

<?php include "view/footer.php"; ?>





