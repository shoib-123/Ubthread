const wrapperContainer = {
  maxWidth: "165rem",
  margin: "0 auto",
  padding: "10rem",
};

const innerContainer = {
  display: "grid",
  gap: "5rem",
  gridTemplateRows: "1fr auto",
};

const contentContainer = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  gap: "5rem",
};

const bottomButtonContainer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "5rem",
};

const backButton = {
  backgroundColor: "transparent",
  border: "none",
  borderRadius: "0.5rem",
  cursor: "pointer",
};

const buttonContainer = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  marginTop: "5rem",
};

const industryImageContainer = {
  display: "grid",
  placeItems: "center",
};

const industryImage = {
  width: "600px",
  height: "600px",
};

const dropdownMenuContainer = {
  position: "absolute",
  height: "auto",
  borderRadius: "2rem",
  borderBottom: "1px solid rgba(150, 171, 222, 0.7)",
  top: 0,
};

export {
  wrapperContainer,
  innerContainer,
  contentContainer,
  bottomButtonContainer,
  backButton,
  buttonContainer,
  industryImageContainer,
  industryImage,
  dropdownMenuContainer,
};
