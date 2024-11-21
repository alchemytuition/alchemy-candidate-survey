document.getElementById("applicationForm").addEventListener("submit", function (event) {
    event.preventDefault();

    // Play the audio file
    const audio = new Audio("https://drive.google.com/file/d/1hPwMKidfZP7DEbxrDXTqWiyrHW27TSXc/view");
    audio.play();

    // Redirect to thank-you page after the audio finishes playing
    audio.onloadedmetadata = () => {
        const audioDuration = audio.duration * 1000; // Duration in milliseconds
        setTimeout(() => {
            window.location.href = "thankyou.html";
        }, audioDuration);
    };
});


// Show the "specify" input if "Other" is selected
document.getElementById("otherSubject").addEventListener("change", function () {
    const otherText = document.getElementById("otherSubjectText");
    if (this.checked) {
        otherText.style.display = "block";
    } else {
        otherText.style.display = "none";
        otherText.value = ""; // Clear input if unchecked
    }
});

