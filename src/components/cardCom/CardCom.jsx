import "./CardCom.css"

import Card from "react-bootstrap/Card"
import { Link } from "react-router-dom"

function CardCom({ pic, title, text, id }) {
  return (
    <>
      <Card style={{ width: "18rem", height: "345px" }}>
        <Card.Img variant="top" src={pic} style={{ height: "167px" }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{text}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Link variant="primary" to={`/Rooms/${id}`}>
            مشاهده جزئیات اتاق
          </Link>
        </Card.Footer>
      </Card>
    </>
  )
}

export default CardCom
