const form = document.querySelector("#contact-form");

if (form) {
    const emailAddress = "aineatkinsonphoto@gmail.com";
    const status = document.querySelector("#contact-status");
    const fields = ["contact-name", "contact-email", "contact-message"]
        .map((id) => document.getElementById(id));
    const topicGroup = document.querySelector(".contact-topic");
    const topicRadios = [...form.querySelectorAll('input[name="topic"]')];

    function showError(field, errorId, message) {
        field.setAttribute("aria-invalid", "true");
        const error = document.getElementById(errorId);
        error.textContent = message;
        error.hidden = false;
    }

    function clearError(field, errorId) {
        field.setAttribute("aria-invalid", "false");
        const error = document.getElementById(errorId);
        error.textContent = "";
        error.hidden = true;
    }

    function validateField(field) {
        const errorId = `${field.id}-error`;
        if (field.validity.valueMissing || !field.value.trim()) {
            showError(field, errorId, "This field is required.");
        } else if (field.validity.typeMismatch) {
            showError(field, errorId, "Enter a valid email address, such as name@example.com.");
        } else if (field.validity.tooShort) {
            showError(field, errorId, "Enter at least 10 characters.");
        } else {
            clearError(field, errorId);
        }
    }

    fields.forEach((field) => {
        field.addEventListener("invalid", () => validateField(field));
        field.addEventListener("input", () => {
            if (field.validity.valid) {
                clearError(field, `${field.id}-error`);
            }
        });
    });

    topicRadios[0].addEventListener("invalid", () => {
        showError(topicGroup, "contact-topic-error", "Choose a message topic.");
    });

    topicRadios.forEach((radio) => {
        radio.addEventListener("change", () => {
            if (topicRadios.some((option) => option.checked)) {
                clearError(topicGroup, "contact-topic-error");
            }
        });
    });

    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const emptyField = fields.find((field) => !field.value.trim());
        if (emptyField) {
            showError(emptyField, `${emptyField.id}-error`, "This field is required.");
            emptyField.focus();
            return;
        }

        const data = new FormData(form);
        const subject = `Website contact from ${data.get("name")}`;
        const body = [
            `Name: ${data.get("name")}`,
            `Email: ${data.get("email")}`,
            `Topic: ${data.get("topic")}`,
            "",
            data.get("message"),
        ].join("\n");
        status.textContent = "Opening your email app with a draft. Review it and send it there.";
        window.location.href = `mailto:${emailAddress}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
}
