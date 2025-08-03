import Image from "next/image";
import data from './data/data.json'
import LinkTreeBranch from "./components/LinkTreeBranch";
import SocialButtons from "./components/SocialButtons";


export default function Home() {
  return (
    <main className=" flex items-center justify-center mt-15 px-4 py-10">
      <div className="flex flex-col items-center w-full max-w-2xl">
        <div className="flex flex-col items-center w-full bg-black/10 rounded-2xl p-4 sm:p-6 shadow-lg border border-white/10">
          <div className="flex flex-col items-center w-full ml-7" >


                <Image
                src={data.avatar}
                alt={data.name}
                width={144}
                height={144}
                className="rounded-full z-10 fade-image transition-opacity duration-500"
              />   

              <h1 className="text-xl sm:text-2xl font-bold text-white mt-4  sm:mb-10 text-center">
                @{data.name}
              </h1>

               <p className="text-lg sm:text-md text-white/70 mb-4 text-center">
                {data.subText}
               </p>
          </div>

          <div className="flex flex-row">
               {data.socials.map((link) => (
            <SocialButtons key={link.url} {...link} />
          ))}
          </div>
         

         

          {data.links.map((link) => (
            <LinkTreeBranch key={link.url} {...link} />
          ))}
        </div>
      </div>
    </main>
  );
}
