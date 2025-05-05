import Image from 'next/image';
import { PortableText } from 'next-sanity';

export default function StaffCard({ staff }) {
  return (
    <div className="staff">
      <div key={staff._id} className="staff-card">
        <h4>{staff.name}</h4>
        {staff.image && (
          <div className="staff-image">
            <Image
              src={staff.image?.asset?.url || '/placeholder.jpg'}
              alt={staff.image?.alt || `${staff.name} image`}
              width={500}
              height={500}
            />
          </div>
        )}
        <div className="staff-details">
          <h5 className="staff-position">{staff.position}</h5>
          {staff.email && <a href={`mailto:${staff.email}`}>Contact</a>}
          {staff.bio && <PortableText value={staff.bio} />}
          {staff.website && (
            <a
              className="staff-site"
              href={staff.website}
              target="_blank"
              rel="noopener noreferrer"
            >
              {staff.website}
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
