
// Show all properties when the page loads
document.addEventListener("DOMContentLoaded", function () {
    let properties = document.querySelectorAll(".property-card");

    properties.forEach(function (property) {
        property.style.display = "block";
    });
});

function searchProperty() {
    let location = document.getElementById("location").value.toLowerCase();
    let type = document.getElementById("propertyType").value.toLowerCase();

    let properties = document.querySelectorAll(".property-card");
    let count = 0;

    properties.forEach(function (property) {
        let details = property.innerText.toLowerCase();

        let locationMatch = location === "" || details.includes(location);
        let typeMatch = type === "" || details.includes(type);

        if (locationMatch && typeMatch) {
            property.style.display = "block";
            count++;
        } else {
            property.style.display = "none";
        }
    });

    document.getElementById("searchMessage").innerText =
        count + " properties found";

    document.getElementById("properties").scrollIntoView({
        behavior: "smooth"
    });
}







function submitContact(event) {
    event.preventDefault();

    document.getElementById("contactMessage").innerText =
        "Thank you! Your message has been received.";

    document.querySelector(".contact-form").reset();
}
