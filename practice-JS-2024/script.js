// script.js
document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("loanModal");
    var btn = document.getElementById("applyLoanButton");
    var span = document.getElementsByClassName("close")[0];
    var form = document.getElementById("loanForm");
    var notification = document.getElementById("notification");

    // Открытие модального окна при нажатии на кнопку
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // Закрытие модального окна при нажатии на X
    span.onclick = function() {
        modal.style.display = "none";
    }

    // Закрытие модального окна при клике вне его
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    // Валидация и отправка формы
    form.onsubmit = function(event) {
        event.preventDefault();
        if (validateForm()) {
            modal.style.display = "none";
            showNotification();
        }
    }

    function validateForm() {
        var fullName = document.getElementById("fullName").value;
        var amount = document.getElementById("amount").value;
        var term = document.getElementById("term").value;
        var income = document.getElementById("income").value;

        if (fullName === "" || amount === "" || term === "" || income === "") {
            alert("Пожалуйста, заполните все поля.");
            return false;
        }

        if (amount <= 0 || term <= 0 || income <= 0) {
            alert("Пожалуйста, введите корректные данные.");
            return false;
        }

        return true;
    }

    function showNotification() {
        notification.style.display = "block";
        setTimeout(function() {
            notification.style.display = "none";
        }, 10000);
    }
});
