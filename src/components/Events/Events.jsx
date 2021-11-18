import React, { useEffect, useState } from "react";
import { compose } from "redux";
import { connect } from "react-redux";
import { getEvents } from "../../redux/newsReducer";
import Loading from "../Loading/Loading";
import { Container, Row , Col} from "react-bootstrap";

const Events = (props) =>
{
    useEffect(()=>{
        props.getEvents();
    },[]);

    if(props.isLoading){
        return <Loading />
    }
    return( 
    <>
    <Row>
    <Col>
        <h3 className="display-3">Upcoming events</h3>
    </Col>
    </Row>
    <hr />
    <div class="container-fluid">
    {props.events.data.map(e=>
    <><div className="row" className="px-md-5 p-3 justify-content-left text-left"><h2>{e.title} ({e.venue}, from {e.start_date} to {e.end_date})</h2></div>
    <div className="row">        
      <div className="px-md-3 p-3 d-flex flex-column justify-content-center text-left col-lg-6">        
        <p className="mb-3 lead">            
            {e.description}</p> <a className="btn btn-link" href={e.address}>Go to site</a>
      </div>
      <div className="p-0 col-lg-6"> <img className="img-fluid d-block" src={e.screenshot} /> </div>
      <hr />
    </div></>
    )}
  </div></>
);
}

let mapStateToProps = (state) => ({
    events: state.news.events,
    isLoading: state.news.isLoading    
});


export default compose(connect(mapStateToProps, {getEvents}))(Events);
