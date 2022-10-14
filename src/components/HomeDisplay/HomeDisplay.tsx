import CardToPortfolio from "./components/CardToPortfolio/CardToPortfolio";
import CarouselComponent from "./components/Carousel/CarouselComponent";
import ContactLink from "./components/ContactLink/ContactLink";
import DifferentialsCard from "./components/DifferentialsCard/DifferentialsCard";
import TecnologiesCard from "./components/TecnologiesCard/TecnologiesCard";


export default function HomeDisplay() {

    return (
        <>
            <CarouselComponent />
            
            <CardToPortfolio />
            <TecnologiesCard />
            <DifferentialsCard />
            <ContactLink />
        </>
    );
}