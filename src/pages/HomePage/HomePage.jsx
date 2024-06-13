import DocumentTitle from '../../components/DocumentTitle';
import css from "./HomePage.module.css"

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div className={css.homePage}>
        <h1 className={css.title}>
          Open your personal phone book
        </h1>
      </div>
    </>
  );
}
