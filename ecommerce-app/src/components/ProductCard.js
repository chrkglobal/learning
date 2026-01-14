import { Card, Button } from 'antd';

export default function ProductCard({ product }) {
  return (
    <Card hoverable cover={<img alt={product.title} src={product.image} />}>
      <h3>{product.title}</h3>
      <p>₹{product.price}</p>
      <Button type="primary">Add to Cart</Button>
    </Card>
  );
}
