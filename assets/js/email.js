(function setEmailAddress() {
    const parts = ['sdo', 'b', 64, 'nl', 'orn', 'a'];
    const prefix = parts[1];
    const suffix = String.fromCharCode(parts[2]) + parts[0] + parts[4] + '.' + parts[3];
    const elements = document.querySelectorAll(`a[href^="mailto:${prefix + 'a' + parts[0] + parts[4]}"]`);
    for (const element of Array.from(elements)) {
        element.href = 'mailto:' + prefix + suffix;
        element.textContent = prefix + suffix;
    }
})();
console.log('hai')
