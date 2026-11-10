import React from "react";
import {
  profiles,
  projectGroups,
  projectsIn,
  writing,
} from "../../content/portfolio";
import classes from "./folio.module.scss";
import Section from "./section";

const WorkIndex: React.FC = () => {
  const [current, ...previous] = profiles;
  return (
    <main>
      <header className={classes.hero}>
        <p className={classes.kicker}>Work</p>
        <h1 className={classes.pageTitle}>Case studies and projects</h1>
        <p className={classes.pageIntro}>
          product designer & software engineer
        </p>
        <p className={classes.profiles}>
          product{" "}
          <a href={current.href} target="_blank" rel="noopener noreferrer">
            {current.label}
          </a>
          <br />
          prev{" "}
          {previous.map((profile, index) => (
            <React.Fragment key={profile.href}>
              {index > 0 ? <span className={classes.sep}> | </span> : null}
              <a href={profile.href} target="_blank" rel="noopener noreferrer">
                {profile.label}
              </a>
            </React.Fragment>
          ))}
        </p>
      </header>
      {projectGroups.map((group) => (
        <Section
          key={group.id}
          id={group.id}
          title={group.title}
          items={projectsIn(group.id)}
        />
      ))}
      <Section id="writing" title="Writing" items={writing} />
    </main>
  );
};

export default WorkIndex;
