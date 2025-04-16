const modals = [
    {
        title: "Meeting Details",
        content: "From the Kickoff on Thursday, Sept. 18, 2025 to sometime in February, we regularly meet on Thursdays from 4-6 pm at Range Telephone. Address: 130 S 9th street Worland Wy 82401",
        id: "meeting",
    },
    {
        title: "Requirements",
        content: "Requirements for students wanting to join the robotics team: Need to be in 8th-12th Grade, Willing to learn and contribute to the team, & Encourage and Respect teammates and mentors.",
        id: "requirements",
    },
    {
        title: "This Year's Robot",
        id: "robot_modal",
    }
];

const buttons = [
    {
        button_class: "learn_btn1"
    },
    {
        button_class: "learn_btn2"
    },
    {
        button_class: "learn_btn3"
    }
];

const DisplayModal = (modals) => {
        let modal = modals
        let id = `${modal.id}`;
        let dialog = document.getElementById(id);
        if (modal.title === "This Year's Robot") {
        dialog.innerHTML =
        `<div>
            <button class="button_close"></button>
            <h3>${modal.title}</h3>
            <img id="robot" src="images/robot-img.webp" alt="robot-img" width="240" height="auto" loading="lazy">
        </div>`
        }
        else {
        dialog.innerHTML =
        `<div>
            <button class="button_close"></button>
            <h3>${modal.title}</h3>
            <p>${modal.content}</p>
        </div>`;
        }
    dialog.showModal()

    
        const closeButton = dialog.querySelector(".button_close");
        if (closeButton) {
            closeButton.addEventListener("click", () => {
                dialog.close();
            });
        } else {
            console.error("Close button not found in modal.");
        }
    };



document.addEventListener('DOMContentLoaded', () => {    
    buttons.forEach((button, index) => {
        const btnElement = document.querySelector(`.${button.button_class}`);
        if (btnElement){
            btnElement.addEventListener('click', () => {
                DisplayModal(modals[index]);
            });
        }
        else{
            console.error(`Button with ${button.button_class} Not found`);
        }
    });
});