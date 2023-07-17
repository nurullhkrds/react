import Displayed from "components/Displayed";
import React from "react";
import img1 from "../helper/ab67706f0000000209a6a9dc7174a1689b8d8aae.jpg"
import img2 from "../helper/alexsargo.jpg"
import img3 from "../helper/narahjones.jpg"
import img4 from "../helper/ceza.jpg"
import img5 from "../helper/2pac.jpg"





function Home() {
  const items=[
    {
      id:1,
      title:"Ev Ofis",
      desc:"Evden çalışırken müzik dinlemeyi sevenlere. ",
      artist:"Christian Bale",
      img:img1,
      type:"album",
      src:"https://cdn.freesound.org/previews/696/696153_1089955-lq.mp3"
    }, 
     {
      id:2,
      title:"Hız tutkunu",
      desc:"Rock takip edebilenlere. ",
      img:img2,
      artist:"Alex Sargo",
      type:"artist",
      src:"https://cdn.freesound.org/previews/692/692804_1365895-lq.mp3"

    },
    {
      id:3,
      title:"Hayat Dersi",
      desc:"Kötü hafızaya sahip olanlar için birebir. ",
      artist:"Narah Jones",
      img:img3,
      type:"podcast",
      src:"https://cdn.freesound.org/previews/692/692833_13689779-lq.mp3"

    },
    {
      id:4,
      title:"Rapstar",
      desc:"Kara tahta",
      artist:"Ceza",
      img:img4,
      type:"album",
      src:"https://cdn.freesound.org/previews/692/692559_9034501-lq.mp3"

    },
    {
      id:5,
      title:"Rap",
      desc:"Yabancı Rap",
      artist:"2pac",

      img:img5,
      type:"artist",
      src:"https://cdn.freesound.org/previews/690/690619_9034501-lq.mp3"

    }
  ]
  return (
    <div className="grid gap-y-6">
      <section>
        <Displayed 
        title="Recently played"
        items={items}
        
        />
      </section>
      <section>
        <Displayed 
        title="Show to try"
        items={items}
        
        />
      </section>
      <section>
        <Displayed 
        title="Göz at"
        items={items}
        
        />
      </section>
    </div>
  );
}

export default Home;
