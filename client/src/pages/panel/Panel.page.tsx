const examplePanelFeed: any = [
  { image: "https://images.feedbinusercontent.com/d31/d318cb9471d6e56ae7c7aad8030cf11fa629faa9.jpg", title: "La Justicia allana el camino para que LaLiga identifique y demande a quienes consuman fútbol sin derechos", description: "LaLiga ha conseguido una nueva victoria en su misión por combatir el fútbol sin derechos. El Juzgado de lo Mercantil Nº 08 de Barcelona ha dado luz verde a una solicitud de diligencias de información impulsada por la asociación deportiva presidida…" },
  { image: "https://camo.feedbinusercontent.com/96f4c397f33a6314784ae3800b419bd689335a30/68747470733a2f2f692e626c6f67732e65732f3232303636392f313336365f323030302f313032345f323030302e6a706567", title: "Es la oportunidad de oro para tener el Apple Watch más top: si no entras ya en Miravia, no lo verás al precio de hoy", description: "Después de un mes de febrero frenético, parece que Miravia le ha cogido el gusto a esto del Evening Drop, donde pone en jaque el precio de productos seleccionados durante unas horas. En esta ocasión, desde las 20.00 a las 00.00 horas de este jueves." },
  { image: "https://camo.feedbinusercontent.com/d0ed6ca72bb20f66058fcd5498f56381da5f2973/68747470733a2f2f692e626c6f67732e65732f3337663439362f636f7274652d7072696d65726f732d6575726f70656f732f313032345f323030302e6a706567", title: "El yacimiento ucraniano que ha desbancado a Atapuerca como primer asentamiento humano en Europa", description: "El yacimiento arqueológico de Korolevo fue descubierto hace 50 años y en él no se han encontrado restos óseos de sus antiguos moradores. A pesar de ello, podría ser uno de los sitios arqueológicos más importantes de Europa. 1,4 millones de años. El…" },  
]

export const PanelPage = () => {
  return (
    <section className="flex flex-col items-start w-full max-w-4xl gap-6 px-4 py-4 mx-auto ">
      
      <div className="flex flex-col w-full gap-2 pb-8 border-b-2 border-ctp-surface0">
        <h3 className="text-4xl font-bold text-white">Last Entries</h3>
        <p className="text-text">Your lastest entries from your featured feeds.</p>
      </div>

      <div className="pt-4">
        <ul className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-1">
          {examplePanelFeed.map((entry: any) => (
            <a href="#" className="flex flex-col w-full gap-4 px-4 py-4 transition-colors delay-100 border rounded-lg lg:flex-row bg-ctp-mantle border-ctp-surface0 hover:bg-ctp-crust">
              <div className="flex-grow w-full overflow-hidden md:h-40 h-52 lg:w-full lg:min-w-64">
                <img src={entry.image} alt={entry.title} className="object-cover w-full h-full rounded-lg" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="text-xl font-semibold lg:text-2xl line-clamp-2">{entry.title }</h3>
                <p className="text-lg line-clamp-3">{entry.description}</p>
              </div>
            </a>
          ))}
        </ul>
      </div>
    </section>
  );
};
