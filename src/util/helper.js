export function formatDate(dateString) {

    const date = new Date(dateString);
    const options = {
        year: "numeric",
        month: "long",
        day: "numeric"
    };


    return new Intl.DateTimeFormat("en-US", options).format(date);
}

export function capitalizeFirstLetter(string) {
    if (!string) return string;  
    return string.charAt(0).toUpperCase() + string.substring(1);
}