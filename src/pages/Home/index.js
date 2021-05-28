// React
import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

// 3rd Party
import { Link } from "react-router-dom";

// Components
import { PageHeader } from "../../containers/PageHeader";
import { InfoCard } from "../../components/InfoCard";
import { Button } from "../../components/Button";
import { Footer } from "../../components/Footer";

// Images
import housesSunset from "../../assets/housessunset.jpg";
import planning from "../../assets/planning.jpg";
import paperwork from "../../assets/paperwork.jpg";
import barn from "../../assets/barn.jpg";
import builder from "../../assets/builder.jpg";
import estateagents from "../../assets/estateagents.jpg";
import field from "../../assets/field.jpg";
import modernhouse from "../../assets/modernhouse.jpg";
import yellowbrickhouse from "../../assets/yellowbrickhouse.jpg";
import gardenpoundsign from "../../assets/gardenpoundsign.jpg";
import officebuilding from "../../assets/officebuilding.jpg";
import barnconversion from "../../assets/barnconversion.jpg";
import planningwork from "../../assets/planningwork.jpg";

function Home() {
  return (
    <div>
      <PageHeader />
      <div className="p-8 md:mx-12 md:mt-4 text-blue-300 items-center flex flex-col text-left text-lg">
        <div className="max-w-screen-xl md:pl-72 md:pr-8 px-2">
          <div>
            {/* <h2 className="uppercase pb-4 text-lg">About Us</h2> */}
            <p className="pb-4">
              Land Connexions is an independent business with over 40 years’
              experience in the Property and Finance sectors.
            </p>

            <p className="pb-4">
              We specialise in sourcing land suitable for house building,
              including strategic sites, commercial or agricultural building
              conversions, and private housing.
            </p>

            <p className="pb-4">
              Our objective is to deliver an unrivalled land and property
              related service where our clients’ needs and wants are our main
              priority.
            </p>

            <p>
              Our clients include small builders, property developers building a
              handful of properties each year, and larger regional house
              builders looking for more substantial plots of land. We work
              closely with all our clients, ensuring they receive the best
              outcomes. Our services include:
            </p>
          </div>
          <ul className="pt-4 md:pt-6 text-blue-link">
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
          photoPosition="left"
          image={housesSunset}
          alt="By Tom Thain on Unsplash"
        >
          <>
            <p className="pb-4">
              Many situations require planning advice, and we work with a team
              of specialists including architects and planning consultants, to
              maximise the full potential of your land.
            </p>
            <p>
              For example, you may have a large garden, a piece of land,
              commercial or agricultural buildings that could be converted to
              residential use. We treat every opportunity individually, so our
              professional advisers will assist with every aspect of the
              planning process from pre-application matters to completion.
            </p>
          </>
        </InfoCard>
        <InfoCard
          id="saleNegotiationManagement"
          heading="Sales Negotiations and Management"
          photoPosition="right"
          image={planning}
        >
          <p>
            We will use our experience to negotiate with prospective purchasers
            to obtain the best possible price for your land or property.
          </p>
        </InfoCard>
        <InfoCard
          id="optionsPromotionAgreement"
          heading="Options and Promotion Agreements"
          photoPosition="left"
          image={paperwork}
        >
          <>
            <p className="pb-4">
              If you have some land which may be suitable for development, but
              does not currently have planning permission, there are several
              options when it comes to selling which will ensure you get a
              better price.
            </p>
            <p>
              The two most common ways of doing this are to consider an Option
              Agreement, or a Promotion Agreement. We work with a number of
              clients who are experienced with these types of options, and can
              help you make an informed decision.
            </p>
          </>
        </InfoCard>
        <InfoCard
          heading="Options Agreement"
          photoPosition="right"
          image={builder}
        >
          <>
            This is where the land remains in the ownership of the seller and
            the “option to purchase” is activated once planning has been
            granted.
            <h3 className="py-4">General Points:</h3>
            <ul className="list-disc ml-5">
              <li className="pb-4">
                It is between two parties (land owner & developer) where the
                developer will have the option to purchase the land when
                planning permission has been obtained, at an agreed price and
                within an agreed time frame
              </li>
              <li className="pb-4">
                The developer will absorb all associated planning costs
              </li>
              <li>
                Purchase price may be an agreed fixed sum or may be assessed
                when planning permission is granted.
              </li>
            </ul>
          </>
        </InfoCard>
        <InfoCard
          heading="Promotion Agreement"
          photoPosition="left"
          image={barn}
        >
          <>
            <p className="pb-4">
              Also known as Planning Promotion Agreements, this typically
              involves larger areas of land and is an agreement the landowner
              has with a planning specialist (known as the Promoter) to promote
              the land through the planning process in order to gain planning
              permission.
            </p>
            <p className="pb-4">
              The landowner is not expected to pay any of the costs required to
              obtain planning permission. Once granted, the landowner and the
              promoter work together to market and sell the land to a developer.
            </p>
            <p>
              The price paid by the developer would then be split on a
              pre-agreed basis between the landowner and the promoter. In other
              words the promoter receives a share of the enhanced value of the
              land in return for the risk of taking it through the planning
              process.
            </p>
          </>
        </InfoCard>
        <InfoCard
          id="propertySalesAdvice"
          heading="Property Sales Advice"
          photoPosition="right"
          image={estateagents}
        >
          <>
            <p className="pb-4">
              We are able to offer Estate Agent services. We continually monitor
              the property market for trends and movements and can give you
              advice on everything from house values (including £ per sq
              ft/metre) to specifications and design.
            </p>
            <p className="pb-4">
              We have vast experience in both the marketing and selling of
              properties, and would discuss a bespoke marketing package that
              suits your aims and budget.
            </p>
            <p>
              In our view, one size doesn’t fit all so this could include design
              and production of site hoardings, professional photography, CGI’s,
              home staging, brochure designs and production. We can also advise
              on a mix of advertising across the main property portals and
              social media platforms
            </p>
          </>
        </InfoCard>
        <InfoCard
          id="propertyDevelopmentFinanceInsurance"
          heading="Property Development Finance and Insurance"
          photoPosition="left"
          image={field}
        >
          <>
            <p className="pb-4">
              There are many ways in which a development project can be funded
              and the days of a bank loan being the only option are long gone.
            </p>
            <p className="pb-4">
              Whilst Land Connexions is not regulated to provide finance advice,
              we have considerable direct experience in Real Estate Finance and
              have contacts with a number of funders and specialist lenders.
            </p>
            <p className="pb-4">
              There may be requirements to insure your property, for example
              whilst it is under construction, and legal obligations to hold
              Public Liability and Employers’ Liability Insurance. And if you
              are building a new property, you may need to arrange a 10 Year
              Structural Warranty, which is required by many mortgage lenders
              when lending to prospective buyers of your completed property.
            </p>
            <p>
              We will be happy to introduce you to one of our contacts who will
              be able to advise on your specific requirements.
            </p>
          </>
        </InfoCard>
        <div className="flex flex-col items-center mt-4 pt-8 px-8 md:mt-8 md:pb-2 border-t-2 border-grey-50">
          <p className="text-blue-300 pb-8 font-semibold">
            If you have any questions or would like to discuss your own
            situation, we would be delighted to talk to you. Please click the
            button below to take you to our web contact form
          </p>
          <Link to="/contact">
            <Button label="Contact Us" size="large" />
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export { Home };
