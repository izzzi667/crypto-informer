import React  from "react";
import DateDiff from "../Common/DateDIff";
import { Row , Col} from "react-bootstrap";
import { NavLink } from "react-router-dom";

const NewsCard = (props) =>
{
    return <Col lg={12} md={12} p={12} className='shadow-sm bg-light m-1' ><Row>
    <Col p={0} className="d-flex align-items-center"> 
        <img class="img-fluid d-block m-1" src={props.news.project.image.large} /> 
    </Col>
    <Col className="col-11 m-1">
      <p class="lead mb-1 mt-2"> <b>{props.news.user} </b> </p>
      <p><small>{props.news.user_title}</small></p>
      <p class="mb-0">{props.news.description}</p>
      <p><small><DateDiff date={props.news.created_at} /> ago #{props.news.project.type} #{props.news.project.type=='Coin'?
      <NavLink to={'/coin/'+props.news.project.id}>{props.news.project.name}</NavLink>
      :
      props.news.project.name
      }</small></p>
    </Col>
  </Row> </Col>  
    
}

export default NewsCard