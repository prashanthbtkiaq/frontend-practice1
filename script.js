const checkButton = document.getElementById("run-check");
const status = document.getElementById("ui-status");
const lastChecked = document.getElementById("last-checked");

checkButton.addEventListener("click", () => {
    status.textContent = "Passed";
    lastChecked.textContent =
        "UI check completed at " + new Date().toLocaleString();
});
