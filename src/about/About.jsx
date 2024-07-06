import { IoMdPlay } from 'react-icons/io'
import './About.css'
import './AboutRes.css'
import about3 from '../assets/about3.png'
import about4 from '../assets/about4.png'
import about5 from '../assets/about5.png'
import about6 from '../assets/about6.png'
import { NavLink } from 'react-router-dom'






const About = () => {


  const AboutCard = (props) => {
    return (
      <div className='about_card_body'>
        <div className="about_card_img_div">
          <img src={props.img} alt="committe member" className='about_card_img' />
        </div>
        <div className="about_card_name_committe_wrapper">
          <h2 className='about_card_name_committe_H2'>{props.H2}</h2>
          <p className='about_card_name_committe_P'>Click here to view profile</p>
        </div>
      </div>
    )
  }





  return (
    <div className='about_main_body'>
      <div className="about_hero_wrapper">
        <ul className='about_hero_UL'>
          <li>
            <NavLink to={'/about_general_info'} className={'about_menu_not_active'}>General info</NavLink>
          </li>
          <li>
            <NavLink to={'/about_category_of_participant'} className={'about_menu_not_active'}>Category of Participants</NavLink>
          </li>
          <li>
            <NavLink to={'/about_how_to_register'} className={'about_menu_not_active'}>How to register</NavLink>

          </li>
          <li>
            <NavLink to={'/about_routes_and_map'} className={'about_menu_not_active'}>Routes & Map</NavLink>

          </li>
          <li>
            <NavLink to={'/about_prizes'} className={'about_menu_not_active'}>Prizes</NavLink>

          </li>
          <li>
            <NavLink to={'/about_race_result'} className={'about_menu_not_active'}>Race Results</NavLink>

          </li>
        </ul>
        <div className="about_hero_img_wrapper">
          <div className="about_hero_image_div">
            <div className="about_hero_image_play_btn">
              <IoMdPlay />
            </div>
          </div>
        </div>
      </div>
      <div className="about_AJCYM_project_div">
        AJCYM Project
      </div>
      {/* <div className="about_AJCYM_project_marathon">
        “ABOUT AJEGUNLE CITY YOUTH MARATHON”
      </div> */}
      <div className="about_AJYCM_project_article_wrapper">
        <div className="about_AJYCM_project_article_image_wrapper">
          <div className="about_AJYCM_project_article_left_image_container1">
            <img src={about3} alt="athlete" className='about_AJYCM_project_article_left_image' />
          </div>
          <div className="about_AJYCM_project_article_right_image_container2">
            <img src={about4} alt="athlete" className='about_AJYCM_project_article_right_image1' />
            <img src={about5} alt="athlete" className='about_AJYCM_project_article_right_image2' />
          </div>
        </div>
        <div className="about_AJYCM_project_article">
          <div className="about_AJCYM_project_marathon">
            “ABOUT AJEGUNLE CITY YOUTH MARATHON”
          </div>
          <p className='about_AJYCM_project_article_P'>
            The<span className='about_AJYCM_project_article_SPAN'> Ajegunle City Youth Marathon, 2024</span> is organized by Society for Information and Human Advancement Initiative, SOHAI a non-profit making organisation in Partnership with the National Youth Council of Nigeria Ajeromi-Ifelodun Local Chapter (NYCN-AJIF) and together with other consortium partners represented on the Local Organising Committee (LOC) which includes: Ajegunle Co-Working Hub, Kobis Global Studios, Klick Designs, Mula Integrated Concepts, The Curve Africa, and National Youth Council Of Nigeria, Ifelodun Local Chapter (NYCN-Ifelodun). The Ajegunle City Youth Marathon, 2024 is the maiden edition and promising to become a major sporting event in the annals of the Ajegunle community. The marathon is set to attract thousands of participants from all over Ajegunle communities and beyond, and will provide a platform to showcase the community’s potential for sports and tourism and also for young athletes to showcase their talents and compete for prizes. The Ajegunle City Youth Marathon, 2024 beyond just a sporting event; it is also a community event that will brings people together and promote peace and unity. The marathon is a celebration of the resilience and determination of the youth of Ajegunle, and it is a source of inspiration for the entire community.
          </p>
          <p className='about_AJYCM_project_article_P'>
            In addition to promoting health and fitness, youth development and empowerment, the Ajegunle City Youth Marathon, 2024 also serves as a fund raiser for various community projects to support educational programs, healthcare initiatives, and other projects that will benefit the youth of Ajegunle.
          </p>
          <p className='about_AJYCM_project_article_P'>
            The Ajegunle City Youth Marathon, 2024 event consists of the main 5kilometer race (5K #RUNAjegunle) event that runs through strategic routes across streets from Ajeromi-Ifelodun LGA to Ifelodun LCDA, showcasing Ajegunle’s key socio-cultural values, ethnic diversity among participants and onlookers, economic potential and abundance of humans resources in her populousness, while promoting healthiness and peaceful coexistence for building sustainable communities. The event will also feature pre/and post activities including side events (that will host dignitaries, private corporate partners, government and key community stakeholders amidst other variety of activities which will make the entire event a memorable and laudable one to enter into the annals of Ajegunle Youth Council and LGA/LCDA.
          </p>
          <p className='about_AJYCM_project_article_P'>
            The Ajegunle City Youth Marathon is a symbol of hope for brighter future and inspiration for the youth of Ajegunle, and it is a reminder that our communities can only develop and thrive in a peaceful and eco-friendly atmosphere.
          </p>
        </div>
      </div>
      <div className="about_AJYCM_local_committee_container">
        <div className="about_AJYCM_local_committee_body">
          <h1 className='about_AJYCM_local_committee_body_H1'>Local Organising Committee</h1>
          <p className='about_AJYCM_local_committee_body_P'> Names of LOC Members and short profile</p>
          <div className="about_AJYCM_local_committee_card_body">
            <AboutCard img={about6} H2='Isaac Moses' />
            <AboutCard img={about6} H2='Isaac Success' />
            <AboutCard img={about6} H2='Hakeem L. Igiaba' />
            <AboutCard img={about6} H2='Prince Ogaga Wowo' />
            <AboutCard img={about6} H2='Samuel Kelechi' />
            <AboutCard img={about6} H2='Micheal Utedi' />
            <AboutCard img={about6} H2='Richard Oghenekome' />
            <AboutCard img={about6} H2='Amudalat Temitope' />
            <AboutCard img={about6} H2='Godspower O. Ebize' />
            <AboutCard img={about6} H2='Ese Uche' />
            <AboutCard img={about6} H2='Oghenecaro Lawrence' />
            <AboutCard img={about6} H2='McAnthony Anaelechukwu' />
          </div>

        </div>
      </div>
    </div>
  )
}

export default About