import { Link } from "react-router-dom";
import { Button } from "semantic-ui-react";

export default function Hero(){
    return(
        <>
        <section className="section-hero">
            <div className="hero">
                <h2 className="heading-secondary" style={{marginTop: '12rem'}}>We empower individuals to express their unique identities boldly.</h2>
                <Button size="huge"><Link to='/collection' style={{color: 'black'}}>
                Shop Now
                </Link>
                </Button>
            </div>
        </section>
    
        </>
    )
}