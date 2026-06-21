function navigateTo(targetPage, clickedButton) {

    document.getElementById('welcome-view').classList.add('hidden');

    document.getElementById('optimization-view').classList.add('hidden');
    document.getElementById('ridesharing-view').classList.add('hidden');

    document.getElementById(targetPage + '-view').classList.remove('hidden');

    const allButtons = document.querySelectorAll('.button');

    allButtons.forEach(btn => {
        btn.classList.remove('active');
    });

    if (clickedButton) {
        clickedButton.classList.add('active');
    }
}


function toggleTheme() {

    const rootElement = document.documentElement;

    const currentTheme =
        rootElement.getAttribute('data-theme');

    if (currentTheme === 'dark') {

        rootElement.setAttribute(
            'data-theme',
            'light'
        );

    } else {

        rootElement.setAttribute(
            'data-theme',
            'dark'
        );
    }
}


function goHome() {

    document
        .getElementById('welcome-view')
        .classList.remove('hidden');

    document
        .getElementById('optimization-view')
        .classList.add('hidden');

    document
        .getElementById('ridesharing-view')
        .classList.add('hidden');

    const allButtons =
        document.querySelectorAll('.button');

    allButtons.forEach(btn => {
        btn.classList.remove('active');
    });
}


/* ==================================================
   PART A
   ================================================== */

function generateLocationsTable() {

    const n = parseInt(
        document.getElementById(
            "locationsCount"
        ).value
    );

    if (!n || n <= 0) {
        alert("Enter a valid number of locations");
        return;
    }

    let html = `
    <table class="generated-table">
        <thead>
            <tr>
                <th>Location Name</th>
                <th>Score</th>
                <th>Category</th>
            </tr>
        </thead>
        <tbody>
    `;

    for (let i = 0; i < n; i++) {

        html += `
        <tr>
            <td>
                <input
                    type="text"
                    placeholder="Location ${i + 1}"
                >
            </td>

            <td>
                <input
                    type="number"
                    placeholder="Score"
                >
            </td>

            <td>
                <input
                    type="number"
                    placeholder="Category"
                >
            </td>
        </tr>
        `;
    }

    html += `
        </tbody>
    </table>
    `;

    document.getElementById(
        "locationsTableContainer"
    ).innerHTML = html;
}


function generateDistanceMatrixA() {

    const n = parseInt(
        document.getElementById(
            "locationsCount"
        ).value
    );

    if (!n || n <= 0) {
        alert("Enter number of locations first");
        return;
    }

    let html =
        `<div class="matrix-container">
        <table class="generated-table">`;

    for (let i = 0; i < n; i++) {

        html += "<tr>";

        for (let j = 0; j < n; j++) {

            html += `
            <td>
                <input
                    type="number"
                    value="${i === j ? 0 : ''}"
                    placeholder="0"
                    style="width:70px"
                >
            </td>
            `;
        }

        html += "</tr>";
    }

    html += `
        </table>
        </div>
    `;

    document.getElementById(
        "distanceMatrixA"
    ).innerHTML = html;
}


/* ==================================================
   PART B
   ================================================== */

function generateRequestsTable() {

    const n = parseInt(
        document.getElementById(
            "requestCount"
        ).value
    );

    if (!n || n <= 0) {
        alert("Enter a valid number of requests");
        return;
    }

    let html = `
    <table class="generated-table">
        <thead>
            <tr>
                <th>Pickup</th>
                <th>Dropoff</th>
                <th>Base Distance</th>
                <th>Flexibility</th>
            </tr>
        </thead>
        <tbody>
    `;

    for (let i = 0; i < n; i++) {

        html += `
        <tr>

            <td>
                <input
                    type="text"
                    placeholder="Pickup"
                >
            </td>

            <td>
                <input
                    type="text"
                    placeholder="Dropoff"
                >
            </td>

            <td>
                <input
                    type="number"
                    placeholder="Distance"
                >
            </td>

            <td>
                <input
                    type="number"
                    placeholder="Flexibility"
                >
            </td>

        </tr>
        `;
    }

    html += `
        </tbody>
    </table>
    `;

    document.getElementById(
        "requestsTableContainer"
    ).innerHTML = html;
}


function generateDistanceMatrixB() {

    const n = parseInt(
        document.getElementById(
            "requestCount"
        ).value
    );

    if (!n || n <= 0) {
        alert("Enter number of requests first");
        return;
    }

    let html =
        `<div class="matrix-container">
        <table class="generated-table">`;

    for (let i = 0; i < n; i++) {

        html += "<tr>";

        for (let j = 0; j < n; j++) {

            html += `
            <td>
                <input
                    type="number"
                    value="${i === j ? 0 : ''}"
                    placeholder="0"
                    style="width:70px"
                >
            </td>
            `;
        }

        html += "</tr>";
    }

    html += `
        </table>
        </div>
    `;

    document.getElementById(
        "distanceMatrixB"
    ).innerHTML = html;
}


/* ==================================================
   PLACEHOLDER RUN BUTTONS
   Connect your Part A and Part B algorithms here
   ================================================== */

function runPartA() {

    alert(
        "Part A algorithm will execute here."
    );
}


function runPartB() {

    alert(
        "Part B algorithm will execute here."
    );
}