type MyListHeaderProps = {
  count: number
}

function MyListHeader({count}: MyListHeaderProps): JSX.Element {
  return (
    <h1 className="page-title user-page__title">My list <span className="user-page__film-count">{count}</span></h1>
  );
}

export default MyListHeader;
