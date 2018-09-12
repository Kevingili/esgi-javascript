function ucfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function capitalize(string) {
    words = string.split(" ").map(function(string) {
        return ucfirst(string);
    });
    return words.join(" ");
}

function camelCase(string) {
    words = string.split(" ").map(function(string) {
        return ucfirst(string);
    });
    return words.join("");
}

function snake_case(string) {
    words = string.split(" ").map(function(string) {
        return string.toLowerCase();
    });
    return words.join("-");
}

function leet(string) {
    string = string.replace(/[aA]+/g, "4");
    string = string.replace(/[oO]+/g, "0");
    string = string.replace(/[eE]+/g, "3");
    string = string.replace(/[sS]+/g, "5");
    string = string.replace(/[tT]+/g, "7");
    string = string.replace(/[iI]+/g, "1");
    string = string.replace(/[bB]+/g, "8");
    return string;
}

function verlan(string) {
    words = string.split(" ").map(function(string) {
        return string
            .split("")
            .reverse()
            .join("");
    });
    return words.join(" ");
}

function yoda(string) {
    return string
        .split(" ")
        .reverse()
        .join(" ");
}
