document.addEventListener('DOMContentLoaded', function() {
    // Example data - replace this with real data fetching from your backend
    const gradeData = {
        'V3': 15,
        'V4': 30,
        'V5': 100,
        'V6': 50,
        'V7': 5
    };

    updateHistogram(gradeData);
});



// function updateHistogram(data) {
//     let totalVotes = 0;
//     for (const grade in data) {
//         totalVotes += data[grade];
//     }

//     for (const grade in data) {
//         const bar = document.querySelector(`.bar-${grade}`);
//         const percentage = (data[grade] / totalVotes) * 100;
//         console.log(grade)
//         console.log(bar)
//         console.log(percentage);

//         bar.style.height = percentage + '%';
//         bar.querySelector('span').textContent = `${grade} - ${data[grade]}`;
//     }
// }


function updateHistogram(data) {
    // Find the maximum number of votes for any grade
    const maxVotes = Math.max(...Object.values(data));

    // Calculate and update the height of each bar relative to the max votes
    for (const grade in data) {
        const bar = document.querySelector(`.bar-${grade}`);
        if (bar) {
            // Calculate height as a percentage of the maximum
            const heightPercentage = (data[grade] / maxVotes) * 100;
            bar.style.height = `${heightPercentage}%`;
            bar.querySelector('span').textContent = `${grade} - ${data[grade]}`;
        }
    }
}
