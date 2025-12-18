<?php
/**
 * File: categorylist-form.php
 * Description: Displays a formular to load and view the category list. 
 * The formular submission is handled via JavaScript (AJAX) and
 * does not submit data directly to a PHP script.
 *
 * Contains:
 * - HTML formular with buttons for loading categories.
 * - Integration of CSS stylesheet.
 * 
 * Notes:
 * - The "Load categories" button triggers an AJAX request.
 *
 * @author Marianne Stieber
 * @date 2025-12-17
 */
?>
<?php $page_name = "categorylist-form"; ?>
<link rel="stylesheet" href="view/stylesheets/style.css">


<form id="categorylist-form">
    <button type="submit">Kategorien laden</button>
</form>

<!--Table for categorylist-->
<table id="categorylist-table" class="data-table">
    <thead>
        <tr>
            <th>Kategorie-ID</th>
            <th>Aktiv</th>
            <th>Name</th>
        </tr>
    </thead>
    <tbody>
        <!--Space for categories-->
    </tbody>
</table>

<!--Include the categorylist-form-controller.js and the footer.php-->
<script src="controller/categorylist-form-controller.js"></script>
<?php include "view/footer.php"; ?> 