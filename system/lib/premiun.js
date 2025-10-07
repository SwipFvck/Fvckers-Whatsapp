/*
Base Name: Fvckers Base
Type: CommonJs
Version: 3.0.0
Security: No Enc 100%
Developer: Swiper Fvck

Thanks To:
  Ruzuren (My Friend)
  Kagenou (My Friend)
  GenShiro (My Friend)
  Xeight (My Friend)
  PutraTzy (My Friend)
  VX Zuu (My Friend)

Best Support:
  Allah Swt
  Dark Angel
  Vxsourcin
  Fvckers
  All Users Script
  
Recode/Add feature? Creadit Me, Please do not sell this script, because this script is provided for free by Swiper Fvck.

Looking for hosting needs? Contact me:
WhatsApp: 6282120820483
Telgram: t.me/SwiperFvck2

Thank you very much
*/

const fs=require("fs-extra");
const path="./system/database/premium.json";
let data={premium:[], public:true};
try{
if (fs.existsSync(path))
{
data=JSON.parse(fs.readFileSync(path, "utf8"));
if (!Array.isArray(data.premium)) throw new Error("Format salah!");
}
else fs.writeFileSync(path,JSON.stringify(data, null, 2));
} catch (e) {
console.warn("⚠️ premium.json error, pakai default.");
data={premium:[], public:true};
}
const save =()=> {
try{
fs.writeFileSync(path,JSON.stringify(data, null, 2));
return true;
} catch (e){
console.error("❌ Gagal simpan:", e);
return false;
}};
const addPremiumUser =id=> {
if (data.premium.some(u=> u.id=== id))
return false;
data.premium.push({id});
return save();
};
const delPremiumUser =id=> {
const i=data.premium.findIndex(u=> u.id === id);
if(i===-1)
return false;
data.premium.splice(i, 1);
return save();
};
const setPublic =val=> {data.public=!!val;
return save();
};
const isPublic =()=> data.public;

module.exports= { 
addPremiumUser,
delPremiumUser,
setPublic,
isPublic 
};