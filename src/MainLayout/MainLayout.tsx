import { ThemeProvider } from "styled-components";
import Content from "../Elements/Content/Content";
import Footer from "../Elements/Footer/Footer";
import Header from "../Elements/Header/Header";
import IconBulb from "../Icon/IconBulb";
import { dark_theme, light_theme } from "../theme/theme";
import { useMainLayoutStyle } from "./style";
import { useApp } from "./useMainLayout";

function MainLayout() {
  const { MainLayoutSC, IconBulbSC, MainLayoutContainerSC } =
    useMainLayoutStyle();
  const { isTheme, hendleChangeTheme } = useApp();

  return (
    <ThemeProvider theme={isTheme ? dark_theme : light_theme}>
      <MainLayoutSC>
        {/* Контейнер для всего содержимого сайта */}
        <MainLayoutContainerSC>
          <Header />
          <Content />
          <Footer revTheme={hendleChangeTheme} />
        </MainLayoutContainerSC>
      </MainLayoutSC>
    </ThemeProvider>
  );
}

export default MainLayout;