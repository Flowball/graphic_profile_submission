import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 items-center lg:mx-36">
      <h1>SVERIGES BÄSTA SPÅRNINGSTJÄNST</h1>
      <div className="flex flex-col gap-2 lg:flex-row h-full lg:w-4/5">
        <h3 className="lg:w-2/4 lg:self-center ">
          När det kommer till att hålla koll på dina paket, finns det inget bättre alternativ än
          oss. Vi är Sveriges mest pålitliga och avancerade spårningstjänst, och vi vet att du inte
          nöjer dig med mindre. Vårt system är så exakt att vi nästan kan förutsäga din leverans
          innan du ens beställt något. Oavsett om du skickar ett vykort till grannen eller en palett
          till andra sidan världen, har vi koll. Glöm försvunna paket och långa väntetider – vi har
          eliminerat alla problem du någonsin har haft med leveranser.
        </h3>
        <Image
          src={"/parcel_man.jpg"}
          width={200}
          height={200}
          alt="man holding a parcel"
          className="w-full lg:w-2/4"
        />
      </div>
    </div>
  );
}
