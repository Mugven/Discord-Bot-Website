
export default function Partners() {

    return (
        <>
            <div className="w-full my-10">
            <div className="flex w-full justify-center">
      <img width="400" src="/img/bck4.png" />
      </div>
                <h1 className="py-7 animateHeader text-4xl font-extrabold text-center text-white">
                    <i className="fal fa-stars text-amber-400 mr-2" />
                    Ortaklar
                </h1>
            </div>

            <div className="lg:max-w-screen-lg mt-10 mx-auto grid grid-cols-1 md:grid-cols-2 gap-4">

            <div className="flex flex-col justify-center text-white rounded">
            <a href="https://codeshare.me">
                        <div className="flex-1 gap-x-4 flex items-center bg-gradient-to-b from-neutral-900/80 to-neutral-900/20 p-3 rounded-full">
                            <img className="rounded-full h-32 w-32" src="https://cdn.discordapp.com/icons/676124992919830548/72826a4ed7d1a010df263623be5dd4ba.png" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">Code Share</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                      Code Share, geliştiricilerin projelerini paylaşmaları, diğer geliştiricilerle etkileşime girmeleri ve projelerini para karşılığında satmaları, farklı kategorilerde ve yazılım dillerinde birçok projeyi keşfetmeleri için ideal bir platform sunar.
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>


                            <div className="flex flex-col justify-center text-white rounded">
            <a href="https://discord.gg/tkh">
                        <div className="https://discordapp.com/channels/1188363544694104064/1188435656234516480/1190580428088811580">
                            <img className="https://discordapp.com/channels/1188363544694104064/1188435656234516480/1190580428088811580
" />
                            <div>
                                <h1 className="leading-none text-3xl font-bold text-white">TKH</h1>        
                                <div className="flex items-center mt-1">
                                    <p className="font-normal font-sm">
                                  Discord'ta aktif ve canlı sohbetin oldu tek yer. Her hafta çekiliş ve özel botlar bulunan bir sunucuya neden katılmak istemiyorsunuz?
                                    </p>
                                </div>     
                            </div>
                        </div>
                    </a>
                    </div>

                </div>
                <div className="py-10"></div>
        </>
    );
};
