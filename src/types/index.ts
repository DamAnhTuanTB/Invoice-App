export enum ThemeEnum {
  DARK_THEME = "dark-theme",
  LIGHT_THEME = "light-theme",
}

export enum StatusInvoice {
  PAID = "paid",
  PENDING = "pending",
  DRAFT = "draft",
}

export enum ActionFormInvoice {
  ADD = "add",
  EDIT = "edit",
}

export interface InvoiceItem {
  id: string;
  createdAt: string;
  paymentDue: string;
  description: string;
  paymentTerms: number;
  clientName: string;
  clientEmail: string;
  status: StatusInvoice;
  senderAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  clientAddress: {
    street: string;
    city: string;
    postCode: string;
    country: string;
  };
  items: [
    {
      name: string;
      quantity: number;
      price: number;
      total: number;
    }[]
  ];
  total: number;
}
