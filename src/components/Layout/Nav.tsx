import React from "react";
import styled from "styled-components";

import styles from "../../core/theme/theme";
import { useStore } from "../../store/useStore";

const NavWrapper = styled.nav`
  position: fixed;
  display: flex;
  width: ${styles.spacing[384]};
  height: ${styles.spacing[48]};
  right: 2px;
  bottom: 2px;
  padding: ${styles.spacing.p25};
  background-color: ${styles.colors.grey};
`;

const NavButton = styled.a`
  padding: ${styles.spacing.p5} ${styles.spacing.p75};
`;

const Nav = () => {
  const { dispatch } = useStore();

  const pageUp = () => {
    dispatch({ type: "SURVEY_PAGE_UP" });
  };

  const pageDown = () => {
    dispatch({ type: "SURVEY_PAGE_DOWN" });
  };

  return (
    <NavWrapper>
      <NavButton onClick={pageUp} role="button">
        up
      </NavButton>
      <NavButton onClick={pageDown} role="button">
        down
      </NavButton>
    </NavWrapper>
  );
};

export default Nav;
