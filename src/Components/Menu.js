import { NavLink } from "react-router-dom";
import "../css/Menu.css"
import { useContext, useState } from "react";
import MenuContext from "../Context/MenuContext";
function Menu() {
    const { setMenuOpen } = useContext(MenuContext);
    const [touchStart, setTouchStart] = useState(null)
    const [touchEnd, setTouchEnd] = useState(null)

    // the required distance between touchStart and touchEnd to be detected as a swipe
    const minSwipeDistance = 50

    const onTouchStart = (e) => {
        setTouchEnd(null) // otherwise the swipe is fired even with usual touch events
        setTouchStart(e.targetTouches[0].clientX)
    }

    const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX)

    const onTouchEnd = () => {
        if (!touchStart || !touchEnd) return
        const distance = touchStart - touchEnd
        const isLeftSwipe = distance > minSwipeDistance
        const isRightSwipe = distance < -minSwipeDistance
        // if (isLeftSwipe || isRightSwipe) console.log('swipe', isLeftSwipe ? 'left' : 'right')
        // add your conditional logic here
        if(isLeftSwipe){
            setMenuOpen(false);
        }
    }
    return (
        <div className="menu" onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
            <div className="menu-header">
                <h1 className="menu-title">Menu</h1>
                <h1 className="menu-x" onClick={() => setMenuOpen(false)}>&#x2716;</h1>
            </div>
            <ul className="menu-list">
                <li className="menu-item"><NavLink to="/" end onClick={()=>{setMenuOpen(false);return true}}>Home</NavLink></li>
                <li className="menu-item"><NavLink to="/public-hours" onClick={()=>{setMenuOpen(false);return true}}>Public Hours</NavLink></li>
                <li className="menu-item"><NavLink to="/news" onClick={()=>{setMenuOpen(false);return true}}>Newsletters/Announcements</NavLink></li>
                <li className="menu-item"><a href="https://forms.office.com/r/2xx9qufVMj" onClick={()=>{setMenuOpen(false);return true}}>Client Satisfaction Survey</a></li>
                <li className="menu-item"><NavLink to="/misc" onClick={()=>{setMenuOpen(false);return true}}>Miscellaneous</NavLink></li>
            </ul>
        </div>
    )
}

export default Menu;