/* =============================== */
/* DASHBOARD SCRIPT */
/* HOME HEALTH REFERRAL CONTROL */
/* =============================== */

/*
WHO:
- Consulting HQ Administrator

WHAT:
- Displays referral leads
- Allows batch preparation
- Verifies agreements before sending

WHY:
- Prevents unauthorized release of leads
- Enforces agreement-first workflow

HOW:
- DOM-controlled rendering
- Client-side validation (temporary)
*/

document.addEventListener("DOMContentLoaded", function () {

    /* =============================== */
    /* CONFIRM SCRIPT LOADED */
    /* =============================== */
    alert("Dashboard JS loaded successfully");

    /* =============================== */
    /* TEMPORARY REFERRAL LEAD DATA */
    /* DEVELOPMENT / TEST MODE */
    /* =============================== */

    const referralLeads = [
        {
            id: 1,
            name: "Test Client One",
            email: "client1@example.com",
            phone: "215-555-1111",
            medicaid: "Yes",
            care: "24hr Care with Skilled Nurse",
            agreement: "Not Signed"
        },
        {
            id: 2,
            name: "Test Client Two",
            email: "client2@example.com",
            phone: "215-555-2222",
            medicaid: "Yes",
            care: "24hr Care without Skilled Nurse",
            agreement: "Not Signed"
        }
    ];

    /* =============================== */
    /* LOCATE REFERRAL TABLE BODY */
    /* =============================== */

    const referralTableBody = document.querySelector(
        "#referrals table tbody"
    );

    if (!referralTableBody) {
        alert("ERROR: Referral table body not found");
        return;
    }

    /* =============================== */
    /* RENDER LEADS INTO TABLE */
    /* =============================== */

    referralLeads.forEach(lead => {

        const row = document.createElement("tr");

        row.innerHTML = `
            <td><input type="checkbox" value="${lead.id}"></td>
            <td>${lead.name}</td>
            <td>${lead.email}</td>
            <td>${lead.phone}</td>
            <td>${lead.medicaid}</td>
            <td>${lead.care}</td>
            <td>
                <span class="badge ${lead.agreement === 'Signed' ? 'signed' : 'unsigned'}">
                    ${lead.agreement}
                </span>
            </td>

        `;

        referralTableBody.appendChild(row);
    });

    /* =============================== */
    /* PREPARE BATCH BUTTON */
    /* =============================== */

    const prepareBtn = document.getElementById("prepareBatchBtn");

    if (!prepareBtn) {
        alert("ERROR: Prepare Batch button not found");
        return;
    }

    prepareBtn.addEventListener("click", function () {

        const selectedBoxes = document.querySelectorAll(
            "#referrals table tbody input[type='checkbox']:checked"
        );

        if (selectedBoxes.length === 0) {
            alert("No leads selected.");
            return;
        }

        let unsignedFound = false;
        let selectedIds = [];

        selectedBoxes.forEach(box => {
            const lead = referralLeads.find(l => l.id == box.value);
            if (lead) {
                selectedIds.push(lead.id);
                if (lead.agreement !== "Signed") {
                    unsignedFound = true;
                }
            }
        });

        if (unsignedFound) {
            alert("Batch blocked: unsigned agreement detected.");
            return;
        }

        alert("Batch approved. Lead IDs: " + selectedIds.join(", "));
    });

});
