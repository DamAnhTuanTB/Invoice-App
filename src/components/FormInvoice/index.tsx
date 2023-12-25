import { message } from "antd";
import dayjs from "dayjs";
import { useContext, useState } from "react";
import IconArrowDown from "../../assets/icon-arrow-down.svg";
import IconTrash from "../../assets/icon-delete.svg";
import AppContext from "../../contexts";
import { ActionFormInvoice, InvoiceItem, StatusInvoice } from "../../types";
import { isPositiveNumber } from "../../utils/parseNumber";
import { randomIdInvoice } from "../../utils/randomIdInvoice";
import Button from "../Button";
import FormItemInput from "../FormItemInput";
import {
  BillFrom,
  BillTo,
  Column,
  ColumnDelete,
  Content,
  ContentForm,
  DatePickerCustom,
  ErrorItemList,
  FormCustom,
  FormItem,
  FormList,
  GroupButton,
  GroupButtonEdit,
  GroupChild,
  InputTotal,
  ItemListTitle,
  ItemName,
  ItemPrice,
  ItemQty,
  ItemTotal,
  Row,
  RowDate,
  RowItem,
  RowTitleItemList,
  SelectCustom,
  Title,
  TitleAdd,
  TitleEdit,
  TitleItem,
  Wrapper,
} from "./styles";

export default function FormInvoice() {
  const {
    actionFormInvoice,
    editInvoice,
    setEditInvoice,
    setActionFormInvoice,
    invoices,
    setInvoices,
  } = useContext(AppContext);
  const [errorItemList, setErrorItemList] = useState("");
  const [form] = FormCustom.useForm();

  const handleFinish = (values: any) => {
    let total = 0;
    const listItems = values?.items.map((item: any) => {
      total += item?.total;
      return {
        name: item?.name,
        quantity: Number(item?.quantity),
        price: Number(item?.price),
        total: Number(item?.total),
      };
    });
    const listId = invoices.map((item: InvoiceItem) => item.id);
    const newInvoice = {
      ...values,
      id: editInvoice ? editInvoice?.id : randomIdInvoice(listId),
      createdAt: dayjs(values?.createdAt).format("YYYY-MM-DD"),
      paymentDue: dayjs(
        dayjs(values?.createdAt).add(values?.paymentTerms, "day")
      ).format("YYYY-MM-DD"),
      status: StatusInvoice.PENDING,
      items: listItems,
      total,
    };
    if (editInvoice) {
      const index = invoices.findIndex(
        (item: InvoiceItem) => item.id === editInvoice?.id
      );
      invoices[index] = newInvoice;
      setInvoices([...invoices]);
      message.success("Successfully save changes!");
    } else {
      setInvoices([newInvoice, ...invoices]);
      message.success("Successfully add new invoice!");
    }
    handleDiscard();
  };

  const handleDiscard = () => {
    setActionFormInvoice(null);
    setEditInvoice(null);
  };

  const handleSaveAsDraft = () => {
    const listId = invoices.map((item: InvoiceItem) => item.id);
    const values: any = form.getFieldsValue();
    const listItems = values?.items?.map((item: any) => {
      const isQuantity = isPositiveNumber(item?.quantity);
      const isPrice = isPositiveNumber(item?.price);
      return {
        name: item?.name,
        quantity: isQuantity ? Number(item?.quantity) : 0,
        price: isPrice ? Number(item?.price) : 0,
        total:
          isQuantity && isPrice
            ? Number(item?.quantity) * Number(item?.price)
            : 0,
      };
    });
    let total = 0;
    listItems?.forEach((item: any) => {
      if (item?.total) {
        total += item?.total;
      }
    });
    const draftInvoice = {
      ...values,
      id: randomIdInvoice(listId),
      createdAt: values?.createdAt
        ? dayjs(values?.createdAt).format("YYYY-MM-DD")
        : undefined,
      paymentDue:
        values?.createdAt && values?.paymentTerms
          ? dayjs(
              dayjs(values?.createdAt).add(values?.paymentTerms, "day")
            ).format("YYYY-MM-DD")
          : undefined,
      status: StatusInvoice.DRAFT,
      items: listItems,
      total,
    };
    setInvoices([draftInvoice, ...invoices]);
    message.success("Successfully add draft invoice!");
    handleDiscard();
  };

  const handleSubmit = () => {
    form.submit();
  };

  return (
    <Wrapper data-testid="form-invoice-element">
      <Content>
        <Title>
          {actionFormInvoice === ActionFormInvoice.ADD ? (
            <TitleAdd data-testid="add-invoice-text">New Invoice</TitleAdd>
          ) : (
            <TitleEdit data-testid="edit-invoice-text">
              Edit <span>#</span>
              {editInvoice?.id}
            </TitleEdit>
          )}
        </Title>
        <ContentForm>
          <FormCustom
            form={form}
            onFinish={handleFinish}
            initialValues={{
              ...editInvoice,
              createdAt: editInvoice?.createdAt
                ? dayjs(editInvoice?.createdAt)
                : dayjs(),
            }}
          >
            <BillFrom>Bill From</BillFrom>
            <FormItemInput
              title="Street Address"
              name={["senderAddress", "street"]}
              rules={[
                {
                  required: true,
                  message: "This is a required field",
                },
              ]}
            />
            <Row>
              <FormItemInput
                title="City"
                name={["senderAddress", "city"]}
                rules={[
                  {
                    required: true,
                    message: "This is a required field",
                  },
                ]}
              />
              <FormItemInput
                title="Post Code"
                name={["senderAddress", "postCode"]}
                rules={[
                  {
                    required: true,
                    message: "This is a required field",
                  },
                ]}
              />
              <FormItemInput
                title="Country"
                name={["senderAddress", "country"]}
                rules={[
                  {
                    required: true,
                    message: "This is a required field",
                  },
                ]}
              />
            </Row>
            <BillTo>Bill To</BillTo>
            <FormItemInput
              title="Client's Name"
              name="clientName"
              rules={[
                {
                  required: true,
                  message: "This is a required field",
                },
              ]}
            />
            <FormItemInput
              title="Client's Email"
              name="clientEmail"
              rules={[
                {
                  required: true,
                  message: "This is a required field",
                },
              ]}
            />
            <FormItemInput
              title="Street Address"
              name={["clientAddress", "street"]}
              rules={[
                {
                  required: true,
                  message: "This is a required field",
                },
              ]}
            />
            <Row>
              <FormItemInput
                title="City"
                name={["clientAddress", "city"]}
                rules={[
                  {
                    required: true,
                    message: "This is a required field",
                  },
                ]}
              />
              <FormItemInput
                title="Post Code"
                name={["clientAddress", "postCode"]}
                rules={[
                  {
                    required: true,
                    message: "This is a required field",
                  },
                ]}
              />
              <FormItemInput
                title="Country"
                name={["clientAddress", "country"]}
                rules={[
                  {
                    required: true,
                    message: "This is a required field",
                  },
                ]}
              />
            </Row>
            <RowDate>
              <Column>
                <TitleItem>Issue Date</TitleItem>
                <FormItem
                  name="createdAt"
                  rules={[
                    {
                      required: true,
                      message: "This is a required field",
                    },
                  ]}
                >
                  <DatePickerCustom format={"DD MMM YYYY"} />
                </FormItem>
              </Column>
              <Column>
                <TitleItem>Payment Terms</TitleItem>
                <FormItem
                  name="paymentTerms"
                  rules={[
                    {
                      required: true,
                      message: "This is a required field",
                    },
                  ]}
                >
                  <SelectCustom
                    suffixIcon={<img src={IconArrowDown} alt="" />}
                    options={[
                      { value: 1, label: "Net 1 Day" },
                      { value: 7, label: "Net 7 Days" },
                      { value: 14, label: "Net 14 Days" },
                      { value: 30, label: "Net 30 Days" },
                    ]}
                  />
                </FormItem>
              </Column>
            </RowDate>
            <FormItemInput
              title="Project Description"
              name="description"
              rules={[
                {
                  required: true,
                  message: "This is a required field",
                },
              ]}
            />
            <ItemListTitle>Item List</ItemListTitle>
            <RowTitleItemList>
              <ItemName>Item Name</ItemName>
              <ItemQty>Qty.</ItemQty>
              <ItemPrice>Price</ItemPrice>
              <ItemTotal>Total</ItemTotal>
            </RowTitleItemList>
            <FormList
              name="items"
              rules={[
                {
                  validator: async (_, names) => {
                    if (!names || names.length === 0) {
                      setErrorItemList("Please add at least one item");
                      return Promise.reject(
                        new Error("Please add at least one item")
                      );
                    }
                    setErrorItemList("");
                    return Promise.resolve();
                  },
                },
              ]}
            >
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => {
                    return (
                      <RowItem key={key}>
                        <FormItemInput
                          restField={restField}
                          name={[name, "name"]}
                          rules={[
                            {
                              required: true,
                              message: "Required",
                            },
                          ]}
                        />
                        <FormItemInput
                          restField={restField}
                          name={[name, "quantity"]}
                          rules={[
                            {
                              validator: (_: any, value: any) => {
                                const isPositiveInteger = /^[1-9]\d*$/.test(
                                  value
                                );
                                if (value === undefined) {
                                  form.setFieldValue(
                                    ["items", name, "total"],
                                    undefined
                                  );
                                  return Promise.reject("Required");
                                }
                                if (!isPositiveInteger) {
                                  form.setFieldValue(
                                    ["items", name, "total"],
                                    undefined
                                  );
                                  return Promise.reject("Invalid");
                                }
                                if (
                                  form.getFieldValue([
                                    "items",
                                    name,
                                    "price",
                                  ]) &&
                                  form.getFieldError(["items", name, "price"])
                                    .length === 0
                                ) {
                                  form.setFieldValue(
                                    ["items", name, "total"],
                                    Number(
                                      form.getFieldValue([
                                        "items",
                                        name,
                                        "quantity",
                                      ]) *
                                        form.getFieldValue([
                                          "items",
                                          name,
                                          "price",
                                        ])
                                    )
                                  );
                                } else {
                                  form.setFieldValue(
                                    ["items", name, "total"],
                                    undefined
                                  );
                                }
                                return Promise.resolve();
                              },
                            },
                          ]}
                        />
                        <FormItemInput
                          restField={restField}
                          name={[name, "price"]}
                          rules={[
                            {
                              validator: (_: any, value: any) => {
                                if (value === undefined) {
                                  form.setFieldValue(
                                    ["items", name, "total"],
                                    undefined
                                  );
                                  return Promise.reject("Required");
                                }
                                const isPositiveNumber =
                                  /^[1-9]\d*(\.\d+)?$/.test(value);
                                if (!isPositiveNumber) {
                                  form.setFieldValue(
                                    ["items", name, "total"],
                                    undefined
                                  );
                                  return Promise.reject("Invalid");
                                }

                                if (
                                  form.getFieldValue([
                                    "items",
                                    name,
                                    "quantity",
                                  ]) &&
                                  form.getFieldError([
                                    "items",
                                    name,
                                    "quantity",
                                  ]).length === 0
                                ) {
                                  form.setFieldValue(
                                    ["items", name, "total"],
                                    Number(
                                      form.getFieldValue([
                                        "items",
                                        name,
                                        "quantity",
                                      ]) *
                                        form.getFieldValue([
                                          "items",
                                          name,
                                          "price",
                                        ])
                                    )
                                  );
                                }
                                return Promise.resolve();
                              },
                            },
                          ]}
                        />
                        <FormItem {...restField} name={[name, "total"]}>
                          <InputTotal readOnly={true} />
                        </FormItem>
                        <ColumnDelete onClick={() => remove(name)}>
                          <img src={IconTrash} alt="" />
                        </ColumnDelete>
                      </RowItem>
                    );
                  })}
                  <FormItem>
                    <Button
                      color="var(--color-text-main)"
                      background="var(--background-add-new-item)"
                      width="100%"
                      text="+ Add New Item"
                      handleClick={() => add()}
                    />
                  </FormItem>
                </>
              )}
            </FormList>
            {errorItemList && <ErrorItemList>{errorItemList}</ErrorItemList>}
          </FormCustom>
        </ContentForm>
      </Content>
      {actionFormInvoice === ActionFormInvoice.ADD ? (
        <GroupButton data-testid="group-button-add-invoice">
          <Button
            color="var(--color-text-discard)"
            background="var(--background-button-discard)"
            text="Discard"
            handleClick={handleDiscard}
          />
          <GroupChild>
            <Button
              color="white"
              background="#373B54"
              text="Save as Draft"
              handleClick={handleSaveAsDraft}
            />
            <Button
              color="white"
              background="#7C5DF9"
              text="Save & Send"
              handleClick={handleSubmit}
            />
          </GroupChild>
        </GroupButton>
      ) : (
        <GroupButtonEdit data-testid="group-button-edit-invoice">
          <Button
            color="white"
            background="#373B54"
            text="Cancel"
            handleClick={handleDiscard}
          />
          <Button
            color="white"
            background="#7C5DF9"
            text="Save Changes"
            handleClick={handleSubmit}
          />
        </GroupButtonEdit>
      )}
    </Wrapper>
  );
}
