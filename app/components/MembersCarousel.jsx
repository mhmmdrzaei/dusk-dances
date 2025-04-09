import { getRandomMembers } from "@/sanity/sanity.utils";

import Image from 'next/image';

export default async function MembersCarousel() {
  const members = await getRandomMembers();

  if (!members.length) {
    return <div>No members found</div>;
  }

  return (
      <div className="carousel-container">
        {members.map((member) => (
          <div key={member.slug.current} className="member-card">
            <Image
              src={member.images?.asset?.url || '/placeholder.jpg'}
              alt={member.images?.alt || 'Member Image'}
              width={200}
              height={200}
            />
            <h3>{member.name}</h3>
            <p>{member.location}</p>
            <a href={member.website} target="_blank" rel="noopener noreferrer">
            {member.website} 
            </a>
          </div>
        ))}
      </div>
  );
}
