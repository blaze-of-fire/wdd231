const members = {
    coaches: [
        {
            image: "images/steve-radabaugh.webp",
            name: "Steve Radabaugh",
            year_joined: "2020-2021"
        },
        {
            image: "images/curtis-hamer.webp",
            name: "Curtis Hamer",
            year_joined: "2020-2021"
        },
    ],
    team: [
        {
            image: "images/lucas-hamer.webp",
            name: "Lucas Hamer",
            year_joined: "2021-2022"
        },
        {
            image: "images/carter-arnold.webp",
            name: "Carter Arnold",
            year_joined: "2022-2023"
        },
        {
            image: "images/bridger-arnold.webp",
            name: "Bridger Arnold",
            year_joined: "2022-2023"
        },
        {
            image: "images/ivy-radabaugh.webp",
            name: "Ivy Radabaugh",
            year_joined: "2022-2023"
        },
        {
            image: "images/skyler-green.webp",
            name: "Skyler Green",
            year_joined: "2023-2024"
        },
        {
            image: "images/declan-radabaugh.webp",
            name: "Declan Radabaugh",
            year_joined: "2024-2025"
        },
        {
            image: "images/chase-arnold.webp",
            name: "Chase Arnold",
            year_joined: "2024-2025"
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