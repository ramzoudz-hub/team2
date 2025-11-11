const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    const addBtn = card.querySelector(".add");
    const inputsDiv = card.querySelector(".inputs");
    const saveBtn = card.querySelector(".save");
    const inputs = inputsDiv.querySelectorAll("input");

    addBtn.addEventListener("click", () => {
        inputsDiv.style.display = "block"; 
    });

    saveBtn.addEventListener("click", () => {
        const time = inputs[0].value;
        const subject = inputs[1].value;
        const group = inputs[2].value;

        card.insertAdjacentHTML("beforeend", `
            <p><strong>${time}</strong> — ${subject} (${group})</p>
        `);

        inputsDiv.style.display = "none";

        
        inputs.forEach(i => i.value = "");
    });
});
const downloadBtn = document.getElementById("downloadPdf");
const mainContent = document.querySelector("main");

downloadBtn.addEventListener("click", () => {
    const opt = {
        margin:       0.5,
        filename:     'Student_Schedule.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(mainContent).save();
});

