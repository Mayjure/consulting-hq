/* =============================== */
/* SAMPLE REFERRAL LEADS (TEMP DATA) */
/* =============================== */

const referralLeads = [
    {
        id: 1,
        name: "Test Client One",
        email: "client1@example.com",
        phone: "555-1111",
        medicaid: "Yes",
        care: "24hr Care with Skilled Nurse",
        status: "Pending"
    },
    {
        id: 2,
        name: "Test Client Two",
        email: "client2@example.com",
        phone: "555-2222",
        medicaid: "Yes",
        care: "24hr Care without Skilled Nurse",
        status: "Pending"
    }
];

/* =============================== */
/* POPULATE BATCH LEAD TABLE */
/* =============================== */

const batchTableBody = document.querySelector("#batchForm tbody");

referralLeads.forEach(lead => {

    const row = document.createElement("tr");

    row.innerHTML = `
        <td>
            <input type="checkbox" name="leadSelect" value="${lead.id}">
        </td>
        <td>${lead.name}</td>
        <td>${lead.email}</td>
        <td>${lead.phone}</td>
        <td>${lead.medicaid}</td>
        <td>${lead.care}</td>
        <td>${lead.status}</td>
    `;

    batchTableBody.appendChild(row);
});

/* =============================== */
/* HANDLE BATCH SEND BUTTON */
/* =============================== */

document.getElementById("batchForm").addEventListener("submit", function(event) {

    event.preventDefault(); // Stops page reload

    const selectedLeads = [];

    document.querySelectorAll('input[name="leadSelect"]:checked')
        .forEach(box => selectedLeads.push(box.value));

    if (selectedLeads.length === 0) {
        alert("No leads selected.");
        return;
    }

    alert("Batch prepared with Lead IDs: " + selectedLeads.join(", "));
});


/* =============================== */
/* ADMIN LOGIN SCRIPT */
/* ACCESS CONTROL LOGIC */
/* =============================== */

/*
WHO:
- Consulting HQ Administrator

WHAT:
- Verifies login credentials
- Controls access to dashboard

WHY:
- Prevents unauthorized access
- Acts as security gate

HOW:
- Compares entered values
- Redirects on success
*/

/* =============================== */
/* STORED ADMIN CREDENTIALS */
/* CHANGE THESE LATER */
/* =============================== */

const ADMIN_USERNAME = "admin";
const ADMIN_PASSWORD = "secure123";

/* =============================== */
/* FORM SUBMISSION HANDLER */
/* =============================== */

document.addEventListener("DOMContentLoaded", function () {

    /* =============================== */
    /* CONNECT TO LOGIN FORM */
    /* =============================== */
    const form = document.getElementById("adminLoginForm");

    /* =============================== */
    /* CONNECT TO ERROR MESSAGE */
    /* =============================== */
    const errorMessage = document.getElementById("loginError");

    /* =============================== */
    /* LISTEN FOR FORM SUBMISSION */
    /* =============================== */
    form.addEventListener("submit", function (event) {

        /* =============================== */
        /* PREVENT PAGE REFRESH */
        /* =============================== */
        event.preventDefault();

        /* =============================== */
        /* GET USER INPUT VALUES */
        /* =============================== */
        const username = document.getElementById("username").value;
        const password = document.getElementById("password").value;

        /* =============================== */
        /* CHECK CREDENTIALS */
        /* =============================== */
        if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {

            /* =============================== */
            /* LOGIN SUCCESS */
            /* REDIRECT TO DASHBOARD */
            /* =============================== */
            window.location.href = "dashboard.html";

        } else {

            /* =============================== */
            /* LOGIN FAILED */
            /* SHOW ERROR MESSAGE */
            /* =============================== */
            errorMessage.style.display = "block";

        }

    });

});

/* =============================== */
/* BATCH LEAD SELECTION LOGIC */
/* =============================== */

document.getElementById('batchForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent page refresh

    // Collect checked leads
    const selectedLeads = [];
    document.querySelectorAll('input[name="leadSelect"]:checked').forEach(cb => {
        selectedLeads.push(cb.value); // value = client row ID or email
    });

    if(selectedLeads.length === 0) {
        alert("Please select at least one lead to send.");
        return;
    }

    // Step 1: Generate batch email content (placeholder)
    const batchContent = selectedLeads.join('\n');

    // Step 2: Log batch action (update HH_Leads.ods Status column to "Sent")
    // (Manual update for now, automation later)

    // Step 3: Show confirmation
    alert(`Batch of ${selectedLeads.length} leads prepared for sending.`);
});
