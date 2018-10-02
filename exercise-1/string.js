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
    if (string !== "" && string !== null && typeof string === 'string') {
        string = string .replace(/a/gi, '4');
        string = string.replace(/e/gi, '3');
        string = string.replace(/i/gi, '1');
        string = string.replace(/o/gi, '0');
        string = string.replace(/u/gi, '(_)');
        string = string .replace(/y/gi, '7');
        return string;
    }
    return "";
    
}

console.log(leet('mon travail'))

function verlan(string) {
    if (string !== "" && string !== null && typeof string === 'string') {
        words = string.split(" ").map(function(string) {
            return string
                .split("")
                .reverse()
                .join("");
        });
        return words.join(" ");
    }
    return "";
    
}

function yoda(string) {
    if (string !== "" && string !== null && typeof string === 'string') {
        return string
            .split(" ")
            .reverse()
            .join(" ");
    }
    return "";
    
}
