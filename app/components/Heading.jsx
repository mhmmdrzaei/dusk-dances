import { getRandomMember } from "@/sanity/sanity.utils";
import Image from "next/image";
import './Heading.scss';

export default async function Heading({ headingText }) {
  const [randomMember] = await getRandomMember()

  return (
    <div className="heading-container">
      {headingText && 
        <div className="heading-text-container">
          <h1 className="heading-text">{headingText}</h1>
        </div>
      }
      <div className="">
          <Image src={randomMember.image.asset.url} alt={`${randomMember.image.alt? randomMember.image.alt: 'Room Up Front Member portfolio piece'}`}
          width={800} height={800}/>
          <div className="heading-image-text-box">
            <p className="heading-image-name">{randomMember.name}</p>
            <p className="heading-image-location">{randomMember.location}</p>
          </div>
      </div>
    </div>
  );
}
