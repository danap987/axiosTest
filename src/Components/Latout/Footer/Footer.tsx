
import SocialMedia from "../../Shared/Socialmedia/Socialmedia";
import "./Footer.css";

function Footer(): JSX.Element {
    const start = 1988;
    const end = new Date().getFullYear();

    return (
        <div className="Footer">
            <p>&copy; All right to Dana Palmai {start}-{end} :)</p>

            <SocialMedia facebook={true} twitter={true} youtube={false} tiktok={false} />
        </div>
    );
}

export default Footer;
