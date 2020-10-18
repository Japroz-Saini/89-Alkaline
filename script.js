//TODO : Add form validation
document.addEventListener("DOMContentLoaded", () => {
    const navMenu = document.getElementById('nav-menu'),
        toggleMenu = document.getElementById('nav-toggle'),
        closeMenu = document.getElementById('nav-close')

    /*SHOW*/
    toggleMenu.addEventListener('click', () => {
        navMenu.classList.toggle('show')
    })

    /*HIDDEN*/
    closeMenu.addEventListener('click', () => {
        navMenu.classList.remove('show')
    })
    /*===== ACTIVE AND REMOVE MENU =====*/
    const navLink = document.querySelectorAll('.nav__link');

    // GetLength of  each letter
    const logo = document.querySelectorAll("#logo path");

    for (let i = 0; i < logo.length; i++) {
        console.log(`Letter ${i} = ${logo[i].getTotalLength()}`)
    }

    const input = document.querySelector(".unique");
    input.style.height = "100px";

    // Check
    localStorage.setItem(data, `
    {
        "name" : "Japroz Singh Saini",
        "website" : "89 Alkaline",
        "license" : "MIT",
        "owner" : "Pritpal Singh Saini",
    }
    `);
    console.log(JSON.stringify(`
    {
        "name" : "Japroz Singh Saini",
        "website" : "89 Alkaline",
        "license" : "MIT",
        "owner" : "Pritpal Singh Saini",
    }
    `));

    // Form Validation

    // Query Select the various elements
        const form = document.querySelector('.form');
        const error = document.querySelector(".error");

        //Hide the error div in the start
        error.style.display = "none";

        // Add a event listener on the form
        form.addEventListener('submit', (e) => {
            const error = document.querySelector(".error");
            const name = document.getElementById("name");
            const email = document.getElementById("email");
            const pswrd = document.getElementById("password");

            // Various Check on the input fields
            if (name.value === "" || name.value === " ") {
                error.style.display = "block";
                e.preventDefault()
                error.innerHTML = "Name cannot be empty!";
            } else if (email.value === "" || email.value === " ") {
                error.style.display = "block";
                e.preventDefault()
                error.innerHTML = "Email cannot be empty!";
            } else if (pswrd.value === "" || pswrd.value === " ") {
                error.style.display = "block";
                e.preventDefault()
                error.innerHTML = "Password cannot be empty!";
            } else if (name.value.length < 6) {
                error.style.display = "block";
                e.preventDefault()
                error.innerHTML = "Name is too short!!"
            } else if (email.value.length < 6) {
                error.style.display = "block";
                e.preventDefault()
                error.innerHTML = "Email is too short"
            } else if (pswrd.value.length < 6) {
                error.style.display = "block";
                e.preventDefault();
                error.innerHTML = "Password is too short";
                // Email Checks
            } else if (email.value.includes("@") == false || email.value.includes(".") == false) {
                error.style.display = "block";
                e.preventDefault();
                error.innerHTML = "Email is not in the correct format";
            } else if (email.value.includes(" ")) {
                error.style.display = "block";
                e.preventDefault();
                error.innerHTML = "Email is not in the correct format";
            } else if (email.value.length > 199 || name.value.length > 199 || pswrd.value.length > 199) {
                error.style.display = "block";
                e.preventDefault();
                error.innerHTML = "Length of one of the fields is more than 200 characters"
            } else {
                // Style the success buttons
                e.preventDefault();
                setTimeout(() => {
                    error.style.backgroundColor = "green";
                    error.style.border = "1px solid rgb(21, 255, 0)"
                    error.style.display = "block";
                    e.preventDefault();
                    error.innerHTML = "Signed up successfully!!";
                    email.value = "";
                    name.value = "";
                    pswrd.value = "";
                }, 1500);
            }
        })


});