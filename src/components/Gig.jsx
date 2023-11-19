import { React, useState} from "react";

const Gig = (props) => {

            let [isClicked, setToggle] = useState(false);

            const handleClick = () => {
                // everytime someones click, isClicke is set to opposite value
                // if was FALE -> TRUE, if was TRUE -> FALSE
                setToggle(!isClicked);
            }
        
            
    return (
        <div className='gig-container'>
            <h3>{props.band_name}</h3>
            <div className="gig-image">
            <img src={props.image_link} alt={props.band_name}/>
            </div>
            
            <p data-testid="band"><b>{props.about_band}</b></p>
            <p data-testid="time-date">{props.time_date}</p>
            <p data-testid="location">{props.location}</p>

            <div data-testid="checkbox-wrapper" className="checkbox-wrapper-24">
            <input
                type="checkbox"
                id={`check-${props.id}`}
                name="check"
                value=""
                checked={isClicked}
                onChange={handleClick}/>
            <label htmlFor={`check-${props.id}`}><span></span>
            {isClicked ? 'Your favourite' : 'Add to favourites'}
            </label>
            </div>

        </div>
    )
}
export default Gig;