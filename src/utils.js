// Named export, greet
export function greet(name) {
    const div = document.createElement("div");
    div.textContent = `Hello ${name}`;

    document.body.appendChild(div);
}

// Named export, excitedGreet
export function excitedGreet(name) {
    if (typeof name !== "string") {
        return false;
    }

    greet(name.toUpperCase());
}

function helloWorld() {
    greet("World");
}

// Default export
export default helloWorld;