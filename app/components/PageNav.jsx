export default function PageNav({ value }) {
  const items = value?.menuItemsPageNav || [];

  if (!items.length) return null;

  return (
    <nav className="page-inner-nav">
      <ul className="page-list">
        {items.map((item, index) => (
          <li key={index} className="page-nav-item">
            <a href={item.menuItemUrl} className="page-nav-link">
              {item.menuItemName}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
