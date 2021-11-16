import React, { useEffect, useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getNews,addNews } from "../../redux/newsReducer";
import Loading from "../Loading/Loading";
import { Container, Row , Col} from "react-bootstrap";
import NewsCard from "./NewsCard";


const News = (props) =>
{
    useEffect(()=>{
        props.getNews();
    },[]);

    const [offset, setOffset] = useState(0);

    useEffect(() => {
      window.onscroll = () => {
        setOffset(document.documentElement.scrollHeight-window.pageYOffset);        
      }
    }, []);

    useEffect(()=>{      
      if(offset<1000 && !props.isLoading && !props.detailsIsLoading ){
        let newPage =props.page+1
        props.addNews(newPage);
      }
    },[offset]);

    if(props.isLoading){
        return <Loading />
    }
    
    
    return <div className="py-5" >
    <Container>
      <Row>
        <Col>
          <h3 className="display-3">Last news</h3>
        </Col>
      </Row>
      <Row>
        {props.news.map(c=> 
            <NewsCard news={c} />             
        )}
      </Row>
      {props.detailsIsLoading?<Loading />:null}
    </Container>
  </div>
 
}

let mapStateToProps = (state) => ({
    news: state.news.news,
    isLoading: state.news.isLoading,
    detailsIsLoading: state.news.isLoadingDetails,
    page: state.news.currentNewsPage,
});


export default compose(connect(mapStateToProps, {getNews, addNews}))(News);

