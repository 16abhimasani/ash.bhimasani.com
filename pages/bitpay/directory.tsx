import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../../animations/page";
import Anchor from "../../components/utils/anchor";
import WideScreen from "../../components/wide-screen/wide-screen";

const BitPayDirectory: React.FC = () => (
  <motion.main className="body" {...fadeInPage}>
    <h1 className="begin-section pt-0">BitPay Directory</h1>
    <h5 className="end-section">A curated directory of where to use crypto</h5>
    <WideScreen src="/imgs/directory/cover.jpg" />
    <div className="lead begin-section end-section">
      <p>
        The
        <Anchor
          content="BitPay Directory"
          href="https://bitpay.com/id/verify?dest=fromWebsite"
          spaceBefore
          spaceAfter
          bold
        />
        was an idea that originated since the early days of company. All kinds
        of sites, forums, and reddit threads have existed over Bitcoin's life to
        track places you can spend it. Actually using crypto in everyday
        scenarios is a core element to spreading adoption so the existence of
        these places is historical to say the least. In this case, BitPay's job
        is to serve as the platform for everyday businesses to accept crypto and
        we finally had a chance to showcase the company's efforts over the
        years.
      </p>
      <p>
        The task was simple. I needed to design and build a page where we can
        display some high brand value partners (
        <Anchor
          content="Newegg"
          href="https://kb.newegg.com/knowledge-base/using-bitcoin-on-newegg/"
        />
        ,
        <Anchor
          content="AT&T"
          href="https://about.att.com/story/2019/att_bitpay.html"
          spaceBefore
        />
        , and
        <Anchor
          content="Microsoft"
          href="https://support.microsoft.com/en-us/help/13942/microsoft-account-how-to-use-bitcoin-to-add-money-to-your-account"
          spaceBefore
          spaceAfter
        />
        , etc.) while also educating users of places they can use their crypto.
        The task had some core needs:
      </p>
      <ol className="list">
        <li className="list__item">
          <div className="list__item__number">1</div>
          <div>Had to be categorized</div>
        </li>
        <li className="list__item">
          <div className="list__item__number">2</div>
          <div>Had to be easily curated by a non-technical person</div>
        </li>
        <li className="list__item">
          <div className="list__item__number">3</div>
          <div>Support an unknown sized list of merchants</div>
        </li>
      </ol>
      <p>
        So what does this mean? We needed to manually compile a list of brands
        from a raw dump, making sure to pick merchants that had some
        recognizability and immediate utility to the average viewer. The process
        of building this list would also determine our categorization and lay
        the groundwork for a public directory endpoint.
      </p>
    </div>

    <h3 className="begin-section">Home Page</h3>
    <h5 className="end-section">An engaging discovery portal</h5>
    <WideScreen src="/imgs/directory/home-page.svg" />
    <div className="lead begin-section end-section">
      <p>
        The configuration above is what I ultimately chose to meet all the
        criteria. The design has some key features that made it highly suited to
        our situation at the time. For a category to exist, only 4 high quality
        merchants are needed with this design, which made building the list much
        easier for me. Additionally, we didn't have any categorization for gift
        card and I definitely wanted to highlight them because of the big names
        so this layout was scalable from 4 to 100+.
      </p>
    </div>

    <h4 className="begin-section">Merchant Branding</h4>
    <img
      className="h-align end-section"
      width="100%"
      src="/imgs/directory/merchant-card.svg"
      alt="Directory: Merchant Card"
    />
    <div className="lead begin-section end-section">
      <p>
        One of the major initiatives I personally brought to BitPay was an
        obsession with utilizing as much merchant branding as possible. We never
        had a sophisticated infrastructure for handling merchant branding assets
        mainly due to the need for manual inspection. Because this page is
        curated, this project became the perfect opportunity to introduce a
        standardized format for including merchant branding across our platform
        (payment gateway, dashboard payment history view, wallet payment confirm
        view, etc).
      </p>
    </div>

    <h4 className="begin-section">Gift Card Helper</h4>
    <video className="end-section" width="100%" autoPlay muted loop playsInline>
      <source src="/vids/directory/bouncy-boy.mp4" type="video/mp4" />
    </video>
    <div className="lead begin-section end-section">
      <p>
        As I mentioned previously, a large part of my effort was to make sure we
        properly highlighted our gift card service while not creating confusion.
        The Merchant Card design really ended up being a very flexible approach
        to stuffing content. For gift cards, I replaced the caption text with
        the denominations available. While this is not very clear, hovering over
        the card displays a better explainer of how to purchase gift cards. The
        top right hand corner also leaves room to display promotions if
        available.
      </p>
    </div>

    <h3 className="begin-section">List Mode</h3>
    <h5 className="end-section">A simple way to optimize for mobile</h5>
    <WideScreen src="/imgs/directory/list-mode.svg" />
    <div className="lead begin-section end-section">
      <p>
        While optimizing for mobile, it quickly became clear that a "card" style
        would not work well when there is minimal vertical real estate. The
        obvious choice became to fashion a "cell" shaped design with the same
        content. Above is also an example of the "category" view of the
        Directory. As you can see, with a cell, we are able to fit in everything
        we need: Logo, Title, Caption, Denominations, Website, and Gift Card
        Explainer easily with minimum collision.
      </p>
    </div>
  </motion.main>
);

export default BitPayDirectory;
