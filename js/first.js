
function searchProperty() {

    let location = document.getElementById("location").value;

    let type = document.getElementById("propertyType").value;

    let properties = document.querySelectorAll(".property-card");

    let count = 0;

    properties.forEach(function(property) {

        let details = property.innerText.toLowerCase();

        let locationMatch = details.includes(location.toLowerCase());

        let typeMatch = type === "" || details.includes(type.toLowerCase());

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
