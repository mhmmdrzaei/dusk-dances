import StaffCard from './StaffCard';

export default function StaffPage({ staff: staffMembers, role }) {
  const sortedStaff = [...staffMembers].sort((a, b) => {
    const orderA = a.order ?? Infinity;
    const orderB = b.order ?? Infinity;
    return orderA - orderB;
  });

  return (
    <section className="container">
      <h1 className="staff-title">{role == "staff" ? "Our Team": role}</h1>
      {sortedStaff.map((staff) => (
        <StaffCard key={staff._id} staff={staff} />
      ))}
    </section>
  );
}
