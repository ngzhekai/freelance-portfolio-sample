import config from "@/lib/config";

const Footer = () => {
    return (
        <footer className="footer footer-center self-center bg-transparent p-5 text-base-content">
            <div>
                <p>
                    Copyright &copy; {new Date().getFullYear()} - All right
                    reserved by {config.siteOwner}
                </p>
            </div>
        </footer>
    );
};
export default Footer;
