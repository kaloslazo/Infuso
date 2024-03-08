import { useState } from "react";
import { InputComponent } from "@/components/ui/"
import { ButtonComponent } from "@/components/ui/";
import { TbSearch } from "react-icons/tb";

interface LibraryPagePropsInterface {
  imageSrc: string;
  category: string;
}

interface LibraryCategoriesInterface {
  category: string;
  link: string;
  icon: string;
}

const libraryFeaturedFeed: LibraryPagePropsInterface[] = [
  {imageSrc: 'https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'AI'},
  {imageSrc: 'https://images.pexels.com/photos/351264/pexels-photo-351264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Business'},
  {imageSrc: 'https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Tech'},
  {imageSrc: 'https://images.pexels.com/photos/618158/pexels-photo-618158.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1', category: 'Politics'},
];

const libraryCategories: LibraryCategoriesInterface[] = [
  { category: 'Sports', link: '#', icon: '🏈' },
  { category: 'Design', link: '#', icon: '🎨' },
  { category: 'Gaming', link: '#', icon: '🎮' },
  { category: 'Science', link: '#', icon: '🧬' },
  { category: 'Health', link: '#', icon: '🚑' },
  { category: 'Music', link: '#', icon: '🎵' },
  { category: 'Travel', link: '#', icon: '✈️' },
  { category: 'Food', link: '#', icon: '🍗' },
];

export const LibraryPage = () => {
  // -> TODO: handle the input value
  const [inputValue, setInputValue] = useState('');

  // -> TODO: handle show featured feeds & categories while input is empty
  const [isInputLoading, setIsInputLoading] = useState(false);

  return (
    <section className="flex flex-col items-center w-full max-w-4xl gap-6 px-4 py-4 mx-auto ">
      {/* Hero */}
      <div className="flex flex-col items-center w-full gap-6">
        <h3 className="max-w-xs text-4xl font-bold text-center text-white capitalize">Follow your favorites Feeds</h3>
        <div className="inline-flex items-center w-full max-w-md gap-2">
          <InputComponent inputPlaceholder="Search by keywords, topic or RSS page." completeInput={false} inputType="search" />
          <ButtonComponent btnText="Search" btnType="submit" btnIcon={<TbSearch />} />
        </div>
      </div>    

      {/* Suggestions if input is empty */}
      {
        !isInputLoading && (
          <div className="flex flex-col items-start w-full gap-8">
            {/* Featured feeds */}
            <h3 className="text-3xl font-bold text-white capitalize">Featured Feeds</h3>
            <div className="flex items-center w-full gap-4">
              {libraryFeaturedFeed.map((eachFeed: LibraryPagePropsInterface) => (
                <a key={eachFeed.category} className="relative flex-grow w-full max-w-sm overflow-hidden border-2 rounded-lg shadow-md cursor-pointer bg-ctp-mantle h-80 border-ctp-surface0" href="#">
                  <img src={eachFeed.imageSrc} className="absolute inset-0 object-cover w-full h-full rounded-lg hover:scale-150" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ctp-mantle to-transparent"></div>
                  <div className="relative flex items-end h-full p-4">
                    <p className="px-3 py-1 text-xs font-semibold uppercase border-2 rounded-sm border-ctp-mauve text-ctp-mauve bg-ctp-mauve/20">{eachFeed.category}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Categories */}
            <h3 className="text-3xl font-bold text-white capitalize">Categories</h3>
            <div className="grid w-full grid-cols-4 gap-4">
              {libraryCategories.map((eachCategory: LibraryCategoriesInterface) => (
                <a key={eachCategory.category} className="flex items-center w-full gap-4 px-4 py-4 text-white transition-colors delay-75 border rounded-lg bg-ctp-mantle border-ctp-surface0 hover:bg-ctp-base" href={eachCategory.link}>
                  <span className="px-2 py-2 text-3xl rounded-lg bg-ctp-base text-ctp-mauve">{eachCategory.icon}</span>
                  <p className="text-lg font-semibold">{eachCategory.category}</p>
                </a>
              ))}
            </div>
          </div>
        )
      }

      {
        // -> Show suggestions from api response
        (isInputLoading && inputValue.length > 0) && (
          <div>
            <li>Xataka</li>
            <li>New York Time</li>
            <li>La Republica</li>
          </div>
        )
      }
    </section>
  )
}
