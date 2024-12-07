function sendOTP(){
    const email = document.getElementById('email')
    const otpverify = document.getElementsByClassName('otpverify')[0];
    

    // Create a smtp crendentials 
    // Generating random number as otp

    let otp_val = Math.floor(Math.random()*10000);
    let emailbody = `
    <h1> plaese subscribe ash_is_coding</h1> <br>
    <h2> Your OTP is </h2>$(otp_val)
    `;
    Email.send({
        SecureToken : " 45ef5038-edfb-4048-bd9a-0665b60cc847 ",
        To : email.value,
        From : "Store@gmail.com",
        Subject : "This is the from Ash_is_coding, Please subscribe",
        Body : emailbody
    }).then(
        //if success it return "OK"
        message => {
            if (message === "OK") {
                alert("OTP sent to your email: " + email.value);
        
                // Making OTP input visible
                otpverify.style.display = "block";
                const otp_inp = document.getElementById('otp_inp');
                const otp_btn = document.getElementById('otp_btn'); // Added 'document.'
        
                otp_btn.addEventListener('click', () => { // Fixed case
                    // Now check whether the entered OTP is valid
                    if (otp_inp.value == otp_val) { // Use otp_inp.value instead of otp_btn.value
                        alert("Email Address Verified...");
                    } else {
                        alert("Invalid OTP");
                    }
                });
            }
    )}

            