/* eslint-disable react/prop-types */
export default function Tabs({ children, buttons, buttonWrapper = "menu" }) {
  const ButtonWrapper = buttonWrapper; // W or accept the prop with capital 'B'
  return (
    <>
      <ButtonWrapper>{buttons}</ButtonWrapper>
      {children}
    </>
  );
}
