import IconNothing from "../../../assets/illustration-empty.svg";
import { ContentNothing, DescriptionNothing, TextNothing } from "../styles";

export default function EmptyList() {
  return (
    <ContentNothing data-testid="content-empty-list">
      <img src={IconNothing} alt="" />
      <TextNothing>There is nothing here</TextNothing>
      <DescriptionNothing>
        Create an invoice by clicking the <span>New Invoice</span> button and
        get started
      </DescriptionNothing>
    </ContentNothing>
  );
}
