import './Blog.css';
import './BlogRes.css';
import { IoMdPlay } from 'react-icons/io'
import blog2 from '../assets/blog2.png'

const Blog = () => {

  const BlogCard = (props) => {
    return (
      <div className='blog_card_body'>
        <div className='blog_card_image_holder'>
          <img src={blog2} alt="" />
        </div>
        <div className='blog_write_holder'>
          <h1 className='blog_write_holder_h1'>{props.h1}</h1>
          <p className='blog_write_holder_p'>{props.p}</p>
          <h2 className='blog_write_holder_h2'>{props.btn}</h2>
        </div>
      </div>
    )
  }







  return (
    <div className='blog_main_body'>
      <div className="blog_hero_section">
        <div className="blog_hero_section_content">
          <h1 className='blog_hero_section_content_h1'>Top Stories</h1>
          <h2 className='blog_hero_section_content_h2'>Highlights:</h2>
          <h2 className='blog_hero_section_content_h2'>Previous marathon held</h2>
          <div className="blog_hero_section_play_container">
            <IoMdPlay />
          </div>
        </div>
      </div>
      <div className="blog_title_header">
        Other Top Stories
      </div>
      <div className="blog_card_container">
        <div className="blog_card_wrapper">
          <BlogCard h1='NBA PLAYOFF X-FACTOR' p='the NBA is on a ' btn='Read more'/>
          <BlogCard h1='NBA PLAYOFF X-FACTOR' p='the NBA is on a ' btn='Read more'/>
          <BlogCard h1='NBA PLAYOFF X-FACTOR' p='the NBA is on a ' btn='Read more'/>
          <BlogCard h1='NBA PLAYOFF X-FACTOR' p='the NBA is on a ' btn='Read more'/>
        </div>
      </div>
    </div>
  )
}

export default Blog