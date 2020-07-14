import React from "react";
import { motion } from "framer-motion";
import { fadeInPage } from "../../animations/page";
import Anchor from "../../components/utils/anchor";

const Cycle3D: React.FC = () => (
  <motion.main className="body" {...fadeInPage}>
    <h1 className="begin-section pt-0">Cycle 3D &nbsp;♻️</h1>
    <time>Dec 12 2016</time>
    <div className="lead begin-section">
      <p>
        My first exposure to 3D printing, like many other, came from the Wired
        cover article on
        <Anchor
          content="Makerbot"
          href="https://www.makerbot.com/https://www.makerbot.com/"
          spaceBefore
        />
        . The machine looked crude and roughly pieced together, flimsy plastic
        and all. Looking at their site today, its great to see that the machines
        have evolved into beautiful, closed systems that are closer to a
        mainstream printers and look less like their DIY origins.
      </p>
      <p>
        By the time I got to high school, 3D printing was all the crazy; STEM
        even had several professional grade FDM printers. My personal journey
        into 3D printing began with the purchase of a
        <Anchor
          content="da Vinci 1.0"
          href="https://www.xyzprinting.com/en-US/product/da-vinci-1-0"
          spaceBefore
          spaceAfter
        />
        from Newegg of all places.
      </p>
      <p>
        Pretty quickly, I started heavily modding the printer with custom
        printed components in order to extrude PLA which was not supported by
        the machine. I also booted a custom firmware so I could more finely tune
        the precision of models and the heat of the extruder.
      </p>
      <p>
        However, I quickly realized that I was wasting a lot of plastic because
        of failed prints.
      </p>
      <blockquote>
        What if you could build a printer that automatically recycled plastic?
      </blockquote>
    </div>

    <h2 className="begin-section">Enter Cycle</h2>
    <div className="lead end-section">
      <p>
        Cycle is an
        <Anchor
          content="open source"
          href="https://github.com/16abhimasani/Cycle3D"
          spaceBefore
          spaceAfter
        />
        3D printing project focused on creating a new type of 3D printer that
        can recycle its own prints and utilize other recyclable plastics like
        PET or HDPE which is most often found in plastic containers. The focus
        of this project was to see if we could create a printable grinder.
      </p>
    </div>

    <h3 className="begin-section">Grinder</h3>
    <img width="100%" src="/imgs/cycle-3d/grinder.svg" alt="Grinder" />
    <div className="lead begin-section">
      <p>
        The Grinder works by first crushing and tearing plastic with the primary
        rollers. Next the shards are dropped into the secondary shredders where
        and sharp blades cut the plastic to small pieces. The filter below,
        fitted with 2 mm holes, allows oversized pieces to be kicked back up for
        more shredding.
      </p>
      <p>
        The grinding process is overall the most critical piece because the
        extruder tunnel requires roughly uniform pieces to avoid jamming.
      </p>
    </div>

    <h3 className="begin-section">Extruder</h3>
    <img width="100%" src="/imgs/cycle-3d/extruder.svg" alt="Extruder" />
    <div className="lead begin-section">
      <p>
        The Extruder works by intaking granulated plastic and passing it down
        the chamber via an Auger bit. This chamber is specifically designed to
        have a longer melt zone for efficient flow rate and retraction.
      </p>
      <p>
        The Auger bit allows the granular plastic to be carried down by the
        stepper motors in the extruder head. This method also allows simple
        retraction identical to normal extruder by simply reversing the motor to
        pull material back up.
      </p>
    </div>

    <h3 className="begin-section">Grinder Models</h3>
    <div className="lead">
      An overview of the Grinder’s technical specification, design features, and
      build log.
    </div>

    <h4 className="begin-section">Assembly and Cross Section</h4>
    <img
      width="100%"
      src="/imgs/cycle-3d/grinder-assembly.png"
      alt="Grinder Assembly"
    />
    <div className="lead begin-section">
      <p>
        The goal with the grinder was to design a compact grinding solution that
        could reduce big milk jugs or small scrap plastic to 2mm granular
        pieces. This size is optimal for the extruder to handle at reasonable
        torque. For this reason I knew that simply throwing everything into a
        blender wasn’t going to work. I decided to design the grinder to use a 2
        step grinding process. The primary grinder section at the top intakes
        raw plastic (like water bottles) and shreds them at slow speeds,
        essentially tearing the material into manageable chunks. The secondary
        shredders are the second step of this process where the large chunks are
        reduced to smaller pieces through multiple shredders. The filter at the
        bottom allows pieces that are not small enough to be kicked back up into
        the shredders until uniform size is achieved. This vertical grinding
        process in theory generates the best results but an ideal grinder (cheap
        and simple) would only have 1 stage shredding designed in such a way
        that thin walled plastic can be chewed up right away.
      </p>
    </div>

    <h4 className="begin-section">Gear Assembly and Box</h4>
    <img
      width="100%"
      src="/imgs/cycle-3d/gear-box-assembly.png"
      alt="Gear Box Assembly"
    />
    <div className="lead begin-section">
      <p>
        To drive the grinder and provide adequate torque and speed, I decided to
        use Herringbone gears. The advantage of Herringbone gears is that side
        load on the gear is reduced so there is a much more efficient transfer
        of torque and smooth motion. Also, because the part is 3D printed, a
        Herringbone design provides a more structurally stable part with less
        density. I also decided to us a square axle so adhesives or fixtures
        wouldn’t have to be used to keep the axle from rotating within the gear.
        The gears also have square cutouts for motor mounting or hand crank
        attachment. Instead of directly attaching the motors we have to the
        gears I wanted to use a square adaptor so any motor or a hand crank can
        be fitted. Getting the fitting for these adaptors was difficult and will
        take a few tries because ABS can shrink about 8% and PLA shrinks
        anywhere from 2% to 5%.
      </p>
    </div>

    <h4 className="begin-section">Bearing Mount and Axle Cap</h4>
    <img width="100%" src="/imgs/cycle-3d/bearing-cap.png" alt="Bearing Cap" />
    <div className="lead begin-section">
      <p>
        The axle runs all the way through the cylinders and box so I needed a
        way to cap the end so nothing moved. The simplest solution was a cap
        that can be right on the end of the axle once assembly is complete. The
        bearing holder does exactly what it sounds like: it holds a bearing. The
        holder is designed for a standard 8mm skate bearing that can be bought
        online or any skate shop. The part can be scaled up or down depending on
        the size of the bearing. Bearings are used to provide smooth rotation
        for the cylinders and shredders. The holders are designed to be embedded
        in the wall of box so cutouts for these are provided in the files.
      </p>
    </div>

    <h4 className="begin-section">Rollers</h4>
    <img
      width="100%"
      src="/imgs/cycle-3d/primary-grinder-assembly.png"
      alt="Primary Grinder Assembly"
    />
    <div className="lead begin-section">
      <p>
        The rollers are the part that first processes raw plastic by tearing
        into smaller chunks that can be better handled. Every part of the
        cylinder modular from the pegs to the axle. The 3D printer I used was a
        XYZ DaVinci 1.0 which has a build volume of 20x20x20 cm so I had to
        splice pieces that were too big like the cylinder into two pieces and
        rejoin them together. Both the complete part files and spliced part
        files can found on in the repository. The spikes on the rollers are
        situated in such a way that the two roller mesh together when met with a
        small amount of gap between the teeth to provide a little wiggle room. I
        offset each cylinder by the spacing of the teeth (the little protruding
        disk on the cylinder is what does this; the other side of the roller is
        flat) in order to get the mesh correct because I had trouble directly
        offsetting the spikes in SolidWorks.
      </p>
    </div>

    <h4 className="begin-section">Primary Grinder Guards</h4>
    <img
      width="100%"
      src="/imgs/cycle-3d/spikes-assembly.png"
      alt="Spikes Assembly"
    />
    <div className="lead begin-section">
      <p>
        These wall spikes or blocks are really just used to create a tight seal
        between the rollers and the walls so no raw material falls through and
        sticks to the rollers. They are specific to the primary rollers so they
        cannot be used for the secondary shredders due to spacing between the
        spikes. The spikes also have pegs pre built into them so they can fitted
        right into the wall.
      </p>
    </div>

    <h4 className="begin-section">Split Axle</h4>
    <img width="100%" src="/imgs/cycle-3d/axle.png" alt="Axle" />
    <div className="lead begin-section">
      <p>
        The axle, like many of the parts, is way too big to print so I have to
        split the axle into two two parts with a peg piece to fit them back
        together. The circular part of the axle is what fits into the bearing
        for smooth turning, while the square end fit into the gear. These axles
        are run through the entire roller so obviously there will be lots of
        friction. To fit the axle, I had to reduce the size just a bit with
        light sanding and turned the heat up on the extruder to induce extra
        shrinkage. A little oil also makes the axle slide in easier.
      </p>
    </div>

    <h4 className="begin-section">Roller Pegs</h4>
    <img
      width="100%"
      src="/imgs/cycle-3d/spike-grinder.png"
      alt="Spike Grinder"
    />
    <div className="lead begin-section">
      <p>
        The pegs are pretty simple but it took a lot of tuning to get these to
        fit snuggly into the cylinder without a problem. To print, I laid the
        pegs flat on one surface of the spike so I only needed support material
        for the peg part. This can easily be filed away in post processing so
        this best way to print the pegs from my experience. The rollers require
        A LOT of pegs (around 130) so for the plastic prototype I’m printing
        pegs for every other row.
      </p>
    </div>

    <h4 className="begin-section">Blades and Shredders</h4>
    <img
      width="100%"
      src="/imgs/cycle-3d/blade-shredder.png"
      alt="Shredder Blade"
    />
    <div className="lead begin-section">
      <p>
        These are designed to be sharp and rotate fast in order to reduce
        plastic size down into something an extruder can handle. For the plastic
        prototype, the blades are being laser cut from acrylic reduce to labor
        time. Laser cutting for this reason is ideal. I designed the thickness
        of the blade to be 1/8 inch so I could use cheap acrylic to laser cut.
        There are 22 blades per rod so 88 blades for the entire secondary
        shredding system. For cutting, I stacked 2 sheets of acrylic and set the
        laser to cut 1/4 inch deep so I could have as few runs as possible.
      </p>
    </div>

    <h4 className="begin-section">Blades Spacers</h4>
    <img
      width="100%"
      src="/imgs/cycle-3d/spacer-shredder.png"
      alt="Shredder Spacer"
    />
    <div className="lead begin-section">
      <p>
        The spacers are pretty simple, they fit onto the axle and keep a set
        distance between the blades so they mesh together nicely when installed
        into the grinder. These parts are laser cut because they are a simple
        flat disk shape and I needed a lot of them.
      </p>
    </div>

    <h4 className="begin-section">Shredder Axle</h4>
    <img
      width="100%"
      src="/imgs/cycle-3d/shredder-axle.png"
      alt="Shredder Axle"
    />
    <div className="lead begin-section">
      <p>
        The axle is designed in this weird star shape so I could offset the
        rotation of each blade on the axle to get a more consistent grind. When
        the blades mesh together this staggering also improves smooth rotation
        and prevents jams.
      </p>
    </div>

    <h4 className="begin-section">Secondary Shredder Guards</h4>
    <img
      width="100%"
      src="/imgs/cycle-3d/second-spikes-assembly.png"
      alt="Secondary Spikes Assembly"
    />
    <div className="lead begin-section">
      <p>
        These are very similar to the primary wall spikes but the spacing is
        altered to mesh with the secondary shredders.
      </p>
    </div>

    <h4 className="begin-section">Filtering Mesh</h4>
    <img width="100%" src="/imgs/cycle-3d/filter.png" alt="Filter" />
    <div className="lead begin-section">
      <p>
        This filter is what keeps the granular pieces a uniform size. I made the
        holes a little bigger than 2 mm wide in order to get something small
        enough for the extruder. The Filter is the part of our grinder that
        needs the most work on and is non-functional as a plastic version.
        Everything else can be built with a combination of plastic and metal
        fabrication (so plastic cylinder and metal spikes) but the filter
        requires metal components to act like a grater.
      </p>
    </div>

    <h2 className="begin-section">Printed Results</h2>
    <img
      className="end-section"
      width="100%"
      src="/imgs/cycle-3d/grinder-printed.JPG"
      alt="Grinder Printed"
    />
    <img
      className="end-section"
      width="100%"
      src="/imgs/cycle-3d/grinder-assembly-printed.jpg"
      alt="Grinder Assembly Printed"
    />
    <img
      className="end-section"
      width="100%"
      src="/imgs/cycle-3d/gear-assembly-printed.JPG"
      alt="Gear Assembly Printed"
    />
    <img
      className="end-section"
      width="100%"
      src="/imgs/cycle-3d/gear-printed.jpg"
      alt="Gear Printed"
    />
    <img
      className="end-section"
      width="100%"
      src="/imgs/cycle-3d/gear-printed-2.jpg"
      alt="Gears Printed"
    />
  </motion.main>
);

export default Cycle3D;
