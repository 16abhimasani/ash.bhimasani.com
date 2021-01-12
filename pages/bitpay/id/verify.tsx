import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../../../animations/page";
import SideBar from "../../../components/sidebar/sidebar";
import WideScreen from "../../../components/wide-screen/wide-screen";
import { BitPayHead } from "..";

const BitPayIDVerification: React.FC = () => (
  <>
    {BitPayHead}
    <SideBar />
    <motion.main className="body" {...fadeInPage}>
      <section>
        <h1 className="begin-section pt-0">Verification Breakdown</h1>
        <h5 className="end-section">
          Platform-wide interface for KYC / AML compliance
        </h5>
        <WideScreen src="/imgs/id/desktop/verify/comp.png" />
        <div className="lead begin-section mb-0 end-section">
          <p>
            Here is the Verification flow that allows users to receive and make
            payments over $3000. Verification for high value transactions is a
            critical step in growing our platform and servicing more users.
            While KYC is generally a huge friction point; it can still be made
            convenient.
          </p>
          <p>
            To create a benchmark, we first looked at Airbnb’s host onboarding.
            Airbnb focused on allowing users to complete the form in chunks with
            major parts grouped together and progress saved continuously. When
            manual input is required, saving state continuously seemed like the
            most significant upgrade you could give a form.
          </p>
        </div>
      </section>

      <section>
        <h2 className="begin-section">Onfido ID Upload</h2>
        <h5 className="end-section">Minimizing error with document parsing</h5>
        <WideScreen
          src={[
            "/imgs/id/desktop/verify/start-verify.svg",
            "/imgs/id/desktop/verify/personal-info.svg",
            "/imgs/id/desktop/verify/enter-address.svg",
          ]}
          carousel
        />
        <div className="lead begin-section end-section">
          <p>
            Initially, the design was pieced together assuming that we may need
            capability for multi-tier flows, with document upload placed after
            Residential Address. As the project evolved, it became clear that we
            would only needed to optimize for 1 path.
          </p>
          <p>
            The brilliant engineers at BitPay quickly reversed the flow, placing
            document upload first while also adding the functionality needed to
            extract the strings correctly from Onfido's response. This
            significantly improved the experience while decreasing the error
            rate of manual user entry.
          </p>
          <p>
            The most difficult challenge in this part of the flow was definitely
            dealing with address formats for a global userbase. While an age old
            problem, we found ourself constantly tweaking and tuning address
            formats to meet the specific needs of any one country. Luckily, we
            have employees from all over the world who helped us catalog these
            formats and test the flow.
          </p>
        </div>

        <h3 className="begin-section">Mobile</h3>
        <div className="d-flex">
          <img
            style={{ marginRight: 24 }}
            width="300"
            height="100%"
            src="/imgs/id/mobile/verify/start-verify.png"
            alt="Mobile: Start Verify"
          />
          <img
            width="300"
            height="100%"
            src="/imgs/id/mobile/verify/personal-info.png"
            alt="Mobile: Personal Info"
          />
        </div>
        <div className="lead begin-section end-section">
          <p>
            Onfido's flow actually works best on mobile because many users don't
            have a camera on their computer or their phone's camera is much
            better. The new debit card product highlights this capability to
            provide a much more native experience within the wallet app using
            Onfido's iOS and Android SDK.
          </p>
        </div>
      </section>

      <section>
        <h2 className="begin-section">National identification number</h2>
        <h5 className="end-section">Last leg of verification</h5>
        <WideScreen
          src={[
            "/imgs/id/desktop/verify/enter-ssn.svg",
            "/imgs/id/desktop/verify/awaiting-approval.png",
            "/imgs/id/desktop/verify/approved.svg",
          ]}
          carousel
        />
        <div className="lead begin-section end-section">
          <p>
            The final part of full verification is for a user to enter their
            national identification number. For Americans, this is their social
            security number; for the rest of the world, we are only required to
            record their passport number or if they don't have one.
          </p>
          <p>
            Building UIs around sensitive data entry like this is always tricky;
            we have to manage both clarity and comfort to make sure we don't
            spook users. However, in context, we can be less critical. In this
            case, if you are making a payment over $3k, prompting for this type
            of information is understandable to the average user.
          </p>
        </div>

        <h3 className="begin-section">Mobile</h3>
        <div className="d-flex">
          <img
            style={{ marginRight: 24 }}
            width="300"
            height="100%"
            src="/imgs/id/mobile/verify/enter-address.png"
            alt="Mobile: Enter Address"
          />
          <img
            width="300"
            height="100%"
            src="/imgs/id/mobile/verify/enter-ssn.png"
            alt="Mobile: Enter SSN"
          />
        </div>
        <div className="lead begin-section end-section">
          <p>
            A large takeaway I think for form design and scalable interfaces in
            general is to assume you will probably need to scroll. As you can
            see here, we are pinning UI elements to corners and edges of the
            screen while centering all of our main content.
          </p>
          <p>
            Additionally, things not being in view when scrolling or typing is
            an ever present problem that can be minimized by simply adding
            background and foreground.
          </p>
        </div>
        <div className="d-flex">
          <img
            style={{ marginRight: 24 }}
            width="300"
            height="100%"
            src="/imgs/id/mobile/verify/awaiting-approval.png"
            alt="Mobile: Awaiting Approval"
          />
          <img
            width="300"
            height="100%"
            src="/imgs/id/mobile/verify/approved.png"
            alt="Mobile: Approved"
          />
        </div>
        <div className="lead begin-section end-section">
          <p>
            After everything was said and done, this project ended up being a
            huge learning opportunity for me as a designer and engineer. It was
            my first time really getting into the weeds and working on a highly
            dynamic project with a plethora of experience problems to solve.
            Many parts of the design turned out to be a success but I am still
            looking forward to directly tackling some of the core issues still
            present with a full upgrade.
          </p>
        </div>
      </section>
    </motion.main>
  </>
);

export default BitPayIDVerification;
