import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-4">
      <h1>SVERIGES BÄSTA SPÅRNINGSTJÄNST</h1>
      <h3>
        När det kommer till att hålla koll på dina paket, finns det inget bättre alternativ än oss.
        Vi är Sveriges mest pålitliga och avancerade spårningstjänst, och vi vet att du inte nöjer
        dig med mindre. Vårt system är så exakt att vi nästan kan förutsäga din leverans innan du
        ens beställt något. Oavsett om du skickar ett vykort till grannen eller en palett till andra
        sidan världen, har vi koll. Glöm försvunna paket och långa väntetider – vi har eliminerat
        alla problem du någonsin har haft med leveranser.
      </h3>
      <Image
        src={"/parcel_man.jpg"}
        width={200}
        height={200}
        alt="man holding a parcel"
        className="w-full"
      />
    </div>
  );
}
