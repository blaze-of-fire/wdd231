const url1 = "./data/currentevents.json";
const currentEvents = document.querySelector('#current_events');

async function getEventData() {
    const response = await fetch(url1);
    const data = await response.json();
    displayCurrentEvents(data.current_events);
    };

const displayCurrentEvents = (events) => {
    const heading = document.createElement('h2');
    heading.textContent = "Events";

    heading.style.color = "black";
    heading.style.fontFamily = "'Lora', serif";
    heading.style.textAlign = "center";

    heading.style.paddingBottom = "1rem";
    currentEvents.append(heading);
    events.forEach(event => {

        let eventName = document.createElement("p");
        let eventDate = document.createElement("p");

        let eventDescription = document.createElement("p");
        let theEvent = document.createElement("section");

        eventName.textContent = `${event.event_name}`;
        eventName.style.fontSize = "larger"

        eventDate.textContent = `${event.event_date}`
        eventDate.style.fontFamily = "'Roboto', sans-serif";

        eventDescription.textContent = `${event.description}`
        eventDescription.style.fontFamily = "'Roboto', sans-serif";

        theEvent.setAttribute("class", "event");
        theEvent.append(eventName, eventDate, eventDescription);
        currentEvents.append(theEvent);
    });
};
getEventData();