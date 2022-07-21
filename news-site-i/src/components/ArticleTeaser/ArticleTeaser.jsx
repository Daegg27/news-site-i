import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function ArticleTeaser(props) {
  
  const {id, title, created_date, handleTitleClick} = props

  return (
    <Container>
      <Row>
        <Col sm='6'><h2 onClick={() => handleTitleClick(id)}>{title}</h2></Col>
        <Col sm='6'><p>{created_date}</p></Col>
      </Row>
      <hr/>
    </Container>
    
  )
}

export default ArticleTeaser;
