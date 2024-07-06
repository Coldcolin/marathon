import './LandingPage.css'
import './LandingPageRes.css'
import { IoTrophyOutline } from 'react-icons/io5'
import image2 from '../assets/image2.png'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'
import arctIcon from '../assets/arcticons_lets-go-fitness.png'
import map from '../assets/ajegunleMap.png'
import curve from '../assets/theCurve.png'
import ajegunle from '../assets/ajegunleHub.png'
import newsImage1 from '../assets/newsImage1.png'
import newsImage2 from '../assets/newsImage2.png'
import { GoArrowRight } from 'react-icons/go'
import becomeSponsor from '../assets/becomeSponsor.png'
import Footer from '../footer/Footer'
import { Link, NavLink } from 'react-router-dom'
// import { useLayoutEffect } from 'react';
// import { useHistory } from 'react-router-dom';




// const history = useHistory();

// useLayoutEffect(() => {
//   const unlisten = history.listen(() => {
//     window.scrollTo(0, 0);
//   });
//   return unlisten;
// }, [history]);



export const RoadMap = () => {
    return (
        <div className="landing_road_map">
            <div className="landing_road_map_title">
                Route Map for Ajegunle City Youth Marathon
            </div>
            <div className="landing_road_map_img_container">
                <img src={map} alt="" />
            </div>
        </div>
    )
}



const LandingPage = () => {


    const ReadyCard = (props) => {
        return (
            <div className='landing_ready_card'>
                <div className="landing_ready_card_img_holder">
                    <img src={props.pix} alt="link logo" className='landing_ready_card_img' />
                </div>
                <div className="landing_ready_card_holder" style={{ backgroundColor: props.bg }}>
                    <a href="" className='landing_ready_card_A'>{props.link}</a>
                </div>
            </div>
        )
    }

    const CategoryCard = (props) => {
        return (
            <div className='landing_category_card'>
                <div className="landing_category_card_currency_div">
                    &#8358;
                </div>
                <div className="landing_category_card_title_div">
                    <h2 className='landing_category_card_h2'>{props.h2}</h2>
                    <h2 className='landing_category_card_h2'>{props.h3}</h2>
                </div>
                <ul>
                    <li>{props.l1}</li>
                    <li>{props.l2}</li>
                </ul>
            </div>
        )
    }



    const PriceWon = (props) => {
        return (
            <div className='landing_price_card' style={{ backgroundColor: props.bg }}>
                <div className="landing_price_card_wrapper">
                    <div className="landing_price_icon_holder">
                        {props.icon}
                    </div>
                    <div className="landing_price_title_holder">
                        {props.title}
                    </div>
                    <div className="landing_price_article_holder">
                        {props.article}
                    </div>
                </div>
            </div>
        )
    }

    const FitImage = () => {
        return (
            <div style={{
                width: '100%',
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <img style={{
                    // width: '24px',
                    // height: '24p',
                }} src={arctIcon} alt="" />
            </div>
        )
    }

    const Newscard = (props) => {
        return (
            <div className='landing_news_card'>
                <div className="landing_news_img_container">
                    <img src={props.img} alt="" />
                </div>
                <div className="landing_news_article">
                    <div className="landing_news_article_header">
                        <h4 className='landing_news_article_header_h4'>March 20, 2024 / <span className='landing_news_article_header_span'>News</span></h4>
                    </div>
                    <div className="landing_news_article_content">
                        Lorem ipsum dolor sit amet, consectetur adipis cing elit Lorem ipsum dolor sit amet, consectcetur adipiscing elit Lorem ipsum dolor sit amet, consectetur adipiscing elit
                    </div>
                    <div className="landing_news_article_btn">
                        <span className='landing_news_article_btn_span'>View all <GoArrowRight /></span>
                    </div>
                </div>
            </div>
        )
    }


    return (
        <>
            <div className="landing_body">
                <div className="landing_hero">
                    <div className="landing_hero_wrapper">
                        <h2 className='landing_hero_wrapper_h2'>...Building Peaceful and cohesive communities.</h2>
                        <h1 className='landing_hero_wrapper_h1'>“AJEGUNLE CITY YOUTH MARATHON, 2024”</h1>
                        <p className='landing_hero_wrapper_p'>ACYM2024 THEME: “Creating a Peaceful and Eco-friendly Environment for an Expanded Meaningful Youth Engagement through Sports.”</p>
                        <div className="landing_hero_btn_holder">
                            <button className='landing_hero_btn'><Link to="/register">Register now</Link></button>
                        </div>
                    </div>
                </div>
                <div className="landing_ready">
                    <div className="landing_ready_wrapper">
                        <h1 className='landing_ready_wrapper_h1'>Are you ready ?</h1>
                        <div className="landing_ready_wrapper_card_contain">
                            <ReadyCard pix={image2} link='Click here to Register for to participate at the Ajegunle City Youth Marathon, 2024' bg='rgba(23, 183, 136, 1)' />
                            <ReadyCard pix={image3} link='Click here to purchases a raffle tickets and stand a chance to win awesome prizes at the raffle draw event.' bg='rgba(122, 144, 249, 1)' />
                            <ReadyCard pix={image4} link='Click here to place an order for your T-Shirt to support the Ajegunle City Youth Marathon Project.' bg='rgba(23, 150, 183, 1)' />
                        </div>
                    </div>
                </div>
                <div className="landing_category">
                    <div className="landing_category_wrapper">
                        <h1 className='landing_category_wrapper_h1'>CATEGORY OF PARTICIPANTS</h1>
                        <p className='landing_category_wrapper_p'>Teams can compete in the following <span>categories</span>;</p>
                        <div className="landing_category_card_container">
                            <CategoryCard h2='Master Division  ' h3='Persons with Disability' l1='Wheelchair (all males and females Children under 18-29) 5km' l2='Hand crank (all males age under 18 -29) 2.5km' />
                            <CategoryCard h2='Master Division  ' h3='Persons with Disability' l1='Wheelchair (all males and females Children under 18-29) 5km' l2='Hand crank (all males age under 18 -29) 2.5km' />
                            <CategoryCard h2='Master Division  ' h3='Persons with Disability' l1='Wheelchair (all males and females Children under 18-29) 5km' l2='Hand crank (all males age under 18 -29) 2.5km' />
                            <CategoryCard h2='Master Division  ' h3='Persons with Disability' l1='Wheelchair (all males and females Children under 18-29) 5km' l2='Hand crank (all males age under 18 -29) 2.5km' />

                        </div>
                    </div>
                </div>
                <div className="landing_price_category">
                    <div className="landing_price_price_container">
                        <div className="landing_price_category_wrapper">
                            <PriceWon icon='&#8358;' title='N300k To Be Won' article='About 300,000 naira is available to be won by contestants.' bg='rgba(23, 183, 136, 1)' />
                            <PriceWon icon={<IoTrophyOutline />} title='Amazing Prizes' article='Complementary prices are  up for grabs.' bg='rgba(23, 150, 183, 1)' />
                            <PriceWon icon={<FitImage />} title='Stay Fit' article='As race day gets closer, you should also begin to fine-tune some aspects of your diet.' bg='rgba(52, 103, 245, 1)' />
                        </div>
                    </div>

                </div>
                <div className="landing_page_map_container">
                    <RoadMap />
                </div>
                <div className="landing_meet_sponsor">
                    <h1 className='landing_meet_sponsor_h1'>Meet our sponsors and partners</h1>
                    <div className="landing_meet_sponsor_logo_div">
                        <img src={curve} alt="the curve" />
                        <img src={ajegunle} alt="ajegunle logo" />
                    </div>
                </div>
                <div className="landing_news">
                    <h1 className='landing_news_h1'>News and updates</h1>
                    <div className="landing_news_wrapper">
                        <Newscard img={newsImage1} />
                        <Newscard img={newsImage2} />
                        <Newscard img={newsImage1} />
                    </div>
                    <btn className="landing_news_view_more_btn">View more post</btn>
                </div>
                <div className="landing_become_a_sponsor">
                    <div className="landing_become_a_sponsor_wrapper">
                        <div className="landing_beome_a_sponsor_container">
                            <div className='landing_become_a_sponsor_wrapper_1'>
                                <h1 className='landing_become_a_sponsor_wrapper_1_H1'>Become a sponsor</h1>
                                <p className='landing_become_a_sponsor_wrapper_1_P'>SPONSORSHIP CATEGORIES/COST SHARE</p>
                            </div>
                            <div className='landing_become_a_sponsor_wrapper_2'>
                                <ul>
                                    <li>Bronze</li>
                                    <li>Silver</li>
                                    <li>Gold</li>
                                    <li>Platinum</li>
                                    <li>Diamond</li>
                                </ul>
                                <button className='landing_become_a_sponsor_wrapper_2_button'>
                                <NavLink to={"/contact_us"} className={'menu_not_active'}>Contact us</NavLink>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <Footer/> */}
            </div>
        </>
    )
}

export default LandingPage