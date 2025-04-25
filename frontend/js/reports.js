$(document).ready(() => {
    function fetchReports() {
        $.get('http://localhost:3000/api/sensors', (data) => {
            let reportHTML = data.map(entry => `
                <div class="list-group-item">
                    <h6>${entry.brand} - ${entry.impact > 5 ? '⚠️ High Impact' : '✅ No Damage'}</h6>
                    <small>${entry.timestamp}</small>
                </div>
            `).join('');
            $('#reportsContainer').html(reportHTML);
        });
    }

    $('#refreshReports').click(fetchReports);
    fetchReports();
});
