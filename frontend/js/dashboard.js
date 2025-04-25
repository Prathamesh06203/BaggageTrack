$(document).ready(() => {
    function fetchSensorData() {
        $.get('http://localhost:3000/api/sensors', (data) => {
            if (data.length > 0) {
                let latest = data[0];
                $('#impactValue').text(`${latest.impact} g`);
                $('#tempValue').text(`${latest.temperature}°C`);
                $('#vibrationValue').text(latest.vibration);
                $('#lightValue').text(`${latest.light}%`);
                $('#lastUpdate').text(`Last updated: ${new Date(latest.timestamp).toLocaleTimeString()}`);
            }
        });
    }

    setInterval(fetchSensorData, 5000);
    fetchSensorData();
});
