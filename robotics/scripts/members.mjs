const members = {
    coaches: [
        {
            image: "images/steve-radabaugh.webp",
            name: "Steve Radabaugh",
            year_joined: "2020-2021",
            primary_con: "Mentor for the team",
            id: "steve"
        },
        {
            image: "images/curtis-hamer.webp",
            name: "Curtis Hamer",
            year_joined: "2020-2021",
            primary_con: "Mentor for the team",
            id: "curtis"
        },
    ],
    team: [
        {
            image: "images/lucas-hamer.webp",
            name: "Lucas Hamer",
            year_joined: "2021-2022",
            primary_con: "Driver, Programmer: Tele-op Autonomous",
            id: "lucas"
        },
        {
            image: "images/carter-arnold.webp",
            name: "Carter Arnold",
            year_joined: "2022-2023",
            primary_con: "Mechanic: Arm, Drive train, Hooks, Claw/Wrist",
            id: "carter"
        },
        {
            image: "images/bridger-arnold.webp",
            name: "Bridger Arnold",
            year_joined: "2022-2023",
            primary_con: "Mechanic: Slides Claw/Wrist Wiring Portfolio",
            id: "bridger"
        },
        {
            image: "images/ivy-radabaugh.webp",
            name: "Ivy Radabaugh",
            year_joined: "2022-2023",
            primary_con: "Engineering Portfolio Outreach",
            id: "ivy"
        },
        {
            image: "images/skyler-green.webp",
            name: "Skyler Green",
            year_joined: "2023-2024",
            primary_con: "Mechanic: Arm Drive train Claw/Wrist Jr. Coder",
            id: "skyler"
        },
        {
            image: "images/declan-radabaugh.webp",
            name: "Declan Radabaugh",
            year_joined: "2024-2025",
            primary_con: "Shroud 3d modeling Arm",
            id: "declan"
        },
        {
            image: "images/chase-arnold.webp",
            name: "Chase Arnold",
            year_joined: "2024-2025",
            primary_con: "Mechanic: Slides Belt Shroud",
            id: "chase"
        }
    ],
    getCoaches: function () {
        return this.coaches;
    },
    getTeam: function () {
        return this.team;
    }
};

export default members;