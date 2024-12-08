import React from 'react'
import FeedPhotos from './FeedPhotos'
import FeedModal from './FeedModal'
import PropTypes from 'prop-types';
const Feed = ({user}) => {
  const [modalPhoto, setModalPhoto] = React.useState(null)
  const [pages, setPages] = React.useState([1])
  const [infinite,setInfinite] = React.useState(true);
  React.useEffect(()=>{
    function infiniteScroll(){
      if(infinite){
        let wait = false;
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if(scroll > height * .75 && !wait){
          setPages((pages)=>[...pages, pages.length + 1]);
          wait = true
          setInterval(()=>{
            wait = false;
          },1000)
        }
      }
    }
    window.addEventListener('wheel',infiniteScroll);
    window.addEventListener('scroll', infiniteScroll);
    return () => {
      window.removeEventListener('wheel',infiniteScroll);
      window.removeEventListener('scroll', infiniteScroll);
    }
  },[infinite])

  return (
    <div>
      {modalPhoto && <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto}/>}
      {pages.map(page => <FeedPhotos key={page} page={page} user={user} setInfinite={setInfinite} setModalPhoto={setModalPhoto}/>
      )}
      {!infinite && <p style={{margin: "2.2rem 0", textAlign: "center", color: "#8c8c8c"}}>Não há mais Postagens</p>}
    </div>
  )
}

Feed.defaultProps = {
  user: 0,
}

Feed.propTypes = {
  user: PropTypes.oneOfType([PropTypes.string.isRequired, PropTypes.number.isRequired]),
}

export default Feed