import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom'; 

const ProductList = ({ onSelectProduct }) => {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate(); 

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const handleProductClick = (productId) => {
    navigate(`/products/${productId}`);
  };

  return (
    <div>
      <h1>Products</h1>
      <ul>
        {products.map(product => (
          <Card key={product.id} style={{ width: '18rem' }}>
            <Card.Img variant="top" src={product.image} width='100px' height='100px' />
            <Card.Body>
              <Card.Title>{product.title}</Card.Title>
              <Card.Text>
                {product.description}
              </Card.Text>
              <Link to={`/products/${product.id}`}>
                <Button variant="primary">Go to Detail</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;

