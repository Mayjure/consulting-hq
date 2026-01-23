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

