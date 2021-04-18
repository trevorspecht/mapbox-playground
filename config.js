
const config = {
    style: "mapbox://styles/mapbox/dark-v10",
    accessToken: "pk.eyJ1IjoidHJldm9yc3BlY2h0IiwiYSI6ImNrazNoazVvaDBpZmMycGszNWZkYWl0Y3QifQ.d2ogRic-OLtqdvBk0YZltA",
    CSV: "https://docs.google.com/spreadsheets/d/1BIqmPT06veFDmiBFL-80DtxIr44tVr8xoXUE2_x0TE0/gviz/tq?tqx=out:csv&sheet=Sheet1",
    center: [-100, 39], //Lng, Lat
    zoom: 3, //Default zoom
    title: "Black-owned Spirits",
    description: "Click on a location to find available spirits",
    sideBarInfo: ["Name", "Spirit", "Locations", "Description"],
    popupInfo: ["Name", "Website"],
    filters: [
        {
            type: "dropdown",
            title: "Spirit Type",
            columnHeader: "Spirit",
            listItems: [
              'Vodka',
              'Bourbon/Whiskey',
              'Tequila',
              'Rum',
              'Gin',
              'Cognac',
              'Liqueur/Other'
            ]
        }
      /*  {
            type: "checkbox",
            title: "Title of filter: ",
            columnHeader: "Column Name",
            listItems: ["filter one", "filter two", "filter three"]
        },
        {
            type: "dropdown",
            title: "Title of filter: ",
            columnHeader: "Column Name",
            listItems: [
                'filter one',
                'filter two',
                'filter three',
                'filter four',
                'filter five',
                'filter six',
                'filter seven'
            ]
        }
        */
    ]

};
