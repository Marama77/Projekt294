/**
 * Called when the form is submitted.
 * Prevents the default form submission and sends the login data via AJAX.
 * 
 * @param {SubmitEvent} event The submit event of the formular
 */
function onFormSubmitted(event) {
    //prevent page reload
    event.preventDefault();

    //read login data from input fields.
    let body = {
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
    };

    //create HTTP-request
    let request = new XMLHttpRequest();
    request.open("POST", "https://campus.csbe.ch/uek294/api/v1/authenticate");

    //send cookies / session data
    request.withCredentials = true;

    //callback when the response is loaded
    request.onload = onRequestLoaded;

    //send request as JSON
    request.send(JSON.stringify(body));
}

/**
 * Called when the server response has been loaded.
 * Checks the HTTP status code and reacts accordingly.
 * 
 * @param {ProgressEvent} event The load event of the XMLHttpRequest
 */
function onRequestLoaded(event) {
    //checks if login was successful (HTTP 204 = No content)
    if (event.currentTarget.status == 204) {
        //redirects to product list page
        window.location.href = "productlist-form.php";
    }
    else {
        //converts the server response from JSON into an object
        let response = JSON.parse(event.currentTarget.responseText);
        //displays an error message
        alert(response.error_message);
    }
}

/**
 * Registers the event listener for submitting the login-formular.
 */
document.getElementById("login-form").addEventListener("submit", onFormSubmitted);