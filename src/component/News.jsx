import { Link } from "react-router-dom";

function News(props) {
  const news = props.news;

  return (
    <ul>
      {news.map((item) => (
        <Link to={`/news/${item.id}`}>News {item.id}</Link>
      ))}
    </ul>
  );
}

export default News;
