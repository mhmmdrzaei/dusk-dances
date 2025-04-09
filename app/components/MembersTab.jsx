'use client';

import { useState } from 'react';
import Image from 'next/image';
import { PortableText } from 'next-sanity';

export default function MembersTabs({ members, mentors, staff }) {
  const [selectedTab, setSelectedTab] = useState('members');

  const renderPeople = (list, type) => {
    if (!list?.length) return null;

    return (
      <div className={`members-list ${type}`}>
        <h2>{type.charAt(0).toUpperCase() + type.slice(1)}</h2>
        <div className="members">
          {list.map((person) => (
            <div key={person.slug.current} className="member-card">
              <Image
                src={
                  person.images?.[0]?.asset?.url ||
                  person.image?.asset?.url ||
                  '/placeholder.jpg'
                }
                alt={
                  person.images?.[0]?.alt ||
                  person.image?.alt ||
                  `${type} image`
                }
                width={150}
                height={150}
              />
              <h3>{person.name}</h3>
              <p>{person.location || person.position}</p>
              {person.email && <a href={`mailto:${person.email}`}>Email</a>}
              {person.website && (
                <a href={person.website} target="_blank" rel="noopener noreferrer">
                  Visit Website
                </a>
              )}
              {
                person.bio && 
                <PortableText value={person.bio}/>
              }
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div>
      <div className="tabs">
        <button onClick={() => setSelectedTab('members')}>Members</button>
        <button onClick={() => setSelectedTab('mentors')}>Mentors</button>
        <button onClick={() => setSelectedTab('staff')}>Staff</button>
      </div>

      <div className="members-list">
        {selectedTab === 'members' && renderPeople(members, 'members')}
        {selectedTab === 'mentors' && renderPeople(mentors, 'mentors')}
        {selectedTab === 'staff' && renderPeople(staff, 'staff')}
      </div>
    </div>
  );
}
