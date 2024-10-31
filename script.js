document.addEventListener('DOMContentLoaded', function() {
    // Handle login form submission
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const usn = document.getElementById('usn').value.trim();
        const password = document.getElementById('password').value.trim();
        const errorMessage = document.getElementById('error-message');
        
        // Basic validation
        if (usn === "" || password === "") {
            errorMessage.style.display = 'block';
            errorMessage.textContent = "Please enter both USN and password.";
        } else {
            // Simulate backend check (replace with actual API call)
            if (usn === "12345" && password === "password") {
                window.location.href = "voting-page.html";  // Redirect to voting page
            } else {
                errorMessage.style.display = 'block';
                errorMessage.textContent = "Invalid USN or password.";
            }
        }
    });

    // Handle voting form submission
    document.getElementById('votingForm').addEventListener('submit', function(event) {
        event.preventDefault();
        
        const selectedCandidate = document.querySelector('input[name="candidate"]:checked');
        const termsChecked = document.getElementById('terms').checked;
        const voteMessage = document.getElementById('vote-message');
        
        if (!termsChecked) {
            voteMessage.style.display = 'block';
            voteMessage.textContent = "You must agree to the terms and conditions.";
            voteMessage.style.color = 'red';
        } else if (selectedCandidate) {
            // Show success message
            voteMessage.style.display = 'block';
            voteMessage.textContent = `You have successfully voted for ${selectedCandidate.value}!`;

            // Simulate vote submission (replace this with actual API call to backend)
            setTimeout(() => {
                window.location.href = "success.html";  // Redirect to success/confirmation page
            }, 2000);
        } else {
            voteMessage.style.display = 'block';
            voteMessage.textContent = "Please select a candidate to vote.";
            voteMessage.style.color = 'red';
        }
    });
});
