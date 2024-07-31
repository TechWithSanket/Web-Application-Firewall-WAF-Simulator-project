document.getElementById('attack-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const input = document.getElementById('attack-input').value;
    const responseDiv = document.getElementById('response');
    const logDiv = document.getElementById('log');
    
    // Simulate WAF rules
    let response = 'Request allowed.';
    if (/SELECT\s.*\sFROM\s/.test(input)) {
        response = 'SQL Injection attempt detected.';
    } else if (/script/.test(input)) {
        response = 'XSS attempt detected.';
    } else if (/csrf/.test(input)) {
        response = 'CSRF attempt detected.';
    }
    
    responseDiv.textContent = response;
    logDiv.textContent += `\n${new Date().toISOString()}: ${response}`;
});
