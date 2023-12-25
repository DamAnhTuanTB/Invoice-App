import { ReactNode, createContext, useState } from "react";
import { ActionFormInvoice, InvoiceItem, ThemeEnum } from "../types";
import data from "../utils/data.json";

interface TypeContext {
  theme: ThemeEnum;
  invoices: InvoiceItem[];
  actionFormInvoice: ActionFormInvoice | null;
  editInvoice: InvoiceItem | null;
  setTheme: React.Dispatch<React.SetStateAction<ThemeEnum>>;
  setInvoices: React.Dispatch<React.SetStateAction<InvoiceItem[]>>;
  setActionFormInvoice: React.Dispatch<
    React.SetStateAction<ActionFormInvoice | null>
  >;
  setEditInvoice: React.Dispatch<React.SetStateAction<InvoiceItem | null>>;
}

const AppContext = createContext<TypeContext>({} as TypeContext);

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState(ThemeEnum.DARK_THEME);
  const [invoices, setInvoices] = useState<InvoiceItem[]>(data as any);
  const [actionFormInvoice, setActionFormInvoice] =
    useState<ActionFormInvoice | null>(null);
  const [editInvoice, setEditInvoice] = useState<InvoiceItem | null>(null);

  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        invoices,
        setInvoices,
        actionFormInvoice,
        setActionFormInvoice,
        editInvoice,
        setEditInvoice,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
