import DocumentTitle from '../../components/DocumentTitle';
import css from "./HomePage.module.css"

export default function HomePage() {
  return (
    <>
      <DocumentTitle>Home</DocumentTitle>

      <div>
        <h1 style={css.title}>
          Task manager welcome page{' '}
          <span role="img" aria-label="Greeting icon">
            💁‍♀️
          </span>
        </h1>
      </div>
    </>
  );
}
