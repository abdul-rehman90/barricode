
// import ScrollAnimatedWrapper from "@/animations/scroll-animation-wrapper"
import Integration from "../end-user-app/integration"
import RealtimeVisibility from "../end-user-app/realtime-visibility"
import SmarterAutomation from "../end-user-app/smarter-automation"
import Callfirst from "./call-first"
import Herosection from "./hero-section"
import { integrationdata, integrationSections } from "./INTEG-CONSTS"
import Whoarewe from "./who-are-we"

function IntegrationPartner() {

    return (
        <div className="">
            <Herosection />
            <SmarterAutomation
                alignment="items-center"
                maindata={integrationdata.maindata}
                features={integrationdata.features}
            />
            <Whoarewe />
            <RealtimeVisibility
                mainHeading={`How Integration Works`}
                subtext="We’ve simplified the integration process — making it easy to connect your products to the Barricade ecosystem with developer-first tools and dedicated support."
                featureSections={integrationSections}
            />
            <Callfirst />
            <Integration
                heading="Ready to Join?"
                text=" Become a Barricade Integration Partner and unlock new markets, better user experiences, and more connected systems."
                buttontext="Become an Integration Partner"
                href="/integration-partner-form"
            />
        </div>
    )
}

export default IntegrationPartner