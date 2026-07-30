import { Link } from "react-router-dom";

function TopicCard({ title, description, path }) {
  return (
    <Link to={path}>
      <div
        style={{
          border: "1px solid #ccc",
          padding: "20px",
          margin: "15px 0",
          borderRadius: "10px",
          cursor: "pointer",
        }}
      >
        <h2>{title}</h2>

        <p>{description}</p>
      </div>
    </Link>
  );
}

export default TopicCard;