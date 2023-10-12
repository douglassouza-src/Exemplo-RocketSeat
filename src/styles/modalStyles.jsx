const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.808)",
    zIndex: 1000,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    position: "relative",
    inset: "0",
    backgroundColor: "#f35c16",
    padding: "10px",
    borderRadius: "15px",
    border: "black",
    width: "350px",
    minHeight: "180px",
    textAlign: "center",
    fontSize: "1rem",
    boxShadow: "1px 1px 5px rgba(255, 115, 0, 0.77)",
  },
};

export default modalStyles;
