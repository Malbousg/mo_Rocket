// Countdown für das Turnier
function startCountdown() {
    const turnierDatum = new Date("May 25, 2025 18:00:00").getTime();
    
    const countdown = setInterval(function() {
        const jetzt = new Date().getTime();
        const verbleibend = turnierDatum - jetzt;
        
        const tage = Math.floor(verbleibend / (1000 * 60 * 60 * 24));
        const stunden = Math.floor((verbleibend % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minuten = Math.floor((verbleibend % (1000 * 60 * 60)) / (1000 * 60));
        const sekunden = Math.floor((verbleibend % (1000 * 60)) / 1000);
        
        document.getElementById("countdown").innerHTML = `
            <div class="countdown-container">
                <div class="countdown-box">
                    <span class="countdown-number">${tage}</span>
                    <span class="countdown-label">Tage</span>
                </div>
                <div class="countdown-box">
                    <span class="countdown-number">${stunden}</span>
                    <span class="countdown-label">Stunden</span>
                </div>
                <div class="countdown-box">
                    <span class="countdown-number">${minuten}</span>
                    <span class="countdown-label">Minuten</span>
                </div>
                <div class="countdown-box">
                    <span class="countdown-number">${sekunden}</span>
                    <span class="countdown-label">Sekunden</span>
                </div>
            </div>
        `;
        
        if (verbleibend < 0) {
            clearInterval(countdown);
            document.getElementById("countdown").innerHTML = `
                <div class="alert alert-success">
                    Das Turnier hat begonnen!
                </div>
            `;
        }
    }, 1000);
}

window.onload = startCountdown;
