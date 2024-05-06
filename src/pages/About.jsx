import React from "react";

const About = () => {
  return (
    <div className="px-[10px] sm:px-[20px] md:px-[40px] lg:px-[40px] xl:px-[120px] py-10">
      <h1 className="lg:text-[38px] text-[25px] md:text-[32px] font-bold">
        Kompaniya haqida
      </h1>
      <div className="py-8">
        <img
          src="https://maxway.uz/_next/image?url=%2Fimages%2Fabout.png&w=1920&q=75"
          alt="logo"
          className="w-full rounded-xl"
        />
      </div>
      <p className="max-w-[70%] lg:text-[18px] text-[12px] md:text-[16px] text-[#252C32]">
        Kompaniya 2005 yilning fevral oyida Toshkent shahrida tashkil etilgan.
        Hozirda kompaniyaning Toshkent shahrida 18 ta filiali mavjud.
      </p>
      <p className="max-w-[70%] lg:text-[18px] text-[12px] md:text-[16px] text-[#252C32] ">
        Taomnoma asosan klаb sendvichlari, hot-doglar, burgerlar, lavashlar va
        donarlardan iborat. Bizning ustuvor yo'nalishlarimiz - ingredientlarning
        yangiligi va sifati, qo'shimchalarning xilma-xilligi, arzon narxlar va
        mehmonlarning takliflariga e'tibor.
      </p>
      <p className="max-w-[70%] lg:text-[18px] text-[12px] md:text-[16px] text-[#252C32]">
        Har kuni turli xil odamlar MaxWay-dan buyurtma berishadi. Biz esa
        tashrif buyuruvchilar sonini ham, filiallar sonini ham oshirishga
        harakat qilmoqdamiz. Har bir tayyorlangan taom bilan biz o'ziga xos
        retseptlarning tafsilotlarini aniqlaymiz va sizning sevimli brendingiz
        bo'lishda davom etish uchun narx va sifatning mukammal muvozanatini
        qidiramiz.
      </p>
      <p className="max-w-[70%] lg:text-[18px] text-[12px] md:text-[16px] text-[#252C32]">
        Agar siz kutilmaganda biz tomondan yomon xizmat yoki past sifatli
        pishirilgan taomga duch kelsangiz, bizga @maxwaymasterfood_bot manziliga
        murojaat qiling. Biz ijobiy va salbiy fikr-mulohazalarni mamnuniyat
        bilan qabul qilamiz. Mehmonning shikoyati - bu sovg'a, bu tufayli bizda
        o'sish uchun maqsad bo’ladi.
      </p>
    </div>
  );
};

export default About;
