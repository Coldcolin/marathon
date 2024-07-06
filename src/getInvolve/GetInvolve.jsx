import './GetInvolve.css'
import './GetInvolveRes.css'
import getInvolved1 from '../assets/getInvolved1.png'
import getInvolved2 from '../assets/getInvolved2.png'
import getInvolved3 from '../assets/getInvolved3.png'
import getInvolved4 from '../assets/getInvolved4.png'
import getInvolved5 from '../assets/getInvolved5.png'
import getInvolved6 from '../assets/getInvolved6.png'


const GetInvolveCard = (props) => {
    return (
        <div className='getInvolveCard' style={{ flexDirection: props.direction }}>
            <div className='getInvolveCardContainer'>
                <img src={props.img} alt="" />
            </div>
            <div className='getInvolveCardWrite'>
                <div className="get_involve_card_h1">
                    {props.h1}
                </div>
                <div className="get_involve_card_p">
                    {props.p} <span>{props.span}</span>
                </div>
                <div className="get_involve_card_btn">
                    <button>{props.btn}</button>
                </div>
            </div>
        </div>
    )
}





const GetInvolve = () => {
    return (
        <div className='get_involve_main_body'>
            <div className="get_involve_hero_container">
                GET INVOLVED
            </div>
            <div className="get_involve_card_container">
                <div className="get_involve_card_wrapper">
                    <GetInvolveCard img={getInvolved1} h1='REGISTER FOR A RACE' p="Join the Ajegunle city marathon runners and raise awareness to promote: peace, youth inclusion and good governance." btn='Register' />
                    <GetInvolveCard direction='row-reverse' img={getInvolved2} h1='VOLUNTEER' p='Join the Ajegunle city marathon as a volunteer. This is a great way of making a difference with us' btn='Volunteer' />
                    <GetInvolveCard img={getInvolved3} h1='MEDIA ACCREDITATION' p='Interested in becoming our media partner? find out how to become accredited and have access to cover the race.' btn='Learn more ' />
                    <GetInvolveCard direction='row-reverse' img={getInvolved4} h1='BECOME A SPONSOR' p='We have a range of  categories for and cost share packages for interested sponsors ' btn='Contact us ' />
                    <GetInvolveCard img={getInvolved5} h1='PARTNER WITH US' p='We keenly recognize the impact for all our Corporate and philanthropic partnership. You too can' span='BECOME A PARTNER' btn='Contact us' />
                    <GetInvolveCard direction='row-reverse' img={getInvolved6} h1='DONATE' p='All proceeds shall go to support disadvantaged AYP identified from the marathon activities whom  thereafter will be prioritized and enrolled into developmental programs. ' btn='Donate' />
                </div>
            </div>
        </div>
    )
}

export default GetInvolve