import React from 'react'
import Newsitem from './Newsitem'
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useEffect } from 'react';

const News=(props)=> {
  const [articles,setArticles]=useState([])
  const [loading,setLoading]=useState('loading...')
  const [page,setPage]=useState(1)
  const [totalResults,setTotalResults]=useState(70)

  const fetchData = async () =>{
    let api=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&totalResult=${totalResults}&pageSize=${props.pageSize}`;
    console.log(api)
    let data=await fetch(api)
    let passedData=await data.json()
    console.log(passedData)
    setArticles(passedData.articles)
    setTotalResults(passedData.totalResults)
    setLoading(null)
    document.title=`News Application-${props.category}`
  }

useEffect(()=>{
  fetchData()
},[])


  const handlePrev=()=>{
    setPage(page-1);
    fetchData()

    // let api=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${setPage(page-1)}&totalResult=${totalResults}&pageSize=${props.pageSize}`;
    // console.log(api)
    // let data=await fetch(api)
    // let passedData=await data.json()
    // setArticles(passedData.articles)
    // setTotalResults(passedData.totalResults)
    // setLoading(null)
    // setPage(page-1)
    // document.title=`News Application-${this.props.category}`
    // document.body.style.backgroundColor='#F7CAC9'
  }

  const handleNext=()=>{
    setPage(page+1);
    fetchData()
    // if(page < Math.ceil(totalResults/props.pageSize)){
    // console.log('test')
    // let api=`https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${setPage(page+1)}&totalResult=${totalResults}&pageSize=${props.pageSize}`;
    // console.log('hi')
    // console.log(api)
    // let data=await fetch(api)
    // let passedData=await data.json()
    // setArticles(passedData.articles)
    // setTotalResults(passedData.totalResults)
    // setLoading(null)
    // setPage(page+1)
    // }
    // else{
    // }
    // document.title=`News Application-${props.category}`
  }
return (
  <>
  <h1 className='my-2 centr'>{`News Application Top Headlines-${props.category}`}</h1>
  <p>{loading}</p>
    <div className="container-fluid">
      <div className="row">
        {articles.map((element)=>{
           return <div className="col-lg-4 col-md-6  my-3" key={element.url}>
          <Newsitem titles={element.title} desc={element.description==null?'NO DESCRIPTION AVAILABLE':element.description} image={element.urlToImage==null?'https://mma.prnewswire.com/media/1333368/InvestorsObserver_Logo.jpg?p=facebook':element.urlToImage} url={element.url} author={element.author} time={element.publishedAt} source={element.source.name} />
          </div>
          })}
        </div>
        <div  className='d-flex justify-content-between'>
        <button type="button" disabled={page==1} className="btn btn-dark" onClick={handlePrev}>&#8592; Previous</button>
        <button type="button" disabled={page >= Math.ceil(totalResults/props.pageSize)} className="btn btn-dark" onClick={handleNext}>Next  &#8594;</button>
        </div>
        <br />
      </div>
      </>
    )
}
News.defaultProps = {
  category : 'science',
  country : 'in'
}
News.PropType={
  category: PropTypes.string,
  country: PropTypes.string
}

export default News