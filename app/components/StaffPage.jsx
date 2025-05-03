import StaffCard from './StaffCard';

export default function StaffPage({ staff: staffMembers }) {
  return (
    <section className="contianer">
      <h1 className="staff-title">Team</h1>
      {staffMembers.map((staff) => (
        <StaffCard key={staff._id} staff={staff} />
      ))}
    </section>
  );
}
