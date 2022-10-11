import React,{useState} from "react";
import './MainNavigation.css';
import { Link } from "react-router-dom";

const MainNavigation = () => {
    const [isActive, setIsActive] = useState('Signature');

    const handleClick = (itemname) => {

    setIsActive(itemname);
    };
    return (
        <>
            <div>
                <nav>
                    <Link to = '/' className="btn btn-padding" style={{
                        backgroundColor: isActive==='Signature' ? '#ec810d' : '',
                        color: isActive==='Signature' ? 'white' : '',
                        }}onClick={()=>handleClick('Signature')}>
                            <img src="./assets/star.png"/>Signatures
                    </Link>
                    <Link to = '/croissant' className="btn btn-padding" style={{
                        backgroundColor: isActive==='Croissant' ? '#ec810d' : '',
                        color: isActive==='Croissant' ? 'white' : '',
                        }}onClick={()=>handleClick('Croissant')}>
                            <img src="./assets/croissant.png"/>Croissant
                    </Link>
                    <Link to = '/waffle' className="btn btn-padding" style={{
                        backgroundColor: isActive==='Waffle' ? '#ec810d' : '',
                        color: isActive==='Waffle' ? 'white' : '',
                        }}onClick={()=>handleClick('Waffle')}>
                            <img src="./assets/waffle.png"/>Waffle
                    </Link>
                    <Link to = '/coffee' className="btn btn-padding" style={{
                        backgroundColor: isActive==='Coffee' ? '#ec810d' : '',
                        color: isActive==='Coffee' ? 'white' : '',
                        }}onClick={()=>handleClick('Coffee')}>
                            <img src="./assets/coffee.png"/>Coffee
                    </Link>
                    <Link to = '/ice-cream' className="btn btn-padding" style={{
                        backgroundColor: isActive==='Ice cream' ? '#ec810d' : '',
                        color: isActive==='Ice cream' ? 'white' : '',
                        }}onClick={()=>handleClick('Ice cream')}>
                            <img src="./assets/ice-cream.png"/>Ice cream
                    </Link>
                </nav>
            </div>
        </>
    );
}

export default MainNavigation;