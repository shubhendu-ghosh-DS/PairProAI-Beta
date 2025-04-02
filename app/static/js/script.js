$(document).ready(function () {
    function updateUI() {
        let selectedOption = $("#option").val();
        
        if (selectedOption === "Code Translation") {
            $("#language_select").show();
        } else {
            $("#language_select").hide();
        }

        if (selectedOption === "Debug Your Code") {
            $("#error_message_box").show();
        } else {
            $("#error_message_box").hide();
        }
    }

    // Call updateUI on page load to set the correct visibility
    updateUI();

    // Listen for changes in the dropdown
    $("#option").change(updateUI);

    // Generate button click event
    $("#generate_btn").click(function () {
        let userCode = $("#user_code").val().trim();
        let option = $("#option").val();
        let targetLanguage = $("#target_language").val();
        let errorMessage = $("#error_message").val().trim();

        if (userCode === "") {
            alert("Please enter some code.");
            return;
        }

        let requestData = {
            code: userCode,
            option: option,
            target_language: option === "Code Translation" ? targetLanguage : null,
            error_message: option === "Debug Your Code" ? errorMessage : null
        };

        $.ajax({
            url: "/generate",
            type: "POST",
            contentType: "application/json",
            data: JSON.stringify(requestData),
            success: function (response) {
                $("#generated_code").text(response.code);
                
                // ✅ Render Markdown correctly
                $("#explanation").html(marked.parse(response.explanation));

                console.log("API Explanation:", response.explanation);

                // Show the output container
                $("#output_container").show();

                // ✅ Fix scrolling issue (Ensures page is scrollable)
                $("html, body").css("overflow", "auto");
            },
            error: function (xhr) {
                let errorMessage = xhr.responseJSON ? xhr.responseJSON.error : "Error generating solution.";
                alert(errorMessage);
            }
        });
    });

    // ✅ Clear Button Functionality
    $("#clear_btn").click(function () {
        $("#user_code").val("");
        $("#option").val("Code Translation").change(); // Reset to default
        $("#target_language").val("Python");
        $("#error_message").val("");
        $("#generated_code").text("");
        $("#explanation").html("");
        $("#output_container").hide(); // Hide output container
    });

});
