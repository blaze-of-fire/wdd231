const url1 = "https://carterqarnold.github.io/wdd231/chamber/data/currentevents.json";
const currentEvents = document.querySelector('#current_events');

async function getEventData() {
    const response = await fetch(url1);
    const data = await response.json();
    displayCurrentEvents(data.current_events);
    };

const displayCurrentEvents = (events) => {
    events.forEach(event => {

        let eventName = document.createElement("h2");
        let eventDescription = document.createElement("p");
        let theEvent = document.createElement("section");

        eventName.textContent = `${event.event_name}`;
        eventDescription.textContent = `${event.description}`
        theEvent.setAttribute("class", "event");
        theEvent.append(eventName, eventDescription);
        currentEvents.append(theEvent);
    });
};
getEventData();