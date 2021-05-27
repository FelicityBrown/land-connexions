// React
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// Components
import { PageHeader } from "./containers/PageHeader";
import { InfoCard } from "./components/InfoCard";
import { Button } from "./components/Button";
import { Footer } from "./components/Footer";

// Images
import housesSunset from "./../assets/housessunset.jpg";
import planning from "./../assets/planning.jpg";
import paperwork from "./../assets/paperwork.jpg";
import barn from "./../assets/barn.jpg";
import builder from "./../assets/builder.jpg";
import estateagents from "./../assets/estateagents.jpg";
import field from "./../assets/field.jpg";
import modernhouse from "./../assets/modernhouse.jpg";
import yellowbrickhouse from "./../assets/yellowbrickhouse.jpg";
import gardenpoundsign from "./../assets/gardenpoundsign.jpg";
import officebuilding from "./../assets/officebuilding.jpg";
import barnconversion from "./../assets/barnconversion.jpg";
import planningwork from "./../assets/planningwork.jpg";

function Home() {
  return (
    <div>
      <PageHeader />
      <div className="sm:p-8 sm:mx-12 mt-8 md:mt-4 text-blue-600 items-center flex flex-col text-left text-lg">
        <div className="max-w-screen-xl md:pl-64 md:pr-8 px-8 md:ml-8">
          <div>
            Land Connexions is an independent business with over 40 years’
            experience in the Property and Finance sectors. We specialise in
            sourcing land suitable for house building, including strategic
            sites, commercial or agricultural building conversions, and private
            housing. Our objective is to deliver an unrivalled land and property
            related service where our clients’ needs and wants are our main
            priority. Our clients include small builders, property developers
            building a handful of properties each year, and larger regional
            house builders looking for more substantial plots of land. We work
            closely with all our clients, ensuring they receive the best
            outcomes. Our services include:
          </div>
          <ul className="pt-6 text-blue-link">
            <li className="mb-2">
              <a href="#planningAdvice">Planning Advice</a>
            </li>
            <li className="mb-2">
              <a href="#saleNegotiationManagement">
                Sales Negotiation & Management
              </a>
            </li>
            <li className="mb-2">
              <a href="#optionsPromotionAgreement">
                Options & Promotion Agreements
              </a>
            </li>
            <li className="mb-2">
              <a href="#propertySalesAdvice">Property Sales Advice</a>
            </li>
            <li className="mb-8">
              <a href="#propertyDevelopmentFinanceInsurance">
                Property Development Finance & Insurance
              </a>
            </li>
          </ul>
        </div>
        <div className="px-0 md:px-8 pb-8">
          <Carousel
            autoPlay
            infiniteLoop
            centerMode
            centerSlidePercentage={60}
            showThumbs={false}
          >
            <img src={gardenpoundsign} alt="image1" />
            <img src={modernhouse} alt="image2" />
            <img src={barnconversion} alt="image4" />
            <img src={officebuilding} alt="image4" />
            <img src={yellowbrickhouse} alt="image5" />
            <img src={planningwork} alt="image6" />
          </Carousel>
        </div>
        <InfoCard
          id="planningAdvice"
          heading="Planning Advice"
          children="Many situations require planning advice, and we work with a team of specialists including
architects and planning consultants, to maximise the full potential of your land. For example,
you may have a large garden, a piece of land, commercial or agricultural buildings that could be
converted to residential use. We treat every opportunity individually, so our professional
advisers will assist with every aspect of the planning process from pre-application matters to
completion."
          photoPosition="left"
          image={housesSunset}
          alt="By Tom Thain on Unsplash"
        />
        <InfoCard
          id="saleNegotiationManagement"
          heading="Sales Negotiations and Management"
          children="We will use our experience to negotiate with prospective purchasers to obtain the best possible
        price for your land or property."
          photoPosition="right"
          image={planning}
        />
        <InfoCard
          id="optionsPromotionAgreement"
          heading="Options and Promotion Agreements"
          children="If you have some land which may be suitable for development, but does not currently have
        planning permission, there are several options when it comes to selling which will ensure you
        get a better price. The two most common ways of doing this are to consider an Option
        Agreement, or a Promotion Agreement. We work with a number of clients who are experienced
        with these types of options, and can help you make an informed decision."
          photoPosition="left"
          image={paperwork}
        />
        <InfoCard
          heading="Options Agreement"
          photoPosition="right"
          image={builder}
        >
          <>
            This is where the land remains in the ownership of the seller and
            the “option to purchase” is activated once planning has been
            granted.
            <h3 className="py-2">General Points:</h3>
            <li className="pb-2">
              It is between two parties (land owner & developer) where the
              developer will have the option to purchase the land when planning
              permission has been obtained, at an agreed price and within an
              agreed time frame
            </li>
            <li className="pb-2">
              The developer will absorb all associated planning costs
            </li>
            <li className="pb-2">
              Purchase price may be an agreed fixed sum or may be assessed when
              planning permission is granted.
            </li>
          </>
        </InfoCard>
        <InfoCard
          heading="Promotion Agreement"
          children="Also known as Planning Promotion Agreements, this typically involves larger areas of land and
        is an agreement the landowner has with a planning specialist (known as the Promoter) to
        promote the land through the planning process in order to gain planning permission. The
        landowner is not expected to pay any of the costs required to obtain planning permission. Once
        granted, the landowner and the promoter work together to market and sell the land to a
        developer. The price paid by the developer would then be split on a pre-agreed basis between
        the landowner and the promoter. In other words the promoter receives a share of the enhanced
        value of the land in return for the risk of taking it through the planning process."
          photoPosition="left"
          image={barn}
        />
        <InfoCard
          id="propertySalesAdvice"
          heading="Property Sales Advice"
          children="We are able to offer Estate Agent services. We continually monitor the property market for
        trends and movements and can give you advice on everything from house values (including £
        per sq ft/metre) to specifications and design.
        We have vast experience in both the marketing and selling of properties, and would discuss a
        bespoke marketing package that suits your aims and budget. In our view, one size doesn’t fit all
        so this could include design and production of site hoardings, professional photography, CGI’s,
        home staging, brochure designs and production. We can also advise on a mix of advertising
        across the main property portals and social media platforms."
          photoPosition="right"
          image={estateagents}
        />
        <InfoCard
          id="propertyDevelopmentFinanceInsurance"
          heading="Property Development Finance and Insurance"
          children="There are many ways in which a development project can be funded and the days of a bank
        loan being the only option are long gone. Whilst Land Connexions is not regulated to provide
        finance advice, we have considerable direct experience in Real Estate Finance and have
        contacts with a number of funders and specialist lenders.
        There may be requirements to insure your property, for example whilst it is under construction,
        and legal obligations to hold Public Liability and Employers’ Liability Insurance. And if you are
        building a new property, you may need to arrange a 10 Year Structural Warranty, which is
        required by many mortgage lenders when lending to prospective buyers of your completed
        property.
        We will be happy to introduce you to one of our contacts who will be able to advise on your
        specific requirements.."
          photoPosition="left"
          image={field}
        />
        <div className="flex flex-col items-center mt-8 pl-8 md:px-4 md:pb-2 p-8 border-t-2 border-grey-50">
          <p className="text-blue-600 pb-6">
            If you have any questions or would like to discuss your own
            situation, we would be delighted to talk to you. Please click the
            button below to take you to our web contact form
          </p>
          <Button label="Contact Us" size="large" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
