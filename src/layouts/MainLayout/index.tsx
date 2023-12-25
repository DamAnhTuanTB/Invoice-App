import { useContext } from "react";
import { Outlet } from "react-router-dom";
import FormInvoice from "../../components/FormInvoice";
import Sidebar from "../../components/Sidebar";
import AppContext from "../../contexts";
import { Content, Wrapper } from "./style";

export default function MainLayout() {
  const { theme, actionFormInvoice } = useContext(AppContext);
  return (
    <Wrapper className={theme}>
      <Sidebar />
      <Content data-testid="content-element">
        <Outlet />
      </Content>
      {actionFormInvoice && <FormInvoice />}
    </Wrapper>
  );
}
