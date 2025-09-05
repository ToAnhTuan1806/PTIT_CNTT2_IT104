import React from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';


export default function Forms() {
  return (
    <div style={{margin: "20px", maxWidth: 720}}>
    <Form>
        <h2 className="text-center fw-bold mb-4">Đăng ký tài khoản</h2>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Nhập email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Nhập mật khẩu" />
        </Form.Group>
      </Row>

        <Form.Group className="mb-3" controlId="fullName">
          <Form.Label>Họ và tên</Form.Label>
          <Form.Control type="text" placeholder="Ví dụ: Nguyễn Văn A" className="rounded-3"/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="address">
          <Form.Label>Địa chỉ</Form.Label>
          <Form.Control type="text" placeholder="Ví dụ: Thanh Xuân, Hà Nội" className="rounded-3"/>
        </Form.Group>

        <Row className="mb-4">
          <Form.Group as={Col} controlId="city">
            <Form.Label>Thành phố</Form.Label>
            <Form.Select defaultValue="Hà Nội" className="rounded-3">
              <option>Hà Nội</option>
              <option>Hồ Chí Minh</option>
              <option>Đà Nẵng</option>
            </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="district">
          <Form.Label>Quận</Form.Label>
          <Form.Select defaultValue="Thanh Xuân" className="rounded-3">
              <option>Thanh Xuân</option>
              <option>Cầu Giấy</option>
              <option>Hoàn Kiếm</option>
          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="zip">
            <Form.Label>Mã bưu điện</Form.Label>
            <Form.Control type="text" className="rounded-3" />
        </Form.Group>
        </Row>
         <div className="d-flex justify-content-center">
          <Button variant="primary" type="submit" className="px-5 rounded-3" style={{ minWidth: 320 }}>
            Submit
          </Button>
        </div>
    </Form>
    </div>
  )
}
