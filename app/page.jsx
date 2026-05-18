
"use client";
import { useState } from "react";

const data = {
  en:{
    title:"Selected Tel Aviv Areas",
    imgs:["/images/en-0.jpg","/images/en-1.jpg","/images/en-2.jpg"]
  },
  fr:{
    title:"Quartiers sélectionnés de Tel Aviv",
    imgs:["/images/fr-0.jpg","/images/fr-1.jpg","/images/fr-2.jpg"]
  },
  he:{
    title:"אזורים נבחרים בתל אביב",
    imgs:["/images/he-0.jpg","/images/he-1.jpg","/images/he-2.jpg"]
  }
}

export default function Home(){
 const [lang,setLang]=useState("en");
 const t=data[lang];

 return (
  <main style={{background:"#111",minHeight:"100vh",padding:"40px",color:"white"}}>
   <div style={{display:"flex",gap:"10px",marginBottom:"30px"}}>
    <button onClick={()=>setLang("en")}>EN</button>
    <button onClick={()=>setLang("fr")}>FR</button>
    <button onClick={()=>setLang("he")}>HE</button>
   </div>

   <h1>{t.title}</h1>

   <div style={{display:"grid",gridTemplateColumns:"repeat(3,1fr)",gap:"20px"}}>
    {t.imgs.map((img,i)=>(
      <img key={i} src={img} style={{width:"100%",borderRadius:"20px"}} />
    ))}
   </div>
  </main>
 )
}
