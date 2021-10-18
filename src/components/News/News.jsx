import React, { useEffect } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getNews } from "../../redux/newsReducer";
import Loading from "../Loading/Loading";
import DateDiff from "../Common/DateDIff";
import { Container, Row , Col} from "react-bootstrap";
import { NavLink } from "react-router-dom";
import NewsCard from "./NewsCard";


const News = (props) =>
{
    useEffect(()=>{
        props.getNews();
    },[]);

    if(props.isLoading){
        return <Loading />
    }
    
    
    return <div class="py-5" >
    <Container>
      <Row>
        <Col>
          <h3 class="display-3">Last news</h3>
        </Col>
      </Row>
      <Row>
        {props.news.map(c=> 
            <NewsCard news={c} />             
        )}
      </Row>
    </Container>
  </div>
 
}

let mapStateToProps = (state) => ({
    news: state.news.news,
    isLoading: state.news.isLoading,
});


export default compose(connect(mapStateToProps, {getNews}))(News);

