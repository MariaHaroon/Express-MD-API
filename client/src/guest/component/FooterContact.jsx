import React from 'react'
import { Row, Container, Col, Button } from 'react-bootstrap'

const FooterContact = () => (
  <Container
    fluid
    style={{ height: '100vh', backgroundColor: '#fff', display: 'table' }}
  >
    <Row style={{ display: 'table-cell', verticalAlign: 'middle' }}>
      <Container>
        <Row>
          <Col lg={4}>
            <h4 style={{ textAlign: 'center' }}>CONTACT</h4>
          </Col>
          <Col lg={8}>
            <p>Need Customization? We’d love to hear from you.</p>
            <p>Send us a message and we’ll respond as soon as possible.</p>
            <Button
              style={{
                backgroundColor: '#fff',
                borderRadius: '0',
                border: '2px solid black',
                float: 'center'
              }}
            >
              <a
                href='https://github.com/MariaHaroon'
                className="url"
                target="_blank"
                style={{ color: '#000', textDecoration: 'none' }}
              >
                Contact us 💁
              </a>
            </Button>
          </Col>
        </Row>
      </Container>
    </Row>
  </Container>
)

export default FooterContact