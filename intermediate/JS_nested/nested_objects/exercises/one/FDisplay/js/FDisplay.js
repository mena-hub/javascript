let designerData = {
  firstName: "Natalia",
  additionalData: {
    freelance: true,
    hobbies: ["Pintura", "Digitalización", "Serigrafía"],
    moreDetails: {
      currently: "Tomando pedidos",
      yearsWorked: 9,
      tookCourses: true,
      hometown: {
        city: "C.A.B.A",
        country: "Argentina",
      },
      neighborhoodsLivedIn: ["Balvanera", "Parque Patricios"]
    }
  }
}

function displayNeighborhoods() {
    let neighborhoods = designerData.additionalData.moreDetails.neighborhoodsLivedIn;

    for (let i = 0; i < neighborhoods.length; i++) {
      console.log(neighborhoods[i]);
    }
}
displayNeighborhoods();

function displayHometownData() {
    let hometown = designerData.additionalData.moreDetails.hometown;

    for (let key in hometown) {
      console.log(hometown[key]);
    }
}
displayHometownData();