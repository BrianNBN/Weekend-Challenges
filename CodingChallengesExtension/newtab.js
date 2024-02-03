document.addEventListener('DOMContentLoaded', function () {
    updateTimeAndDate(); // Initial call
    fetchOpenPRs(); // Fetch open pull requests on load
    setInterval(updateTimeAndDate, 1000); // Update time and date every second

    function updateTimeAndDate() {
        const now = new Date();
        const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const dateString = now.toLocaleDateString([], { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

        document.getElementById('current-time').innerText = `Current Time: ${timeString}`;
        document.getElementById('current-date').innerText = `Current Date: ${dateString}`;
    }

    async function fetchOpenPRs() {
        try {
            const response = await fetch('https://api.github.com/repos/CodingChallegesFYI/SharedSolutions/pulls');
            const data = await response.json();

            const prsList = document.getElementById('open-prs-list');
            prsList.innerHTML = ''; // Clear existing list

            data.forEach(pr => {
                const listItem = document.createElement('li');
                listItem.textContent = `PR #${pr.number}: ${pr.title}`;
                prsList.appendChild(listItem);
            });
        } catch (error) {
            console.error('Error fetching open pull requests:', error);
        }
    }
});
