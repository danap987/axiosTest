import { BsFacebook, BsTiktok, BsTwitter, BsYoutube } from "react-icons/bs";
import "./SocialMedia.css";
interface SocialMediaProps {
    facebook: boolean;
    twitter: boolean;
    youtube: boolean;
    tiktok: boolean;
}
function SocialMedia(props: SocialMediaProps): JSX.Element {
    return (
        <div className="SocialMedia">
            <a href="https://www.facebook.com/Clalit/">{props.facebook && <BsFacebook size={42} />}</a>
            <a href="https://twitter.com/ClalitHealth">{props.twitter && <BsTwitter size={42} />}</a>

            {/* {props.facebook && <BsFacebook size={42} />}
            {props.twitter && <BsTwitter size={42} />} */}
        </div>
    );
}

export default SocialMedia;
