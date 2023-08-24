

let galleryItemsData = [
  {
    ID: "earth",
    img_src: "img_scan/earth.png",
    title_eng: "earth",
    title_hin: "धरती",
    disc: "Earth is the only planet in the solar system to have water in its three states of matter: as a solid(ice), as a liquid (sea,rain,etc) and as a gas (clouds)."
  },
  {
    ID: "moon",
    img_src: "img_scan/moon.png",
    title_eng: "moon",
    title_hin: "चाँद",
    disc: "The moon is the earth's only natural satellite. The Moon is in synchonous rotation with Earth, meaning the same side is always facing the earth."
  },
  {
    ID: "milkyWay",
    img_src: "img_scan/milkyway.png",
    title_eng: "milkyway",
    title_hin: "आकाशगंगा",
    disc: "We live in one if the arms if a large spiral falaxy called the milkyway. The sun and its planets (including earth) lie in this quiet party of the galaxy"
  },
  {
    ID: "island",
    img_src: "img_scan/island.png",
    title_eng: "island",
    title_hin: "द्वीप",
    disc: "An Island us a piece of ground that is surrounded by water. Water is all around an island. Island are smaller than continents."
  },
  {
    ID: "ocean",
    img_src: "img_scan/ocean.png",
    title_eng: "ocean",
    title_hin: "महासागर/समुन्दर",
    disc: "An Ocean is a large area of salt water between continents. Oceans are very big and they join smaller seas together. Oceans cover 70% of our planet."
  },
  {
    ID: "mountain",
    img_src: "img_scan/mountain.png",
    title_eng: "mountain",
    title_hin: "पर्वत",
    disc: "A Mountain is a natural rise of the Earth's surface. Mountains are important ot life on Earth, because most rivers begin in mountains and carry water"
  },
  {
    ID: "river",
    img_src: "img_scan/river.png",
    title_eng: "river",
    title_hin: "नदी",
    disc: "A River is a steam of awater that flows though a \"channel\" (or passage) in the surface if the ground. A river begins on high ground or in hills or mountains and flows down."
  },
  {
    ID: "rainbow",
    img_src: "img_scan/rainbow.png",
    title_eng: "rainbow",
    title_hin: "इंद्रधनुष",
    disc: "A Rainbow is an arc of color in the sky that can be seen when the sun shines throguh falling rain. A rainhow is created when light is bent while entering a droplet of water & reflected"
  },
  {
    ID: "meadow",
    img_src: "img_scan/meadow.png",
    title_eng: "meadow",
    title_hin: "चरागाह/घास का मैदान",
    disc: "A meadow is a field vegetated primarily by grass and other non-woody plants. It may be cut for hay or grazed by livestock such as cattle, sheep it goats."
  },
  {
    ID: "glacier",
    img_src: "img_scan/glacier.png",
    title_eng: "glacier",
    title_hin: "हिमनद/ग्लेसियर",
    disc: "A Glacier is a large body of ice and snow. A glacier forms because the snow is an area does not all melt in summer. Each winter, more snow is added."
  },
  {
    ID: "waterfall",
    img_src: "img_scan/waterfall.png",
    title_eng: "waterfall",
    title_hin: "झरना",
    disc: "A Waterfall is a body of water that rushes down a steep ledge. The water flows from higher land, then it falls down a big step of rock to lower land."
  },

  {
    ID: "sunrise",
    img_src: "img_scan/sunrise.png",
    title_eng: "sunrise",
    title_hin: "सूर्योदय",
    disc: "Sunrise is the instant at which the upper edge of the Sun appears over the eastern horizon in the morning. The sun does not 'rise' in the same spot everyday"
  }

];

let gallery = document.getElementById("gallery");

let generateGallery = () => {
  
  return (gallery.innerHTML = galleryItemsData.map((x) => { 
    let {ID,img_src,title_eng,title_hin,disc} = x;
    return `
    
 
            <div class="col">
                <img src=${img_src} alt="">
                <div class="dharti">
                <h3>${title_eng}</h3>
                <h3>${title_hin}</h3>
                </div>
                <p>
                ${disc}
                </p>
            </div>
   `
            

            
})

.join(""));

};

generateGallery();

