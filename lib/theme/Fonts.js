import { Global } from "@emotion/react";
import GothamBold from "../../assests/fonts";
const Fonts = () => (
  <Global
    styles={`
      @font-face {
        font-family: "GothamLight"; /*Can be any text*/
        src: local("GothamLight"),
          url("../../assests/fonts/GothamLight.ttf") format("truetype");
      }
      
      @font-face {
        font-family: "GothamBold"; /*Can be any text*/
        src: local("GothamBold"),
          url("../../assests/fonts/GothamBold.ttf") format("truetype");
      }
      
      @font-face {
        font-family: "GothamMedium"; /*Can be any text*/
        src: local("GothamMedium"),
          url("../../assests/fonts/GothamMedium.ttf") format("truetype");
      }
      @font-face {
        font-family: "GothamThin"; /*Can be any text*/
        src: local("GothamThin"),
          url("../../assests/fonts/Gotham-Thin.otf") format("opentype");
      }
     
      `}
  />
);

export default Fonts;
