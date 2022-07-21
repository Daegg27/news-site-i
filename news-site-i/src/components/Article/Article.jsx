import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function Article(props) {
 
  const {title, created_date, abstract, byline, image} = props


  return (
    <Container>
      <Row>
        <Col><h1>{title}</h1></Col>
        <Col><p>{created_date}</p></Col>
        <Col><h2>{byline != undefined ? byline : ''}</h2></Col>
        <Col>{image ? <img src={image}></img> : <p>Image Not Found</p>}</Col>
        <Col><p>{abstract}</p></Col>
      </Row>
    </Container>
  )
}

export default Article
