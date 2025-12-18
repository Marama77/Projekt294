/**
 * Called when the form is submitted.
 * Prevents the default form submission and triggers an AJAX request
 * to load the category-list from the server.
 * 
 * @param {SubmitEvent} event The submit event of the formular
 */
function onFormSubmitted(event) {
    //prevent page reload
    event.preventDefault();

    //create HTTP-request
    let request = new XMLHttpRequest();
    request.open("GET", "https://campus.csbe.ch/uek294/api/v1/categories");

    //send cookies / session data
    request.withCredentials = true;

    //callback when the response is loaded
    request.onload = onRequestLoaded;

    //send request
    request.send();
    
}

/**
 * Called when the server response has been fully loaded.
 * Checks the HTTP status code and, on success, 
 * parses the received JSON data and passes it on for display.
 * 
 * @param {ProgressEvent} event 
 *        The load event of the XMLHttpRequest, providing access
 *        to the response status and response text.                      
 */
function onRequestLoaded(event) {
    if (event.currentTarget.status == 200) {
        //convert server response from JSON into an object
        let categories = JSON.parse(event.currentTarget.responseText);
        //displays categories
        displayCategories(categories);
    }
    else {
        //converts the server response from JSON into an object
        var response = JSON.parse(event.currentTarget.responseText);
        //displays an error message
        alert(response.error_message);
    }
}

/**
 * Displays the category-list in an HTML table.
 *
 * @param {Array} categories The array of category-objects returned by the API
 */
function displayCategories(categories) {
    //selects the table body (<tbody>) of the category table
    let tbody = document.querySelector("#categorylist-table tbody");
    //deletes the old lines
    tbody.innerHTML = "";

    //iterates over all categories in the array
    for (const category of categories) {
        //creates new table row
        const tr = document.createElement("tr");
        //fills the table cells with category data
        tr.innerHTML += `
            <tr>
            <td>${category.category_id}</td>
            <td>${category.active}</td>
            <td>${category.name}</td> 
            </tr>
        `;

        //creates a button-row
        const tdButton = document.createElement("td");
        //creates a button
        const btn = document.createElement("button");
        //gives the text on the button
        btn.textContent = "Löschen";

        //adds an event listener that reacts to a click
        btn.addEventListener("click", () => {
            //shows a confirmation dialog before deleting the category
            if (confirm(`Kategorie "${category.name}" wirklich löschen?`)) {
                //if the user confirms, calls the function to delete the category
                deleteCategory(category.category_id);
            }
        });

        //appends the button to the table cell
        tdButton.appendChild(btn);
        //appends the table cell to the table row
        tr.appendChild(tdButton);
        //appends the table row to the table body
        tbody.appendChild(tr);
    }
} 

/**
 * Deletes a category based on the given ID.
 *
 * @param {string} ID The unique category identifier
 */
function deleteCategory(category_id) {
    //creates a new XMLHttpRequest object
    const request = new XMLHttpRequest();
    //sends a DELETE request to the API including the SKU
    request.open("DELETE", "https://campus.csbe.ch/uek294/api/v1/category/" + category_id);
    //sends cookie information (e.g. for authentication)
    request.withCredentials = true;
    //executed when the server response is received
    request.onload = function (event) {
        //HTTP status 204 means: Successfully deleted, no content returned
        if (request.status === 204) {           
            //reloads the product list by submitting the formular again
            document.getElementById("categorylist-form").dispatchEvent(new Event("submit"));
        } else {
            const response = JSON.parse(request.responseText);
            //displays the error message
            alert("Fehler: " + response.error_message);
        }
    };
    //sends the request to the server
    request.send();
}
       
/**
 * Registers the event listener for submitting the categorylist-formular.
 */
document.getElementById("categorylist-form").addEventListener("submit", onFormSubmitted);