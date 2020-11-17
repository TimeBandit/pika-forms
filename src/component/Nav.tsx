import styled from "styled-components";
import styles from "../core/theme/theme";

export const Nav = styled.nav`
  position: fixed;
  width: ${styles.spacing[384]};
  height: ${styles.spacing[48]};
  right: 2px;
  bottom: 2px;
  padding: ${styles.spacing.p25};
  background-color: ${styles.colors.grey};
`;
