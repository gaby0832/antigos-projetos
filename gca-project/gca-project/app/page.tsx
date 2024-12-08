import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-full">
          <section className="w-full h-screen bg-gca bg-cover">
            <div className="container mx-auto w-full h-full flex flex-1/2 items-center content-center">
              <div>
                <Image className="w-full" src="https://cdn.discordapp.com/attachments/1100524910733963266/1282027673241256016/image.png?ex=66dddcd0&is=66dc8b50&hm=58a867fab95293ec57a29578388b9bc505dc4d2b7e9d9281b698787a070f30a6&" width={400} height={90} alt=""/>
              </div>

              <div className="text-white px-14 max-w-xl">
                <h1 className="text-3xl font-light font-display">Novidades</h1>
                <ul className="flex flex-col gap-4 max-w-xl font-extralight">
                  <li></li>
                  <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan vel ligula quis venenatis. </p></li>
                 <li><p>ravida. Curabitur mattis nisl sit amet est sollicitudin, eget pellentesque nulla commodo. Donec blandit venenatis</p></li>
                  <li><p>consectetur arcu magna, sed laoreet libero dictum quis. Vivamus vulputate sem in ante</p></li>
                   <li><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut accumsan vel ligula quis venenatis. </p></li>
                </ul>
              </div>
                
            </div>
          </section>

          <section className="w-full bg-azul bg-cover">
            <div className="container mx-auto h-screen flex gap-5 items-center text-white">
              <div className="flex flex-col gap-5 w-full">
                <h1 className="text-3xl font-display font-light">DOCUMENTAÇÃO</h1>
                <p className="max-w-xl font-light">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis non justo consectetur, tempus mi nec, dapibus mauris. Suspendisse accumsan mi eget lorem fringilla, vitae cursus ante ornare. Phasellus eget faucibus nunc. Vestibulum sem nunc, convallis at fermentum sed, pharetra sodales elit. Fusce quis velit sem. Donec placerat mauris vitae enim pretium tincidunt. Nullam eu est in lectus malesuada porttitor. Nunc eu lacinia lacus, a aliquet ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et sollicitudin urna</p>
              </div>
              <div className="flex w-full items-center content-center">
                <Image src="https://media.discordapp.net/attachments/1091340777197670460/1282447516654112873/image.png?ex=66df63d2&is=66de1252&hm=0a53eb477af8e91eed5e1b9a6e1e427f770fb800e016f0560fd4fb0bfb95fcbc&=&format=webp&quality=lossless&width=589&height=421" width={500} height={500} alt=""/>
              </div>
            </div>
          </section>

           <section className="w-full h-screen bg-anomalias bg-contain">
          </section>

    </div>
  );
}
