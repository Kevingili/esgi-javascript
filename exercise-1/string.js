function ucfirst(string) {
    if (string !== "" && string !== null && typeof string === 'string') {
        return string.charAt(0).toUpperCase() + string.substr(1, string.length - 1).toLowerCase();
    }
    return "";
}

function capitalize(string) {
    if (string !== "" && string !== null && typeof string === 'string') {
        words = string.split(' ').map(function(string) {
            return ucfirst(string);
        });
        return words.join(' ');
    }
    return "";
}

function camelCase(string) {
    if (string !== "" && string !== null && typeof string === 'string') {
        string = string.replace('_', ' ');
        words = string.split(" ").map(function(string) {
            return ucfirst(string);
        });
        return words.join("");
    }
    return "";
    
}

function snake_case(string) {
    if (string !== "" && string !== null && typeof string === 'string') {
        words = string.split(" ").map(function(string) {
            return string.toLowerCase();
        });
        return words.join("_");
    }
    return "";
    
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
