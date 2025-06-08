import Image from "next/image";
import { PortableText } from "next-sanity";

export default function StaffCard({ staff }) {
  return (
      <div key={staff._id} className="staff-card">
        {staff.image && (
          <div className="staff-image">
            <div className="background"></div>
            <Image
              src={staff.image?.asset?.url || "/placeholder.jpg"}
              alt={staff.image?.alt || `${staff.name} image`}
              width={500}
              height={500}
            />
          </div>
        )}
        <div className={`staff-details ${staff.image ? "staff-30" : ""}`}>
          <h2 className="staff-name">{staff.name}</h2>
          <h3 className="staff-position">{staff.position}</h3>
          <div className="staffContact">
            {staff.email && <a href={`mailto:${staff.email}`}>Contact</a>}
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

          {staff.bio && (
            <div className="staffBio">
              <PortableText value={staff.bio} />
            </div>
          )}
        </div>
      </div>
  );
}
