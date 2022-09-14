import React, { useEffect, useState } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';

const ProductDetail = () => {
    let {id} = useParams();
    const [product, setProduct] = useState(null);
    const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/khjoo1203/hnm/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  }
  useEffect(() => {
    getProductDetail()
  }, []);
  return (
    <Container>
        <Row>
          <Col className="product-img">
            <img src={product?.img} alt="" />
          </Col>
          <Col>
            <h2>{product?.title}</h2>
            <p>{product?.price}</p>
            <small>{product?.choice ? "Conscious choice" : ""}</small>
            <select>
              {product?.size.map(item => (
                <option>{item}</option>
              ))}
            </select>
            <Button variant="dark" className="btn">추가</Button>
          </Col>
        </Row>
    </Container>
  )
}

export default ProductDetail;