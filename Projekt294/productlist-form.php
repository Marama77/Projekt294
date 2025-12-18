<?php
/**
 * File: productlist-form.php
 * Description: Displays a formular to load and view the product list. 
 * The formular submission is handled via JavaScript (AJAX) and
 * does not submit data directly to a PHP script.
 *
 * Contains:
 * - HTML formular with buttons for loading products and navigating to categories.
 * - Integration of CSS stylesheet.
 * 
 * Notes:
 * - The "Load products" button triggers an AJAX request.
 * - The "Go to categories" button navigates to categorylist-form.php.
 *
 * @author Marianne Stieber
 * @date 2025-12-14
 */
?>
<?php $page_name = "productlist-form"; ?>
<link rel="stylesheet" href="view/stylesheets/style.css">


<form id="productlist-form">
    <button type="submit">Produkte laden</button>
    <button onclick="window.location.href='categorylist-form.php'">Zur Kategorienliste</button>
</form>

<!--Table for productlist-->
<table id="productlist-table" class="data-table">
    <thead>
        <tr>
            <th>Sku</th>
            <th>Name</th>
            <th>Bild</th>
            <th>Beschreibung</th>
            <th>Preis</th>
            <th>Stock</th>
        </tr>
    </thead>
    <tbody>
        <!--Space for products-->
    </tbody>
</table>

<!--Include the productlist-form-controller.js and the footer.php-->
<script src="controller/productlist-form-controller.js"></script>
<?php include "view/footer.php"; ?> 