import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
    const [productList, setProductList] = useState([]);
    const [query, setQuery] = useSearchParams();
    const getProducts = async () => {
    let searchQuery = query.get('q') || "";  
    console.log("쿼리값은?", searchQuery)
    let url = ` https://my-json-server.typicode.com/khjoo1203/hnm/products?q=${searchQuery}`;
    let response = await fetch(url);
    let data = await response.json();
    setProductList(data);
  }
  useEffect(() => {
    getProducts()
  }, [query])
  return (
    <div>
      <Container>
        <Row>
          {productList.map(item =>
          <Col lg={3}>
            <ProductCard item={item}/>
          </Col>)}
        </Row>
      </Container>
       <ProductCard /> 
    </div>
  )
}

export default ProductAll;