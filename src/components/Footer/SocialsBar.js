
import styled from 'styled-components'
import facebook from "../../assets/icons/footerFb.png"
import instagram from "../../assets/icons/footerIg.png"
import twit from "../../assets/icons/footerTwitter.png"
import link from "../../assets/icons/footerLink.png"
import Line from "../../assets/icons/lineRedes.png"


/*
import Fb from "../../assets/icons/facebook.svg"
import Ig from "../../assets/icons/instagram.svg"
import LinkedIn from "../../assets/icons/linkedin.svg"
import Twitter from "../../assets/icons/twitter.svg"*/

const SocialsContainer = styled.div`
    background-color: var(--dark);
    padding: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-around;
`;

const SocialIcon = styled.div`
    width: 1rem;
    height: 4rem;
`;




const SocialsBar = () => {
  return (
    <div>
        <SocialsContainer>
            {ListSocialsIcon.map(({href, target, src, alt}, index) => (
                <SocialIcon key={index}>
                    <a href={href} target={target}><img src={src} alt={alt} /></a>
                </SocialIcon>
            ))} 
        </SocialsContainer>
    
    </div>
  )
}

const ListSocialsIcon = [
    {
        href: "#",
        target: "_blank",
        src: `${facebook}`,
        alt: "facebook.img",
    },
    {
        href: "#",
        target: "_blank",
        src: `${twit}`,
        alt: "instagram.img",
    },
    {
        href: "#",
        target: "_blank",
        src: `${link}`,
        alt: "linkedin.img",
    },
    {
        href: "#",
        target: "_blank",
        src: `${instagram}`,
        alt: "twitter.img",
    },
];



export default SocialsBar

