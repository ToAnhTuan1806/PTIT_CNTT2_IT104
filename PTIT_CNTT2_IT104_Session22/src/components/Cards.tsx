import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

export default function Cards() {
  return (
    <div style={{margin: "20px", display: "flex", gap: "24px",flexWrap: "wrap"}}>
    <Card style={{ width: "18rem", borderRadius: 12 }} className="shadow-sm">
      <Card.Img variant="top" src="https://tse4.mm.bing.net/th/id/OIP.KI_ILz0Ra0QpOMXVpCyxXAHaE8?rs=1&pid=ImgDetMain&o=7&rm=3" 
      style={{ height: 180, objectFit: "cover", borderTopLeftRadius: 12, borderTopRightRadius: 12 }}/>
      <Card.Body className="text-center">
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            The reason I am selling the machine is because it is too
            much power for what I need
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
        <Button variant="primary">Xem chi tiết</Button>
            <span className="fw-semibold" style={{ color: "#111827" }}>
              30.000.000 đ
            </span>

        </div>
      </Card.Body>
    </Card>
    <Card style={{ width: "18rem", borderRadius: 12 }} className="shadow-sm">
      <Card.Img variant="top" src="https://th.bing.com/th/id/OIP.QLPXDX1m1dQPKc1vb5mbxQHaEK?w=321&h=180&c=7&r=0&o=7&dpr=1.5&pid=1.7&rm=3" 
      style={{ height: 180, objectFit: "cover", borderTopLeftRadius: 12, borderTopRightRadius: 12 }}/>
      <Card.Body className="text-center">
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
            The reason I am selling the machine is because it is too
            much power for what I need.
        </Card.Text>
        <div className="d-flex justify-content-between align-items-center">
        <Button variant="primary">Xem chi tiết</Button>
            <span className="fw-semibold" style={{ color: "#111827" }}>
              30.000.000 đ
            </span>

        </div>
      </Card.Body>
    </Card>
    </div>
  )
}
