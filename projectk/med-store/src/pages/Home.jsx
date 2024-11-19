import HomeCards from "../components/HomeCards";
import HomeCarousel from "../components/HomeCarousel";
import SocialCard from "../components/SocialCard";

const Home = () => {
    return (
        <div 
            className="relative flex flex-col justify-start items-start gap-8 w-screen h-full bg-cover bg-center"
            style={{
                backgroundImage: "url('https://cdn.prod.website-files.com/5a9ee6416e90d20001b20038/64f5c4f04006834d4de431ef_Rectangle%20(27).svg')",
            }}
        >
            {/* Ensure content has higher z-index */}
            <div className="relative z-10 w-full">
                <HomeCarousel />
                <HomeCards />
                <SocialCard />
            </div>

            {/* Optional Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 z-0"></div>
        </div>
    );
};

export default Home;
