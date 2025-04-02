$(document).ready(function () {
    $("#option").change(function () {
        if ($(this).val() === "Code Translation") {
            $("#language_select").show();
        } else {
            $("#language_select").hide();
        }

        if ($(this).val() === "Debug Your Code") {
            $("#error_message_box").show();
        } else {
            $("#error_message_box").hide();
        }
    });

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
                $("#explanation").html(response.explanation);
                $("#output_container").show();
            },
            error: function () {
                alert("Error generating solution.");
            }
        });
    });
});
