
// 1. Initialize with your Public Key
emailjs.init("Eh_jI0toCt8tpgqMZ");

$(document).ready(function() {
    console.log("Script loaded and form is ready!");

    // 2. Target the form ID: "inquiryForm"
    $("#inquiryForm").on("submit", function (e) {
        e.preventDefault();
        console.log("Submit detected!");

        const btn = $("#submitBtn");
        const name = $('input[name="user_name"]').val();
        const email = $('input[name="user_email"]').val();
        const subject = $('input[name="subject"]').val();
        const message = $('textarea[name="message"]').val();

        // Validation
        if (!name || !email || !message || !subject) {
            alert("Please fill in all required fields");
            return;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address");
            return;
        }

        // Change button state
        btn.text("Sending...");

        // 3. Send via EmailJS
        emailjs.send("service_ppl0wtl", "template_97fblnr", {
            user_name: name,
            user_email: email,
            subject: subject,
            message: message,
        })
        .then(function (response) {
            console.log("EmailJS Success:", response);
            alert("Message sent successfully!");
            $("#inquiryForm")[0].reset(); 
            btn.text("Send Inquiry");
        }, function (error) {
            console.log("EmailJS Error:", error);
            alert("Failed to send message: " + JSON.stringify(error));
            btn.text("Send Inquiry");
        });
    });
});