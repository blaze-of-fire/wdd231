document.addEventListener("DOMContentLoaded", () => {
    const timestamp = document.querySelector('#timestamp');
    timestamp.value = new Date().toISOString();
})

const modals = [
    {
        title: "Non-Profit",
        benefits: "Community events available, an attachment to a distinguished establishment, and more!",
        id: "non-profit",
    },
    {
        title: "Bronze",
        benefits: "Exclusive events, discounted services, and website support",
        id: "bronze",
    },
    {
        title: "Silver",
        benefits: "Marketing support, premium resources, and bronze benefits",
        id: "silver",
    },
    {
        title: "Gold",
        benefits: "Priority services, Elite events specifically for your bussiness, and invitations to similar events for other organizations",
        id: "gold"
    }
];

const buttons = [
    {
        button_id: "non_prof_btn"
    },
    {
        button_id: "bronze_btn"
    },
    {
        button_id: "silver_btn"
    },
    {
        button_id: "gold_btn"
    }
];

const DisplayModal = (modals) => {
        let modal = modals
        let id = `${modal.id}`;
        let dialog = document.getElementById(id);
        dialog.innerHTML =
        `<div>
            <button class="button_close"></button>
            <h3>${modal.title}</h3>
            <p>${modal.benefits}</p>
        </div>`;
    dialog.showModal();

    dialog.querySelector(".button_close").addEventListener('click', () => {
        dialog.close();
    });
    };

document.addEventListener('DOMContentLoaded', () => {
    buttons.forEach((button, index) => {
        const btnElement = document.getElementById(button.button_id);
        if (btnElement){
            btnElement.addEventListener('click', () => {
                DisplayModal(modals[index]);
            });
        }
        else{
            console.error(`Button with ${button.button_id} Not found`)
        }
    });
});

